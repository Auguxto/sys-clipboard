import child_process from "node:child_process";

function read(): string {
  try {
    return Buffer.from(
      child_process.execFileSync("src/exe/clipboard.exe", ["--read"])
    ).toString("utf-8");
  } catch {
    return "";
  }
}

function write(text: string): string {
  try {
    return Buffer.from(
      child_process.execFileSync("src/exe/clipboard.exe", [`--write=${text}`])
    ).toString("utf-8");
  } catch {
    return "";
  }
}

const clipboard = {
  read,
  write,
};

export default clipboard;
