/* =============================
    getting DOM objects
=============================== */

// memory type buttons
const memoryType1Btn = document.getElementById('memory-type1-btn');
const memoryType2Btn = document.getElementById('memory-type2-btn');

// storage type buttons
const storageType1Btn = document.getElementById('storage-type1-btn');
const storageType2Btn = document.getElementById('storage-type2-btn');
const storageType3Btn = document.getElementById('storage-type3-btn');

// delivery type buttons
const deliveryType1Btn = document.getElementById('delivery-type1-btn');
const deliveryType2Btn = document.getElementById('delivery-type2-btn');

// costing
const bestPrice = document.getElementById('best-price'); //best price
const extraMemoryCost = document.getElementById('extra-memory-cost'); //extra memory cost
const extraStorageCost = document.getElementById('extra-storage-cost'); //extra storage cost
const deliveryCharge = document.getElementById('delivery-charge'); //delivery charge
const totalPrice = document.getElementById('total'); //total

// promo code
const promoCode = document.getElementById('promo-code');
const promoCodeBtn = document.getElementById('promo-code-btn');

// total with promo code
const totalPriceWithPromoCode = document.getElementById('total-w-promo');


/* =============================
    functions & event handlers
=============================== */

// calculate total price without promo code
function getTotalPrice() {
    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCharge.innerText);

    totalPriceWithPromoCode.innerText = totalPrice.innerText;
}

// // calculate total price with promo code
// function getTotalPriceWithPromoCode() {
// }

// extra memory cost
function getExtraMemoryCost(btn) { //adding extra memory cost
    if (btn == 'btn1') extraMemoryCost.innerText = 0;
    else extraMemoryCost.innerText = 180;
}
memoryType1Btn.addEventListener('click', function () { //extra memory cost event handler
    getExtraMemoryCost('btn1');
    getTotalPrice();
})
memoryType2Btn.addEventListener('click', function () { //extra memory cost event handler
    getExtraMemoryCost('btn2');
    getTotalPrice();
})

// extra storage cost
function getExtraStorageCost(btn) { //adding extra storage cost
    if (btn == 'btn1') extraStorageCost.innerText = 0;
    else if (btn == 'btn2') extraStorageCost.innerText = 100;
    else extraStorageCost.innerText = 180;
}
storageType1Btn.addEventListener('click', function () { //extra storage cost event handler
    getExtraStorageCost('btn1');
    getTotalPrice();
})
storageType2Btn.addEventListener('click', function () { //extra storage cost event handler
    getExtraStorageCost('btn2');
    getTotalPrice();
})
storageType3Btn.addEventListener('click', function () { //extra storage cost event handler
    getExtraStorageCost('btn3');
    getTotalPrice();
})

// delivery charge
function getDeliveryCharge(btn) { //adding delivery charge
    if (btn == 'btn1') deliveryCharge.innerText = 0;
    else deliveryCharge.innerText = 20;
}
deliveryType1Btn.addEventListener('click', function () { //delivery charge event handler
    getDeliveryCharge('btn1');
    getTotalPrice();
})
deliveryType2Btn.addEventListener('click', function () { //delivery charge event handler
    getDeliveryCharge('btn2');
    getTotalPrice();
})

// promo code
promoCodeBtn.addEventListener('click', function () {
    if (promoCode.value == 'stevekaku')
        totalPriceWithPromoCode.innerText = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.2;
    else
        totalPriceWithPromoCode.innerText = parseInt(totalPrice.innerText);
    promoCode.value = '';
})