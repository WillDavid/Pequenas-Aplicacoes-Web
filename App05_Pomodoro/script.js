let i = 1;
const x = 5;


const startButton = document.getElementById('start');
const second = document.getElementById('second')
const minutes = document.getElementById('minutes');


startButton.addEventListener('click', (e) => {
    e.preventDefault();
    let time = setInterval(function run() {
        console.log(i);
        i++
        second.innerHTML = `${i}`
      }, 1000);
})