// declaredFunction();
// variableFunction();
console.log("Hello world");

function printDogs(){
	console.log("Hibana");
	console.log("Caveira");
	console.log("Piru");
	console.log("Tammy");
	console.log("Spade");
	console.log("Hailey");
	console.log("Biggie");
	console.log("Faith");
	console.log("Makaveli");
	console.log("Loki");
	console.log("Butchkoy");
	console.log("Coffee");
	console.log("Maya");
	console.log("Chunker");
	console.log("Panda");
	console.log("Shadow");
};

printDogs();
printDogs();

// Function declaration
// Syntax:
/*
	function functionName(){
		statement/tasks
	}
*/
function declaredFunction(){
	console.log("Hello world from declaredFunction() ");
	// printDogs();
};


// Function invocation
// Syntax: functionName();
declaredFunction();
printDogs();

// Function Declaration vs Function Expression
// A function can also be stored in a variable. This is called function expression.

// Function Expression
let variableFunction = function(){
	console.log("Hello Again!");
};


variableFunction();


// We can also create a function expression of a named function
// However, to invoke the function expression, we invoke it by its variable name, not by its function name.
let variableFunction2 = function functionName(){
	console.log("Hello Again!");
};

// functionName();

// ----------------------------------

// Reassining Declared Function
declaredFunction = function(){
	console.log("updated declaredFunction");
}

declaredFunction();

// Reassinging Function Expression
variableFunction = function(){
	console.log("Heyow poh!")
}

variableFunction();


// Testing reassigning a const function
const constFunction = function(){
	console.log("Initialized with const");
};

constFunction();

// NOTE: We cannot reassign a function expression initialized with const
// constFunction = function(){
// 	console.log("Cannot be re-assigned");
// };


// ---------------------------

// Function scope

function showNames(){
	var functionVarialbleVar = "Joe";
	const functionVariableConst = "John";
	let functionVariableLet = "Jane";

	console.log(functionVarialbleVar);
	console.log(functionVariableConst)
	console.log(functionVariableLet);
}

showNames();

/*
	The variable declared inside the function cannot be accessed outside the function.
*/
// console.log(functionVarialbleVar);
// console.log(functionVariableConst);
// console.log(functionVariableLet);

// Nested Functions

function myNameFunction(){
	let name = "Peter";

	function nestedFunction(){
		let nestedName = "Tony"; // To test if the nestedName variable will be accessible outside the function 'nestedFunction'
		console.log(name); // To access name variable
	}

	// Displaying nestedName value will not work because it is declared inside the function nestedFunction and accessed outside it.
	// console.log(nestedName);
	nestedFunction();
}


myNameFunction();

// Function and Global Scoped Variables
let globalName = "Alexandro";

function myNewFunction(){
	let nameInside = "Renz";
	console.log(globalName);
}

myNewFunction();
// console.log(nameInside);

// [Section] Using alert();
function showSampleAlert(){
	alert("Hello, user!");
}

// showSampleAlert();


function showSuccessMessage(){
	alert("Submitted Successfully");
}

// showSuccessMessage();

// console.log("I will only log once the alert is dismissed.");

// [Section] Using prompt();
function printWelcomeMessage(){
	let fullName = prompt("Enter your full name");
	console.log("Hello " + fullName + "!");
	console.log("Welcome to my page!");
} 

// printWelcomeMessage();

// Function Naming Convention
// 1. Function names should be definitive of the task it will perform. It  usually contains 'verb';
function getCourses(){
	let courses = ["Science 101","Math 101","English 101"];
	return courses;
};

let courses = getCourses(); // ["Science 101","Math 101","English 101"]
console.log(courses);

// 2. Avoid generic names to avoid confusion within your code
function get(){
	let name = "Jamie";
	return name;
}

console.log(get()); // Jamie

// 3. Avoid pointless and inappropriate function names
function foo(){
	return 25%5;
};

console.log(foo());

// 4. Name your function in small caps. Follow camelCase when naming variables and functions
function displayCarInfo(){
	console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1,500,000");
	return "Toyota, Sedan, 1.5K";
	// Tasks / statements after return statement will not be executed
	console.log("Task / statements after return will not work");
}

// displayCarInfo();
let carInfo = displayCarInfo();
console.log(carInfo);




