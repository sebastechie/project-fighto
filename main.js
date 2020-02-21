
let punch1 = {
    // top: 1,
    left: 255
}

let positionLeft;
let pOneScore = 0;
let pTwoScore = 0;
const printOne = document.getElementById('print1');
const printTwo = document.getElementById('print2');

document.onkeyup = function (e) {
    console.log(e.keyCode);

    let imageChange = document.getElementById('ready');
    const playerMove = () => {

        document.getElementById('punch1').style.left = punch1.left + "px";

        positionLeft = document.getElementById('punch1').style.left;
        const positionRight = document.getElementById('punch1').style.right;
        const windowPosition = document.querySelector(".mid2").style.left;
        console.log(positionLeft);
        console.log(positionRight);
        console.log(windowPosition);
    }

    if (e.keyCode === 13) {
        // console.log("LEFT");
        punch1.left = punch1.left - 32;
        imageChange.src = '/images/poser1.png';
        playerMove();
    }
    else if (e.keyCode === 32) {
        // console.log("RIGHT");
        punch1.left = punch1.left + 32;
        imageChange.src = '/images/poser2.png'
        playerMove();
    }

    const winCondition = () => {
        if (positionLeft === '-1px') {
            alert("PLAYER 1 WINS");
            //insert win message 
            // endGame();
        } else if (positionLeft === '479px') {
            alert("PLAYER 2 WINS")
            //insert win message 
            // endGame();
        };
    }
    winCondition();
}

const incrementScore = () => {
    if (positionLeft === '-1px') {
        pOneScore++;
        // scoreTrack('print1', pOneScore)
    } else if (positionLeft === '479px') {
        pTwoScore++;
        // scoreTrack('print2', pOneScore)
    }

    let scores = {
        player1: pOneScore,
        player2: pTwoScore
    }
    return scores;
}

const displayScore = (scores) => {
    console.log(scores);
    myElem = document.getElementById('print1');
    myElem2 = document.getElementById('print2');
    myElem.innerText8 = scores.player1;
    myElem2.innerText = scores.player2;
    return true;
}

// const scoreTrack = () => {
//     if (positionLeft === '-1px') {
//         printOne.innerText = "A";
//     } else if (positionLeft === '479px') {
//         printTwo.innerText = "B";
//     }
// }


//MAKE ENDGAME FUNCTION

//MAKE RESET FUNCTION

// ===============================================================
// ==============================================================

// PSEUDO CODE

// 1. assign keydown event to left and right moves to space and enter keys 
    //  1.1 make div change between punch first and second for each key press
// 2. make left and right move by about 10px each press
// 3. declare winner once certain amount of moves have been achieved
