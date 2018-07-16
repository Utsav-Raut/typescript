class Person{
    firstName: string;
    lastName: string;

    //We cannot have overloaded constructors in ts because we cannot have overloaded methods in ts

    // constructor(){
    //     this.firstName = " ";
    //     this.lastName = " ";
    // }

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

// var aPerson = new Person();
var aPerson : Person = new Person("Utsav", "Raut"); //This makes the var aPerson to be of type Person only
// aPerson.firstName = "Utsav";
// aPerson.lastName = "Raut";

console.log(aPerson.getFullName());