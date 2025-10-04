const cursorAnim = document.querySelector(".cursor");

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "power1" }),
  yTo = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "power1" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// Title Portfolio
let titleAnim = gsap.timeline();
titleAnim
  .fromTo(
    ".prenom",
    { y: 400, x: 250, opacity: "0%", duration: 5 },
    { y: 300, opacity: "100%" },
    1
  )
  .fromTo(
    ".nom",
    { y: 500, x: 250, opacity: "0%", duration: 5 },
    { y: 400, opacity: "100%" },
    "<0.5"
  );
