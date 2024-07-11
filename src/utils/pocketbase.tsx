import PocketBase, { ClientResponseError } from "pocketbase";
export const pb = new PocketBase(process.env.PB_URL)       // Comment to test on local environment
//export const pb = new PocketBase(process.env.LOCAL_URL); // Uncomment to test on local environment
export function pbErrorMessage(error: unknown) {
  const errorObj = error as ClientResponseError;
  return errorObj;
}
