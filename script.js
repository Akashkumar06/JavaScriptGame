var scores,roundScore,activePlayer,gamePlaying;

init();
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){


        var dice=Math.floor(Math.random()*6)+1;
        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src='imges/dice-'+dice+'.png';
        if(dice!==1){
            roundScore+=dice;
            document.getElementById('current--'+activePlayer).textContent=roundScore;


        }else{
            nextPlayer();
        }

    }
});
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){

        scores[activePlayer]+=roundScore;
document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];
//Chek the player who won the game

if(scores[activePlayer]>=30){
    document.querySelector('#name--'+activePlayer).textContent='Winner';
    document.querySelector('.dice').style.display='none';
    //document.querySelector('.player--'+activePlayer).classList.add('player--active');
    document.querySelector('.player--'+activePlayer).classList.add('player--winner');

    //document.querySelector('.player--'+activePlayer).classList.remove('player--active');
    gamePlaying=false;
}
else{
    nextPlayer();
}
}
});
function nextPlayer(){
activePlayer===0? activePlayer = 1: activePlayer=0;
roundScore=0;

document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';
document.querySelector('.player--0').classList.toggle('player--active');
document.querySelector('.player--1').classList.toggle('player--active');
document.querySelector('.dice').style.display='none';



}
document.querySelector('.btn--new').addEventListener('click',init);
function init(){


    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;

    document.querySelector('.dice').style.display='none';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.getElementById('name--0').textContent='Player-1';
    document.getElementById('name--1').textContent='Player-2';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.add('player--active');


}













// // 'Advanced Java strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `imges/dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 10) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.name--${activePlayer}`)
        
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
