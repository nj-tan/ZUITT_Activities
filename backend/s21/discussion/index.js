console.log("Hello World!");

// ARITHMETIC OPERATORS
// +, -, *, /, %

let x = 10;
let y = 3;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of addition operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

let remainder = x % y;
console.log("Result of modulo operator: " + remainder);

// ASSIGNMENT OPERATOR
// BASIC ASSIGNMENT OPERATOR -> =
let assignmentNumber = 8;

// ADDITION ASSIGNMENT OPERATOR
assignmentNumber = assignmentNumber + 2; //10

console.log(assignmentNumber);

assignmentNumber += 2; //12
console.log("Result of addition assignment operator: " + assignmentNumber);

assignmentNumber -= 2; //10
console.log("Result of subtraction assignment operator: " + assignmentNumber);

assignmentNumber *= 2; //20
console.log("Result of multiplication assignment operator: " + assignmentNumber);

assignmentNumber /= 2; //10
console.log("Result of division assignment operator: " + assignmentNumber);

// INCREMENT AND DECREMENT

let z = 1;

let increment = ++z; //pre-increment
console.log("Result of pre-increment: " + increment);
console.log("Result of pre-increment: " + z);

// Current Value
// increment = 2
// z = 2

increment = z++ //post-increment
console.log("Result of post-increment: " + increment);
console.log("Result of post-increment: " + z);

increment = z++ //post-increment
console.log("Result of post-increment: " + increment); //3
console.log("Result of post-increment: " + z); //4


let decrement = --z //pre-increment
console.log("Result of pre-decrement: " + decrement); //3
console.log("Result of pre-decrement: " + z); //3


decrement = z-- //post-decrement
console.log("Result of post-decrement: " + decrement); //3
console.log("Result of post-decrement: " + z); //2

decrement = z-- //post-decrement
console.log("Result of post-decrement: " + decrement); //2
console.log("Result of post-decrement: " + z); //1

// TYPE COERCION
// Automatic or implicit conversion of values from one data type to another

let numA = '10';
let numB = 12;
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC = 16;
let numD = 14;
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

let numE = 10 + true;
// numE -> 10 + 1
console.log(numE);
// true is read as 1
console.log(typeof numE);

let numF = false + 1;
// false is read as 0
console.log(numF);


// Comparison Operators
// == ===
let sampleName = 'juan';
// EQUALITY OPERATOR (==)
/*
    - Checks whether the operands are equal/have the same content
    - Attempts to CONVERT AND COMPARE operands of different data types
    - Returns a boolean value
*/
console.log("Equality Operator Output ------------");
console.log(1 == 1); //true
console.log(1 == 2); // false
console.log(1 == '1'); //true
console.log(0 == false); // true
console.log('juan' == 'juan'); //true
console.log('juan' == sampleName); //true

console.log("Inequality Operator Output ----------");
// Inequality operator (!=)
// != -> is NOT equal to
console.log(1 != 1); //false
console.log(1 != 2); // true
console.log(1 != '1'); //false
console.log(0 != false); // false
console.log('juan' != 'juan'); //false
console.log('juan' != sampleName); //false

console.log("Strict Equality Operator Output -----");
// Strict Equality  Operator
console.log(1 === 1); //true
console.log(1 === 2); // false
console.log(1 === '1'); //false
console.log(0 === false); // false
console.log('juan' === 'juan'); //true
console.log('juan' === sampleName); //true

// Relational Operator
console.log("Relational Operator Output ----------");
let a = 50;
let b = 65;
let c = 50;
// GT || Greater Than Operator (>)
let isGreaterThan = a > b;
console.log(isGreaterThan);
// LT || Lesser Than Operator (<)
let isLesserThan = a < b;
console.log(isLesserThan);
// GTE || Greater Than or Equal Operator (>=)
let isGTorEqual = a >= c;
console.log(isGTorEqual);
// LTE || Greater Than or Equal Operator (>=)
let isLTorEqual = a <= c;
console.log(isLTorEqual);

// Logical Operators (&& || !)
console.log("Logical Operators Output ------------");

let isLegalAge = true;
let isRegistered = false;

// Logical AND Operator
// Returns true if all operands are true
let areAllRequirementsMet = isLegalAge && isRegistered;
console.log("Result of Logical AND Operator: " + areAllRequirementsMet);
// Logical OR Operator
// Returns true if at least one operand is true
let anyRequirementsMet = isLegalAge || isRegistered;
console.log("Result of Logical OR Operator: " + anyRequirementsMet);
// Logical NOT Operator
// Returns the opposite value
let someRequirementsNotMet = !isRegistered;
console.log("Result of Logical NOT Operator: " + someRequirementsNotMet);