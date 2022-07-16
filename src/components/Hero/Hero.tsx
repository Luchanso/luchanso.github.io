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
      <Flex height="100vh" minH={["initial", "960px"]} justifyContent="center">
        <Flex
          h={["initial", "100vh"]}
          position="relative"
          justifyContent={["start", "center"]}
          flexDirection="column"
          maxW="1512px"
          width="100vw"
          pt={["4", "0"]}
          pl={["4", "12", "32"]}
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            height="100vh"
            minHeight={["initial", "960px"]}
            flexDirection={["column", "row"]}
          >
            <Box w={["100%", "35%"]} h={["320px", "initial"]}>
              <StaticImage
                css={css`
                  opacity: 0.25;
                  height: 100%;
                `}
                loading="eager"
                src="../../images/tea.jpg"
                alt="Tea"
              />
            </Box>
            <Box w={["100%", "65%"]}>
              <StaticImage
                css={css`
                  height: 100%;
                `}
                loading="eager"
                src="../../images/oleg.jpg"
                alt="Oleg Luchanskii"
              />
            </Box>
          </Flex>
          <Box zIndex={1}>
            <Text color="white">Hi, i'm @Luchanso</Text>
            <Heading as="h1" fontSize={["56px", "64px", "120px"]} color="white">
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
