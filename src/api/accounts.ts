import { randomDelay } from "./network.ts";

const testAccounts: Account[] = [
  {
    accountName: "Lønnskonto",
    balance: "550,-",
    accountType: "Brukskonto",
  },
  { accountName: "Bahamas", balance: "20 000,-", accountType: "Sparekonto" },
  {
    accountName: "Felleskonto",
    balance: "-2 740,-",
    accountType: "Brukskonto",
  },
];
export const fetchAccounts = async (
  triggerError = false,
): Promise<Account[]> => {
  await randomDelay();
  if (triggerError) {
    throw Error("Call failed");
  }
  return testAccounts;
};

export const fetchAccountDetails = async (): Promise<Account> => {
  await randomDelay();
  return testAccounts[0];
};

export interface Account {
  accountName: string;
  accountType: "Brukskonto" | "BSU" | "Sparekonto";
  balance: string;
}
