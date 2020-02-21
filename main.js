
let punch1 = {
    // top: 1,
    left: 255
}

let positionLeft;

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
        imageChange.src = '/images/poser1-edit.png';
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
            // endGame();
        } else if (positionLeft === '479px') {
            alert("PLAYER 2")
            // endGame();
        };
    }

    winCondition();
}

// ===============================================================
// ==============================================================

// PSEUDO CODE

// 1. assign keydown event to left and right moves to space and enter keys 
    //  1.1 make div change between punch first and second for each key press
// 2. make left and right move by about 10px each press
// 3. declare winner once certain amount of moves have been achieved
