let navPrincipal = document.querySelector(".navigation__principale");
let navAfterScroll = document.querySelector(".navigation__afterScroll");

let navMobile = document.querySelector(".navigation__mobile")
let navMobileAfterScroll = document.querySelector(".navigation__mobile__afterScroll")

let popup = document.querySelector(".popup__menu");
let buttonPopup = document.querySelectorAll(".burger");
let exitPopup = document.querySelector(".popup__close");
//Docstring

/**
 * Fuction initialization
 */

export function init(){
    buttonPopup.forEach(function(button){
        button.addEventListener("click", openPopup);
    });
    exitPopup.addEventListener("click", closePopup)

    window.addEventListener("scroll", decideNavBar)
}

function openPopup(){
    popup.classList.remove("hideMenu");
}

function closePopup(){
    popup.classList.add("hideMenu");
}


function decideNavBar(){
    if(screen.width <= 775) {
        showMobileNavBar()
    }
    else{
        showNavBar()
    }

}

function showNavBar(){   
    if(window.scrollY <= 0) {
        
        navAfterScroll.classList.add("hideSection")
        navPrincipal.classList.remove("hideSection");
    }
    else if (window.scrollY > 0){
        
        navAfterScroll.classList.remove("hideSection")
        navPrincipal.classList.add("hideSection");
    }
}

function showMobileNavBar(){
    if(window.scrollY <= 0) {
        
        navMobileAfterScroll.classList.add("hideSection")
        navMobile.classList.remove("hideSection");
    }
    else if (window.scrollY > 0){
        
        navMobileAfterScroll.classList.remove("hideSection")
        navMobile.classList.add("hideSection");
    }
}

