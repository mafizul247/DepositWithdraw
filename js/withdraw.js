
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = getInputFieldValueByID('user-withdraw');
    // console.log(inputWithdrawValue);
    
    const previousWithdraw = getTextElementValueByID('withdraw-total');
    // console.log(previousWithdraw);

    const previousBalanceTotal = getTextElementValueByID('balance-total');

    if(isNaN(inputWithdraw)){
        return;
    }

    if(previousBalanceTotal < inputWithdraw){
        alert('Insufficient Balance');
        return;
    }
    

    const newWithdraw = previousWithdraw + inputWithdraw;
    // console.log(newWithdraw);

    setTextElementValueById('withdraw-total', newWithdraw);

    // const previousBalanceTotal = getTextElementValueByID('balance-total');

    const newBalanceTotal = previousBalanceTotal - inputWithdraw;

    setTextElementValueById('balance-total', newBalanceTotal);
})