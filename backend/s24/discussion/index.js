/*
    Conditional Statements
    - needs to execute decision making tasks that depends on the input
    - code predetermined actions based on user input/ makes code more flexible
    - is the container full or not/ is

    - if, else if, else

    - switch statement


    -try-catch
    - for catching errors
    - instances when application returns an error/warning that is not necessarily an error in the context of our code


    truthy and falsy
    - considered true when encountered in a boolean context
    - values are considered true unless defined otherwise

    Conditional Ternary Operators
    - condition
    - expression to execute if truthy
    - expression to execute if falsy
    ifTrue: / ifFalse:

*/

let numA = -1;

if(numA < 0){
    console.log("Number is negative");
}

console.log(numA < 0);

console.log("-------------------------")

numA = 0;
if (numA < 0){
    console.log("Number is negative");
}

console.log("-------------------------")

let numB = 80;
// ((80%5) == 0)
// (0 == 0)
if ((numB%5) === 0){
    console.log(numB + " is divisible by 5");
}

/*
Syntax:
    if(condition){
        statement/s
    }
*/
console.log("-------------------------")

let city = "New York";
if (city === "New York"){
    console.log("You in New York");
}

// Comparing type
if ((typeof city) == "string"){
    console.log("You still in New York dawg");
}

console.log("-------------------------")

// Else-if clause
let numH = 1;
if (numH < 0){
    console.log("Number is negative");
}
else if(numH > 0){
        console.log("Number is positive")
}

// What happens if there will be multiple ifs?
let numC = 4;
if (numC === 4){
    console.log("Hey yo I'm 4");
}
if (numC > 3){
    console.log("Hey yo I'm greater than 3");
}

console.log("-------------------------")

city = "Tokyo";
if (city === "New York"){
    console.log("Welcome to New York City!");
}
else if( city === "Tokyo"){
    console.log("You in Tokyo dawg");
}

console.log("-------------------------")

// else statement - last option
let numD = 0;
if (numD < 0){
    console.log("Number is negative");
}
else if(numD > 0){
        console.log("Number is positive")
}
else {
    console.log("It's a damn 0");
}

console.log("-------------------------")

let grade = 80;
if (grade >= 75){
    console.log("You passed!");
}
else {
    console.log("You failed!");
}

console.log("-------------------------")

// if, else if, and else statements with functions
let message = "No message";
console.log(message);

function determineTyphoonIntensity(windSpeed){
    if(windSpeed < 30){
        return 'Not a typhoon yet';
    }
    else if(windSpeed <= 60){
        return 'Tropical depression detected';
    }
    else if(windSpeed >= 60 && windSpeed <=88){
        return 'Tropical storm detected';
    }
    else if(windSpeed >= 89 || windSpeed <= 117){
        return 'Severe tropical storm deteced'
    }
    else{
        return 'Typhoon detected'
    }
}
message = determineTyphoonIntensity(70);
console.log(message);

if(message === "Tropical storm detected"){
    console.warn(message);
}
else if (message === "Severe tropical storm detected"){
    console.error(message);
}

console.log("-------------------------")

// truthy and falsy

if (1){
    console.log("Truthy");
}
if([]){
    console.log("Truthy");
}


/*
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN
*/

if(false){
    console.log("Falsy");
}
if(0){
    console.log("Falsy");
}
if(undefined){
    console.log("Falsy");
}

console.log("-------------------------")

// [SECTION] Conditional (Ternary) Operator
/*
    The conditional ternary operator takes in 3 operands
    1. condition
    2. expression to execute if truthy
    3. expression to execute if condition is falsy
    - can be used as alternative for "if else" statement

    - ternary operators have an implicit 'return' statement meaning that without the 'return keyword the resulting expressions can be stored in a variable

    Syntax: (expression) ? ifTrue : ifFalse
*/

let ternaryResult = (1 < 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult);

let ternaryResult2 = (1 < 18) ? "numA is lesser than numB" : "numA is greater than or equal to numB";
console.log(ternaryResult2);


// [SECTION] Switch Operator

// let day = prompt("What day of the week is it today?").toLowerCase();

//     switch(day){
//         case 'monday':
//             console.log("The color of the day is red");
//             break;
//         case 'tuesday':
//             console.log("The color of the day is orange");
//             break;
//         case 'wednesday':
//             console.log("The color of the day is yellow");
//             break;
//         case 'thursday':
//             console.log("The color of the day is green");
//             break;
//         case 'friday':
//             console.log("The color of the day is blue");
//             break;
//         case 'saturday':
//             console.log("The color of the day is indigo");
//             break;
//         case 'sunday':
//             console.log("The color of the day is violet");
//             break;
//         default:
//             console.log("Please input a valid day");
//             break;
//     }

// [SECTION] Try-Catch Finally statement
/*
    - "try-catch" statements are commonly used for error handling
    - the "finally" block is used to specify a response/action that is used to handle/resolve errors
*/

function showIntensityAlert(windSpeed){
    try{
        // to test a statement/codes
        //section 1 program
        alerat(determineTyphoonIntensity(windSpeed));
    }
    catch(error){
        // commonly used to catch and show the error
        console.warn(error);
        console.warn(error.message);
        console.warn("Student is not yet existing");
    }
    finally {
        // runs in success or failure of code execution
        alert("Intensity updates will show alert");
    }
}
showIntensityAlert(56);

// section 2 program
console.log("Sample text");

try {

    let studentArray = ['student1', 'student2', 'student3'];
    console.log(studentArray[3]);
}
catch(error){
    console.warn(error);
}
finally {
    console.log("Finally block")
}
