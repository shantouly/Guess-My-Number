'use strict';

// 猜数字：如果不相等，则变换score的分数，如果相等，则提示游戏结束
// MaxScore -- 20;
let Score = 20;
let hightScore = 0;
let scretNumber = Math.trunc(Math.random() * 20 + 1);

// Refactory the message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When player win!
  } else if (guess == scretNumber) {
    document.querySelector('.number').textContent = scretNumber;
    //document.querySelector('.message').textContent = '😁 Correct number!';
    displayMessage('😁 Correct number!');
    // Change the background-color when player win
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change the number size when player win
    document.querySelector('.number').style.width = '30rem';

    if (Score >= hightScore) {
      hightScore = Score;
      document.querySelector('.highscore').textContent = hightScore;
    }
    // When guess is too high
  } else if (guess !== scretNumber) {
    if (Score > 1) {
      Score--;
      // document.querySelector('.message').textContent =
      //   guess > scretNumber ? '⛔ Too high' : '⛔ Too low';
      displayMessage(guess > scretNumber ? '⛔ Too high' : '⛔ Too low');
      document.querySelector('.score').textContent = Score;
    } else {
      // document.querySelector('.message').textContent = '🤣 You lost the game!';
      displayMessage('🤣 You lost the game!');
      Score = 0;
      document.querySelector('.score').textContent = Score;
    }
  }
  // } else if (guess > scretNumber) {
  //   if (Score > 1) {
  //     Score--;
  //     document.querySelector('.message').textContent = '⛔ Too high';
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤣 You lost the game!';
  //     Score = 0;
  //     document.querySelector('.score').textContent = Score;
  //   }

  //   // When guess is too low
  // } else if (guess < scretNumber) {
  //   if (Score > 1) {
  //     Score--;
  //     document.querySelector('.message').textContent = '⛔ Too low';
  //     document.querySelector('.score').textContent = Score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤣 You lost the game!';
  //     Score = 0;
  //     document.querySelector('.score').textContent = Score;
  //   }
  // }
});

// Implementing again button
document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  scretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Refactoring Code!!!  Very improtant
