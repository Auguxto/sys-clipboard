import child_process from "node:child_process";
import os from "node:os";

const platform = os.platform();

export function read(): string {
  switch (platform) {
    case "win32":
      try {
        return Buffer.from(
          child_process.execFileSync("src/exe/clipboard.exe", ["--read"])
        ).toString("utf-8");
      } catch (err) {
        console.log(err);
        return "";
      }

    default:
      return "";
  }
}

export function write(text: string): boolean {
  switch (platform) {
    case "win32":
      try {
        Buffer.from(
          child_process.execFileSync("src/exe/clipboard.exe", [
            `--write=${text}`,
          ])
        ).toString("utf-8");

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }

    default:
      return false;
  }
}

const clipboard = {
  read,
  write,
};

export { clipboard };
