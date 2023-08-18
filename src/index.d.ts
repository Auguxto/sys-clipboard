declare function read(): string;
declare function write(text: string): boolean;
declare const clipboard: {
    read: typeof read;
    write: typeof write;
};
export default clipboard;
