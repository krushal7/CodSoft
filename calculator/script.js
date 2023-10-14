let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = '';
    }
    display.textContent += value;
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function clearDisplay() {
    display.textContent = '0';
}
