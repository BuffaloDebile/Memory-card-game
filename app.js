const cards = document.querySelectorAll('.card');

function shuffleCards() {
  cards.forEach((card) => {
    const randomPos = Math.trunc(Math.random() * 12);
    card.style.order = randomPos;
  });
}

shuffleCards();

cards.forEach((card) => card.addEventListener('click', flipACard));

let lockedCards = false;
let = cardsPicked = [];

function flipACard(e) {
  if (lockedCards) return;

  saveCard(e.target.children[0], e.target.getAttribute('data-attr'));

  if (cardsPicked.length === 2) result();
}

function saveCard(el, value) {
  if (el === cardsPicked[0]?.el) return;
  el.classList.add('active');
  cardsPicked.push({ el, value });
}

function result() {
  saveNumberOfTries();
  if (cardsPicked[0].value === cardsPicked[1].value) {
    cardsPicked[0].el.parentElement.removeEventListener('click', flipACard);
    cardsPicked[1].el.parentElement.removeEventListener('click', flipACard);
    cardsPicked = [];
    return;
  }

  lockedCards = true;
  setTimeout(() => {
    cardsPicked[0].el.classList.remove('active');
    cardsPicked[1].el.classList.remove('active');
    cardsPicked = [];
    lockedCards = false;
  }, 1000);
}

const innerCards = [...document.querySelectorAll('.double-face')];
const advice = document.querySelector('.advice');
const score = document.querySelector('.score');

numberOfTries = 0;

function saveNumberOfTries() {
  numberOfTries++;
  const checkForEnd = innerCards.filter(
    (card) => !card.classList.contains('active'),
  );
  if (!checkForEnd.length) {
    advice.textContent = `You won ! Press "space" to start again`;
    score.textContent = `Final score : ${numberOfTries}`;
    return;
  }
  score.textContent = `Number of tries: ${numberOfTries}`;
}
