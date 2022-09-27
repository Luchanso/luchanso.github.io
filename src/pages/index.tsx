import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Box, Container } from "@chakra-ui/react";
import { TopPost } from "../components/TopPost";
import { PostListItem } from "../components/PostListItem";
import { LastPosts } from "../components/LastPosts";
import { Hero } from "../components/Hero/Hero";

const BlogIndex = ({ data, location }: PageProps<Queries.Query>) => {
  const siteTitle = data.site?.siteMetadata?.title;
  const allPosts = data.allMdx.nodes;
  const posts: Queries.Mdx[] = [];
  const lastThree: Queries.Mdx[] = [];
  let favorite: Queries.Mdx | undefined;

  allPosts.forEach((item) => {
    if (item.frontmatter?.favorite) {
      favorite = item;
      return;
    }

    if (lastThree.length < 3) {
      lastThree.push(item);
    } else {
      posts.push(item);
    }
  });

  if (allPosts.length === 0) {
    return (
      <>
        <Seo title="Oleg Luchanskii" />
        <Hero />
        <Layout location={location} title={siteTitle}>
          <p>No blog posts found.</p>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Seo title="Oleg Luchanskii" />
      <Hero />
      <Layout location={location} title={siteTitle}>
        {favorite && <TopPost post={favorite} />}
        <Box my="16">
          <LastPosts posts={lastThree} />
        </Box>
        <Container maxW="container.md">
          <ol style={{ listStyle: `none` }}>
            {posts.map((post) => (
              <PostListItem post={post} key={post.id} />
            ))}
          </ol>
        </Container>
      </Layout>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      nodes {
        id
        excerpt
        slug
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          favorite
          tag
          heroImageFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          heroImageAlt
          heroImageLink
        }
        timeToRead
      }
    }
  }
`;
