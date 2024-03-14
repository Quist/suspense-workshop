import { randomDelay } from "./network.ts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const postPayment = async (accountId: string): Promise<void> => {
  await randomDelay();
  return;
};

export const fetchPreviousAccountNumbers = async (
  triggerError = false,
): Promise<string[]> => {
  await randomDelay();
  if (triggerError) {
    throw new Error("Tevry call failed!");
  }
  return ["123", "122"];
};
