// EXPLORE BUTTON
const exploreButton = document.getElementById("explore");
const view = document.getElementById("start");

exploreButton.addEventListener("click", () => {
    scrollTo({ top: view.offsetTop - 100, behavior: "smooth" });
})

// PROJECTS BUTTON
const projectsButton = document.getElementById("to-projects");
const viewProjects = document.getElementById("projects");

projectsButton.addEventListener("click", () => {
    scrollTo({ top: viewProjects.offsetTop - 50, behavior: "smooth" });
})

// SOCIALS BUTTON
const socialsButton = document.getElementById("to-socials");
const viewSocials = document.getElementById("socials");

socialsButton.addEventListener("click", () => {
    scrollTo({ top: viewSocials.offsetTop - 50, behavior: "smooth" });
})

// COPYRIGHT
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();

    const copyright = document.getElementById("copyright");
    const copyright_es = document.getElementById("es");

    copyright.innerHTML = `&copy; ${year} Rdap. Almost all rights reserved.`;
    copyright_es.innerHTML = `&copy; ${year} Rdap. Casi todos los derechos reservados.`;
})