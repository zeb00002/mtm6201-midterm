const toggleButtton= document.getElementsByClassName('toggle-button')[0]
const navLinks= document.getElementsByClassName('nav-links')[0]

toggleButtton.addEventListener('click',() => {
    navLinks.classList.toggle('active')
})
