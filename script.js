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

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".prenom",
  { y: "800%", x: 250, opacity: "0%", duration: 5 },
  { y: "200%", opacity: "100%" },
  0.5
);
gsap.fromTo(
  ".nom",
  { y: "800%", x: 250, opacity: "0%", duration: 5 },
  { y: "400%", opacity: "100%" },
  "<0.5"
);

const titleAnimScreen = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "50% top",
    trigger: ".hero",
  },
});
titleAnimScreen.fromTo(
  ".hero-img",
  { backgroundPosition: "0% 0%", ease: "power1.inOut", duration: 8 },
  { backgroundPosition: "50% 100%", ease: "power1.inOut" },
  0
);

titleAnimScreen.fromTo(".prenom", { y: "200%" }, { y: -100 }, 0);

titleAnimScreen.fromTo(".nom", { y: "400%" }, { y: -100 }, 0.02);

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
  },
});

myProjects.fromTo(
  "#projet",
  { y: 500, opacity: "0%" },
  { y: 0, opacity: "100%" },
  0
);
myProjects.fromTo(
  ".swiper",
  { x: 500, opacity: "0%" },
  { x: 0, opacity: "100%" },
  ">0"
);

myProjects.fromTo(".carroussel", { x: 500 }, { x: 0 }, ">0");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15 /*
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },*/,
});

/*-------------------------------------------------------------------------------------

 # ABOUT ME
 
 -------------------------------------------------------------------------------------*/

const aboutMe = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: ".about",
    toggleActions: "play complete",
  },
});
aboutMe.pause(),
  aboutMe.fromTo(
    "#titleMe",
    { y: -50, opacity: "0%", duration: 5 },
    { y: 0, opacity: "100%" }
  );
aboutMe.fromTo(
  ".about-me",
  { y: -50, opacity: "0%", duration: 5 },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  ".portrait",
  { x: 500, backgroundPosition: "0% 100%", opacity: "0%", duration: 8 },
  { x: 0, backgroundPosition: "50% 100%", opacity: "100%" },
  "<0.5"
);
aboutMe
  .fromTo(
    "#learnMore",
    { y: -50, opacity: "0%", duration: 5 },
    { y: 0, opacity: "100%" },
    "<0.5"
  )
  .paused(!0);

/*-------------------------------------------------------------------------------------

 # PAGE PROJETS
 
 -------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------

 # PAGE CONTACT
 
 -------------------------------------------------------------------------------------*/
