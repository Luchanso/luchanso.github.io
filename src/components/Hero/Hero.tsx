import { Box, Heading, Text, Link, Flex, HStack } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <Box bg="gray.800" zIndex={1}>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <Flex height="100vh" minH="960px" justifyContent="center">
        <Flex
          h="100vh"
          position="relative"
          justifyContent="center"
          flexDirection="column"
          maxW="1512px"
          width="100vw"
          pl={32}
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            height="100vh"
            minHeight="960px"
          >
            <StaticImage
              css={css`
                width: 35%;
                opacity: 0.25;
              `}
              loading="eager"
              src="../../images/tea.jpg"
              alt="Tea"
            />
            <StaticImage
              css={css`
                width: 65%;
              `}
              loading="eager"
              src="../../images/oleg.jpg"
              alt="Oleg Luchanskii"
            />
          </Flex>
          <Box zIndex={1}>
            <Text color="white">Hi, i'm @Luchanso</Text>
            <Heading as="h1" fontSize="120px" color="white">
              Oleg
              <br />
              Luchanskii
            </Heading>
            <Box mb="4">
              <Link color="white" href="#blog-title" textDecor="underline">
                Jump to Blog
              </Link>
            </Box>
            <HStack spacing="5">
              <Link color="white" href="https://fb.com/oleg.loutchansky">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link color="white" href="https://twitter.com/luchanso">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link color="white" href="https://www.instagram.com/luchanso/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link color="white" href="https://github.com/luchanso/">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link color="white" href="https://telegram.me/luchanso">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
