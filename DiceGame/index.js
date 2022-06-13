let randomNumber1 = Math.floor(Math.random()*5+1);
let randomNumber2 = Math.floor(Math.random()*5+1);

console.log("Player 1: " +randomNumber1);
console.log("Player 2: " + randomNumber2);
 let imgSrc1 =   document.querySelectorAll("img")[0];
 let imgSrc2 =   document.querySelectorAll("img")[1];
let randomDiceImg = "images/dice" +randomNumber1 +".png";
let randomDiceImg2 = "images/dice" + randomNumber2+".png";
// switch(randomNumber1){
//   case 1:
//   imgSrc1.setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     imgSrc1.setAttribute("src", "images/dice2.png");
//   case 3:
//     imgSrc1.setAttribute("src", "images/dice3.png");
//       break;
//   case 4:
//     imgSrc1.setAttribute("src", "images/dice4.png");
//       break;
//   case 5:
//   imgSrc1.setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//   imgSrc1.setAttribute("src", "images/dice6.png");
//     break;
//     }
//
//     switch(randomNumber2){
//       case 1:
//       imgSrc2.setAttribute("src", "images/dice1.png");
//         break;
//       case 2:
//         imgSrc2.setAttribute("src", "images/dice2.png");
//       case 3:
//         imgSrc2.setAttribute("src", "images/dice3.png");
//           break;
//       case 4:
//         imgSrc2.setAttribute("src", "images/dice4.png");
//           break;
//       case 5:
//       imgSrc2.setAttribute("src", "images/dice5.png");
//         break;
//       case 6:
//       imgSrc2.setAttribute("src", "images/dice6.png");
//         break;
//         }

        imgSrc1.setAttribute("src", randomDiceImg);
        imgSrc2.setAttribute("src", randomDiceImg2);
        if(randomNumber1 > randomNumber2){
          document.querySelector("h1").innerHTML = "Player 1 Wins!";
        }
        if( randomNumber2 > randomNumber1){
          document.querySelector("h1").innerHTML = "Player 2 Wins!";
        }
        if(randomNumber1 == randomNumber2){
          document.querySelector("h1").innerHTML = "Draw!";
        }
