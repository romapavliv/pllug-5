function changeLetters(text) {
  let result = '';
  for (const char of text) {
    result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
}

let text = changeLetters("Test"); // tEST
console.log('%c Result:', 'color: red', {text})

// crash a tab
var txt = "a";
while(1){
  txt = txt += "a";
}