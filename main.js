
let punch1 = {
    // top: 1,
    left: 255
}

document.onkeyup = function (e) {
    console.log(e.keyCode);

    let imageChange = document.getElementById('ready');

    // const moveTurns = () => {
    //     // ENTER MOVE TURNS
    //     if (playerCounter % 2 === 0) {
    //         imageChange.src = '/images/poser1-edit.png';
    //         playerCounter++;
    //     } else if (playerCounter % 2 === 1) {
    //         imageChange.src = '/images/poser2.png';
    //         playerCounter++;
    //     }
    // }

    const playerMove = () => {

        document.getElementById('punch1').style.left = punch1.left + "px";

        const positionLeft = document.getElementById('punch1').style.left;
        const positionRight = document.getElementById('punch1').style.right;
        const windowPosition = document.querySelector(".mid2").style.left;
        console.log(positionLeft);
        console.log(positionRight);
        console.log(windowPosition);
    }

    if (e.keyCode === 13) {
        // console.log("LEFT");
        punch1.left = punch1.left - 32;
        // imageChange.src = '/images/poser1-edit.png';

        playerMove();

    }
    else if (e.keyCode === 32) {
        // console.log("RIGHT");
        punch1.left = punch1.left + 32;
        // imageChange.src = '/images/poser2.png'
        playerMove();
    }

    const winCondition = () => {

        // let pMove = document.getElementsByClassName('punching');

        if (imageChange === 127) {
            alert("PLAYER 1 WINS");
            // return true;

        } else if (imageChange === 479) {
            alert("PLAYER 2")
            // return false;
        };
    }

    winCondition();
}

    // let winner1 = {
    //     // top: 100,
    //     left: 506
    // }
    // let winner11 = {
    //     // top: 100,
    //     left: 339
    // }
    // let winner2 = {
    //     // top: 100,
    //     left: 5        
    // }
    // let winner22 = {
    //     // top: 100,
    //     left: 173    
    // }

    // if ((pMove > winner11) && (pMove <=winner1 )) {
    //     console.log("player 1 wins")
    //     // return true;
    // } else if ((pMove  <= winner22) && (pMove >= winner2)) {
    //     console.log("player 2 wins")
    // } else {
    //     console.log("no one wins")
    // };



// ===============================================================
// =================== WIN CONDITION     ========================





// ===============================================================
// ==============================================================

// PSEUDO CODE

// 1. assign keydown event to left and right moves to space and enter keys 
    //  1.1 make div change between punch first and second for each key press
// 2. make left and right move by about 10px each press
// 3. declare winner once certain amount of moves have been achieved
