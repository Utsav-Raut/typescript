var Person = /** @class */ (function () {
    //We cannot have overloaded constructors in ts because we cannot have overloaded methods in ts
    // constructor(){
    //     this.firstName = " ";
    //     this.lastName = " ";
    // }
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// var aPerson = new Person();
var aPerson = new Person("Utsav", "Raut"); //This makes the var aPerson to be of type Person only
// aPerson.firstName = "Utsav";
// aPerson.lastName = "Raut";
console.log(aPerson.getFullName());
