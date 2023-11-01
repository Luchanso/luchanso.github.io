---
title: How Gatsby, NodeJS, Rust can’t handle simple task 🦀
date: "2022-09-27"
description: "I needed to build an email subscription - just take email and put it in database. Thats all..."
favorite: false
heroImageFile: ./hero.jpg
heroImageAlt: "Cogs"
tag: Development
---

tl;dr: gatsby and nodejs take a lot of memory.

tl;dr2: `cargo install` execute in docker build very long time ( > 15 min), because they need download crates index from [github.com](https://github.com/rust-lang/crates.io-index/) wich size > 215 mb (avg download speed ~200 kb/sec).

## How it all started

I needed to build an email subscription - just take email and put it in database. Thats all.

So this looking like single API, wich get email address (single string) from frontend and put in [airtable](https://airtable.com/) (our stratup backend). We using [Gatsby](gatsbyjs.com) for static page generation, and Gatsby has [Functions](https://www.gatsbyjs.com/docs/reference/functions/):

```jsx
export default function handler(req, res) {
  res.status(200).json({ hello: `world` });
}
```

So, solution for email subscription:

```tsx
const subscribe = (
  req: GatsbyFunctionRequest<string>,
  res: GatsbyFunctionResponse
) => {
  const { email } = JSON.parse(req.body);

  db("subscribers").create({
    createdAt: new Date().toISOString(),
    email,
  });

  return res.json({ status: "ok" });
};
```

We using docker for applications, and so we need rewrite our dockerfile:

```diff
FROM node:18-alpine3.15 AS builder

WORKDIR /app

RUN apk add vips-dev fftw-dev build-base python3 util-linux --update --no-cache
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install
COPY . .
RUN yarn gatsby telemetry --disable
RUN yarn build

-FROM nginx:1.20-alpine
+FROM node:18-alpine3.15

-COPY ./nginx.conf /etc/nginx/nginx.conf
-COPY --from=builder ./app/public /usr/share/nginx/html/

+COPY --from=builder ./app /app
+WORKDIR /app
+RUN yarn install
+RUN yarn gatsby telemetry --disable
+CMD [ "yarn", "serve", "-H", "0.0.0.0" ]
```

Now, application stop using Nginx, which take ~80mb memory, and starting using NodeJS with >512 mb memory. Little remark we use 1 GB memory hosting (cheaper digital ocean droplet).

We stopped using this solution, because time to time we got error **out of memory**. This is so expensive memory usage for single API call.

## Try again, Rust way

So I was trying using Rust. I choose [rocket](https://rocket.rs/) for web, [reqwest](https://github.com/seanmonstar/reqwest) for calling Airtable API. Cargo.toml file:

```toml
[package]
name = "api"
version = "0.1.0"
edition = "2021"

[dependencies]
rocket = { version = "0.5.0-rc.2", features = ["secrets"] }
reqwest = "0.11"
tokio = { version = "1", features = ["full"] }
```

So, I started from writing simple experiment Dockerfile:

```docker
FROM rust:1.60

WORKDIR /usr/src/myapp
COPY . .

RUN cargo install --path .

CMD ["myapp"]
```

And when you trying build this simple image, it will get 15 - 30 min and you think [building is stuck](https://github.com/rust-lang/docker-rust/issues/111) at this moment:

```toml
Installing api v0.1.0 (/usr/src/myapp)
    Updating crates.io index
```

Why it’s happen? When you try building application or install dependencies, thats require [cargo index](https://doc.rust-lang.org/cargo/reference/registries.html#registries).

## Cargo Index

[This is git repostiory](https://github.com/rust-lang/crates.io-index), wich contain index of crates for help searching it. Current size of index about ~100 mb, but in git with fully history it take about ~210 mb. When you start install dependencies in docker you need download full history from github, but github has speed limit for downloading (about 200 kb/sec). So, every time when you need build simple application, it will take 15 - 30 minutes. How it fix? [You can add the hack in dockerfile](https://github.com/rust-lang/docker-rust/issues/111#issuecomment-1258513924), but with some tradeoffs. Or you can skip downloading index, but only in nightly build (this feature unstable and can be change).

When it can be fix with rust community? [There is RFC about this problem and solution (sparse-index)](https://rust-lang.github.io/rfcs/2789-sparse-index.html), so Rust development team activly build this feature, [you can track the issue](https://github.com/rust-lang/cargo/issues/9069).

## Whats next?

I’ll try [golang](https://go.dev/) for single API, because this is not my way using a hack which can broke.
