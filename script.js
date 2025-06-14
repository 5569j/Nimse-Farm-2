
gsap.registerPlugin(ScrollTrigger);

gsap.from("#welcome h1", {
  duration: 1,
  y: -50,
  opacity: 0
});

gsap.from(".owner", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 0.5
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.querySelectorAll("h2, p, .images img"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });
});
