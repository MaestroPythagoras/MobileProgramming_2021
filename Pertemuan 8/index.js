const arrPerson = ["Maestro","Pythagoras", 20, true];

const firstName = arrPerson[0];
const lastName = arrPerson[1];
const age = arrPerson[2];
const isMarried = arrPerson[3];

const [firstName, ,age] = arrPerson;
console.log(firstName, age);