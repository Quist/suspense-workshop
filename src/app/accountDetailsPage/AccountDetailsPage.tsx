import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../api/transactions.ts";
import { fetchAccountDetails } from "../../api/accounts.ts";
import { Link } from "@tanstack/react-router";

export const AccountDetailsPage = ({ accountId }: { accountId: string }) => {
  return (
    <>
      <main>
        <Link to={"payment"}>Betal fra Konto</Link>

        <h2>Transaksjoner</h2>
        <Transactions accountId={accountId} />
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
      <h3>{accountDetailsQuery.data?.accountName}</h3>
      {transactionsQuery.data?.map((transactions) => (
        <p key={transactions.line}>
          {transactions.line}: {transactions.balance}
        </p>
      ))}
    </>
  );
};
