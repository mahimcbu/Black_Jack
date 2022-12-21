import renderGame from "./rendergame.js";
let cards =[];
let sum = 0;
let isAlive = false;
let hasBlackJack=false;
let cardsel = document.getElementById("cards");
let totalel = document.getElementById("sum")
let buttonel = document.getElementById("starting");
let messageel = document.getElementById("message");
buttonel.addEventListener("click",function(){
    isAlive = true;
    hasBlackJack=false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards =[firstCard, secondCard ];
    sum = cards[0]+cards[1];
    renderGame();
} );
let newCard = document.getElementById("newCard");
newCard.addEventListener("click",function(){
    if(isAlive === true && hasBlackJack===false){
        let newcard= getRandomCard();
        if (sum >10 && newcard===11){
            newcard= 1;
        }
        cards.push(newcard);
        cardsel.innerHTML+= newcard;
        sum+=newcard;
        renderGame();
    } 

});


function getRandomCard(){
    let randNum= Math.floor(Math.random()*13)+1;
    if (randNum != 1){
        return randNum;
    }else{
        return 11;    
    }
}


let reset = document.getElementById("reset");
reset.addEventListener("click", function(){
     cards =[];
     sum = 0;
     isAlive = false;
     hasBlackJack=false;
     cardsel.innerHTML = `Cards:`;
     totalel.innerHTML=`Sum:`;
     messageel.innerHTML = "Want to play a round?";


})