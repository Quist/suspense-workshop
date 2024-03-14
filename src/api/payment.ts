import { randomDelay } from "./network.ts";

export const fetchPreviousAccountNumbers = async (
  triggerError = false,
): Promise<string[]> => {
  await randomDelay();
  if (triggerError) {
    throw new Error("Tevry call failed!");
  }
  return ["123", "122"];
};
