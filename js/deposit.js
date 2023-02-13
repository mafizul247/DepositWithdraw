
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit btn');
    const newInputAmount = getInputFieldValueByID('user-deposit');
    // console.log(newInputAmount);

    const previousDeposit = getTextElementValueByID('deposit-total');
    // console.log(previousDeposit);
    const newDeposit = newInputAmount + previousDeposit;
    if(isNaN(newDeposit)){
        return;
    }
    // console.log(newPreviousDeposit);

    setTextElementValueById('deposit-total', newDeposit);

    const previousBalance = getTextElementValueByID('balance-total');
    const newBalance = previousBalance + newInputAmount;

    setTextElementValueById('balance-total', newBalance);
})