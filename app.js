const phonePlus = document.getElementById("phone-plus");
const phoneMinus = document.getElementById("phone-minus");
const casePlus = document.getElementById("case-plus");
const caseMinus = document.getElementById("case-minus");

phonePlus.addEventListener("click", () => {
    handleProductChange("phone", true);
});
phoneMinus.addEventListener("click", () => {
    handleProductChange("phone", false);
});
casePlus.addEventListener("click", () => {
    handleProductChange("case", true);
});
caseMinus.addEventListener("click", () => {
    handleProductChange("case", false);
});

function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);

    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    document.getElementById(product + "-number").value = productNewCount;

    let productTotal = 0;
    if (product == "phone") {
        productTotal = productNewCount * 1219;
    }
    else if (product == "case") {
        productTotal = productNewCount * 59;
    }

    document.getElementById(product + "-total").innerText = productTotal;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("sub-total").innerText = totalPrice;

    const tax = Math.round(totalPrice / 10);
    document.getElementById("tax-amount").innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("total-price").innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productCount = parseInt(productInput.value);
    return productCount;
}