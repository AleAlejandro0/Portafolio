"use strict"

let navMenu = document.querySelector(".nav_img")
let menuOverlay = document.querySelector(".nav_menu")


 /* CLOSE AN DOPEN MENU */
navMenu.addEventListener("click", () => {
  menuOverlay.classList.toggle("show")
})

let navOptions = document.querySelectorAll(".nav_item")

for(let option of navOptions){
  option.addEventListener("click", () => {
  menuOverlay.classList.toggle("show")})
}
