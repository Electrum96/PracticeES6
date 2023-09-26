//Destructuring array//

const array = [12, 13, 14, 15, 16];

const [zero] = [...array]; // обращение к элементу массива с нулевым индексом

console.log(zero);

const [, , third] = [...array]; // обращение к третьему элементу массива с помощью пропусков
console.log(third);

const newArray = [...array]; //создание копии массива

console.log(newArray);

//супер мега трюк //

var a = 3;
var b = "bear";

var [b, a] = [a, b];

console.log(b, a);

//остаток

const arrayFruits = ["apple", "grape", "banana"];

const [name, ...restFruits] = arrayFruits;

console.log(restFruits);

//значения по умолчанию
let a = "orange";
let b = "limon";
const [firstName = "Lili", secondName = "Mimi"] = [a, b];
console.log(secondName);

// функция генератор строки
let type = "!number";
const [firstString = "mimi", seconString = "type"] = [makeString(), type];

function makeString() {
  return "string";
}

console.log(firstString, seconString);

// //Destructuring object//
const object = {
  nameCar: "Mersedes",
  color: "white",
  glasses: "dark",
  model: "400gle",
};

const {nameCar, color } = object; //получение значений из объекта

console.log(nameCar, color);
