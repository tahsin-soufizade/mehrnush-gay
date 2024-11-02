// Get buttons
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Store previous position of 'No' button
let previousX = 0;
let previousY = 0;

noBtn.addEventListener("mouseover", () => {
  let randomX, randomY;

  // Loop until we get a position far enough from the previous position
  do {
    randomX = Math.floor(Math.random() * 300) - 150; // Adjust the range as needed
    randomY = Math.floor(Math.random() * 150) - 75; // Adjust the range as needed
  } while (
    Math.abs(randomX - previousX) < 50 &&
    Math.abs(randomY - previousY) < 50
  ); // Minimum distance of 50px

  // Update button position
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Update previous position
  previousX = randomX;
  previousY = randomY;
});

// 'Yes' button functionality
yesBtn.addEventListener("click", () => {
  alert("I Knew 😈");
});
