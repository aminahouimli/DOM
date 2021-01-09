if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
var removeitemButtons = document.getElementsByClassName("btn")
    console.log(removeitemButtons)
    for (var i = 0; i < removeitemButtons.length; i++) {
        var button = removeitemButtons[i]
        button.addEventListener("click", removeitem)
    }  
    var itemquantity= document.getElementsByClassName('item-qte')
    for (var i = 0; i < itemquantity.length; i++) {
        var item = itemquantity[i]
      item.addEventListener('change', qteChanged)  
}
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});
function removeitem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}
function qteChanged(event) {
    var iitem = event.target
    if (isNaN(item.value) || item.value <= 0) {
       item.value = 1
    }
    updateTotal()
}
function updateTotal() {
    var itemSections = document.getElementsByClassName("item")[0]
    var total = 0
        var price = itemSections.getElementsByClassName("item-total-price")[0]
        var qteElement = itemSections.getElementsByClassName("item-qte")[0]
        var priceElement = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = qteElement.value
        totalprice = total + (price * quantity)
    }
    totalprice = Math.round(total* 100) / 100
    document.getElementsByClassName("item-total-price")[0].innerText = '$' + total}
function removeitem(event) {
     // Removes an element from the document.
     var button = document. getElementByname(button);
     button. parentNode. removeChild(element);
}
