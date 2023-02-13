function getInputFieldValueByID(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    // const inputAmount = inputValue.toFixed(2);
    inputField.value = '';
    if(isNaN(inputValue)){
        alert('Please input valid number');
        return;
    }else if(inputValue <= 0){
        alert('Please input positive number');
        return;
    }
    return inputValue;
}


function getTextElementValueByID(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textValue = parseFloat(textElementString);
    // const textAmount = textValue.toFixed(2);
    return textValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    const textElementValue = textElement.innerText;
    textElement.innerText = newValue;
}

