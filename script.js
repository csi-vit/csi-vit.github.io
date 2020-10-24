window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  const doc = (query) => document.querySelector(query);
  const tabs = [
    doc(".aboutTab"),
    doc(".eventsTab"),
    doc(".teamTab"),
    doc(".homeTab"),
  ];
  const triggers = [
    doc(".about-trigger"),
    doc(".events-trigger"),
    doc(".team-trigger"),
    doc(".home-trigger"),
  ];

  triggers.map((trigger, index) => {
    trigger.onclick = () => {
      tabs.forEach((tab) => (tab.style.display = "none"));
      tabs[index].style.display = "block";
      triggers.forEach((tab) => (tab.style.color = "white"));
      triggers[index].style.color = "rgb(149, 224, 194)";
    };
  });

  document.querySelectorAll(".scroller__svg path").forEach((path, index) => {
    console.log(index, path.getTotalLength());
  });

  gsap
    .timeline({ repeat: -1 })
    .to(".scroll__line", { height: 80, y: 0, duration: 0.8, delay: 0.2 })
    .to(".scroll__line", { delay: 0.4, duration: 0.8, height: 0 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".scroll__trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .add(
      gsap.to(".scroller__svg path", {
        strokeDashoffset: 0,
      }),
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".scroll__trigger2",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .add(
      gsap.to(".scrollIntro", {
        top: "-100vh",
        ease: "power1.in",
      })
    );
};
