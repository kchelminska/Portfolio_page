//     ANIMACJA BURGERA      //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const opacityMenu = document.querySelector(".opacity");

const showNav = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    opacityMenu.classList.toggle('active');
}
burger.addEventListener('click', showNav);


//       HOW TO HIDE THE SIDE MENU WHEN YOU CLICK ON ITEM A     //
const hideList = () => {
    opacityMenu.classList.toggle('active');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
const aItems = document.querySelectorAll('ul a');
aItems.forEach((item) => item.addEventListener("click", hideList))

// ANIMATION HIDING MENU WHEN CLICKING ON ELEMENT "OPACITY"" //
const hideOpacity = () => {
    console.log("cos");
    menu.classList.toggle('active');
    opacityMenu.classList.toggle('active');
    burger.classList.toggle('active');
}
opacityMenu.addEventListener("click", hideOpacity);