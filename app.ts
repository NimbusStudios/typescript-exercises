class Calculator {
    private validateNumber(value: any): boolean {
        return typeof value === 'number' && !isNaN(value);
    }

    add(a: number, b: number): number | string {
        if (!this.validateNumber(a) || !this.validateNumber(b)) {
            return 'Invalid input: both arguments must be numbers';
        }
        return a + b;
    }

    subtract(a: number, b: number): number | string {
        if (!this.validateNumber(a) || !this.validateNumber(b)) {
            return 'Invalid input: both arguments must be numbers';
        }
        return a - b;
    }

    multiply(a: number, b: number): number | string {
        if (!this.validateNumber(a) || !this.validateNumber(b)) {
            return 'Invalid input: both arguments must be numbers';
        }
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (!this.validateNumber(a) || !this.validateNumber(b)) {
            return 'Invalid input: both arguments must be numbers';
        }
        if (b === 0) {
            return 'Error: Division by zero is not allowed';
        }
        return a / b;
    }
}

let num1: number | null = null;
let num2: number | null = null;
let operation: string | null = null;

const calculator = new Calculator();

function appendToDisplay(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

function setOperation(op: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        num1 = parseFloat(display.value);
        operation = op;
        display.value = '';
    }
}

function performOperation(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value && num1 !== null && operation !== null) {
        num2 = parseFloat(display.value);
        let result: number | string;

        switch (operation) {
            case 'add':
                result = calculator.add(num1, num2);
                break;
            case 'subtract':
                result = calculator.subtract(num1, num2);
                break;
            case 'multiply':
                result = calculator.multiply(num1, num2);
                break;
            case 'divide':
                result = calculator.divide(num1, num2);
                break;
            default:
                result = 'Unknown operation';
        }

        display.value = result.toString();
        num1 = null;
        num2 = null;
        operation = null;
    }
}

function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
    num1 = null;
    num2 = null;
    operation = null;
}
