import { createFileRoute } from "@tanstack/react-router";
import { PaymentPage } from "../../../../app/paymentPage/PaymentPage.tsx";

export const Route = createFileRoute("/accounts/$accountId/payment/")({
  component: PaymentRoute,
});

function PaymentRoute() {
  const { accountId } = Route.useParams();
  return <PaymentPage accountId={accountId} />;
}
