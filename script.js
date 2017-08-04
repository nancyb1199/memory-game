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

shuffle (cardbacks);
console.log(cardbacks);
for (i=0; i<cardbacks.length; i++){
  var y = "card"+cardbacks[i];
  console.log(y);
  let x = document.getElementById( y );
  console.log(x);
  x.innerHTML = matches[i];
/*  x.setAttribute ("class", "hidden"); */
}



let block1 = document.getElementById( "carda" );
block1.addEventListener("click", myCallBack);

function myCallBack() {
       block1.style.backgroundColor = "pink";


}
