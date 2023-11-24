// console.log("Hello World");

//Strictly Follow the property names and spelling given in the google slide instructions.
//Note: Do not change any variable and function names. 
//All variables and functions to be checked are listed in the exports.

// Create an object called trainer using object literals

// let trainer = {
//     name: "Ash Ketchum",
//     age: 10,
//     pokemon: ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"],
//     friends: {
//       hoenn: ["May", "Max"],
//       kanto: ["Brock", "Misty"],
//     },
    
//     talk: function () {
//       let message = "Pikachu! I choose you!";
//       // return message;
//       console.log(message);
//     },
//   };

let trainer = {};

// Initialize/add the given object properties and methods

// Properties
trainer.name = "Ash Ketchum";
trainer.age = 10;
trainer.pokemon = ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"];
trainer.friends = {
    hoenn : ["Brock", "Misty"],
    kanto : ["May", "Max"]
};
trainer.talk = function(pokemon){
    if (trainer.pokemon.includes(pokemon)){
        return `${pokemon}! I choose you!`;
    } else {
        return `I don't have a pokemon named ${pokemon}.`;
    }

}

// Check if all properties and methods were properly added


// Access object properties using dot notation

// Access object properties using square bracket notation

// Access the trainer "talk" method


console.log(trainer);
console.log("Result of dot notation: ");
console.log(trainer.name);
console.log("Result of square bracket notation: ");
console.log(trainer.pokemon);
console.log("Result of talk method");
console.log(trainer.talk("Pikachu"));



// Create a constructor function called Pokemon for creating a pokemon

function Pokemon(name, level){
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    //methods
    this.tackle = function(target){
        console.log(`${this.name} tackled ${target.name}!`);
        target.health -= this.attack;
        console.log(`${target.name}'s health is now reduced to ${target.health}`);
        target.faint();
    }
    this.faint = function(){
        if (this.health <= 0){
            console.log(`${this.name} has fainted.`);
        }
    }
}


// Create/instantiate a new pokemon
let pikachu = new Pokemon("Pikachu", 12);
console.log(pikachu);

let geodude = new Pokemon("Geodude", 8);
console.log(geodude);

let mewtwo = new Pokemon("Mewtwo", 100);
console.log(mewtwo);


// Invoke the tackle method and target a different object
geodude.tackle(pikachu);
console.log(`------`);
mewtwo.tackle(geodude);
console.log(`------`);
pikachu.tackle(mewtwo);
console.log(`------`);
mewtwo.tackle(pikachu);
console.log(`------`);







//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null

    }
} catch(err){

}