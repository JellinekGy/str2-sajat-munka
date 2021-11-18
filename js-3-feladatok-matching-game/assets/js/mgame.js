const cards = document.querySelectorAll('.card');

const clickedCards = [];

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

const shuffle = () => {
    cards.forEach((card) => {
        let cardPosition = Math.floor(Math.random() * cards.length);
        card.style.order = cardPosition;
    });
}

window.onload = shuffle(cards);

const selector = () => {
    clickedCards.push(this.dataset.index);    
}