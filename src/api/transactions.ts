import { randomDelay } from "./network.ts";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  await randomDelay();
  return [
    { line: "VOI og Lær", balance: "550,-" },
    { line: "Dressmann", balance: "20 000,-" },
    { line: "Konsulent & Klær", balance: "1 337,-" },
    { line: "Ryggsekkfabrikken AS", balance: "1 914,-" },
    { line: "Ivrig Event AS", balance: "15 911,-" },
  ];
};

export interface Transaction {
  balance: string;
  line: string;
}
