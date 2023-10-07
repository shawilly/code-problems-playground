import * as crypto from "crypto";

export function generateUniqueString(): string {
  // Generate a unique string using a cryptographic random value
  return crypto.randomBytes(8).toString("hex");
}
