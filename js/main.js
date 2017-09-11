var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  	} else {
      alert("Sorry, try again.");
  }
};

var flipCard = function() {
    var cardID = this.getAttribute('data-id');
    var card = cards[cardID];
    console.log("User flipped a " + card.rank);
    console.log(card.cardImage);
    console.log(card.suit);
    this.setAttribute('src', card.cardImage);
    cardsInPlay.push(card.rank);
    if (cardsInPlay.length > 1) {
    	checkForMatch();
    } 
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src',"images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
};

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
  field_type = elements[i].type.toLowerCase();
  
  switch(field_type) {
  
    case "text": 
    case "password": 
    case "textarea":
          case "hidden":   
      
      elements[i].value = ""; 
      break;
        
    case "radio":
    case "checkbox":
        if (elements[i].checked) {
          elements[i].checked = false; 
      }
      break;

    case "select-one":
    case "select-multi":
                elements[i].selectedIndex = -1;
      break;

    default: 
      break;
  }
    }
}

createBoard();


