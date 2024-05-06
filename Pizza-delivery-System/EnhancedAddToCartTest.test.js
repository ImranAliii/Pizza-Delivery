
// Test File 3 - Testing Add to Cart Functionality
const assert = require('assert');

function addItemToCart() {
    const cartCounter = document.getElementById('cartCounter');
    let currentCount = parseInt(cartCounter.textContent) || 0;
    cartCounter.textContent = (currentCount + 1).toString();
    return parseInt(cartCounter.textContent);
}

describe('Add to Cart Functionality Test', () => {
    it('should add an item to the cart and increment count', () => {
        // Simulating the cart counter with an initial count of 0
        document.body.innerHTML = '<div id="cartCounter">0</div>';

        const newCount = addItemToCart();
        assert.equal(newCount, 1); // Expect cart count to be 1 after adding an item
    });
});
