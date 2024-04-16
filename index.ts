import { execSync } from "node:child_process";

export function hi(name: string) {
  return execSync(`echo "oh no ${name}"`).toString().trim();
}
