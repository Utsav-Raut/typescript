class NewPerson{
    firstName: string;
    lastName: string;

    constructor(){
        this.firstName = " ";
        this.lastName = " ";
    }
    greet(){
        console.log("Hey there");
    }
}

class Programmer extends NewPerson{
    greet(){
        console.log('Hello World');
    }

    greetLikeNormalPeopel(){
        super.greet();
    }
}

var aProgrammer = new Programmer();
aProgrammer.greet();

aProgrammer.greetLikeNormalPeopel();

//polymorphism concepts

var bProgrammer: NewPerson = new Programmer();
bProgrammer.greet();

//we cannot access the greetLikeNormalPeople because it extends NewPerson