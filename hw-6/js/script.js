let name = document.querySelector('#name');
let nick = document.querySelector('#nick');
let text = document.querySelector('#text');
let button = document.querySelector('#button');

let isNickCorrect = false;
let isNameCorrect = false;
let isTextCorrect = false;

function checkButton() {
  if (isNickCorrect && isNameCorrect && isTextCorrect) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

name.addEventListener('input', (element) => {
  if (element.target.value.length < 1 || element.target.value.length > 100 || !element.target.value.match('^[a-zA-Z]+$')) {
    name.style.border = '1px solid red';
    isNameCorrect = false;
    button.disabled = true;
  } else {
    isNameCorrect = true;
    name.style.border = '1px solid gray';
    checkButton();
  }
});

nick.addEventListener('input', (element) => {
  if (element.target.value.length < 3 || element.target.value.length > 24 || !/[a-zA-Z]/.test(element.target.value)) {
    nick.style.border = '1px solid red';
    isNickCorrect = false;
    button.disabled = true;
  } else {
    isNickCorrect = true;
    nick.style.border = '1px solid gray';
    checkButton();
  }
});

text.addEventListener('input', (element) => {
  if (element.target.value.length < 1 || element.target.value.length > 1000 || !element.target.value.match('^[a-zA-Z .,!?]+$')) {
    text.style.border = '1px solid red';
    isTextCorrect = false;
    button.disabled = true;
  } else {
    isTextCorrect = true;
    text.style.border = '1px solid gray';
    checkButton();
  }
});

function addComment() {
  let list = document.getElementById('list');
  let li = document.createElement('li');
  li.innerHTML = `<p>${nick.value} - ${name.value}<br />${text.value}</p>`;
  list.prepend(li);
}
