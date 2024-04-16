import { hi } from ".";
import { test } from "node:test";
import { strict as assert } from "node:assert";
import quibble from "quibble";

test("does the mock work", async () => {
  const mockResponse = "im so fake";
  const childProcessCalls: Array<string> = [];
  const childProcessExports = {
    execSync(arg: string) {
      console.log("calling mock execSYnc!!");
      childProcessCalls.push(arg);
      return mockResponse;
    },
  };

  console.log("mocking node:child_process");
  await quibble.esm(
    "node:child_process",
    childProcessExports,
    childProcessExports
  );

  const { hi } = await import(".");

  const result = hi();
  assert.equal(result, mockResponse);
});
