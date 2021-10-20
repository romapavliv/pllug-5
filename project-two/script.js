document.addEventListener('DOMContentLoaded', () => {
  const cardArray = ['🤖', '🤡', '😃', '🎁', '💀', '👹', '🎉', '👻', '🤖', '🤡', '😃', '🎁', '💀', '👹', '🎉', '👻'];
  // const cardArray = [
  //   {
  //     name: 'fries',
  //     img: 'images/fries.png',
  //   },
  //   {
  //     name: 'cheeseburger',
  //     img: 'images/cheeseburger.png',
  //   },
  //   {
  //     name: 'ice-cream',
  //     img: 'images/ice-cream.png',
  //   },
  //   {
  //     name: 'pizza',
  //     img: 'images/pizza.png',
  //   },
  //   {
  //     name: 'milkshake',
  //     img: 'images/milkshake.png',
  //   },
  //   {
  //     name: 'hotdog',
  //     img: 'images/hotdog.png',
  //   },
  //   {
  //     name: 'fries',
  //     img: 'images/fries.png',
  //   },
  //   {
  //     name: 'cheeseburger',
  //     img: 'images/cheeseburger.png',
  //   },
  //   {
  //     name: 'ice-cream',
  //     img: 'images/ice-cream.png',
  //   },
  //   {
  //     name: 'pizza',
  //     img: 'images/pizza.png',
  //   },
  //   {
  //     name: 'milkshake',
  //     img: 'images/milkshake.png',
  //   },
  //   {
  //     name: 'hotdog',
  //     img: 'images/hotdog.png',
  //   },
  // ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('div');
      // const img = document.createElement('img');
      // img.setAttribute('src', 'images/blank.png');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      // card.appendChild(img);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      console.log(cardsChosenId);
      console.log('id', optionOneId);
      console.log('id', optionTwoId);
      console.log(cards[optionOneId]);
      cards[optionOneId].textContent = '';
      cards[optionOneId].style.backgroundColor = 'chocolate';
      // cards[optionOneId].setAttribute('src', 'images/blank.png');
      // cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].style.backgroundColor = 'chocolate';
      cards[optionOneId].textContent = '';
      // cards[optionOneId].setAttribute('src', 'images/white.png');
      // cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].textContent = '';
      cards[optionOneId].style.backgroundColor = 'chocolate';
      cards[optionTwoId].textContent = '';
      cards[optionTwoId].style.backgroundColor = 'chocolate';
      // cards[optionOneId].setAttribute('src', 'images/blank.png');
      // cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    console.log('cardid', cardId);

    cardsChosen.push(cardArray[cardId]);
    cardsChosenId.push(cardId);
    this.style.backgroundColor = 'white';
    this.textContent = cardArray[cardId];
    // this.removeAttribute('src');
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
