// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
// };

// //Hallo, nama saya John Doe. Umur saya 33 tahun.
// let kalimat =
//   "Hallo, nama saya " +
//   person.firstName +
//   " " +
//   person.lastName +
//   ". Umur saya " +
//   person.age +
//   " tahun";

// let kalimat6 = `Hallo, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`;

// console.log(kalimat);
// console.log(kalimat6);

//Arrow Function

// function sayHello1() {}

// const sayHello2 = function () {};

// const sayHello3 = (param1, param2 = "Adam") => `Hello ${param1} ${param2}`;

// console.log(sayHello3("Stenly", "Doe"));

//Rest Parameter & Spread Operator
// const display = (param1, param2, ...rest) => {
//   console.log(param1, param2, rest);
// };

// display(1, 2, 3, 4, 5, 6);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [8, 9];

// const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr = [...arr1, ...arr2, 7, ...arr3];
const combineArr2 = [...combineArr];

console.log(combineArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};

person = {
  ...person,
  address: "Manado",
  job: "Teacher",
};

console.log(person);