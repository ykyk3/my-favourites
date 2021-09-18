// Fixme: (#10) 正しくログを出すようにしたい。
enum Color {
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
}
function info(str: string): void {
    console.log(`${Color.Blue}[Log]: ${str}`);
}
function error(str: string): void {
    console.error(`${Color.Red}[Error]: ${str}`);
}
function warning(str: string): void {
    console.warn(`${Color.Yellow}[Warning]: ${str}`);
}

const logger = {
    info,
    error,
    warning,
};

export const Logger = logger;
