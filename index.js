// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
    
   return gifts;
}

wrapGifts(gifts);

const card = ["Ada", "Brendan", "Ali"]

function writeCards(card){
    for (let i=0; i < card.length; i++){
        return(`Thank you, ${card[i]} for the wonderfull birthday gift`)
    }
}
     
    