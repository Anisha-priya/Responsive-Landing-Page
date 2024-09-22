let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", function () {
    menu.classList.add("active");
    console.log("Menu Button Clicked");
  });
  closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
    console.log("Close Button Clicked");
  });
  
