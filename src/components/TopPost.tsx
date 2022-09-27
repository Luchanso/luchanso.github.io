import React from "react";
import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PostInfo } from "./PostInfo";

type Props = {
  post: Queries.Mdx;
};

export function TopPost({ post }: Props) {
  const imgFile =
    post.frontmatter?.heroImageFile?.childImageSharp?.gatsbyImageData;
  const imgLink = post.frontmatter?.heroImageLink;
  const title = post.frontmatter?.title;
  const description = post.frontmatter?.description;
  const link = post.slug || "";

  return (
    <Grid templateColumns={["1fr", "1fr 1fr"]} gap="8" bg="">
      <Box>
        <Link as={RouterLink} to={link}>
          <Box rounded="xl" overflow="hidden">
            {imgLink && (
              <Image src={imgLink} alt={post.frontmatter?.heroImageAlt || ""} />
            )}
            {!imgLink && imgFile && (
              <GatsbyImage
                image={imgFile}
                alt={post.frontmatter?.heroImageAlt || ""}
              />
            )}
          </Box>
        </Link>
      </Box>
      <Flex flexDir="column" justifyContent="space-around">
        <Link as={RouterLink} to={link}>
          <Heading as="h2" size={["lg", "2xl"]} lineHeight="1.24" mb="2">
            {title}
          </Heading>
        </Link>
        {description && (
          <Text fontSize={["md", "xl"]} mb="2">
            {description}
          </Text>
        )}
        <PostInfo post={post} />
      </Flex>
    </Grid>
  );
}
