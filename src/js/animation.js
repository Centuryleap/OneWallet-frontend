// import { AOS } from "aos";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// Vanilla tilt
import VanillaTilt from 'vanilla-tilt';
const element = document.querySelectorAll(".js-tilt");
const tl = gsap.timeline()

for (i = 0; i < element.length; ++i) {
  VanillaTilt.init(element);
}


// cubic - bezier(.17, .67, .59, 1.59)
// Hero Animation
gsap.fromTo(".hero-container", {
  opacity: 0,
  y: 300,
}, {
  opacity: 1,
  duration: 1.5,
  y: 0,
  ease: "power2.out",
})

gsap.to(".anime-image img", {
  scrollTrigger: {
    trigger: ".anime-image",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
    toggleActions: "restart none none none"
  },
  y: '-50%',
  // duration: 2,
})

tl.fromTo(".hero-text-anime h1", {
  y: 150,
  opacity: 0,
  skewY: 20,
}, {
  y: 0,
  opacity: 1,
  skewY: 0,
  duration: 1,
  ease: "power2.out",
})

  .to(".hero-text-anime .explainer, .download-icons, nav", {
    opacity: 1,
    ease: "power2.out",
  })


// Scroll Animation on the card types section
const st = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-types-pin",
    start: "center center",
    end: 'bottom top',
    scrub: true,
    pin: true,
    // pinType: "transform",
    markers: false,
  },
})

st.fromTo(".middle-card", {
  scale: 1.2,
  // opacity: 0,
}, {
  scale: 1,
  duration: 2,
})

  .fromTo(".left-card, right-card", {
    x: '80%',
  }, {
    x: 0,
    delay: -2,
    duration: 2
  })

  .fromTo(".right-card", {
    x: '-80%',
  }, {
    x: 0,
    delay: -2,
    duration: 2
  })