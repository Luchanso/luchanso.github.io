import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  link?: string;
  icon?: string;
  description: string;
};

export const Product = ({ title, icon, description, link }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      p="4"
      rounded="xl"
      bg={bg}
    >
      <Box>
        {icon && <Image src={icon} w="16" rounded="xl" h="16" mb="4" />}
        <Heading size="md" mb="4">
          {title}
        </Heading>
        <Text mb="4">{description}</Text>
      </Box>
      {link && (
        <Link href={link} textDecor="underline" target="_blank">
          {link}
        </Link>
      )}
    </Flex>
  );
};
