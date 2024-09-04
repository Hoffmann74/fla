const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;
let countdown;
let matchedPairs = 0;
let gameStarted = false;

document.addEventListener('DOMContentLoaded', () => {
    // Zunächst sind alle Karten verdeckt
    flipAllCards(false);
    shuffleCards();
});

document.getElementById('startBtn').addEventListener('click', () => {
    if (gameStarted) return; // Verhindert, dass der Start-Button mehrfach geklickt wird

    gameStarted = true; // Spiel wurde gestartet
    resetGame(); // Vor dem Start eines neuen Spiels alle vorherigen Umrandungen entfernen

    startNewGame();
});

function startNewGame() {
    lockBoard = true;
    document.getElementById('startBtn').disabled = true; // Deaktivieren des Start-Buttons
    flipAllCards(true); // Alle Karten aufdecken

    setTimeout(() => {
        flipAllCards(false); // Nach 6 Sekunden alle Karten verdecken
        lockBoard = false;
        startTimer(); // Countdown starten
    }, 6000); // Karten bleiben 6 Sekunden aufgedeckt
}

function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
}

function startTimer() {
    let timeLeft = 60;
    document.getElementById('timer').innerText = timeLeft; // Timer auf 60 Sekunden setzen

    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            lockBoard = true;
            document.getElementById('startBtn').disabled = false; // Start-Knopf wieder aktivieren
            gameStarted = false; // Spiel ist beendet
        }
    }, 1000);
}

function flipAllCards(show) {
    cards.forEach(card => {
        if (show) {
            card.classList.add('flip');
        } else {
            card.classList.remove('flip');
        }
    });
}

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;

    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = flippedCards[0].dataset.card === flippedCards[1].dataset.card;

    if (isMatch) {
        matchCards();
    } else {
        noMatchCards();
    }
}

function matchCards() {
    flippedCards[0].classList.add('match');
    flippedCards[1].classList.add('match');
    flippedCards = [];
    matchedPairs++;

    if (matchedPairs === 4) {
        clearInterval(countdown); // Countdown stoppen, wenn alle Paare gefunden sind
        document.getElementById('startBtn').disabled = false; // Start-Knopf wieder aktivieren
        lockBoard = true; // Verhindert, dass weitere Karten aufgedeckt werden
        gameStarted = false; // Spiel ist beendet
    }
}

function noMatchCards() {
    lockBoard = true;
    flippedCards[0].classList.add('nomatch');
    flippedCards[1].classList.add('nomatch');

    setTimeout(() => {
        flippedCards[0].classList.remove('nomatch', 'flip');
        flippedCards[1].classList.remove('nomatch', 'flip');
        flippedCards = [];
        lockBoard = false;
    }, 3000); // Karten bleiben 3 Sekunden aufgedeckt, dann verdecken
}

function resetGame() {
    flipAllCards(false); // Alle Karten verdecken
    matchedPairs = 0; // Zurücksetzen der gefundenen Paare
    clearInterval(countdown); // Stoppen des Countdowns, falls aktiv
    document.getElementById('timer').innerText = "60"; // Zurücksetzen des Timers auf 60 Sekunden

    // Entfernen der grünen Umrandungen von den Karten
    cards.forEach(card => {
        card.classList.remove('match');
    });
}
