const cards = document.querySelectorAll('.card'); //Node list ?= Array

cards[0].addEventListener('click',flipCard);

function flipCard() {
    cards[0].classList.toggle('flip');
    console.log(this);
}



