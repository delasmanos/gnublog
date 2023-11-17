import { customAlphabet } from "nanoid";

//with 6 chars 33K and with 7 266K IDs needed, in order to have a 1% probability of at least one collision.
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const createShortId = customAlphabet(characters, 7);

export const uniqueDomId = (prefix?: string) => `${prefix}-${createShortId()}`;
