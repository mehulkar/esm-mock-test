import { execSync } from "node:child_process";

export function hi() {
  return execSync("echo hi").toString();
}
