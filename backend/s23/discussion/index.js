/*
    FUNCTIONS
    - lines/block of codes that we tell our program/application to perform a certain task when called upon or invoked.
    - used to prevent repeating lines/block of codes that perform the same task/function

    PARAMETERS AND ARGUMENTS

    

*/
function showStudents(){
    let students = ["NJT", "FGC", "AJA", "HC", "CKA"];
    return students;
}

let allStudents = showStudents();
console.log(allStudents);

// Feature - grade specific students
let student1Grade = allStudents[0] + ": 96.99";
console.log(student1Grade);

// Parameters and Arguments

// function printName(parameter){} -> receiver

function printName(name){
    // "name" is called a parameter
    // a parameter acts as named variable/container that exists only inside of a function
    // used to store information that is provided from a function calling/invocation (argument)
    console.log("My name is " + name);
}

// printName(argument) -> sender
printName("Neiljohn");
// "Juana", the information provided directly into the function. Specifically provided into the parameter of the function
// an example of a value being passed down when invoking a function is called an argument

printName("Phillip");

// Variables can also be passed as an argument.
let sampleVar = "Tan";
printName(sampleVar);


function checkDivisibilityBy8(num){
    console.log("-----------------------");
    let remainder = num % 8;
    console.log("The remainder of " + num + " " + "divided by 8 is " + remainder);
    let isDivisibleBy8 = remainder === 0;
    console.log("Is " + num + " is divisible by 8?");
    return isDivisibleBy8;
}
let isDivisibleBy8 = checkDivisibilityBy8(88);
console.log(isDivisibleBy8);


// Using multiple parameters
// multiple arguments must correspond to the number of parameters declared in a function in succeeding order and vice-versa
function createFullName(firstName, middleName,lastName){
    console.log(firstName + ' ' + middleName + ' ' + lastName);
}
createFullName("Neiljohn", "Phillip", "Tan"); // the very best


// Providing less arguments -> undefined
// Providing more will not pass the argument to a parameter -> no additional parameters
createFullName("Neiljohn", "Tan");
createFullName("Neiljohn", "Phillip", "Tan", "Sakalam");


// Using alert
// alert() allows us to show a small window at the top of our browser page. As opposed to console.log() which only shows a message in the console.
// alert('Hello World!');

// function showSampleAlert(){
//     alert('This is a Sample Alert Message');
// }
// showSampleAlert();

// function showAlertBox(message){
//     alert(message);
// }
// showAlertBox("SAMPLE MESSAGE");

// using prompt()

// 1st example
// function printWelcomeMessage(firstName, lastName){
//     console.log("Welcome " + firstName + " " + lastName + "!");
// }
// printWelcomeMessage("Neiljohn", "Tan");

// 2nd example
// function printWelcomeMessage(firstName, lastName){
//     console.log("Welcome " + firstName + " " + lastName + "!");
// }
// let firstName = prompt("Enter your first Name: ");
// let lastName = prompt("Enter your last Name: ")
// printWelcomeMessage(firstName, lastName);

// 3rd example
function printWelcomeMessage(){
    let firstName = prompt("Enter your first Name: ");
    let lastName = prompt("Enter your last Name: ")
    console.log("Welcome " + firstName + " " + lastName + "!");
}
printWelcomeMessage();

// prompt() can be used to gather user input and be used in our code