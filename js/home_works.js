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

let position = 0;

function moveBlock() {
    const parentWidth = parentBlock.offsetWidth;
    const childWidth = childBlock.offsetWidth;

    if (position >= parentWidth - childWidth) {
        return;
    }

    position++;
    childBlock.style.left = position + "px";

    setTimeout(moveBlock, 5);
}

moveBlock();