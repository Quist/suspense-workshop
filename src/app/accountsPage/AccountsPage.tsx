import { Account, fetchAccounts } from "../../api/accounts.ts";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Container,
  Flex,
} from "@chakra-ui/react";

export const AccountsPage = () => {
  return (
    <>
      <main>
        <Container justifyContent={"center"}>
          <Heading mb={5} mt={10} textAlign={"center"}>
            Dine kontoer
          </Heading>
          <AccountList />
        </Container>
      </main>
    </>
  );
};

export const AccountList = () => {
  const query = useQuery({
    queryKey: ["account-list"],
    queryFn: fetchAccounts,
  });

  // Erstatt denne håndteringen med <Suspense/>
  if (query.isLoading) {
    return <p>Laster..</p>;
  }

  return (
    <>
      <Flex rowGap={10} flexDirection={"column"}>
        {query.data?.map((account) => (
          <AccountRow key={account.accountName} account={account} />
        ))}
      </Flex>
    </>
  );
};

export const AccountRow = ({ account }: { account: Account }) => {
  return (
    <>
      <Link to="/accounts/$accountId" params={{ accountId: "123" }}>
        <ProductSimple account={account} />
      </Link>
    </>
  );
};

export const ProductSimple = ({ account }: { account: Account }) => {
  return (
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
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
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
  );
};
