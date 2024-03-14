import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../api/transactions.ts";
import { fetchAccountDetails } from "../../api/accounts.ts";
import { Link as TanstackLink } from "@tanstack/react-router";
import {
  Box,
  Container,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Link,
  Divider,
} from "@chakra-ui/react";

export const AccountDetailsPage = ({ accountId }: { accountId: string }) => {
  return (
    <>
      <main>
        <Container justifyContent={"center"}>
          <Box mt={25} ml={-20}>
            <Link to={"/accounts/$accountId/payment"} as={TanstackLink}>
              Betal fra Konto
            </Link>
            <Divider />
          </Box>
          <Heading mb={5} mt={10} textAlign={"center"}>
            Transaksjoner
          </Heading>
          <Transactions accountId={accountId} />
        </Container>
      </main>
    </>
  );
};

const Transactions = ({ accountId }: { accountId: string }) => {
  const transactionsQuery = useQuery({
    queryKey: ["transactions", accountId],
    queryFn: fetchTransactions,
  });

  const accountDetailsQuery = useQuery({
    queryKey: ["accountDetails", accountId],
    queryFn: fetchAccountDetails,
  });

  if (transactionsQuery.isLoading || accountDetailsQuery.isLoading) {
    return <p>Laster</p>;
  }
  if (transactionsQuery.isError || accountDetailsQuery.isError) {
    return <p>Noe galt skjedde :(</p>;
  }

  return (
    <>
      <TableContainer>
        <Table variant={"striped"}>
          <TableCaption>{accountDetailsQuery.data?.accountName}</TableCaption>
          <Tbody>
            {transactionsQuery.data?.map((transaction) => (
              <tr key={transaction.line}>
                <td>{transaction.line}</td>
                <td>{transaction.balance}</td>
                <td>17.01.2024</td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
