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


// CHAGE TO SPANISH OR ENGLISH LENGUAGE 

let check = document.querySelector('.check')

check.addEventListener('click', () => {
  let id = check.checked

  if(id == true){
    location.href =  '/Spanish/index.html'
  }else{
    location.href = '/index.html'
  }

})

