/*-------------------------------------------------------------------------------------

 # MENU BURGER
 
 -------------------------------------------------------------------------------------*/

const btnBurger = document.querySelector(".burger");

btnBurger.addEventListener("click", () => {
  btnBurger.classList.toggle("x");
});

// Va aux pages quand selectionné
function pageProjet() {
  switch (document.getElementById("myProg").value) {
    case "below":
      window.location.href = "./below.html";
      break;

    case "paysage_sonore":
      window.location.href = "./paysage_sonore.html";
      break;

    case "resto":
      window.location.href = "./resto.html";
      break;

    case "banal":
      window.location.href = "./banal.html";
      break;

    case "eco6teme":
      window.location.href = "./eco6teme.html";
      break;

    default:
      window.location.href = "#";
      break;
  }
}

/*-------------------------------------------------------------------------------------

 # HÉRO PORTFOLIO
 
 -------------------------------------------------------------------------------------*/

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".prenom",
  { y: "100vh", opacity: "0%" },
  { y: "35vh", opacity: "100%", duration: 0.5 },
  0.5
);
gsap.fromTo(
  ".nom",
  { y: "100vh", opacity: "0%" },
  { y: "60vh", opacity: "100%", duration: 0.5 },
  "<0.5"
);

gsap.fromTo(
  ".arrow",
  { y: "100vh", opacity: "0%" },
  { y: 0, opacity: "100%", duration: 2 }
);

const titleAnimScreen = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: ".hero",
  },
});
titleAnimScreen.fromTo(
  ".hero-img",
  { backgroundPosition: "0% 0%", ease: "power1.inOut", duration: 2 },
  { backgroundPosition: "50% 100%", ease: "power1.inOut" },
  0
);

titleAnimScreen.fromTo(".prenom", { y: "35vh" }, { y: "-100vh" }, 0);
titleAnimScreen.fromTo(".nom", { y: "60vh" }, { y: "-20vh" }, 0.02);
titleAnimScreen.fromTo(".arrow", { y: 0 }, { y: "-100vh" }, "<0");

/*-------------------------------------------------------------------------------------

 # CARROUSSEL PROJETS
 
 -------------------------------------------------------------------------------------*/

const myProjects = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: ".projects",
    toggleActions: "play",
    onEnter: () => animProg.play(),
  },
});

const animProg = gsap.timeline({
  paused: true,
});
animProg
  .fromTo("#projet", { y: 500, opacity: "0%" }, { y: 0, opacity: "100%" }, 0)
  .fromTo(".swiper", { x: 500, opacity: "0%" }, { x: 0, opacity: "100%" }, ">0")
  .fromTo(".carroussel", { x: 500 }, { x: 0, duration: 2 }, ">0");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*-------------------------------------------------------------------------------------

 # À PROPOS
 
 -------------------------------------------------------------------------------------*/

const aboutMe = gsap.timeline({
  scrollTrigger: {
    pin: 0,
    pinSpacing: 0,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: ".about",
    toggleActions: "play",
    onEnter: () => animAbout.play(),
  },
});

const animAbout = gsap.timeline({
  paused: true,
});
animAbout
  .fromTo("#titleMe", { y: -50, opacity: "0%" }, { y: 0, opacity: "100%" })
  .fromTo(
    ".about-me",
    { y: -50, opacity: "0%" },
    { y: 0, opacity: "100%" },
    "<0.2"
  )
  .fromTo(
    "#learnMore",
    { y: -50, opacity: "0%" },
    { y: 0, opacity: "100%" },
    "<0.2"
  )
  .fromTo(
    "#s1",
    { y: -50, opacity: "0%", ease: "power2" },
    { y: 0, opacity: "100%" },
    "<0.2"
  )
  .fromTo(
    "#s2",
    { y: -50, opacity: "0%", ease: "power2" },
    { y: 0, opacity: "100%" },
    "<0.2"
  )
  .fromTo(
    "#s3",
    { y: -50, opacity: "0%", ease: "power2" },
    { y: 0, opacity: "100%" },
    "<0.2"
  )
  .fromTo(
    ".portrait",
    { x: 500, backgroundPosition: "0% 100%", opacity: "0%" },
    { x: 0, backgroundPosition: "50% 100%", opacity: "100%" },
    1
  );
