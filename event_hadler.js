const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener('click',function()
{   
    const Unit = decreaseAmount("mobileAmount");
    if (Unit <= 0)
{
    document.getElementById("btnMinus").disabled = true;
}

   balanceMobile("mobilePrice",Unit);



   const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const TotalBalance = subTotalNumber-1219;
document.getElementById("subTotal").innerText = TotalBalance;

TaxAmount();
TotalAmount();
})



const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener('click',function()
{   
     const Unit = increaseAmount("mobileAmount");
     document.getElementById("btnMinus").disabled = false;
     balanceMobile("mobilePrice",Unit);

     const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal);
    const TotalBalance = subTotalNumber+1219;
    document.getElementById("subTotal").innerText = TotalBalance;

    TaxAmount();
    TotalAmount();
})



const btnMinusCasing = document.getElementById("btnMinusCasing");
btnMinusCasing.addEventListener('click',function()
{   
const Unit = decreaseAmount("casingAmount");
if (Unit <= 0)
{
    document.getElementById("btnMinusCasing").disabled = true;
}

balanceCasing("casingPrice",Unit);

const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
const TotalBalance = subTotalNumber-59;
document.getElementById("subTotal").innerText = TotalBalance;

TaxAmount();
TotalAmount();
})



const btnPlusCasing = document.getElementById("btnPlusCasing");
btnPlusCasing.addEventListener('click',function()
       {   
            const Unit = increaseAmount("casingAmount");
            document.getElementById("btnMinusCasing").disabled = false;
            balanceCasing("casingPrice",Unit);

            const subTotal = document.getElementById("subTotal").innerText;
            const subTotalNumber = parseFloat(subTotal);
            const TotalBalance = subTotalNumber+59;
            document.getElementById("subTotal").innerText = TotalBalance;

            TaxAmount();
            TotalAmount();

       })

       document.getElementById("check-out").addEventListener('click',function()
       {
        alert("This Website was made for testing Purpose");
       })
       


function decreaseAmount(id)
       {
        const current = document.getElementById(id).value;
        console.log(current);
           const currentNumber = parseInt(current);
           console.log(currentNumber);
           const
           totalAmount = currentNumber - 1;
           document.getElementById(id).value = totalAmount;
           return totalAmount;
       }

       function increaseAmount(id)
       {
        const current = document.getElementById(id).value;
           const currentNumber = parseInt(current);
           const
           totalAmount = currentNumber + 1;
           document.getElementById(id).value = totalAmount;
           return totalAmount;
       }
       function balanceMobile(id,unit)
       {
        const unitPrice = document.getElementById(id).innerText;
        const unitPriceNumber = 1219;
        const balance = unit*unitPriceNumber;
        document.getElementById(id).innerText = balance;
        return balance;
       }
       function balanceCasing(id,unit)
       {
        const unitPriceNumber = 59;
        const balance = unit*unitPriceNumber;
        document.getElementById(id).innerText = balance;
        return balance;
       }
       
       function TaxAmount()
       {
           const TaxMobile = document.getElementById("mobileAmount").value;
           const TaxCasing = document.getElementById("casingAmount").value;
           
           
           const TaxMobileNumber = parseInt(TaxMobile);
           const TaxCasingNumber = parseInt(TaxCasing);

           const TotalTax = (TaxMobileNumber*62.5)+(TaxCasingNumber*3.7);

           document.getElementById("Tax").innerText = TotalTax;
       }

       function TotalAmount()
       {
           const subTotal = document.getElementById("subTotal").innerText;

           const Tax = document.getElementById("Tax").innerText;

           const subTotalNumber = parseFloat(subTotal);
           const TaxNumber = parseFloat(Tax);

           const TotalPrice = subTotalNumber + TaxNumber;

           document.getElementById("priceInTotal").innerText = TotalPrice;
       }




