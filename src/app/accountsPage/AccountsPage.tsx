import "../../App.css";
import { AccountList } from "./AccountList.tsx";

export const AccountsPage = () => {
  return (
    <>
      <main>
        <h2>Kontoliste</h2>
        <AccountList />
      </main>
    </>
  );
};
