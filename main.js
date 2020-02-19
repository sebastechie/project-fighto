// let puck = document.querySelectorAll('.first div');

// let leftDistance;


// const puck = document.getElementById("griff");
// console.log("puck");

// puck.addEventListener("keydown", event => {
//     if (event.keyCode === 32) {

//     }
// } )

// .addEventListener("keydown", event => {
//     if (leftDistance === 20 || leftDistance === 60) {
//         endGame();
//     } else {
//         handleKeyPress(event.keyCode);
//     }
//     console.log();
// });

// const handleKeyPress = keyCode => {
//     if (keyCode === 32) {
//         moveTo(--leftDistance);
//     } else if (keyCode === 13) {
//         moveTo(++leftDistance);
//         console.log();
//     }
// };

// const moveTo = (distance) => puck.style.left = distance + "vw";










// ===============================================================
// ==============================================================


// window.onload = () => {

// let leftDistance;
// const puck = document.querySelectorAll('.first div');

// document.addEventListener("keyup", event => {
//     if (leftDistance === 20 || leftDistance === 60) {
//         endGame();
//     } else {
//         handleKeyPress(event.keyCode);
//     }
// });

//     const handleKeyPress = keyCode => {
//         if (keyCode === 32) {
//             moveTo(-leftDistance);
//         } else if (keyCode === 13) {
//             moveTo(+leftDistance);
//         }
//     };

//     const moveTo = (distance) => puck.style.left = distance + "vw";

// }

// ===============================================================
// ==============================================================

// let griff = {
//     top: 100,
//     left: 300
// }


// document.onkeydown = function(e) {
//     console.log(e.keyCode);


//     if(e.keyCode === 32){
//         console.log("LEFT");
//         griff.left = griff.left - 15;
//         moveHero();
//     }
//     else if (e.keyCode === 13){
//         console.log("RIGHT");
//         griff.left = griff.left + 15;
//         moveHero();
//     }

//     function moveHero() {
//         document.getElementById('griff').style.left = griff.left + "px";
//     }
// }

// ===============================================================
// ==============================================================

let punch1 = {
    top: 100,
    left: 260
}

document.onkeydown = function (e) {
    console.log(e.keyCode);


    if (e.keyCode === 32) {
        console.log("LEFT");
        punch1.left = punch1.left - 15;
        moveHero();
    }
    else if (e.keyCode === 13) {
        console.log("RIGHT");
        punch1.left = punch1.left + 15;
        moveHero();
    }

    function moveHero() {
        document.getElementById('punch1').style.left = punch1.left + "px";

    }
}

let imgTrack = 'f';

const change = () => {
    let imageChange = document.getElementById('fb');
    // imageChange.src = '/images/ig-icon.png'
    if (imgTrack === 'f') {
        imageChange.src = '/images/poser1-edit.png';
        imgTrack = 'ig'
    } else {
        imageChange.src = '/images/poser2.png'
        imgTrack = 'f';
    }
}

// let punch2 = {
//     top: 100,
//     left: 260
// }

// document.onkeydown = function(e) {
//     console.log(e.keyCode);


//     if(e.keyCode === 32){
//         console.log("LEFT");
//         punch2.left = punch2.left - 15;
//         moveHero();
//     }
//     else if (e.keyCode === 13){
//         console.log("RIGHT");
//         punch2.left = punch2.left + 15;
//         moveHero();
//     }

//     function moveHero() {
//         document.getElementById('punch2').style.left = punch2.left + "px";

//     }
// }






// ===============================================================
// ==============================================================

// PSEUDO CODE

// 1. assign keydown event to left and right moves to space and enter keys 
    //  1.1 make div change between punch first and second for each key press
// 2. make left and right move by about 10px each press
// 3. declare winner once certain amount of moves have been achieved


