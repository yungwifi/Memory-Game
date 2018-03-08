var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = []
var cardOne = cards[0]; {
	cardsInPlay.push('cardOne') 
	console.log("User Flipped Queen");
}

var cardTwo = cards[1]; {
	cardsInPlay.push('cardTwo')
	console.log("User Flipped King");
}

if (cardsInPlay.length === 2); {
    if(cardOne === cardTwo);
  alert("You've Found a Match!");
}
if (cardsInPlay.length ===2); {
	if(cardOne !== cardTwo);
	alert("Sorry, try again.");
}