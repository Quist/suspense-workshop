import { randomDelay } from "./network.ts";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  await randomDelay();
  return [
    { line: "XXL", balance: 550 },
    { line: "Dressmann", balance: 20_000 },
    { line: "Konsulent & Klær", balance: 1337.5 },
  ];
};

export interface Transaction {
  balance: number;
  line: string;
}
