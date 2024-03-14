import { randomDelay } from "./network.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const postPayment = async (accountId: string): Promise<void> => {
  await randomDelay();
  return;
};

export const fetchPreviousAccountNumbers = async (): Promise<string[]> => {
  await randomDelay();
  throw new Error("Tevry call failed!");
  return ["123", "122"];
};
