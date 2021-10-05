//Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д),
//на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase),
//яка б поєднувала в собі всі елементи масиву які є строками.

function getString(data) {
  let text = data
    .filter((el) => typeof el === 'string')
    .map((el) => el.toLowerCase())
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join('')
    .trim();
  return text[0].toLowerCase() + text.slice(1);
}

console.log(getString([{ age: '33', name: 'Walter' }, 'aAa', 'BBB', 'CcC', ['777'], ['is', 2, -99], ' '])); // aaaBbbCcc

//Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масиву у якому кожен елемент
//масиву є літерою англійського алфавіту відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …).
//Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]

function getLetters(data) {
  return data.map((num) => String.fromCharCode(96 + num));
}

console.log(getLetters([4, 3, 22, 11])); // [ 'd', 'c', 'v', 'k' ]

//Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) і повертає новий об’єкт у який містить тільки числа більші рівні 0.

function filterValues(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([key, val]) => typeof val === 'number' && val >= 0));
}

console.log(filterValues({ a: 22, b: -11.35, c: 41.2, d: 'hello' })); // { a: 22, c: 41.2 }
