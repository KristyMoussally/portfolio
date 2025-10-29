/*-------------------------------------------------------------------------------------

 # MENU BURGER + BAR NAVIGATION
 
 -------------------------------------------------------------------------------------*/

// Va aux pages quand selectionné
function pageProjet() {
  switch (document.getElementById("myProg").value) {
    case "below":
      window.location.href = "./below.html";
      break;

    case "paysage_sonore":
      window.location.href = "./paysage_sonore.html";
      break;

    case "ribs":
      window.location.href = "./ribs.html";
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

const btnBurger = document.querySelector(".burger");
const menuNav = document.querySelector(".nav");

btnBurger.addEventListener("click", () => {
  btnBurger.classList.toggle("x");
  menuNav.classList.toggle("activeBurger");
});

function burgerMenuDisplay() {
  var menuBurger = document.getElementById("list-burger");
  if (menuBurger.style.display === "block") {
    menuBurger.style.display = "none";
  } else {
    menuBurger.style.display = "block";
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
    markers: false,
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

 # À PROPOS
 
 -------------------------------------------------------------------------------------*/

const aboutMe = gsap.timeline({
  scrollTrigger: {
    pin: 0,
    pinSpacing: 0,
    scrub: 1,
    markers: false,
    start: "-100px top",
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
    "<0.2"
  );

/*-------------------------------------------------------------------------------------

 # CARROUSSEL PROJETS
 
 -------------------------------------------------------------------------------------*/

const myProjects = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: false,
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
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
      allowSlideNext: false,
    },
    800: {
      slidesPerView: 2,
      allowSlideNext: false,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*-------------------------------------------------------------------------------------

 # COMPÉTENCES
 
 -------------------------------------------------------------------------------------*/

const myApps = gsap.timeline({
  scrollTrigger: {
    pin: 0,
    pinSpacing: 0,
    scrub: 1,
    markers: false,
    start: "-100px top",
    end: "bottom top",
    trigger: ".competences",
    toggleActions: "play",
    onEnter: () => animApp.play(),
  },
});

const animApp = gsap.timeline({
  paused: true,
});
animApp.fromTo(".logiciel", { y: "100vh" }, { y: "0", stagger: 0.1 }, ">0.5");
