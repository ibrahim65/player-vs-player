// console.log('Connected!')

// Selection and data declaration
const p1scoreDisplay = document.getElementById('p1score');
const p2scoreDisplay = document.getElementById('p2score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn')
let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

// This function to avoid code reapitation
function winner(oldScore, winingScore){
    if(oldScore === winingScore) {
        if(oldScore === winingScore) {
            p1scoreDisplay.classList.add('winner');
        } else {
            p2scoreDisplay.classList.add('winner');
        }
        gameOver = true; // Alt = gameOver != gameOver
        p1Btn.setAttribute('disabled', 'disabled');
        p2Btn.setAttribute('disabled', 'disabled')
    }
}
function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1scoreDisplay.textContent = 0;
    p2scoreDisplay.textContent = 0;
    p1scoreDisplay.classList.remove('winner');
    p2scoreDisplay.classList.remove('winner');
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled')
}

p1Btn.addEventListener('click', () => { //From Below has to stape
    if(!gameOver) {
            //Data Change
    // p1Score = p1Score + 1 // No. 1 way
    // p1Score += 1 // No. 2 way
    p1Score ++; //Best and very short way
    //Show Changed Data
        winner( p1Score, winingScore);
    }
    p1scoreDisplay.textContent = p1Score;
        // console.log('Clicked player 1');
})

p2Btn.addEventListener('click', () => {
    if(!gameOver){
        p2Score ++
        winner(p2Score, winingScore);
        p2scoreDisplay.textContent = p2Score;
    }; 
    // console.log('Clicked player 2');
})

inputScore.addEventListener('change', () => {
    console.log(typeof inputScore.value);
    winingScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    reset();
})

resetBtn.addEventListener('click' , reset)

