
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = getInputFieldValueByID('user-withdraw');
    // console.log(inputWithdrawValue);
    
    const previousWithdraw = getTextElementValueByID('withdraw-total');
    // console.log(previousWithdraw);
    
    const newWithdraw = previousWithdraw + inputWithdraw;
    // console.log(newWithdraw);
    if(isNaN(newWithdraw)){
        return;
    }

    setTextElementValueById('withdraw-total', newWithdraw);

    const previousBalanceTotal = getTextElementValueByID('balance-total');

    const newBalanceTotal = previousBalanceTotal - inputWithdraw;

    setTextElementValueById('balance-total', newBalanceTotal);
})