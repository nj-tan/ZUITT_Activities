//[SECTION] - WHILE LOOP
/*
    Syntax:
    while (condition/expression){
        statement/code/tasks
    }
*/
    let count = 5;

    while (count !== 0){
        console.log(count);
        count--;
    }
/* SIMULATION

        While count is not equal to 0, it will print out the count and then post-decrement it.
        count   condition   task 1          task 2 (decrement)
        5       true        console.log(5)     5-1
        4       true        console.log(4)     4-1
        3       true        console.log(3)     3-1
        2       true        console.log(2)     2-1
        1       true        console.log(1)     1-1
        0       false       will not execute    will not execute

        It will no longer print out the count at 0 since the conditions have been met.
*/
    let number = 0;
    while (number !== 2){
        console.log(number);
        number++;
    }
    // It will no longer print out the count at 2 since the conditions have been met.

    console.log("--------------------------------")
//[SECTION] - DO WHILE LOOP
/*
    Syntax:
    do {
        statement/code/tasks
    } while(condition/expression)
*/
    let exampleNumber = Number(prompt("Give me a number"));

    do {
        console.log(exampleNumber);
        exampleNumber++;
    } while (exampleNumber != 5)

    let count2 = 5;
    do {
        console.log(count2);
        count2--;
    } while (count2 != 0)
/* SIMULATION

        The function will continue to work just like a while loop.
        count   condition   task 1          task 2 (decrement)
        5       true        console.log(5)     5-1
        4       true        console.log(4)     4-1
        3       true        console.log(3)     3-1
        2       true        console.log(2)     2-1
        1       true        console.log(1)     1-1
        0       false       console.log(0)     0-1

        It will check the condition at least once before exiting the loop.
*/
    let number2 = 0;
    do {
        console.log(number2);
        number2++;
    } while (number2 <= 2)
    // It will print 2 since it did not check the conditions before printing.

    console.log("--------------------------------")
//[SECTION] - FOR LOOP
/*
    Syntax:
    for (initialization; condition/expression; change of value/final expression){
        statement/code/tasks
    }
*/
    let count3 = 5;
    for (i = count3; i > 0 ;i--){
        console.log(count3);
        count3--;
    }
/* SIMULATION

        For the count that we have used, it will continue doing the task until the condition has been met.
        count   condition   task 1          task 2 (decrement)
        5       true        console.log(5)     5-1
        4       true        console.log(4)     4-1
        3       true        console.log(3)     3-1
        2       true        console.log(2)     2-1
        1       true        console.log(1)     1-1
        0       false       will not execute    will not execute

        It will no longer print out the count at 0 since the conditions have been met.
*/

    let number3 = 0;
    for (i = number3; i <= 5 ;i++){
        console.log(number3);
        number3++;
    }

    let myName = "Neiljohn Phillip Tan";

    for (i = 0; i < myName.length; i++){
        console.log(myName[i]);
    }

    let vowels = "";
    for (i = 0; i < myName.length; i++){
        if(
            myName[i].toLowerCase() == 'a' ||
            myName[i].toLowerCase() == 'e' ||
            myName[i].toLowerCase() == 'i' ||
            myName[i].toLowerCase() == 'o' ||
            myName[i].toLowerCase() == 'u'
    ){
        console.log(myName[i] + " is a vowel");
        vowels = vowels + myName [i];
    } else {
        console.log(myName[i] + " is not a vowel");
    }
}


// [SECTION] Continue and Break Statements

for (i = 0; i <= 20; i ++){
    if (i % 2 === 0){
        console.log(i + " is divisible by 2 - skip");
        continue;
    }
    console.log ("This will not show if the count value is divisible by 2 \nCurrent count: " + i);
    if (count > 10){
        console.log("The number is greater than 10, terminating the program.")
        break;
    }
}

let verificationCode = ""
let tries = 1;
let success = false;
while(tries != 11 ){
	verificationCode = prompt("Input verification code");

	if(verificationCode!="112023" && tries == 5){
		console.warn("Wrong verification code. You have 5 remaining tries");
		console.warn("The program will close after total 10 tries");
		tries ++;
		continue;
	}
	else if(verificationCode!="112023"){
		console.log("Verification code error. Please try again");
	}
	else{
		console.log("Verification code success. Promo activated.");
		success = true;
		break;
	}
	console.log("Total Tries: " + tries)
	tries ++;

}

if(success == false){
	console.error("You have exceeded the number of tries. Program terminated. ")
}