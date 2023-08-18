import child_process from "node:child_process";
import os from "node:os";

const platform = os.platform();

export function read(): string {
  if (platform === "win32") {
    try {
      return Buffer.from(
        child_process.execFileSync("src/exe/clipboard.exe", ["--read"])
      ).toString("utf-8");
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  return "";
}

export function write(text: string): boolean {
  if (platform === "win32") {
    try {
      Buffer.from(
        child_process.execFileSync("src/exe/clipboard.exe", [`--write=${text}`])
      ).toString("utf-8");

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return false;
}

const clipboard = {
  read,
  write,
};

export { clipboard };
