import { execSync } from "node:child_process";

export function hi(name) {
  return execSync(`echo "oh no ${name}"`).toString().trim();
}
