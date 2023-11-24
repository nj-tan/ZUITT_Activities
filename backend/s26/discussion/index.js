/*

    - An object is a data type that is used to represent real world objects
    - Information stored in objects are represented in "key:value" ("property":"value") pairs
    Syntax:

    let variableName = {
        key1: value1,
        key2: value2
    };


*/

let cellphone = {
    name: 'Nokia 3210',
    manufactureDate: 1999
};

console.log("Result from creating objects using initializers/literal notation");
console.log(cellphone);
console.log(typeof cellphone);

// let car = {
//     brand: 'Toyota',
//     model: 'Vios',
//     year: 2019,
//     color: 'Red',
//     horsepower: 100,
// }

let driver = {
    firstName: "NJ",
    lastName: "T",
    age: 24,
    idNum: 123
}

// Creating objects using constructor method
/*
    - Creates a reusable function format to create several objects that has the same data structure/keys/properties

*/

function Laptop (name, manufactureDate){
    this.name = name;
    this.manufactureDate = manufactureDate;
}

// "new" operator creates an instance of an object
let laptop = new Laptop('Lenovo', 2008);
console.log("Result from creating objects using object constructor method");
console.log(laptop);

let laptop2 = new Laptop('Dell', 2010);
console.log(laptop2);

let laptop3 = new Laptop('Lenovo', 2012);
console.log(laptop3);

// Creating empty objects

let computer = {};
let myComputer = new Object();


// [SECTION] Accessing Object Properties
let myLaptop = new Laptop('MacBook', 2022);
console.log(myLaptop);

// Using dot notation
console.log("Result from dot notation: " + myLaptop.name);

// Using square bracket notation
console.log("Result from square bracket notation: " + myLaptop["name"]);

// Updating property value using dot notation || Can also use square bracket
myLaptop.name = 'MacBook Pro S6 Pro X';
console.log(myLaptop);

// Array of Objects
let laptopArray = [laptop, myLaptop, {name: "Alienware", manufactureDate: 2000}];

console.log(laptopArray[0]);
console.log("Result of accessing property value of an object in an array: ")
console.log(laptopArray[1].name);
console.log(laptopArray[1]["name"]);
console.log(laptopArray[2]);
console.log(laptopArray[2].manufactureDate);


// ------------------------------------------------------
// [SECTION] - Initializing/Adding/Deleting/Reassigning Object Properties

// Initializing
let car = {};

// Adding object properties using dot notation
car.name = "Honda City"
console.log("Result from adding properties using dot notation");
console.log(car);

// Adding object properties using square bracket notation
car['manufacture date'] = 2019;
console.log(car['manufacture date']);

// Delete object property
delete car['manufacture date'];
console.log(car);

// Reassigning object properties
car.name = "Dodge Challenger"
console.log("Result from reassigning properties:");
console.log(car);

// [SECTION] Object Methods (basically a function inside an object)
/*
    - A method is a function which is a property of an object
*/

let person = {
    name: 'NJ',
    // 'talk' -> now called a method
    talk: function(){
        // 'this' keyword is used to access the property/key of the current object
        console.log("Hello my name is " + this.name);
    },
    eat: function(){
        console.log("I am eating");
    },
    // allFunc: function(){
    //     this.eat();
    //     this.talk();
    allFunc : [
        function(){
            console.log("Hello");
        },
        function(){
            console.log("yum yum yum")
        }
    ]
}
console.log(person);
person.talk();

person.allFunc[1]();

/*
    Secnario
    1. Create a game with several pokemon to interact with eac other
    2. Every pokemon would have the same stats, properties, and functions
*/

let myPokemon = {
    name: 'Pikachu',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(){
        console.log(this.name + " has tackled the target!");
    },
    faint: function(){
        this.health = 0;
        console.log(this.name + " has fainted.");
    }
}

function Pokemon (name, level){
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    // Methods
    this.tackle = function(target){
        console.log(this.name + " tackled " + target.name);
        console.log(target.name + "'s health is now reduced to " + (target.health - this.attack));
    }
    this.faint = function(){
        console.log(this.name + "fainted");
    }
}

let pikachu = new Pokemon ("Pikachu", 16);
let rattata = new Pokemon ("Rattata", 8);
console.log(pikachu);
console.log(rattata);


pikachu.tackle(rattata);