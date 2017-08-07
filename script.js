
// Thank you stackoverflow dude Yusuf for the timer!
// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}


let matches = ["A","A","B","B","C","C","D","D","E","E","F","F"];
let cardbacks = ["a","b","c","d","e","f","g","h","i","j","k","l"];

/* shuffle array of matches using the
Fisher-Yates shuffle */

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
/* end Fisher-Yates shuffle */

/* Setting up the board */
shuffle (matches);
// console.log(matches);
for (i=0; i<cardbacks.length; i++){
  var y = "card"+cardbacks[i];
  let board = document.getElementById("board");
  // console.log(y);
  let x = `
  <div id = ${y} class="hidden">
  <h2 id = ${matches[i]}>${matches[i]}</h2>
  </div>
  `
  board.innerHTML += x;

}

let twoFlipped = false;
let activeCount = 0;
let firstFlip;
let firstFlipID = "";
let secondFlip;
let secondFlipID = "";
let block1 = document.getElementById( "board" );
block1.addEventListener("click", myCallBack);


function myCallBack() {

  if (firstFlip == null) {

      firstFlip = event.target.id;
      console.log(firstFlip);
      let thisCard = document.getElementById(firstFlip);
      firstFlipID = thisCard.getElementsByTagName('h2')[0].id;
      console.log(firstFlipID);
      console.log(twoFlipped);
    }
    else {
      secondFlip = event.target.id;
      let thisCard = document.getElementById(secondFlip);
      secondFlipID = thisCard.getElementsByTagName('h2')[0].id;
      console.log(secondFlipID);
      console.log(secondFlip);
      twoFlipped = true;
      console.log(twoFlipped);
    }
    event.target.className = "active";
    console.log(twoFlipped);
    console.log(firstFlipID);
    console.log(secondFlipID);
    if (twoFlipped) {
      console.log("two flipped");
    }


    if (twoFlipped) {

    if (firstFlipID == secondFlipID) {

        console.log("match");
        activeCount++;
      }

      else {
        console.log("no match");
        // setTimeout(noMatch(firstFlip,secondFlip), 2000);
        card1 = document.getElementById(firstFlip);
        card2 = document.getElementById(secondFlip);
        card1.className = "hidden";
        card2.className = "hidden";
      }
      twoFlipped = false;
      firstFlip = null;
      firstFlipID = "";
      secondFlip = null;
      secondFlipID = "";
  }
} /* myCallBack */
