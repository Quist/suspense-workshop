import { createFileRoute } from "@tanstack/react-router";
import { AccountDetailsPage } from "../../../app/accountDetailsPage/AccountDetailsPage.tsx";

export const Route = createFileRoute("/accounts/$accountId/")({
  component: AccountIdRoute,
});

function AccountIdRoute() {
  const { accountId } = Route.useParams();
  return <AccountDetailsPage accountId={accountId} />;
}
