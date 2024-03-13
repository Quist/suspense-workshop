import { randomDelay } from "./network.ts";

export const fetchAccounts = async (): Promise<Account[]> => {
  await randomDelay();
  return [
    { accountName: "Brukskonto", balance: 550 },
    { accountName: "Bufferkonto", balance: 20_000 },
    { accountName: "Felleskonto", balance: -37.5 },
  ];
};

export const fetchAccountDetails = async (): Promise<Account> => {
  await randomDelay();
  return { accountName: "Felleskonto", balance: -37.5 };
};

export interface Account {
  accountName: string;
  balance: number;
}
