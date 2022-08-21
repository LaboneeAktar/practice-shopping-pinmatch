

function calculatePrice(newPhoneNumber) {
    const phonePrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberField = getInputValueById('phone-number-field');
    const newPhoneNumber = phoneNumberField + 1;
    setInputFieldValue('phone-number-field', newPhoneNumber);

    calculatePrice(newPhoneNumber);

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberField = getInputValueById('phone-number-field');
    const newPhoneNumber = phoneNumberField - 1;

    if (newPhoneNumber < 0) {
        alert('Negative Value is not Alow');
    }
    else {
        setInputFieldValue('phone-number-field', newPhoneNumber);

        calculatePrice(newPhoneNumber);

    }
})