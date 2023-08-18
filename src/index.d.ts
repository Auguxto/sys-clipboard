export declare function read(): string;
export declare function write(text: string): boolean;
declare const clipboard: {
    read: typeof read;
    write: typeof write;
};
export { clipboard };
