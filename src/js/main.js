let aboutSection;
let listItems
let footerSpan
let header


const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


  aboutSection = document.querySelector('.about')
listItems = document.querySelectorAll('.about__list--item')
    footerSpan = document.querySelector('.footer__year')
    header = document.querySelector('.header')
}

//FUNCTIONS
const handleYear = () => {
    const year = (new Date).getFullYear()
    footerSpan.innerText = year
    
}

const handleHeaderShow = () => {
    if(window.scrollY >= 1){
        header.classList.add('headerShow')
    } else if (window.scrollY <= 0){
        header.classList.remove('headerShow')
    }
    
}

const handleScroll = () => {
    const sectionTop = aboutSection.getBoundingClientRect().top; // Odległość sekcji od góry okna
    const windowHeight = window.innerHeight; // Wysokość okna przeglądarki
    

    if(sectionTop <= windowHeight * 0.3){
        listItems.forEach(item => {
            item.classList.add('active')
            console.log("siema");
            
        });
    }
}



const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleHeaderShow);
}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();
    handleYear()

}

window.addEventListener('DOMContentLoaded', main)