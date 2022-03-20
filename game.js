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
/*level1*/
let answer1 = prompt(
  "leve1: What numbers none of which are 0 equal the same thing when added or multiplied?"
);
if (answer1 === "123" || answer1 === "321" || answer1 === "213") {
  a1 = "correct";
  alert("correct");
}
if (a1 === "correct") {
  /*level2*/
  let answer2 = prompt("level2: Which is bigger?");
  if (answer2 === "Which") {
    a2 = "correct";
    alert("correct");
    if (a2 === "correct") {
      /*level3*/
      let answer3 = prompt("level3: Do not skip this.");
      if (answer3 === "ok" || "Ok") {
        a3 = "correct";
        alert("correct");
        if (a3 === "correct") {
          /*level4*/
          let answer4 = prompt("level4: Pick a number 1-3");
          if (answer4 === "a number 1-3") {
            a4 = "correct";
            alert("correct");
            if (a4 === "correct") {
              /**level5*/
              let answer5 = prompt("Is this this the best game ever?");
              if (answer5 === "yes" || "Yes") {
                a5 = "correct";
                alert("correct");
                if (a5 === "correct") {
                  /**level6 */
                  let answer6 = prompt("");
                  if (answer6 === "") {
                    a6 = "correct";
                    alert("correct");
                    if (a6 === "correct") {
                      /**level7 */
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
