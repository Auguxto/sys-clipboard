"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clipboard = exports.write = exports.read = void 0;
const node_child_process_1 = __importDefault(require("node:child_process"));
const node_os_1 = __importDefault(require("node:os"));
const platform = node_os_1.default.platform();
function read() {
    if (platform === "win32") {
        try {
            return Buffer.from(node_child_process_1.default.execFileSync("src/exe/clipboard.exe", ["--read"])).toString("utf-8");
        }
        catch (err) {
            console.log(err);
            return "";
        }
    }
    return "";
}
exports.read = read;
function write(text) {
    if (platform === "win32") {
        try {
            Buffer.from(node_child_process_1.default.execFileSync("src/exe/clipboard.exe", [`--write=${text}`])).toString("utf-8");
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    return false;
}
exports.write = write;
const clipboard = {
    read,
    write,
};
exports.clipboard = clipboard;
