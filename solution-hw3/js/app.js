let allGlazing = [
    {
        glazing: 'Keep original',
        priceGlazing: 0.00,
    },
    {
        glazing: 'Sugar milk',
        priceGlazing: 0.00,
    },
    {   glazing: 'Vanilla milk',
        priceGlazing: 0.50,
    },
    {
        glazing: 'Double chocolate',
        priceGlazing: 1.50,
    }
];

let allPackSize = [
    {
        size: 1,
        pricePackSize: 1,
    },
    {
        size: 3,
        pricePackSize: 3,
    },
    {
        size: 6,
        pricePackSize: 5,
    },
    {
        size: 12,
        pricePackSize: 10,
    }
];

let selectGlazing = document.querySelector('#glazing');
let selectPackSize = document.querySelector('#packsize');


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

window.onload(displayOptions())

function onSelectValueChange() {
    let priceGlazing = document.querySelector('#pricefinal');
    let glazingPrice = Number(selectGlazing.value);
    let packPrice = Number(selectPackSize.value);
    const basePrice = 2.49;
    let newPrice = (basePrice + glazingPrice) * packPrice;
    console.log(newPrice);
    priceGlazing.innerHTML = '$' + newPrice.toFixed(2);
  }  