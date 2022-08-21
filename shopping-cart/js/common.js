function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
}

function setInputFieldValue(inputId, newValue) {
    const inputField = document.getElementById(inputId);
    inputField.value = newValue;
}

function getTextElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementFieldValue = parseInt(elementFieldString);
    return elementFieldValue;
}

function setTextElementValue(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}


function calculateTotal() {
    const phonePriceTotal = getTextElementValueById('phone-total');
    const casePriceTotal = getTextElementValueById('case-total');

    const subTotal = phonePriceTotal + casePriceTotal;
    setTextElementValue('sub-total', subTotal);

    const taxAmount = ((subTotal * 10) / 100).toFixed(2);
    setTextElementValue('tax-amount', taxAmount);

    const finaAmount = subTotal - taxAmount;
    setTextElementValue('final-amount', finaAmount);
}

document.getElementById('btn-checkout').addEventListener('click', function () {
    calculateTotal();
})


// document.getElementById('btn-remove').addEventListener('click', function (event) {
//     event.target.parentNode.parentNode.parentNode.style.display = 'none';
//     // console.log(event.target.parentNode.parentNode.parentNode);
// })

const removeButtons = document.getElementsByClassName('btn-remove');
for (let button of removeButtons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.parentNode.parentNode.style.display = 'none';
    })
}