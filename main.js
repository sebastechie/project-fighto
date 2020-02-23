window.onload = () => {

    let pressReady = false;

    const gameStart = () => {

        if (pressReady === false) {
            timer();
            return true;
        }
        gameStart();
    }
}

const timer = () => {
    setTimeout(typeStart, 3000);
}

document.querySelector('.starto').addEventListener('click', function () {
    document.querySelector('.modal-top').style.display = 'none';
    document.querySelector('.modal-ready').style.display = 'none';

    if (pressReady === true) {
        return;
    }
    
    let sec = 3;

    const timer = () => {
        sec = sec - 1;
        if (sec < 3) {
            timey.innerHTML = sec;
            pressReady = true;
        }
        if (sec < 1) {
            window.clearInterval(count);
            document.getElementById('timey').style.display = 'none';
            pressReady = false;
        }
    }

    count = setInterval(timer, 1000);

    const typeStart = () => {

        let punch1 = {
            // top: 1,
            left: 300
        }

        let positionLeft;

        let pOneScore = 0;
        let pTwoScore = 0;
        const printOne = document.getElementById('print1');
        const printTwo = document.getElementById('print2');


        let gameOver = false;

        document.onkeyup = function (e) {
            console.log(e.keyCode);

            if (gameOver === true) {
                return;
            };

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

            if (e.keyCode == 13) {
                // console.log("LEFT");
                punch1.left = punch1.left -= 50;
                if (positionLeft <= 2) {
                    positionLeft += 50;
                }
                imageChange.src = '/images/saitama-kick.png';
                playerMove();
            }
            else if (e.keyCode == 32) {
                // console.log("RIGHT");
                punch1.left = punch1.left += 50;
                if (positionLeft == 600) {
                    positionLeft -= 50;
                }
                imageChange.src = '/images/goku-kick.png'
                playerMove();
            } else if (e.keyCode == 65) {
                punch1.left = punch1.left += 20;
                if (positionLeft == 600) {
                    positionLeft -= 50;
                }
                imageChange.src = '/images/fusionn.gif'
                playerMove();
            }

            const winCondition = () => {
                if (positionLeft === '50px') {
                    incrementScore();
                    console.log("player2WIN");
                    printTwo.innerHTML = pTwoScore++;
                    imageChange.src = '/images/saitama-win.png'
                    printTwo.innerHTML = "K, bye.";
                    gameOver = true;
                    appearPopUp();
                    winName('Player 1');
                } else if (positionLeft === '550px') {
                    incrementScore();
                    console.log("player1WIN");
                    printOne.innerHTML = pOneScore++;
                    imageChange.src = '/images/goku-win-111.png'
                    printOne.innerHTML = "I win. LAWL.";
                    gameOver = true;
                    appearPopUp();
                    winName('Player 2');
                } else if (e.keyCode === 65) {
                    gameOver = true;
                    appearPopUp();
                };
            }
            winCondition();
        }

        const incrementScore = () => {
            if (positionLeft === '0px') {
                pOneScore++;
                // scoreTrack('print1', pOneScore)
            } else if (positionLeft === '600px') {
                pTwoScore++;
                // scoreTrack('print2', pOneScore)
            }
        }

        document.getElementById('reset')
            .addEventListener('click', () => {
                window.location.reload(true);
            });

        const appearPopUp = () => {
            setTimeout(popUp, 3000);
        }


        const popUp = () => {
            document.querySelector('.bg-modal').style.display = 'flex';
        };

        document.querySelector('.close').addEventListener('click', function () {
            document.querySelector('.bg-modal').style.display = 'none';
        });

        const winName = (name) => {
            document.querySelector('.win-head').innerHTML = `${name}` + " WINS!";
        };
    }

    typeStart();

});
    // ===============================================================
    // ==============================================================

    // const popUp = () => {
    //     document.getElementById('button').addEventListener('click', function () {
    //         document.querySelector('.bg-modal').style.display = 'flex';
    //     });

    //     document.querySelector('.close').addEventListener('click', function () {
    //         document.querySelector('.bg-modal').style.display = 'none';
    //     });
    // };
    // ===============================================================
    // ==============================================================


    // const endGame = () => {
    //     if (incrementScore === 3) {
    //         alert("CHAMPION!")
    //     } else {
    //         return null;
    //     }
    // }

    // endGame();

    // const resetGame = () => {
    //     // imageChange.style.left = positionLeft + "px";
    // }

    // resetGame();

    // document.getElementById("reset").onclick = function () {
    //     document.getElementById("numbers").innerHTML = "";
    // };

    // const displayScore = (scores) => {
    //     console.log(scores);
    //     myElem = document.getElementById('print1');
    //     myElem2 = document.getElementById('print2');
    //     myElem.innerText8 = scores.player1;
    //     myElem2.innerText = scores.player2;
    //     return true;




    //MAKE ENDGAME FUNCTION

    //MAKE RESET FUNCTION

    // ===============================================================
    // ==============================================================

    // PSEUDO CODE

    // 1. assign keydown event to left and right moves to space and enter keys 
    //  1.1 make div change between punch first and second for each key press
    // 2. make left and right move by about 10px each press
    // 3. declare winner once certain amount of moves have been achieved

