const player1Button = document.querySelector('#player1Button');
const player2Button = document.querySelector('#player2Button');
const player1Display = document.querySelector('#player1Display');
const player2Display = document.querySelector('#player2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');


let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;


function changeScore(player, score) {
    if (player.getAttribute('id').indexOf('1') === -1) {
        player2Score = score;
    } else {
        player1Score = score;
    }
    player.textContent = score;
}

function returnToZero() {
    changeScore(player1Display, 0);
    changeScore(player2Display, 0);
    isGameOver = false;
    player1Display.classList.remove('has-text-success', 'has-text-danger');
    player2Display.classList.remove('has-text-success', 'has-text-danger');
    player1Button.disabled = false;
    player2Button.disabled = false;
}



player1Button.addEventListener("click", function () {

    if (!isGameOver) {
        // player1Score += 1;
        changeScore(player1Display, player1Score + 1)
        if (player1Score === winningScore) {
            player1Display.classList.add('has-text-success');
            player2Display.classList.add('has-text-danger');
            isGameOver = true;
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        //player1Display.textContent = player1Score;
    }
})
player2Button.addEventListener("click", function () {

    if (!isGameOver) {
        // player2Score += 1;
        changeScore(player2Display, player2Score + 1)
        if (player2Score === winningScore) {
            player2Display.classList.add('has-text-success');
            player1Display.classList.add('has-text-danger');
            isGameOver = true;
            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        //player2Display.textContent = player2Score;
    }
})

resetButton.addEventListener('click', function () {
    returnToZero();
    // changeScore(player1Display, 0);
    // changeScore(player2Display, 0);
    // isGameOver = false;
    // player1Display.classList.remove('winner', 'loser');
    // player2Display.classList.remove('winner', 'loser');
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    returnToZero();
    // console.log('Winning Score changed');
    // changeScore(player1Display, 0);
    // changeScore(player2Display, 0);
    // isGameOver = false;
    // player1Display.classList.remove('winner', 'loser');
    // player2Display.classList.remove('winner', 'loser');
})

