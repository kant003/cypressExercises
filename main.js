import './style.css'
import { selectFromArray } from './utils'

document.getElementById('btnMayus').addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('mayusResult').innerHTML = document
  .getElementById('phrase')
  .value.toUpperCase()
})

document.getElementsByTagName('button')[1].addEventListener('click', (e) => {
  e.preventDefault()
  const first = document.getElementsByName('first_name')[0].value
  const last = document.getElementsByName('last_name')[0].value
  document.getElementById('unificationResult').innerHTML = first + ' ' + last
})

document.querySelectorAll('[data-test-id="btnAdd"]')[0].addEventListener('click', (e) => {
  e.preventDefault()
  const phone = document.querySelectorAll('input[type="tel"]')[0].value
  document.querySelector('#phoneResult').innerHTML = '+34 ' + phone
})

document.querySelectorAll('.my-button')[3].addEventListener('click', (e) => {
  e.preventDefault()
  const web = document.querySelector('#website>input').value
  const webClean = web.replace('http://', '')
  document.querySelector('div[data-test-id="protocolRemove"] div').innerHTML = webClean
})


document.querySelectorAll('.my-button')[4].addEventListener('click', (e) => {
  e.preventDefault()
  const email = document.querySelector('input[type=email]').value
  const server = email.match(/@(.*)/)[1]
  document.querySelector('input[type=email]').nextElementSibling.nextElementSibling.innerHTML=server
})