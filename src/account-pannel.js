const accBtn = document.querySelector(".account-circle");
const  float = document.querySelector(".account-floating-bar");
const drkBtn = document.querySelector(".dark-button")
const drkTxt = document.querySelector(".dark-mode-text")
const drkimg = document.querySelector(".dark-mode-image")

accBtn.addEventListener("click", () => {
  float.classList.toggle("hidden");
});

drkBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if(document.documentElement.classList.contains("dark")) {
    drkTxt.textContent = "Light Mode";
    drkimg.src = "./src/images/light_mode.svg"
  }
  else {
    drkTxt.textContent = "Dark Mode";
    drkimg.src = "./src/images/dark_mode.svg"
  }

})