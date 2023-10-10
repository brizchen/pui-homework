const cartSet = new Set();

function addtoCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(roll);
    return roll;
}

// create 4 new rolls

const originalRoll = addtoCart(
    "Original",
    "Sugar milk",
    1,
    rolls["Original"].basePrice
);
const walnutRoll = addtoCart(
    "Walnut",
    "Vanilla milk",
    12,
    rolls["Walnut"].basePrice
);
const raisinRoll = addtoCart(
    "Raisin",
    "Sugar milk",
    3,
    rolls["Raisin"].basePrice
);
const appleRoll = addtoCart(
    "Apple",
    "Original",
    3,
    rolls["Apple"].basePrice
);

// loop through cart set and add to checkout

for (const roll of cartSet) {
    createElement(roll);
    updatePrice(roll);
  }

// create new roll from template

function createElement(roll) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart-item');
  
    const btnDelete = roll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
      deleteRoll(roll);
    });
    
    const rollListElement = document.querySelector('.cart-list');
    rollListElement.prepend(roll.element);

    updateElement(roll);
  }

// update HTML elements

function updateElement(roll) {
  const rollImage = roll.element.querySelector('.cart-thumbnail');
  const headerElement = roll.element.querySelector('#header');
  const rollGlazing = roll.element.querySelector('#glazing');
  const rollPackSize = roll.element.querySelector('#packsize');
  const rollPrice = roll.element.querySelector('.price');

  const calculatedPrice = calculatePrice(roll);

  rollImage.src = 'assets/products/' + rolls[roll.type].imageFile;
  headerElement.innerText = roll.type + ' Cinnamon Roll';
  rollGlazing.innerText = 'Glazing: ' + roll.glazing;
  rollPackSize.innerText = 'Pack Size: ' + roll.size;
  rollPrice.innerText = '$' + calculatedPrice;
}

// calculate price of roll

function calculatePrice(roll) {
  let glazingPrice = 0;
  for (const option of allGlazing){
      if(roll.glazing == option.glazing){
          glazingPrice = option.priceGlazing;
      }
  }

  let packPrice = 0;
  for (const option of allPackSize){
      if (roll.size == option.size){
          packPrice = option.pricePackSize;
      }
  }

  let basePrice = rolls[roll.type].basePrice;
  let calculatedPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  return calculatedPrice;
}

// update total price when rolls are deleted

function updatePrice(roll) {
  let finalPrice = document.querySelector('#pricefinal');
  let totalPrice = 0;
  if (cartSet.size == 0) {
    finalPrice.innerText = "$0.00";
  }
  for (const roll of cartSet) {
    totalPrice = totalPrice + Number(calculatePrice(roll));
    finalPrice.innerText = "$" + totalPrice.toFixed(2);
  }
}

function deleteRoll(roll) {
  roll.element.remove();
  cartSet.delete(roll);
  updatePrice(roll);
}