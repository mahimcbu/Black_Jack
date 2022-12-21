
export default function renderGame (){
    cardsel.innerHTML = `Cards:`
    for(let i = 0; i<cards.length; i += 1){
        cardsel.innerHTML += ` ${cards[i]}`;
    }    
    totalel.innerHTML =`Sum: ${sum}`;
    if (sum <=20){
        messageel.innerHTML=`Want to draw another card?`;
        isAlive = true;
    }else if (sum ==21){
        messageel.innerHTML=`You got the black Jack!`;
        hasBlackJack = true;
    }else{
        messageel.innerHTML=`You are out of the game.`;
        isAlive = false;

    }
}