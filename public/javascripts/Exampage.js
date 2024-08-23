//global variable
let ChangeButtonColor = 0

// button genrator
const btngen = document.getElementById('question-number')
for (let i = 1; i <= 100; i++) {
  btngen.innerHTML += ` <input class='number-btn' type="button" value='${i}'>`
}
// *********************************Timer*************************************
let Min = 59
let Sec = 59

function Timer () {
  if (Sec > 9) {
    document.getElementById('time-left').innerHTML = 'Time:' + Min + ':' + Sec
  } else {
    document.getElementById('time-left').innerHTML =
      'Time:' + Min + ':' + '0' + Sec
  }

  setTimeout(() => {
    UpdateTimer()
  }, 1000)
}
function UpdateTimer () {
  if (Sec > 0) {
    Sec--
    Timer()
  } else if (Min > 0) {
    Sec = 59
    Min--
    Timer()
  } else {
    document.body.innerHTML = 'timeup'
    alert('good bye')
  }
}

//********************************Testing Data****************************************
data = {
  1: `<label id="user-question">Question:1 Which of the following statements is true?</label>
  <div class="choice"><input name='option' type='radio' value='1'> 1.Unicode is an 8-bit character format.</div>
  <div class="choice"><input type='radio' name = 'option'
 value='2'> 2.Unicode can Store only non-Asian language alphabets.</div>
  <div class="choice"><input name = 'option'
 type='radio' value='3'> 3.In java,the char data type stores characters in a 16-bit unicode.</div>
  <div class="choice"><input name = 'option'
 type='radio' value='4'>4.In java,the byte data type stores integral number in a 16-bit.</div>`,
  2: ` <label id="user-question">Question:2 Which of the following statements is true?</label>
  <div class="choice">1. Unicode is an 8-bit character format.</div>
  <div class="choice">2.Unicode can Store only non-Asian language alphabets.</div>
  <div class="choice">3. In java,the char data type stores characters in a 16-bit unicode.</div>
  <div class="choice">4.In java,the byte data type stores integral number in a 16-bit.</div>`
}

// ************************************Button Programming***********************************

function ButtonWorking () {
 navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    .then(stream => {
      document.getElementById('vid').srcObject = stream
      document.getElementById('vid').play()
    })
    .catch(alert)
    document.addEventListener('contextmenu', Event => {
  Event.preventDefault()
})


  document.querySelectorAll('.number-btn').forEach(button => {
    button.addEventListener('click', event => {
      value = event.target.value
      document.getElementById('questions').innerHTML = data[value]
      document.getElementsByClassName('number-btn')[
        value - 1
      ].style.backgroundColor = 'yellow'
      ChangeButtonColor = value
      // alert(ChangeButtonColor)
    })
  })
 

  document.getElementsByClassName('number-btn')[ChangeButtonColor].click()

  Timer()
}

function Mark () {
  if (ChangeButtonColor > 0) {
    document.getElementsByClassName('number-btn')[
      ChangeButtonColor - 1
    ].style.backgroundColor = 'orange'
  }
}

function Next () {
  if (ChangeButtonColor <= 100 - 1) {
    const temp = document
      .getElementsByClassName('number-btn')
      [ChangeButtonColor].click()
  }
}

function Previous () {
  if (ChangeButtonColor > 1) {
    ChangeButtonColor -= 2
    document.getElementsByClassName('number-btn')[ChangeButtonColor].click()
  }
}
