/* Show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hide */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav_button_normal')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When each nav_button_normal is clicked on, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Animation */
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .2})
gsap.from('.home__rocket', 1.5, {opacity: 0, y: 300, delay: .3})
gsap.from('.home__planet-1', 1.5, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__planet-2', 1.5, {opacity: 0, x: 200, delay: 1})
gsap.from('.home__cloud-1', 1.5, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home__cloud-2', 1.5, {opacity: 0, x: 200, delay: 1.3})
gsap.from('.home__content', 1.5, {opacity: 0, y: -100, delay: 1.4})
gsap.from('.home__title img', 1.5, {opacity: 0, x: 100, delay: 1.6})