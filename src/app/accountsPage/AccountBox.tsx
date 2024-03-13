import { Account } from "../../api/accounts.ts";
import { Link } from "@tanstack/react-router";
import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const AccountBox = ({ account }: { account: Account }) => {
  return (
    <>
      <Link to="/accounts/$accountId" params={{ accountId: "123" }}>
        <Center>
          <Box
            role={"group"}
            p={2}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Stack align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {account.accountName}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {account.accountName}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  {account.balance}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Link>
    </>
  );
};
