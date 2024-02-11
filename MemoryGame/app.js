const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseBurger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseBurger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
]

cardArray.sort(() => 0.5 - Math.random()) //Short Trick for shuffling an array.

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard(){
    for(let i = 0 ; i<cardArray.length ; i++){
        let card = document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("card-id",i);
        card.classList.add("cardStyling");
        card.addEventListener("click",flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){

    const cards = document.querySelectorAll("#grid img");

    const optionOneId =  cardsChosenId[0];
    const optionTwoId =  cardsChosenId[1];

    if(optionOneId == optionTwoId){
        alert("You clicked the same option");
    }else if(cardsChosen[0] == cardsChosen[1]){
        alert("You Found A Match");
        cards[optionOneId].setAttribute("src","images/white.png");
        cards[optionTwoId].setAttribute("src","images/white.png");
        cards[optionOneId].removeEventListener("click",flipCard);
        cards[optionTwoId].removeEventListener("click",flipCard);
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute("src","images/blank.png");
        cards[optionTwoId].setAttribute("src","images/blank.png");
    }
    resultDisplay.innerText = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    if(cardsWon.length == (cardArray.length)/2 ){
        resultDisplay.textContent = "Congratulations! You've Found them all!";
    }
}

function flipCard(){
    const cardId = this.getAttribute("card-id");

    cardsChosen.push(cardArray[cardId].name);

    cardsChosenId.push(cardId);

    this.setAttribute("src",cardArray[cardId].img);

    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500);
    }
}