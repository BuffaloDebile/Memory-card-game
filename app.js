const cards = document.querySelectorAll('.card');

function shuffleCards() {
  cards.forEach((card) => {
    const randomPos = Math.trunc(Math.random() * 12);
    card.style.order = randomPos;
  });
}

shuffleCards();

cards.forEach((card) => card.addEventListener('click', flipACard));

let = cardsPicked = [];

function flipACard(e) {
  saveCard(e.target.children[0], e.target.getAttribute('data-attr'));
}

// if (cardPicked.lenght === 2 ) result() {

// }

function saveCard(el, value) {
  if (el === cardsPicked[0]?.el) return;
  el.classList.add('active');
  cardsPicked.push(el, value);
}

function result() {}
