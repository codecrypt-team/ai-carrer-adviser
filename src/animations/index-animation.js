document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll(".animated");

  animated.forEach((el, index) => {
    setTimeout(() => {
       el.classList.remove("opacity-0", "translate-y-5")
    }, index * 200)
  });
});