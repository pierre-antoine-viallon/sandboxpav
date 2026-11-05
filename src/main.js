import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { Collapse } from 'bootstrap'

const navigation = document.querySelector('.navbar')
const collapseElement = document.querySelector('#mainNav')

const updateNavigation = () => {
  navigation.classList.toggle('navbar-scrolled', window.scrollY > 24)
}

document.querySelectorAll('#mainNav .nav-link, #mainNav .btn').forEach((link) => {
  link.addEventListener('click', () => {
    const collapse = Collapse.getInstance(collapseElement)
    collapse?.hide()
  })
})

window.addEventListener('scroll', updateNavigation, { passive: true })
updateNavigation()
