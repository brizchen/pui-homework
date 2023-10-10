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

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}

// local storage functions

const cart = []

function addtoCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll);
    return roll;
}

function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("storedRolls", cartString);
}

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem("storedRolls");
    const cart = JSON.parse(cartString);
    for (const rollData of cart) {
        addtoCart(rollData);
    }
}