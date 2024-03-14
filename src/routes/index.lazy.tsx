import { createFileRoute } from "@tanstack/react-router";
import { AccountsPage } from "../app/accountsPage/AccountsPage.tsx";

export const Route = createFileRoute("/")({
  component: () => <AccountsPage />,
});
