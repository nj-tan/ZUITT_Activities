/*
    Javascript a scripting language that enables you to make interactive web pages.

    Web app development
    browser-based game development
    art creation
    mobile applications


    STATEMENT -> instructions to the computer, usually end with ;

    SYNTAX  -> set of rules that describe how statements must be constructed

    selector {
        properties: value;
    }

    VARIABLES and CONSTANTS are used to contain data -> storage, retrieval, and manipulation

    let productName = 'desktop computer';
    let productPrice ='productPrice' = 18999;
    const PI = 3.1416;

    DATA TYPES
    string - letters
    number - numbers
    boolean - 1/0, true/false
    null - no value
    integer

*/

// console.log() -> shows value into the browser console.
console.log("Hello World!");

// [SECTION] Syntax and Statements
// Declaring variables

let myVariable;
console.log(myVariable);

let hello;
console.log(hello);

/*
Guides in writing variables:
	1. Use the 'let' keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
	2. Variable names should start with a lowercase character, use camelCase for multiple words.
	3. For constant variables, use the 'const' keyword.
	4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

*/


// Declaration and Initializing

let productName = 'desktop computer';
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

const INTEREST = 3.539;

// Reassigning variables value
productName = 'Laptop';
console.log(productName);

// INTEREST = 5;
// console.log(INTEREST);
// Proof that constant variables cannot be changed

let friend = 'Kate';
// let friend = 'Keyt'; -> still initialization
friend = "Jasmine";
console.log(friend);


// Declares a value first
let supplier;
//Initialization is done after the variable is declared
supplier = 'John Smith Tradings';
console.log(supplier);

supplier = "Zuitt Store";
console.log(supplier);

// Multiple variable declaration
let productCode = "DC017";
const productBrand = "Dell";
console.log(productCode,productBrand);

//  [Section] DATA TYPES
let country = "Philippines";
let province = "Metro Manila";

// Concatenating Strings

let fullAddress = province + ', ' + country;
console.log(fullAddress);

let greeting = "I live in the " + country;
console.log(greeting);

let mailAddress = "Metro Manila\nPhilippines";
console.log(mailAddress);

let message = "John's employee went home early";
console.log(message);

message = 'John\'s employee went home early';
console.log(message);

console.log(typeof country);

// NUMBERS
let headcount = 26;
console.log(headcount);

// Decimal Numbers
let grade = 98.7;
console.log(grade + '%');
console.log(typeof grade);

// With Exponent
let planetDistance = 2e10; //or use ** instead of e
console.log(planetDistance);

// Combining Strings and Number Value
console.log("John's grade last quarter: " + grade);

// BOOLEAN

let isMarried = false;
let inGoodConduct = true;
console.log("isMarried: " + isMarried);
console.log("inGoodConduct: " + inGoodConduct);

// Arrays
let myGrades = [98.7, 92.1, 90.2, 94.6];
console.log(myGrades);

console.log("1st qtr grade " + myGrades[0] + "\n4th qtr grade " + myGrades[3]);

let quizScoresOverTen = [5,9,7,9];
console.log(quizScoresOverTen);

console.log(typeof grade + "%");

let details = ["John Smith", 32, true];
console.log(details);

// OBJECTS
let person = {
    fullName: "John Smith",
    age: 32,
    isMarried: true,
    contact: ["0917-123-4567", "87000"],
    address: {
        houseNumber: "345",
        city: "Manila"
    }
}
console.log(person);

// Null
let spouse = null;
let myNumber = 0;
let myString = '';
console.log(spouse, myNumber, myString);

// Undefined vs Null
let varB;
console.log(varB)

let varA = null;
console.log(varA);

// Undefined = no value // Null's value is null