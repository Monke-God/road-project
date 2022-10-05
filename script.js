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

// console.log(btn);
