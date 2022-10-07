// ---------------------------- nav-bar -----------------------------------------
const hamOpen = document.querySelector(".open-navbar-icon");
console.log(hamOpen);
hamOpen.addEventListener("click", (e)=>{
    var menu = document.querySelector(".navbar-wrapper");
    menu.classList.add("hamMenu");
    hamOpen.style.visibility = "hidden";
})

const hamClose = document.querySelector(".close-navbar-icon");
console.log(hamClose);
hamClose.addEventListener("click", (e)=>{
    var menu = document.querySelector(".navbar-wrapper");
    menu.classList.remove("hamMenu");
    hamOpen.style.visibility = "visible";
})

// ------------------------ card button --------------------------------------
const btn = document.querySelectorAll(".card");

for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        var front = btn[i].querySelector(".front-side");
        var back = btn[i].querySelector(".back-side");

        if (e.srcElement.classList.contains("navigation-button")) {
            if (front.classList.contains("active")) {
                front.classList.remove("active");
                front.classList.add("inactive");
                back.classList.add("active");
                back.classList.remove("inactive");
            }
            else {
                front.classList.add("active");
                front.classList.remove("inactive");
                back.classList.remove("active");
                back.classList.add("inactive");
            }
        }
    });
}
