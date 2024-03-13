import { Link } from "@tanstack/react-router";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Avatar,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <header>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex p={18} justifyContent={"space-between"} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <Link to={"/"}>
                <Heading>BekkBank</Heading>
              </Link>
              <Text ml={3}>Hvor hver transaksjon er en opplevelse</Text>
            </Flex>
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </Flex>
        </Box>
      </header>
    </>
  );
};
