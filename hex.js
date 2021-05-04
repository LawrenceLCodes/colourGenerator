const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// # Hex codes work by generating 6 values that are a mix of numbers and letters. Example: #f15025
// We will setup a loop that will generate the hex code on the fly. Because a hexcode has 6 values the loop will run 6 times and stop once a full hex code is generated.

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
  // Additional string value included before generated hexcode value. Not required for functionality; however, helpful from a user perspective for understanding what the value is!
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    // += MUST be used for iterating and generating additional values  or strings that will consist of the full hex code. otherwise you are just reassigning hexColour to hex[0] and the code will stop at one value.
    // Calling getRandomNumber function to generate random hex code values.
    hexColour += hex[getRandomNumber()];
  }

  // Once hex code has been generated displays finished value on the page within Background Colour span HTML
  colour.textContent = hexColour;
  // Changes background colour based on the hex code generated
  document.body.style.backgroundColor = hexColour;
});

// Used to generate random values that will be based on the hex array above. This is needed for the for loop in the event listener above! As you can tell this function is being called inside the for loop.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
