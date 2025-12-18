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

