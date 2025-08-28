export function typeWriter(container, text, speed = 100) {
  const display = document.querySelector(container);

  if (!display) {
    console.error("Typewriter container not found:", containerSelector);
    return;
  }

  let i = 0;
  display.textContent = "";

  const timer = setInterval(() => {
    if (i < text.length) {
      display.textContent += text.charAt(i);
      i++
    } else {
      clearInterval(timer);
    }
  }, speed)
}
