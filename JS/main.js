let burgerEl = document.querySelector(".burger");

let navigation_barEl = document.querySelector(".navigation-bar");

burgerEl.addEventListener("click", ()=>{
    /* console.log("yes"); */
 // toggle if navigations appears hide otherwise display it
    navigation_barEl.classList.toggle("active")
})



