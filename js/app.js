$(function(){

  var $p1card1 = $('#p1card1');
  var $p1card2 = $('#p1card2');
  var $p1card3 = $('#p1card3');
  var $p2card1 = $('#p2card1');
  var $p2card2 = $('#p2card2');
  var $p2card3 = $('#p2card3');
  var $card = $('.card');
  var $cardP2 = $('.cardP2');
  var toggle = true;

  // console.log("Trying to get the Div",$('#p1card1'));
  $card.on('click',p1cardTurn);
  $cardP2.on('click',p2cardTurn);

  gameStart();

}); // onload ends


// ================
// Variables
// ================

var deckCards =                       //array of all cards to be played
[{name: "Bulbasaur", damage:60},{name: "Caterpie", damage:40},
{name: "Charmander", damage:60},{name: "Clefairy", damage:50},
{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},
{name: "Meowth", damage:60},{name: "NidoranF", damage:60},
{name: "NidoranM", damage:50},{name: "Oddish", damage:40},
{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},
{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},
{name: "Rattata", damage:30}, {name: "Squirtle", damage:60},
{name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];

var player1Cards = [];        //array of p1 cards
var player2Cards = [];         //array of p2 cards
var player1CardsPlayed = [];  //array of p1 cards played in the game
var player2CardsPlayed = [];  //array of p2 cards played in the game
// var cardPoints = [];           //array of all cards for play
var player1Points = 0;
var player2Points = 0;
var player1rdsWon = 0;
var player2rdsWon = 0;
var deckCardsremaning  = deckCards.length;
var rdsPlayed = 0;

// var $card = $('.card');



// functions
// -------------
//---------------------
var gameWinner = function () {        // function to determine the gameWinner
  if (player1rdsWon > player2rdsWon) {
    alert('Player 1 Wins!!');
  } else if (player1rdsWon < player2rdsWon) {
    alert('Player 2 Wins!!');
  } else if (player1rdsWon === player2rdsWon) {
    alert('The game is a draw!')
  } gameStart()
};




//---------------------
//  gameStart
// is a function that asks the players if they'd like to play a game of BigBank if yes the board listens for player 1 to click a card (1||2||3) onclick the rd start function.
//---------------------

//---------------------
var gameStart = function() {
  // var input = prompt('Would you like to play a game of BigBank?', 'Y,N');
  //   if (input = 'Y') {
  shuffle(deckCards);
  dealCards();
  //  }

};
//---------------------
// Deal cards
// places cards into player card arrays
// I am trying to get 3 cards assigned from the deckCards array to player1Cards
// then give player1Cards and player2Cards 3 cards and decrement deckCards by 6
// assign items from deckCards to the three cards given to players
//---------------------
var dealCards = function(){

  for (var i = 0; i < 3; i++) {

    // deckCardsremaning --;

    var player1PopCard = deckCards.pop();
    player1Cards.push(player1PopCard)
    // console.log(player1Cards[i].name);

    var player2PopCard = deckCards.pop();
    player2Cards.push(player2PopCard);

  }
  // var cardsRemaining = $('.score').append(deckCards.length);
  // $('#output').append(cardsRemaining);
  // console.log(deckCards.length);
  // console.log("deckcards" , deckCards);
  // // console.log("player1Cards" , player1Cards);
  // console.log("player2Cards" , player2Cards);
  // console.log("Trying to get the Div",$('#p1card1'));
  // $('#p1card1').css('background-color', 'red').text(player1Cards.name);

};
//---------------------
// shuffle function from stack Overflow
//---------------------
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

//---------------------
// startRd
// is a function to turn over the cards on click to reveal the card number
// create a listner for the cards
var toggle = true;
var lastClickedID = 'player2';
var player1Count = -1;
var player2Count = -1;

var canIClick = function(id){

  if (lastClickedID === id) {
    return false;

  }else {
    lastClickedID = id;
    return true;
  }
};

var p1cardTurn   = function() {      //add this to control which card is clicked

  var playerID = 'player1';

  if (canIClick(playerID)) {
    player1Count ++

    if (player1Count === 0) {

      $('#p1card1').text(player1Cards[0].name + " " + player1Cards[0].damage);
      p1Damage = player1Cards[0].damage;
      console.log(p1Damage);
      checkRdScore();                 // Sees if = # of cards and checks for score

    }
    else if (player1Count === 1) {
      $('#p1card2').text(player1Cards[1].name + " " + player1Cards[1].damage);
      toggle = false;
      checkRdScore();

    }else if (player1Count === 2) {
      $('#p1card3').text(player1Cards[2].name + " " + player1Cards[2].damage);
      checkRdScore();
    }


  }

};

var p2cardTurn   = function() {
  var playerID = 'player2';

  if (canIClick(playerID)) {
    player2Count ++

    if (player2Count === 0) {

      $('#p2card1').text(player2Cards[0].name + " " + player2Cards[0].damage);
      p2Damage = player2Cards[0].damage;
      console.log(p2Damage);
      checkRdScore();

    }else if (player2Count === 1) {

      $('#p2card2').text(player2Cards[1].name + " " + player2Cards[1].damage);
      checkRdScore();

    }else if (player2Count === 2) {

      $('#p2card3').text(player2Cards[2].name + " " + player2Cards[2].damage);
      checkRdScore();
    }

  }
};
// p2cardTurn();


// console.log(player1Cards);
// console.log(player1Cards[1]);
// console.log(player1Cards[2]);
//
//
// $('#p1card2').append(player1Cards[1]);
// $('#p1card3').append(player1Cards[2]);








//---------------------
var checkRdScore = function (){
  if (player1Count === player2Count) {
    if (player1Cards[player1Count].damage > player2Cards[player2Count].damage) {
      player1Points ++

    } else if (player1Cards[player1Count].damage <        player2Cards[player2Count].damage){
      player2Points++
    }

    console.log("These are Player 1 points " + player1Points);
    console.log("These are Player 2 Points " + player2Points);

  };             // checks if p1 pts > p2 pts
  //
  console.log(player1Cards.damage);
};
//---------------------
//---------------------
// var endOfRound = function ()   {}; // check if each player has touched 3 cards
// //---------------------
// //---------------------
// // var cardTouch = function()     {} // clicks card and turns it over
// //---------------------
// //---------------------
// var rdsWonTotal =  function () {}; // var player1rdsWon - var player2rdsWon
// //---------------------
// //---------------------
// var player1Points = function() {}; // player1Points +=
// //---------------------
// //---------------------
// var player2Points = function() {}; // player2Points +=
// //---------------------



// function call
// -----------------
