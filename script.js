//     ANIMACJA BURGERA      //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const opacityMenu = document.querySelector(".opacity");
// const hover = document.querySelector('.icon');

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


//          TEXT ANIMATION                      //
const spnText = document.querySelector('.machine');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hello! i\'m Kasia! ', 'Enthusiastic programmer motivated to learn, grow and excel. Facere quo placeat error enim harum! Saepe sapiente eos repellendus.']

let activeLetter = -10;
let activeTekst = 0;

const addLetter = () => {
    if(activeLetter >= 0){
        spnText.textContent += txt[activeTekst][activeLetter];
    }
    activeLetter++;
    if(activeLetter === txt[activeTekst].length){
        activeTekst++;
        if(activeTekst === txt.length)return;

        return setTimeout(()=>{
            activeLetter = -10;
            addLetter();
        }, 1500)
    }
    setTimeout( addLetter, 100)
}

addLetter(); //first invoke


//        CURSOR ANIMATION      //
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 300);
