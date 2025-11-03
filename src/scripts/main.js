// main.js
const gameBoard = document.querySelector('.game-board');
const resetButton = document.querySelector('.reset-button');

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

let firstCard = null;
let secondCard = null;
let lockBoard = false; // Bloqueia o tabuleiro para evitar cliques rápidos

// Função para embaralhar as cartas
function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Função para criar o tabuleiro do jogo
function createBoard() {
    gameBoard.innerHTML = ''; // Limpa o tabuleiro antes de criar um novo
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledEmojis = shuffle(duplicatedEmojis);

    shuffledEmojis.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'card-back');
        cardBack.textContent = emoji;

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

// Função para virar a carta
function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true; // Bloqueia o tabuleiro
    checkForMatch();
}

// Função para checar se as cartas são iguais
function checkForMatch() {
    const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
    isMatch ? disableCards() : unflipCards();
}

// Desabilita as cartas que combinaram
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();

    // Checa se o jogador venceu
    if (document.querySelectorAll('.card:not(.flip)').length === 0) {
        setTimeout(() => {
            const playAgain = confirm('Parabéns, você venceu! Deseja jogar novamente?');
            if (playAgain) {
                startGame();
            }
        }, 500);
    }
}

// Vira as cartas de volta se não combinarem
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1200);
}

// Reseta as variáveis do turno
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Função para iniciar ou reiniciar o jogo
function startGame() {
    resetBoard();
    createBoard();
}

// Evento do botão de reset
resetButton.addEventListener('click', startGame);

// Inicia o jogo pela primeira vez
startGame();