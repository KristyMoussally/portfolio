const cursorAnim = document.querySelector(".cursor");

// position of the div to the cursor
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursorAnim.style.left = x + "px";
  cursorAnim.style.top = y + "px";
});

cursorAnim.addEventListener("onclick", () => {
  cursorAnim.style.scale = "2";
});
