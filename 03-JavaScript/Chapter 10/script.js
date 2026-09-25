// PROTOTYPES IN JS
const students = {
    fullName: 'Anees Ul Rehman',
    marks: 99.9,
    printMarks: function () {
        console.log(`Marks ${students.marks}`);
        // students.marks is same as this.marks
        console.log(`Marks = ${this.marks}`);
    }
};

// JS OBJECT HAS SPECIAL  PROPERTY CALLED PROTOTYPE.
// WE CAN SET PROTOTYPE USING __PROTO__

let arr = ["apple", "mango", "banana"];

const employee = {
    calcTax() {
        console.log('tax rate is 10%');
    }
};

const anees = {
    salary: 50000,
}

const yasir = {
    salary: 100000,
    calcTax() {
        console.log('tax rate is 20%');
    }
}

anees.__proto__ = employee;
yasir.__proto__ = employee;


/// CLASSES IN JS
//CLASS IS A PROGRAM-CODE TAMPLATE FOR CREATING OBJECTS.
class toyotaCar {
    // CONSTRUCTOR
    constructor(brand, milage) {
        this.brand = brand;
        this.milage = milage;
    }
    color() {
        console.log("Blue");
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
};

let newCar = new toyotaCar('Fortuner', 10); // constructor
// console.log(newCar);
let lexus = new toyotaCar('lexus', 20); // constructor
// console.log(lexus)
let mehran = new toyotaCar();  // constructor;
// console.log(mehran);

// INHERITANCE IN JS
// INHERITANCE IS PASSING DOWN PROPERTIES & METHODS FROM PARENT CLASS TO CHILD CLASS.
class parent {
    hello() {
        console.log('hello');
    }
};

class child extends parent { };

class person {
    constructor() {
        this.species = "Home Sapiens";
    }
    eat() {
        console.log('EAt');
    }


    sleep() {
        console.log('Sleep');
    }

    work() {
        console.log('Do Nothing');
    }
}

class engineer extends person {
    work() {
        console.log('programming');
    }
}

class doctor extends person {
    work() {
        console.log('Treat Peoples')
    }
}

class teacher extends person {
    job() {
        console.log('Teachs students');
    }
}

let Anees = new engineer();
let Aliza = new doctor();
let nasir = new teacher();

// SUPER KEYWORD
// THE SUPER KEYWORD IS USED TO CALL THE CONSTRUCTOR OF ITS PARENT CLASS TO ACCESS THE PARENT'S PROPERTIES AND METHODS.
class person1 { 
    constructor(name){
        this.species = "Home Sapiens";
        this.name = name;
    }

    eat(){
        console.log('they eat');
    }
}

class engineer1 extends person1{
    constructor(name, branch){
        super(name); // TO INVOKE PARENT CLASS CONSTRUCTOR
        this.branch = branch;
    }
    work(){
        console.log('Do Coding');
    }
}

let engObj = new engineer1("Anees Ul Rehman", "Software Engineering");