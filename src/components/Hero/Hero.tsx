import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  HStack,
  chakra,
  shouldForwardProp,
  Button,
  LightMode,
} from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { MutableRefObject, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidMotionProp, motion, Transition } from "framer-motion";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

type Props = {
  scrollToRef?: MutableRefObject<HTMLDivElement | null>;
};

export const Hero = ({ scrollToRef }: Props) => {
  function handleScroll() {
    scrollToRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Box bg="gray.800" zIndex={1}>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <Flex height="100vh" minH={["initial", "960px"]}>
        <Flex
          position="relative"
          justifyContent={["start", "center"]}
          flexDirection="column"
          maxW="1512px"
          width="100vw"
          pt={["4", "0"]}
          px={["4", "12", "32"]}
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            height="100vh"
            minHeight={["initial", "960px"]}
            flexDirection={["column", "row"]}
          >
            <Box w={["100%", "35%"]} h={["500px", "initial"]}>
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
            <MotionBox
              transition={
                {
                  duration: 0.5,
                  easings: ["easeIn"],
                  delay: 0.2,
                } as Transition as any
              }
              initial={{ opacity: 0, scale: 1, y: -32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <Heading
                as="h1"
                fontSize={["56px", "64px", "120px"]}
                color="white"
                mb="4"
              >
                Oleg
                <br />
                Luchanskii
              </Heading>
            </MotionBox>
            {/* <MotionBox
              transition={
                {
                  duration: 0.5,
                  easings: ["easeIn"],
                  delay: 0.5,
                } as Transition as any
              }
              initial={{ opacity: 0, scale: 1, x: -32 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              mb="8"
            >
              <Box>
                <LightMode>
                  <Button
                    color="black"
                    mr={["0", "4"]}
                    mb={["4", "0"]}
                    w={["full", "initial"]}
                  >
                    Resume Europe 🇪🇺
                  </Button>
                  <Button color="black" w={["full", "initial"]}>
                    Resume US 🇺🇸
                  </Button>
                </LightMode>
              </Box>
            </MotionBox> */}
            <MotionBox
              transition={
                {
                  duration: 0.5,
                  easings: ["easeIn"],
                  delay: 0.75,
                } as Transition as any
              }
              initial={{ opacity: 0, scale: 1, x: -32 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
            >
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
            </MotionBox>
            <MotionBox
              pos="absolute"
              mt="4"
              transition={
                {
                  duration: 1.2,
                  easings: ["easeIn"],
                  repeat: Infinity,
                  repeatType: "mirror",
                } as Transition as any
              }
              initial={{ opacity: 0.8, scale: 1, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <Link href="#products" onClick={handleScroll} color="white">
                Scroll down ↓
              </Link>
            </MotionBox>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
