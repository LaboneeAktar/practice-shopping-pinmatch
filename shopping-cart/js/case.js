
function calculateCasePrice(newCaseNumber) {
    const casePrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = casePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumber = getInputValueById('case-number-field');
    const newCaseNumber = caseNumber + 1;
    setInputFieldValue('case-number-field', newCaseNumber);
    calculateCasePrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumber = getInputValueById('case-number-field');
    const newCaseNumber = caseNumber - 1;
    if (newCaseNumber < 0) {
        alert('Negative Value is not Alow');
    }
    else {
        setInputFieldValue('case-number-field', newCaseNumber);
        calculateCasePrice(newCaseNumber);
    }
})


/*
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

function calculateCasePrice(newCaseNumber) {
    const casePrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = casePrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseField = getInputValueById('case-number-field');
    const newCaseNumber = caseField + 1;
    setInputFieldValue('case-number-field', newCaseNumber);
    calculateCasePrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseField = getInputValueById('case-number-field');
    const newCaseNumber = caseField - 1;
    if (newCaseNumber < 0) {
        alert("Negative Value is not Alow");
    }
    else {
        setInputFieldValue('case-number-field', newCaseNumber);
        calculateCasePrice(newCaseNumber);
    }
})
*/