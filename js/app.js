$(function(){

console.log('card game files attached');
}); // onload ends


                              // ================
                              // Variables
                              // ================

                              // player
                              // -----------
var player1CardsPlayed = [];  //array of p1 cards played in the game
var player2CardsPlayed = [];  //array of p2 cards played in the game
var carPoints = [];           //array of all cards for play
var player1Points = 0;
var player2Points = 0;
var player1rdsWon = 0;
var player2rdsWon = 0;
var deckCardsremaning  = 0;
var rdsPlayed = 0;



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
  alert('Would you like to play a game of BigBank?', 'Y,N');
  startRd();
};
//---------------------
// startRd
// is a function to turn over the cards on click to reveal the card number
//---------------------
var startRd   = function() {      // checks to see if rds played < 2

  console.log('Its the start of the round');
};

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
