// 1. Function that takes two numbers as parameters and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Example usage:
const sum = addNumbers(5, 7); // sum will be 12
console.log(sum);

// 2. Function that returns a fixed number
function getFixedNumber(): number {
    return 42;
}

// Example usage:
const fixedNumber = getFixedNumber(); // fixedNumber will be 42
console.log(fixedNumber);

// 3. Function that takes a string and an optional boolean parameter
// If the boolean is true, return the string in uppercase; otherwise, return it in lowercase
function transformString(str: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

// Example usage:
const upper = transformString("Hello, World!", true); // upper will be "HELLO, WORLD!"
const lower = transformString("Hello, World!"); // lower will be "hello, world!"
console.log(upper);
console.log(lower);
