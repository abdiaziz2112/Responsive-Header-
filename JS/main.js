let burgerEl = document.querySelector(".burger");

let navigation_barEl = document.querySelector(".navigation-bar");

burgerEl.addEventListener("click", ()=>{

    /* console.log("yes"); */
    navigation_barEl.classList.toggle("active")
})

