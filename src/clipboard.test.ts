import assert from "assert";
import { describe, it } from "node:test";

import clipboard from ".";

describe("Clipboard test suite", () => {
  it("should write the clipboard", () => {
    clipboard.write("sys-clipboard is awesome");

    let text = clipboard.read();

    assert.equal(text, "sys-clipboard is awesome\n");
  });

  it("should read the clipboard", () => {
    const text = clipboard.read();

    assert.equal(text, "sys-clipboard is awesome\n");
  });
});
