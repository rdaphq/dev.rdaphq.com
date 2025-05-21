const lenis = new Lenis({
    autoRaf: true,
    useTransform: false
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 900)
});

gsap.ticker.lagSmoothing(1);