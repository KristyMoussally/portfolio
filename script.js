/*-------------------------------------------------------------------------------------

 # CURSOR
 
 -------------------------------------------------------------------------------------*/

const cursorAnim = document.querySelector(".cursor");

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".cursor", "x", { duration: 0.6, ease: "power1" }),
  yTo = gsap.quickTo(".cursor", "y", { duration: 0.6, ease: "power1" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

/*-------------------------------------------------------------------------------------

 # NOM PORTFOLIO
 
 -------------------------------------------------------------------------------------*/

const titleScreenFirstName = document.querySelector(".prenom");

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

const debutAnim = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    start: "top top",
    end: "bottom top",
    trigger: "titleScreenFirstName",
  },
});

/*-------------------------------------------------------------------------------------

 # CARROUSSEL PROJETS
 
 -------------------------------------------------------------------------------------*/

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
});
