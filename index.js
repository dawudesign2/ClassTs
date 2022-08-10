var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "My name is " + this.name;
    };
    Person.prototype.tellMyAge = function () {
        return "My age is " + this.age;
    };
    return Person;
}());
var john = new Person("John", 40);
var mary = new Person("Mary", 35);
console.log(john.tellMyName() + " " + john.tellMyAge());
console.log(mary.tellMyName() + " " + mary.tellMyAge());
