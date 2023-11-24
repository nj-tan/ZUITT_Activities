
/*
	1. Create the following variables to store to the following user details:

	Variable Name - Value Data Type:

	firstName - String
    lastName - String
    age - Number
    hobbies - Array
    workAddress - Object

	The hobbies array should contain at least 3 hobbies as Strings.

	The work address object should contain the following key-value pairs:

			houseNumber: <value>
			street: <value>
			city: <value>
			state: <value>

	Log the values of each variable to follow/mimic the output.

	Note: strictly follow the variable names.
*/
    let firstName = "John";
    console.log("My First Name: " + firstName);

    let lastName = "Smith";
    console.log("My Last Name: " + lastName);

    let age = "30";
    console.log("Age: " + age);

    let hobbies = ['Biking', 'Mountain Climbing', 'Swimming'];
    console.log("Hobbies: ")
    console.log(hobbies);

    let workAddress = {
        houseNumber: '32',
        sreet: 'Washington',
        city: 'Lincoln',
        state: 'Nebraska'
    }
    console.log("Work Address: ");
    console.log(workAddress);

/*
	2. Debugging Practice - Identify and implement the best practices of creating and using variables
	   by avoiding errors and debugging the following codes:

			-Log the values of each variable to follow/mimic the output.

		Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
*/



	let fullName = "Steve Rogers";
	console.log("My full name is: " + fullName);

	let currentAge = 40;
	console.log("My current age is: " + currentAge);

	let friends = ["Tony","Bruce","Thor","Natasha","Clint","Nick"];
	console.log("My Friends are: " + friends)
	console.log(friends);

	let profile = {

		username: "captain_america",
		fullName: "Steve Rogers",
		age: 40,
		isActive: false,

	}
	console.log("My Full Profile: ")
	console.log(profile);

	let fullName2 = "Bucky Barnes";
	console.log("My bestfriend is: " + fullName);

	const lastLocation = "Arctic Ocean";
	console.log("I was found frozen in: " + lastLocation);



	//Do not modify
	//For exporting to test.js
	//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
	try{
		module.exports = {
		    firstName: typeof firstName !== 'undefined' ? firstName : null,
		    lastName: typeof lastName !== 'undefined' ? lastName : null,
		    age: typeof age !== 'undefined' ? age : null,
		    hobbies: typeof hobbies !== 'undefined' ? hobbies : null,
		    workAddress: typeof workAddress !== 'undefined' ? workAddress : null,
		    fullName: typeof fullName !== 'undefined' ? fullName : null,
		    currentAge: typeof currentAge !== 'undefined' ? currentAge : null,
		    friends: typeof friends !== 'undefined' ? friends : null,
		    profile: typeof profile !== 'undefined' ? profile : null,
		    fullName2: typeof fullName2 !== 'undefined' ? fullName2 : null,
		    lastLocation: typeof lastLocation !== 'undefined' ? lastLocation : null
		}
	} catch(err){
	}