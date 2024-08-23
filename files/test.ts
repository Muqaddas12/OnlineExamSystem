
function hello () {
  document.querySelectorAll('.options').forEach(Target => {
    Target.addEventListener('click', event => {
      if (event.target.innerText == 'Home') {
        location.reload()
      } else if (event.target.innerText == 'Students') {
      } else if (event.target.innerText == 'Marks') {
        document.getElementById(
          'sec'
        ).innerHTML = `<div class="options">Home</div>
        <div class="options">Sessional</div>
        <div class="options">Practical</div>
        <div class="options">Theory</div>
        <div class="options">Logout</div>`
        hello()
      } else if (event.target.innerText == 'Sessional') {
        alert('hello')
      }
    })
  })
}