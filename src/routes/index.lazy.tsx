import { createLazyFileRoute } from "@tanstack/react-router";
import { AccountsPage } from "../app/accountsPage/AccountsPage.tsx";

export const Route = createLazyFileRoute("/")({
  component: () => <AccountsPage />,
});
