# SYS Clipboard

#### Access the system clipboard

## Examples

```typescript
import clipboard from "sys-clipboard";

// Write to clipboard
clipboard.write("sys-clipboard is awesome");

// Read the text that's on the clipboard
const text = clipboard.read();

console.log(text); // "sys-clipboard is awesome"
```
