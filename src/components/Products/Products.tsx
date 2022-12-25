import { Container, Grid, Heading } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Product } from "./Product";

import mera from "./images/mera.png";
import qa from "./images/qa.png";
import twitter from "./images/twitter.png";
import vpn from "./images/vpn.png";
import ph from "./images/ph.png";
import fastup from "./images/fastup.png";

export const Products = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Container maxW="container.xl" my="32" ref={ref}>
      <Heading my="8" textAlign="center">
        Products I've created
      </Heading>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap="8">
        <Product
          link="https://mera.fit"
          title="Mera"
          icon={mera}
          description="The place where you can find and book sports mentors all over the world"
        />
        <Product
          link="https://qadeck.vercel.app"
          title="Question Deck"
          icon={qa}
          description="Questions game. Discover the dark side of your friends"
        />
        <Product
          link="https://twitter-free-checkmark.vercel.app"
          title="Twitter Blue Checkmark"
          icon={twitter}
          description="Make free twitter blue checkmark"
        />
        <Product
          title="VPN"
          icon={vpn}
          description="Private smart VPN SaaS for Russia"
        />
        <Product
          title="PornHub Client"
          icon={ph}
          description="Browser for adult, based on TOR network for avoid IPC blockings and spy, with password protection"
        />
        <Product
          title="FastupKit"
          icon={fastup}
          description="Tools for Hackathons and medium size projects"
          link="https://github.com/fastup-kit"
        />
      </Grid>
    </Container>
  );
});
