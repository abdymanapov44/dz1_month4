const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

gmailButton.addEventListener("click", () => {
    const value = gmailInput.value.trim();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(value)) {
        gmailResult.textContent = "Valid Gmail ✔";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "Invalid Gmail ✖";
        gmailResult.style.color = "red";
    }
});



const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let positionX = parentBlock.clientWidth - childBlock.offsetWidth
let positionY = parentBlock.clientHeight - childBlock.offsetHeight

let moveX = positionX
let moveY = positionY

childBlock.style.left = positionX + 'px'
childBlock.style.top = positionY + 'px'

const moveBlock = () => {
    if (positionX > 0 && positionY === moveY) {
        positionX--
        childBlock.style.left = positionX + 'px'
    } else if (positionY > 0 && positionX === 0) {
        positionY-- 
        childBlock.style.top = positionY + 'px'
    } else if (positionX < moveX && positionY === 0) {
        positionX++ 
        childBlock.style.left = positionX + 'px'
    } else if (positionY < moveY && positionX === moveX) {
        positionY++ 
        childBlock.style.top = positionY + 'px'
    }

    requestAnimationFrame(moveBlock)
}

moveBlock()







const secondsBlock = document.querySelector('#seconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let seconds = 0
let interval = null
let isRunning = false

startBtn.onclick = () => {
    if (isRunning) return 

    isRunning = true

    interval = setInterval(() => {
        seconds++
        secondsBlock.innerText = seconds
    }, 1000)
}

stopBtn.onclick = () => {
    clearInterval(interval)
    isRunning = false
}

resetBtn.onclick = () => {
    clearInterval(interval)
    seconds = 0
    secondsBlock.innerText = 0
    isRunning = false
}