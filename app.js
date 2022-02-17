const demo = document.querySelector('.demo')
const form = document.querySelector('form')
const text = document.getElementById('text')
const input = document.querySelector('.input')
let scorel = document.querySelector('#score')
let word
let score = 0
reload()

function reload() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then(function (data) {
      return data.json();
    })
    .then(getuser);

  function getuser(getdata) {
    word = getdata[0];
    text.textContent = word;
    input.value = ''
  } 
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (word == input.value.toLowerCase()) {
    reload()
    score++
    scorel.textContent = `score = ${score}`
  }
  
})

