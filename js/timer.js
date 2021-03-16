const onlyNumber = str => str.split('').filter(item => !isNaN(item)).join('')

const timerData = document.getElementById("timer")


const timer = setInterval(() => {
    let time = +(timerData.textContent) + 0.01
    timerData.textContent = time.toFixed(3)
}, 10)