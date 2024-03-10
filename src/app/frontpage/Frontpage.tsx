import "../../App.css";
import { AccountList } from "./AccountList.tsx";

export const Frontpage = () => {
  return (
    <>
      <header>
        <h1>BekkBank</h1>
        <p className="read-the-docs">Hvor hver transaksjon er en opplevelse.</p>
      </header>
      <main>
        <h2>Kontoliste</h2>
        <AccountList />
      </main>
    </>
  );
};
