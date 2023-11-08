function checkOddEven() {
    const numberInput = document.getElementById("number");
    const resultElement = document.getElementById("result");
    
    const number = parseInt(numberInput.value);
    
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            resultElement.textContent = number + " adalah angka genap.";
        } else {
            resultElement.textContent = number + " adalah angka ganjil.";
        }
    } else {
        resultElement.textContent = "Masukkan angka yang valid.";
    }
}
