let player = {
    name: "Per",
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    messageEl.classList.toggle('default');
    messageEl.classList.remove('yellow');
    messageEl.classList.remove('green');
    messageEl.classList.remove('red');
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        messageEl.classList.remove('default');
        messageEl.classList.remove('green');
        messageEl.classList.remove('red');
        messageEl.classList.toggle('yellow');
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        messageEl.classList.remove('default');
        messageEl.classList.remove('green');
        messageEl.classList.remove('yellow');
        messageEl.classList.toggle('green');
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        messageEl.classList.remove('default');
        messageEl.classList.remove('green');
        messageEl.classList.remove('yellow');
        messageEl.classList.toggle('red');
        isAlive = false
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();        
    }
}