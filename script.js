document.getElementById("calculateButton").addEventListener("click", calculateResults);

function calculateResults() {
    const rateInput = parseFloat(document.getElementById("rateInput").value);
    const yearsInput = parseFloat(document.getElementById("yearsInput").value);
    const paymentInput = parseFloat(document.getElementById("paymentInput").value);

    const monthlyRate = (1 + (rateInput / 200)) ** (1 / 6) - 1;
    const numberOfPayments = yearsInput * 12;

    const presentValue = paymentInput / monthlyRate * (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    
    const breakEvenPrice = presentValue / 0.8; // Break Even Purchase Price
    const downPayment = breakEvenPrice - presentValue; // 20% Down Payment

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Break Even Purchase Price: $${breakEvenPrice.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}<br>
    80% Mortgage Amount: $${presentValue.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}<br>
                               
                               20% Down Payment: $${downPayment.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
}
