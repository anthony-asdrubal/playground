
window.addEventListener("load", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
     menuButton.classList.toggle("active");
     menu.classList.toggle("menuOpen");
   });
})