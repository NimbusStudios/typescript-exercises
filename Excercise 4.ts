class Person {
    // Public properties
    public name: string;
    public age: number;

    // Private property
    private socialSecurityNumber: string;

    // Constructor to initialize the properties
    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    // Method to return the person's name
    getName(): string {
        return this.name;
    }

    // Method to get the person's age
    getAge(): number {
        return this.age;
    }

    // Optionally, you can add a method to get the social security number if needed
    // Note: This method is not part of the requirement, it's just for completeness
    getSocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }
}

// Example usage:
const person = new Person("John Doe", 30, "123-45-6789");
console.log(person.getName()); // Expected output: "John Doe"
console.log(person.getAge()); // Expected output: 30
