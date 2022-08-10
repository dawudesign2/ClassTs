class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    tellMyName(): string {
        return "My name is " + this.name;
    }
    tellMyAge(): number | string {
        return "My age is " + this.age;
    }
}

const john = new Person("John", 40);
const mary = new Person("Mary", 35);
console.log(john.tellMyName() + " " + john.tellMyAge());
console.log(mary.tellMyName() + " " + mary.tellMyAge());
