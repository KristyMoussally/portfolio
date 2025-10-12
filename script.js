/*-------------------------------------------------------------------------------------

 # NOM PORTFOLIO
 
 -------------------------------------------------------------------------------------*/

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".prenom",
  { y: "100vh", x: 250, opacity: "0%" },
  { y: "35vh", opacity: "100%", duration: 0.5 },
  0.5
);
gsap.fromTo(
  ".nom",
  { y: "100vh", x: 250, opacity: "0%" },
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
  spaceBetween: 15,
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
    { y: -50, opacity: "0%" },
    { y: 0, opacity: "100%" }
  );
aboutMe.fromTo(
  ".about-me",
  { y: -50, opacity: "0%" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  "#learnMore",
  { y: -50, opacity: "0%" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  "#l1",
  { y: -50, opacity: "0%", ease: "power2" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  "#l2",
  { y: -50, opacity: "0%", ease: "power2" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  "#l3",
  { y: -50, opacity: "0%", ease: "power2" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  "#l4",
  { y: -50, opacity: "0%", ease: "power2" },
  { y: 0, opacity: "100%" },
  "<0.5"
);
aboutMe.fromTo(
  ".portrait",
  { x: 500, backgroundPosition: "0% 100%", opacity: "0%" },
  { x: 0, backgroundPosition: "50% 100%", opacity: "100%" },
  1
);

/*-------------------------------------------------------------------------------------

 # PAGE PROJETS
 
 -------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------

 # PAGE CONTACT
 
 -------------------------------------------------------------------------------------*/
