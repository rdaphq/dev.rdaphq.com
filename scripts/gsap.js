document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin)

    gsap.to("#typewrite", {
        duration: 2,
        delay: 4,
        text: "is not this snake."
    })

    gsap.to("#typewrite", {
        duration: 2,
        delay: 8,
        text: "doesn't speak French."
    })

    gsap.to("#typewrite", {
        duration: 3,
        delay: 12,
        text: "is a frontend developer.",
    })
});