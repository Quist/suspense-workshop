import { randomDelay } from "./network.ts";

export const fetchPreviousAccountNumbers = async (
  accountId: string,
  triggerError = false,
): Promise<string[]> => {
  await randomDelay();
  if (triggerError) {
    throw new Error(`Tevry call failed for account: ${accountId}!`);
  }
  return ["123", "122"];
};
