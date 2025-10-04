const cursorAnim = document.querySelector(".cursor");

// position of the div to the cursor
const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorAnim.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

cursorAnim.addEventListener("onclick", () => {
  cursorAnim.style.scale = "2";
});

window.addEventListener("mousemove", positionElement);
