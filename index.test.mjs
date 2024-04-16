import { test } from "node:test";
import { strict as assert } from "node:assert";
import quibble from "quibble";

test("does the mock work", async () => {
  const mockResponse = "hi mock";

  const spy = [];
  const mock = {
    execSync(arg) {
      spy.push(arg);
      return mockResponse;
    },
  };

  await quibble.esm("node:child_process", mock, mock);

  const { hi } = await import("./index.mjs");

  const result = hi("colin!");
  assert.equal(result, mockResponse);
});
