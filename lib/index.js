"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = __importDefault(require("node:child_process"));
function read() {
    try {
        return Buffer.from(node_child_process_1.default.execFileSync("src/exe/clipboard.exe", ["--read"])).toString("utf-8");
    }
    catch {
        return "";
    }
}
function write(text) {
    try {
        return Buffer.from(node_child_process_1.default.execFileSync("src/exe/clipboard.exe", [`--write=${text}`])).toString("utf-8");
    }
    catch {
        return "";
    }
}
const clipboard = {
    read,
    write,
};
exports.default = clipboard;
