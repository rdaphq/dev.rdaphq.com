document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin)

    gsap.to("#typewrite", {
        duration: 2,
        delay: 4,
        text: "is not a snake."
    })

    gsap.to("#typewrite", {
        duration: 2,
        delay: 8,
        text: "doesn't speak french."
    })

    gsap.to("#typewrite", {
        duration: 3,
        delay: 12,
        text: "is a frontend developer.",
    })
});