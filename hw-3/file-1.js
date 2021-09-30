//Створити пустий об’єкт;
let obj = {};

//Створити пустий об’єкт без прототипу;
const w = Object.create(null);

//Додати до об’єкта будь які нові поля всіма відомими способами;
obj.name = 'Walter';
obj['age'] = 18;

//Створити пустий масив;
const myArray = [];


//Створити пустий масив довжиною 100500 елементів;
var arr = new Array(100500);
console.log(arr.length) // 100500

//Створити масив з декількома елементами;
var list = [1, 2, 3, 4];


//Зробити заповнений масив пустим;
list = []; // or list.length = 0

//Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);

function remove(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

let result = remove([1,2,3,4,5], 4)
console.log(result) // [ 1, 2, 3, 5 ]


//Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
function isEmptyArray(arr) {
  return arr.length === 0 ? true : false;
}

let result = isEmptyArray([3, 3])
console.log(result)  // false

//Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}


let result = isEmptyObject({k: 3})
console.log(result)  // false


//Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

function concatTwoArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

let result = concatTwoArrays([1, 3] , [4, 5]);
console.log(result)  // [ 1, 3, 4, 5 ]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
function getExponentPower(arr1) {
  let result = [];
  arr1.forEach(num => {
    result.push(Math.pow(num, 3))
  });
  return result;
}

let result = getExponentPower([1, 2, 3]);
console.log(result)  //[1, 8, 27]


//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;
function getOddNumbers(arr1) {
  let result = [];
  arr1.forEach(num => {
    if (num % 2 !== 0) result.push(num);
    
  });
  return result;
}

let result = getOddNumbers([1, 2, 3]);
console.log(result)  //[ 1, 3 ]


//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
function getIntegers(numbers) {
  let result = [];
  numbers.forEach(num => {
    if (num % 1 === 0) result.push(num)
  });
  return result;
}
let result = getIntegers([5, 3.14, 4.1, 10, 11, 20.1])
console.log(result) // [5, 10, 11]

//Створити функцію, яка нічого не повертає;
function printHello() {
  console.log('Hello')
}

Завдання виконано.
Є пропущені крапки з комою.
