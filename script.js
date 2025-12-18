let toggleBar = document.querySelector(".toggle-bars");
let navLinks = document.querySelector(".navLinks");
let icone = toggleBar.querySelector("i");
let links = navLinks.querySelectorAll("a")


toggleBar.addEventListener("click", ()=>{
    navLinks.classList.toggle("open")
    icone.classList.toggle("fa-bars")
    icone.classList.toggle("fa-xmark")
})

links.forEach(links =>{
        links.addEventListener("click", ()=>{
            navLinks.classList.remove("open")
            icone.classList.remove("fa-xmark")
            icone.classList.add("fa-bars")
        })
})

 AOS.init();

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
}

ScrollReveal().reveal(".logo", {
    ...scrollRevealOption,
     origin:"left",
    delay: 600,
})

ScrollReveal().reveal(".navLinks", {
    ...scrollRevealOption,
     origin:"top",
    delay: 700,
    interval:500,
})

ScrollReveal().reveal(".navLinks a", {
    ...scrollRevealOption,
     origin:"top",
    delay: 750,
    interval:600,
})

ScrollReveal().reveal(".texto-principal", {
    ...scrollRevealOption,
     origin:"left",
    delay: 800,
})

