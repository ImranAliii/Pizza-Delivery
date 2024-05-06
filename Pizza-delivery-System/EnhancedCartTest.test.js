
// Test File 2 - Testing Cart Interaction
const assert = require('assert');

function addToCart() {
    const cartCounter = document.getElementById('cartCounter');
    let currentCount = parseInt(cartCounter.textContent) || 0;
    cartCounter.textContent = (currentCount + 1).toString();
}

describe('Cart Interaction Test', () => {
    it('should increment cart count', () => {
        // Simulating the cart counter
        document.body.innerHTML = '<div id="cartCounter">0</div>';

        addToCart();
        const cartCount = document.getElementById('cartCounter').textContent;
        assert.equal(cartCount, '1'); // Expect cart count to be 1 after adding an item
    });
});
