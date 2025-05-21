const lenis = new Lenis({
    autoRaf: true
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 900)
});

gsap.ticker.lagSmoothing(1);