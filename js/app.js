$(function(){
  var $card = $('.card');
  var $Cardturn   = function() {  //add this to control which card is clicked
    $p1card1 = true; // has not been clicked before
    if ($p1card1 === true) {
      p1card1 = Math.floor((Math.random() * 10) + 1);
      console.log(p1card1);        // display card points
      player1Points= p1card1;
      console.log(player1Points);
      //then turn $p1card1 === false so it can't be clicked again
      //stop the card from being able to be clicked again
      // } else if (p1card2 has been clicked) {
      }                               // checks to see if rds played <
    console.log("I've been clicked");
  };
  $card.on('click',$Cardturn);

  var p1card1 = $('#p1card1');$

console.log('card game files attached');
}); // onload ends


// ================
// Variables
// ================

var deckCards =                       //array of all cards to be played
[{name: "Bulbasaur", damage:60},{name: "Caterpie", damage:40},
{name: "Charmander", damage:60},{name: "Clefairy", damage:50},
{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},
{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},
{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},
{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},
{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},
{name: "Rattata", damage:30}, {name: "Squirtle", damage:60},
{name: "Vulpix", damage:50}, {name: "Weedle", damage:40}];

var player1Cards = [{name: "Bulbasaur", damage:60},
                   {name: "Caterpie", damage:40}];        //array of p1 cards
var player2Cards = [{name: "Bulbasaur", damage:60},
                   {name: "Caterpie", damage:40}];         //array of p2 cards
var player1CardsPlayed = [];  //array of p1 cards played in the game
var player2CardsPlayed = [];  //array of p2 cards played in the game
var carPoints = [];           //array of all cards for play
var player1Points = 0;
var player2Points = 0;
var player1rdsWon = 0;
var player2rdsWon = 0;
var deckCardsremaning  = 18;
var rdsPlayed = 0;
var $p1card1 = $('#p1card1');
var $p1card2 = $('#p1card2');
var $p1card3 = $('#p1card3');
var $p2card1 = $('#p2card1');
var $p2card2 = $('#p2card2');
var $p2card3 = $('#p2card3');
// var $card = $('.card');



// functions
// -------------
//---------------------
var gameWinner = function () {}   // function to determine the gameWinner
//---------------------
//  gameStart
 // is a function that asks the players if they'd like to play a game of BigBank if yes the board listens for player 1 to click a card (1||2||3) onclick the rd start function.
//---------------------

//---------------------
var gameStart = function() {
  var input = prompt('Would you like to play a game of BigBank?', 'Y,N');
    if (input = 'Y') {
      dealCards();
    }

};
//---------------------
// Deal cards
// places cards into player card arrays
// I am trying to get 3 cards assigned from the deckCards array to player1Cards
// then give player1Cards and player2Cards 3 cards and decrement deckCards by 6
// assign items from deckCards to the three cards given to players
//---------------------
var dealCards = function(){

  for (var i = 1; i < deckCards.length; i++) {
    if (deckCards.length > 6) {
      player1Cards = deckCards;
      player2Cards = deckCards.name;
      deckCardsremaning-=6;

      console.log("player1 cards" + player1Cards);
      console.log("player2 cards" + player2Cards);
      console.log('deckCardsremaning' + deckCardsremaning);
    }
    else {
      console.log('not enough cards');
  }
  }
};
//---------------------
// startRd
// is a function to turn over the cards on click to reveal the card number
// create a listner for the cards
//---------------------
// var $Cardturn   = function() {             // checks to see if rds played <
//   console.log("I've been clicked");
// };
//   $card.on('click',$Cardturn);

//---------------------
var roundWinner = function ()  {} // checks if p1 pts > p2 pts
                                  // checks if cards have turned 6 times
                                  // increments rd counter
//---------------------
//---------------------
var endOfRound = function ()   {} // check if each player has touched 3 cards
//---------------------
//---------------------
var cardTouch = function()     {} // clicks card and turns it over
//---------------------
//---------------------
var rdsWonTotal =  function () {} // var player1rdsWon - var player2rdsWon
//---------------------
//---------------------
var player1Points = function() {} // player1Points +=
//---------------------
//---------------------
var player2Points = function() {} // player2Points +=
//---------------------



// function call
// -----------------
gameStart();
