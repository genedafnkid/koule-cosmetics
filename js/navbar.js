const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('menu-main')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})