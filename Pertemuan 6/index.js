// Array Exercises
// For each of the exercises below, assume you are starting with the following people array.


let people = ["Greg", "Mary", "Devon", "James"];

// 1. (Using a for-loop, iterate through this array and console.log all of the people.)
for(let i =0; i< people.length; i++){
    console.log(people[i]);
}

// 2. (Using a forEach(),  iterate through this array and console.log all of the people.)
people.forEach(function(people) {
    console.log(people);
});

// 3. Write the command to remove "Greg" from the array.

// (SHIFT : Removing elements at the beginning of an array.)
people.shift();
console.log(people);

// 4. Write the command to remove "James" from the array.

// (POP : Removing element from the end of an array.)
people.pop();
console.log(people);

// 5. Write the command to add "Matt" to the front of the array.

// (UNSHIFT : Removing element from the end of an array.)
people.unshift("Matt");
console.log(people);

// 6. Write the command to add your name to the end of the array.

// (PUSH : Adding Element at the end of an Array. As array in JavaScript are mutable object, we can easily add or remove elements from the Array. And it dynamically changes as we modify the elements from the array.)
people.push("Maestro");
console.log(people);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

//8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
people.slice(2);
console.log(people);

//9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

// SPLICE : (Insertion and Removal in between an Array Syntax)
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

//10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
console.log(people);

// ==========================================================================================================================

// Object Exercises
// For each of the exercises below, assume you are starting with the following programming object.

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming);

//1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming);

//2. By using the bracket notation, change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);

//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

//5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output.
// Note: Sorry sir, In this case I can only create it and when I separate it the elements in the new obj. Thank You.

const performSomething  = (item) => {
    return item
  }
const languages = ["JavaScript", "Python", "Ruby"]
languages.forEach((item) => {
    performSomething(item)
  })
const newArray = languages.map((item) => performSomething(item))
console.log(languages);
// ==========================================================================================================================
// ▀█▀▐░░░░░░░░▐
// ░█░▐▀█░▀█▐▀█▐▐▀▐░█▐▀█▐░█
// ░█░▐░█▐▀█▐░█▐▌░▐▄█▐░█▐░█
// ░█░▐░█▐▄█▐░█▐▐▄▄▄█▐▄█▐▄█
// _            ___  ___                _             
// | |           |  \/  |               | |            
// | |__  _   _  | .  . | __ _  ___  ___| |_ _ __ ___  
// | '_ \| | | | | |\/| |/ _` |/ _ \/ __| __| '__/ _ \ 
// | |_) | |_| | | |  | | (_| |  __/\__ \ |_| | | (_) |
// |_.__/ \__, | \_|  |_/\__,_|\___||___/\__|_|  \___/ 
//         __/ |                                       
//        |___/                                