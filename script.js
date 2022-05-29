const scTop = document.querySelector(".scTop")



scTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
        scTop.classList.add("active")
    } else {
        scTop.classList.remove("active")
    }
})




var menu = document.querySelector(".menu")
var bar = document.querySelector(".fa-bars")


// function toggleclass() {
//     menu.classList.toggle("active")
//     bar.classList.toggle("active")
// }


bar.addEventListener("click", function() {
    menu.classList.toggle("active")
    bar.classList.toggle("active")
})

