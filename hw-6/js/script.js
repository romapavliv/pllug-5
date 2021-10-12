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

name.addEventListener('input', (el) => {
  if (!/[a-zA-Z]{1,100}/.test(el.target.value)) {
    name.style.border = '1px solid red';
    isNameCorrect = false;
    button.disabled = true;
  } else {
    isNameCorrect = true;
    name.style.border = '1px solid gray';
    checkButton();
  }
});

nick.addEventListener('input', (el) => {
  if (!/[a-zA-Z]{3,24}/.test(el.target.value)) {
    nick.style.border = '1px solid red';
    isNickCorrect = false;
    button.disabled = true;
  } else {
    isNickCorrect = true;
    nick.style.border = '1px solid gray';
    checkButton();
  }
});

text.addEventListener('input', (el) => {
  if (!/[a-zA-Z .,!?]{1,1000}/.test(el.target.value)) {
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
