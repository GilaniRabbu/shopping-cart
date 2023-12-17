/*function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})*/



// function phoneCountChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-number');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     } else if (isIncrease == false && phoneNewCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// }



// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById("case-number");
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     } else if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }

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
    } else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    document.getElementById(product + "-number").value = productNewCount;

    let productTotal = 0;
    if (product == "phone") {
        productTotal = productNewCount * 1219;
    } else if (product == "case") {
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