import { randomDelay } from "./network.ts";

export const fetchBasicInfo = async () => {
  await randomDelay();
  return { firstName: "Test", lastName: "Testesen", age: 24 };
};

export const fetchAddressInfo = async () => {
  await randomDelay();
  return { street: "Konsulentgata 14", postal: "2070", city: "Råholt" };
};
