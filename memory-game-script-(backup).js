const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;        
        checkForMatch();
    }    
}

function checkForMatch() {
    if (firstCard.dataset.game ===
        secondCard.dataset.game) {
            setTimeout(()=>{
                firstCard.classList.add('match');
                secondCard.classList.add('match');
            }, 400)  
            
            setTimeout(()=>{
                disableCards();
            }, 500)
            
            
        } else {
            lockBoard = true;
            unflipCards();                        
        }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
   resetBoard();
}

function unflipCards(){
    
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1500)    
    
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}

shuffle();

cards.forEach(card => card.addEventListener('click', flipCard));