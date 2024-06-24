// Define the type alias
type StringOrBoolean = string | boolean;

// Example variables using the type alias
let example1: StringOrBoolean = "Hello, TypeScript!";
let example2: StringOrBoolean = true;

// Function that accepts the union type
function logStringOrBoolean(value: StringOrBoolean): void {
    console.log(value);
}

// Calling the function with both string and boolean values
logStringOrBoolean(example1); // Output: Hello, TypeScript!
logStringOrBoolean(example2); // Output: true
