$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("stycky")
        } else {
            $('.navbar').removeClass("stycky")
        }
    })
})
// typing animation script
var typed = new Typed(".typing",{
    strings:["Student","Developer","Layout Designer"],
    typeSpeed:100,
        backSpeed:60,
        loop:true

});
var typed = new Typed(".typing-2",{
    strings:["Student","Developer","Layout Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

particlesJS.load('particles', 'particles.json')


const Menu = document.querySelector('.menu')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.addEventListener('click', () => {
    Menu.classList.toggle('show-menu')
})

const headerLink = document.querySelectorAll('.menu li a')
headerLink.forEach(element => element.addEventListener('click', () => {
    Menu.classList.remove('show-menu')
}))