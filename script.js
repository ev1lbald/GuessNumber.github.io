'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Input some number'
        
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)'
        document.querySelector('.question').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    } else if(guessingNumber > secretNumber) {

        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Меньше';
            score-= 1;
            document.querySelector(".label-score").textContent = 'Очки:' + score; 
        } else {
            document.querySelector('.guess-message').textContent = 'Game Over';
            document.querySelector(".label-score").textContent = 'Очки:' + '0';
        }

    } else if(guessingNumber < secretNumber) {

        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Больше';
            score-= 1;
            document.querySelector(".label-score").textContent = 'Очки:' + score;
        } else {
            document.querySelector('.guess-message').textContent = 'Game Over';
            document.querySelector(".label-score").textContent = 'Очки:' + '0';
        }


    }

});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('.guess-message').textContent = 'Начни угадывать';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').textContent = '???';
    document.querySelector(".label-score").textContent = 'Очки:' + '20';
    document.querySelector('.number-input').value = ''
    
    score = 20
});


