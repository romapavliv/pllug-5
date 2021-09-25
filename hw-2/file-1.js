function changeLetters(text) {
  let result = '';
  for (const char of text) {
    result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
}

let text = changeLetters("Test");
console.log(text) // tEST