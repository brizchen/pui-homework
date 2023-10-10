let selectGlazing = document.querySelector('#glazing');
let selectPackSize = document.querySelector('#packsize');

// populate dropdown

function displayOptions() {
    for (var i = 0; i < allGlazing.length; i++) {
        let newSelection = allGlazing[i];
        var option = document.createElement('option');
        option.text=newSelection.glazing;
        option.value=newSelection.priceGlazing;
        selectGlazing.add(option);
    }

    for (var i = 0; i < allPackSize.length; i++) {
        let newSelection = allPackSize[i];
        var option = document.createElement('option');
        option.text=newSelection.size;
        option.value=newSelection.pricePackSize;
        selectPackSize.add(option);
    }
}

selectGlazing.addEventListener('change', onSelectValueChange);
selectPackSize.addEventListener('change', onSelectValueChange);

displayOptions()

// update price

function onSelectValueChange() {
    let priceGlazing = document.querySelector('#pricefinal');
    let glazingPrice = Number(selectGlazing.value);
    let packPrice = Number(selectPackSize.value);
    const basePrice = rolls[rollType].basePrice;
    let newPrice = (basePrice + glazingPrice) * packPrice;
    priceGlazing.innerHTML = '$' + newPrice.toFixed(2);
  }  

const cart = []

// update URL parameters

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.querySelector('#header');
headerElement.innerText = rollType + ' Cinnamon Roll';

const rollImage = document.querySelector('#roll-img');
rollImage.src = 'assets/products/' + rolls[rollType].imageFile;

const rollPrice = document.querySelector('#pricefinal');
rollPrice.innerText = '$' + rolls[rollType].basePrice;

const btnCart = document.querySelector('#checkout-btn');
btnCart.addEventListener("click", updateRoll);

// log roll info

function updateRoll(){
    let newGlazing=allGlazing[selectGlazing.selectedIndex];
    let newPackSize=allPackSize[selectPackSize.selectedIndex];
    let newRoll= new Roll(rollType, newGlazing.glazing, newPackSize.size, '$' + rolls[rollType].basePrice);
    cart.push (newRoll);
    console.log(cart);
}