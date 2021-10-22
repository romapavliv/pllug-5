document.addEventListener('DOMContentLoaded', () => {
  let cardArray = ['🤖', '🤡', '😃', '🎁', '💀', '👹', '🎉', '👻'];
  cardArray = cardArray.concat(cardArray);
  let moves = 0;
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const totalMoves = document.querySelector('#move');
  let startBtn = document.getElementById('start');
  let name = '';
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let timerInterval = null;
  let value = 0;

  startBtn.addEventListener('click', function () {
    name = document.getElementById('name').value;
    document.querySelector('.titles').style.display = 'block';
    document.querySelector('.start').style.display = 'none';
    console.log(name);
    createBoard();
    start();
  });

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      alert('You have clicked the same card!');
      cards[optionOneId].textContent = '';
      cards[optionOneId].style.backgroundColor = 'chocolate';
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].style.backgroundColor = 'white';
      cards[optionOneId].textContent = '';
      cards[optionTwoId].style.backgroundColor = 'white';
      cards[optionTwoId].textContent = '';
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].textContent = '';
      cards[optionOneId].style.backgroundColor = 'chocolate';
      cards[optionTwoId].textContent = '';
      cards[optionTwoId].style.backgroundColor = 'chocolate';
      alert('Sorry, try again');
    }
    moves += 1;
    totalMoves.textContent = ` ${moves}`;
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = ` ${cardsWon.length}`;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
      stop();

      let message = `Congratulations! You found them all! Here are the results: 
    \nMoves: ${moves} 
    \nScore: ${cardsWon.length}
    \nTime: ${value} sec`;
      alert(message);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId]);
    cardsChosenId.push(cardId);
    this.style.backgroundColor = 'white';
    this.textContent = cardArray[cardId];
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function changeValue() {
    document.getElementById('sec').innerHTML = ++value;
  }

  var stop = function () {
    clearInterval(timerInterval);
  };

  function start() {
    stop();
    value = 0;
    timerInterval = setInterval(changeValue, 1000);
  }
});
