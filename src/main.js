import './style.css'

const toggle = document.querySelector('#theme-toggle')

toggle.addEventListener('click', () => {
  const isWarm = document.body.classList.toggle('warm')
  toggle.querySelector('span').textContent = isWarm
    ? 'Restore atmosphere'
    : 'Change atmosphere'
})
