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
    document.querySelector('#timey').style.display = 'flex';
    document.querySelector('.modal-top').style.display = 'none';
    document.querySelector('.modal-ready').style.display = 'none';
    
    let sec = 3;

    const timer = () => {
        sec = sec - 1;
        if (sec < 3) {
            timey.innerHTML = sec;
        }
        if (sec < 1) {
            window.clearInterval(count);
            document.getElementById('timey').style.display = 'none';
            typeStart();
        }
    }

    count = setInterval(timer, 1000);

    const typeStart = () => {

        let punch1 = {
            // top: 1,
            left: 300
        }

        let positionLeft;

        // let pOneScore = 0;
        // let pTwoScore = 0;
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
                    // printTwo.innerHTML = pTwoScore++;
                    imageChange.src = '/images/saitama-win.png'
                    printTwo.innerHTML = "Night night!";
                    gameOver = true;
                    appearPopUp();
                    winName('PLAYER 2');
                } else if (positionLeft === '550px') {
                    incrementScore();
                    console.log("player1WIN");
                    // printOne.innerHTML = pOneScore++;
                    imageChange.src = '/images/goku-win-111.png'
                    printOne.innerHTML = "I win. LAWL."
                    gameOver = true;
                    appearPopUp();
                    winName('PLAYER 1');
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


        const mapChangeMain = () => {
            document.querySelector('.main').addEventListener('click', function () {
                document.querySelector('.map-1').src = '/images/bg2.jpg';
            })
        }
        mapChangeMain();

        const mapChangeOne = () => {
            document.querySelector('.x').addEventListener('click', function () {
                document.querySelector('.map-1').src = '/images/bg95.gif';
            })
        }
        mapChangeOne();

        const mapChangeTwo = () => {
            document.querySelector('.y').addEventListener('click', function () {
                document.querySelector('.map-1').src = '/images/bg101.jpg';
            })
        }
        mapChangeTwo();

        const mapChangeThree = () => {
            document.querySelector('.z').addEventListener('click', function () {
                document.querySelector('.map-1').src = '/images/bg97.gif';
            })
        }
        mapChangeThree();
    }
    typeStart();
});