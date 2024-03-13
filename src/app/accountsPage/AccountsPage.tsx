import { fetchAccounts } from "../../api/accounts.ts";
import { useQuery } from "@tanstack/react-query";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { AccountBox } from "./AccountBox.tsx";

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
          <AccountBox key={account.accountName} account={account} />
        ))}
      </Flex>
    </>
  );
};
