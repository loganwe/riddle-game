/**  Checking vars**/
let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let a7;
let a8;
let a9;
let a10;
let lives = 2;
function check() {
  if (lives <= 0) {
    alert("You lose");
    return true;
  } else {
    return false;
  }
}
function reset_life() {
  let des = Math.floor(Math.random() * 2);
}
/*level1*/
document.getElementById("start").onclick = function () {
  document.write(
    '<link href="style.css" rel="stylesheet" /><a href="level1.html">click me</a>'
  );
};
