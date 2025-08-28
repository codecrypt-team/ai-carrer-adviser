import { typeWriter } from '../utils/typewriter.js';
document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll(".animated");

  animated.forEach((el, index) => {
    setTimeout(() => {
       el.classList.remove("opacity-0", "translate-y-5")
    }, index * 200)
  });
  const myText = "Welcome back, Ninja Hattori👋"
  typeWriter(".welcome-text-container", myText, 50);
});