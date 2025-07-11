document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin)

    gsap.to("#typewrite", {
        duration: 2,
        delay: 4,
        text: "no es una serpiente."
    })

    gsap.to("#typewrite", {
        duration: 2,
        delay: 8,
        text: "no habla francés."
    })

    gsap.to("#typewrite", {
        duration: 3,
        delay: 12,
        text: "es un dev frontend.",
    })
});