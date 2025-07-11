// EXPLORE BUTTON
const exploreButton = document.getElementById("explore");
const view = document.getElementById("start");

exploreButton.addEventListener("click", () => {
    scrollTo({ top: view.offsetTop - 70, behavior: "smooth" });
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
const year = new Date().getFullYear();

const copyright = document.getElementById("copyright");
copyright.innerHTML = `&copy; ${year} Rdap. Almost all rights reserved.`;

// const copyrightEs = document.getElementById("copy_es");
// copyrightEs.innerHTML = `&copy; ${year} Rdap. Casi todos los derechos reservados.`;