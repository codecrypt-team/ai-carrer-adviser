const accBtn = document.querySelector(".account-circle");
const  float = document.querySelector(".account-floating-bar");

accBtn.addEventListener("click", () => {
 float.classList.toggle("hidden");
});