import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accounts/$accountId/payment/')({
  component: () => <div>Hello /accounts/$accountId/payment/!</div>
})