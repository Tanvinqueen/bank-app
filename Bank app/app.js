document.getElementById('deposit-button').addEventListener('click',function(){
    //console.log('deposit button clicked!')
    const dipositInput = document.querySelector("#deposit-input");
    const dipositAmount = parseFloat(dipositInput.value);
    const dipositTotal = document.querySelector("#deposit-total");
    const currentDiposiot = parseFloat(dipositTotal.innerText);
    const updateDiposit = parseFloat(currentDiposiot+dipositAmount);




    dipositTotal.innerText = dipositAmount;
    //update blance
    const blanceTotal = document.querySelector("#balance-total");
    const currentAmount = parseFloat( blanceTotal.innerText);
    const updateBlance = currentAmount + dipositAmount;
    blanceTotal.innerText = updateBlance;



    dipositInput.value = "";
   
       




})
document.getElementById('withdraw-button').addEventListener('click',function(){

const withdrawtInput = document.querySelector("#withdraw-input");
const withdrawAmount = parseFloat(withdrawtInput.value);
const withdrawTotal = document.querySelector("#withdraw-total");
const currentWithdraw = parseFloat(withdrawTotal.innerText);
const updateDiposit = parseFloat(currentWithdraw - withdrawAmount);



withdrawTotal.innerText = withdrawAmount;
//update blance
const withdrawBlanceTotal = document.querySelector("#balance-total");
const currentAmount = parseFloat( withdrawBlanceTotal.innerText);
const updateBlance = currentAmount - withdrawAmount;
withdrawBlanceTotal.innerText = updateBlance;



withdrawtInput.value = "";
})