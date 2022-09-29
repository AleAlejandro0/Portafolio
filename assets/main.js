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

//JUMP TO PORTFOLIO

let btn = document.getElementsByClassName("btn__portfolio")

console.log(btn)

btn[0].addEventListener("click", () => {
  window.location.hash = "nav-portfolio";
})