const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * 200) - 100;
  const randomY = Math.floor(Math.random() * 100) - 50;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yesBtn.addEventListener("click", () => {
  alert("i knew 😁💙");
});
