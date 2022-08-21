
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumber = document.getElementById('typed-numbers');
    const previousNumber = typedNumber.value;

    if (isNaN(number)) {
        if (number == "C") {
            typedNumber.value = '';
        }
        else if (number == "<") {
            const digit = previousNumber.split('')
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumber.value = remainingDigits;

        }
    }
    else {
        const newNumber = previousNumber + number;
        typedNumber.value = newNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('typed-numbers');
    const currentPin = displayPinField.value;

    const generatePinField = document.getElementById('display-pin');
    const generatePin = generatePinField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong');

    if (generatePin == currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';
    }
    else {
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})