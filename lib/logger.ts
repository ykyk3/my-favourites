// Fixme: (#10) 正しくログを出すようにしたい。
enum Color {
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
}
const reset = '\u001b[0m';
const format = (str: string, color: Color) => `${color}${str}${reset}`;
function info(str: string): void {
    console.log(format(str, Color.Blue));
}
function error(str: string): void {
    console.error(format(str, Color.Red));
}
function warning(str: string): void {
    console.warn(format(str, Color.Yellow));
}

const logger = {
    info,
    error,
    warning,
};

export const Logger = logger;
