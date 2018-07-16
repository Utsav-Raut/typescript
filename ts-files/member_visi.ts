class Mem_Person{
    private firstName: string;
    private lastName: string;

    greet(){
        console.log("Hey there!");
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Mem_Programmer extends Mem_Person{
    greet(){
        console.log("Hello world");
    }

    greetLikeNormalPeople(){
        super.greet()
    }
}

var memProgr: Mem_Person = new Mem_Programmer();
memProgr.getFullName;