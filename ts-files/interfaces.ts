interface iPerson {
    firstName: string;
    lastName: string;

    getFullName(): string;
}

class FooAgain implements iPerson{
    firstName: string;    
    lastName: string;

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }    
}

//Duck typing

let cPerson: iPerson = new FooAgain();