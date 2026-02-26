
// gsap.registerPlugin(ScrollTrigger);

// ── HERO on page load ──
gsap.from("#hero-title", {
    scale: 0,
    rotate: 5,
    duration: 1,
    delay: 0.3
});

gsap.from("#hero-desc", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.9
});

gsap.from("#hero-btns", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.2
});

gsap.from("#nav", {
    y: -60,
    opacity: 0,
    duration: 0.8,
    delay: 0.1
});

// ── STATS on scroll ──
gsap.from("#s1, #s2, #s3, #s4", {
    scale: 0,
    rotate: 360,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#stats",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 3
    }
});

// ── SERVICE CARDS ──
gsap.from("#c1, #c2, #c3, #c4, #c5, #c6", {
    scale: 0,
    rotate: 5,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: "#services .cards",
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 3
    }
});

// ── ABOUT IMAGE slides from left ──
gsap.from("#about-img", {
    x: -200,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 3
    }
});

// ── ABOUT TEXT slides from right ──
gsap.from("#about-text", {
    x: 200,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 20%",
        scrub: 3
    }
});

// ── GALLERY IMAGES ──
gsap.from("#img1, #img2, #img3, #img4, #img5, #img6", {
    scale: 0,
    rotate: 3,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#gallery .img-grid",
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 3
    }
});

// ── CTA box ──
gsap.from("#cta h2", {
    scale: 0,
    rotate: 360,
    duration: 2,
    scrollTrigger: {
        trigger: "#cta",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 3
    }
});

gsap.to(".cta-form", {
    x: 400,
    duration: 2,
    scrollTrigger: {
        trigger: "#cta",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
});
