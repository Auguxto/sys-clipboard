"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const node_test_1 = require("node:test");
const _1 = __importDefault(require("."));
(0, node_test_1.describe)("Clipboard test suite", () => {
    (0, node_test_1.it)("should write the clipboard", () => {
        _1.default.write("sys-clipboard is awesome");
        let text = _1.default.read();
        assert_1.default.equal(text, "sys-clipboard is awesome\n");
    });
    (0, node_test_1.it)("should read the clipboard", () => {
        const text = _1.default.read();
        assert_1.default.equal(text, "sys-clipboard is awesome\n");
    });
});
