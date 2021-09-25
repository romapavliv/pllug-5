function changeLetters(word) {
  let result = '';
  for (const char of word) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

changeLetters("Test"); // tEST