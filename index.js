// Grab the count-el Header and store it in a variable called countEl
let countEl = document.getElementById("count-el");

// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  // create a variable that contains both the count and the dash separator
  let countStr = count + " - ";

  //Render the variable in the existing content of the paragraph
  saveEl.textContent += countStr;

  //set count back to zero after saving it.

  countEl.textContent = 0;
  count = 0;
}

console.log("Let's count people on the subway");
