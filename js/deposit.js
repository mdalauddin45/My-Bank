
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if (isNaN(newDepositAmount)) {
        alert('please provide a valid number')
        return;
    }


    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;


    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceStirng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceStirng);



    const currentBalance = previousBalanceTotal + currentDepositTotal;

    balanceTotalElement.innerText = currentBalance;


    // clear the deposit field
    depositField.value = ``;


})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrewAmountString = withdrawField.value;
    const newWithdrewAmount = parseFloat(newWithdrewAmountString);

    if (isNaN(newWithdrewAmount)) {
        alert('please provide a valid number')
        return;
    }


    const previousWithdrew = document.getElementById('total-withdraw');
    const previousWithdrewString = previousWithdrew.innerText;
    const previousWithdrewTotal = parseFloat(previousWithdrewString);



    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceStirng = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceStirng);

    if (newWithdrewAmount > previousBalanceTotal) {
        alert('Ami Fokir Ami Miskin');
        return;
    }

    const currentWithdrewTotal = newWithdrewAmount + previousWithdrewTotal;
    previousWithdrew.innerText = currentWithdrewTotal;


    const currentBalance = previousBalanceTotal - newWithdrewAmount;
    balanceTotalElement.innerText = currentBalance;



    // clear the withdrew field
    withdrawField.value = ``;
})