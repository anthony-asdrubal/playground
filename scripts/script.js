window.addEventListener("load", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const header = document.getElementById("header");

    menuButton.addEventListener("click", () => {
     menuButton.classList.toggle("active");
     menu.classList.toggle("menuOpen");
     header.classList.toggle("menuOpen");
   });
})