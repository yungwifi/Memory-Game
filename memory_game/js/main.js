var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = []

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You've found a match!");

	] else {
		console.log("Sorry, try again.");
	}
}
var flipCard = function(cardId){
console.log("User Flipped" + ' ' + cards[cardId]);
cardsInPlay.push(cards[cardId])
}

flipCard(0);
flipCard(2);