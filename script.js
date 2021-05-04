const colours = [
  "green",
  "red",
  "blue",
  "gray",
  "yellow",
  "gold",
  "pink",
  "black",
  "purple",
  "orange",
  "lightblue",
  "darkblue",
  "lightgreen",
  "darkgreen",
  "darkred",
  "goldenrod",
  "beige",
  "cyan",
  "teal",
  "lightgray",
  "darkgray",
  "indigo",
  "rgba(133,122,200)",
  "#f15025",
];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
  // Get random number between 0 - 3 colours[3]
  // getRandomNumber function is called
  const randomNumber = getRandomNumber();

  // Used to change the background colour of page based on value obtained from colours array
  document.body.style.backgroundColor = colours[randomNumber];
  // Obtains value from array and then displays it on the page in Background Color span HTML
  colour.textContent = colours[randomNumber];
});

// Used to go into colours array and generate a value between 0 - whatever number length for array above. This is used as index for position of value inside the array.
function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}
