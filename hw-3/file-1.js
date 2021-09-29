//Створити пустий об’єкт;
let obj = {};

//Створити пустий об’єкт без прототипу;
const w = Object.create(null);

//Додати до об’єкта будь які нові поля всіма відомими способами;
obj.name = 'Walter';
obj['age'] = 18;

//Створити пустий масив;
//Створити пустий масив довжиною 100500 елементів;
//Створити масив з декількома елементами;
//Зробити заповнений масив пустим;
//Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);
//Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
//Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
//Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;
//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;

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