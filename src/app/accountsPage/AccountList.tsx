import "../../App.css";
import "./AccountList.css";
import { useQuery } from "@tanstack/react-query";
import { Account, fetchAccounts } from "../../api/accounts.ts";
import { Link } from "@tanstack/react-router";

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
      <div className={"account-list"}>
        {query.data?.map((account) => (
          <AccountRow key={account.accountName} account={account} />
        ))}
      </div>
    </>
  );
};

export const AccountRow = ({ account }: { account: Account }) => {
  return (
    <span>
      <Link to="/accounts/$accountId" params={{ accountId: "123" }}>
        {account.accountName}: {account.balance}
      </Link>
    </span>
  );
};
