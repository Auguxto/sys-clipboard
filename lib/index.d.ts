declare function read(): string;
declare function write(text: string): string;
declare const clipboard: {
    read: typeof read;
    write: typeof write;
};
export default clipboard;
