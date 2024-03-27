let calcInput = document.querySelector("#numInput")

function toAppend(button) {
    calcInput.value += button
};

function clearInput() {
    calcInput.value = null;
}

function operate() {
    calcInput.value = eval(calcInput.value);
}

