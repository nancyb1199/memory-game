 /* var sec = -1;
function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function () {
    $("#seconds").html(pad(++sec % 60));
    $("#minutes").html(pad(parseInt(sec / 60, 10) % 60));
    $("#hours").html(pad(parseInt(sec / 3600, 10)));
}, 1000);
*/

/* let mode = "easy";
for (let i = 0; i<12; i++){
  let card = `
  <div id=card[i]></div>

  `
} */


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
  <h2>${matches[i]}</h2>
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
      firstFlipID = thisCard.getElementsByTagName('h2')[0];
      console.log(firstFlipID);
      console.log(twoFlipped);
    }
    else {
      secondFlip = event.target.id;
      let thisCard = document.getElementById(secondFlip);
      secondFlipID = thisCard.getElementsByTagName('h2')[0];
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
    // && (firstFlipID == secondFlipID)) {
      console.log("twoFtrue");
      if (JSON.stringify(firstFlipID) == JSON.stringify(secondFlipID)){
        console.log("match");
        activeCount++;
      }

      else {
        console.log("no match");

        card1 = document.getElementById(firstFlip);
        card2 = document.getElementById(secondFlip);
        card1.className = "hidden";
        card2.className = "hidden";
        twoFlipped = false;
      }
  }
} /* myCallBack */
