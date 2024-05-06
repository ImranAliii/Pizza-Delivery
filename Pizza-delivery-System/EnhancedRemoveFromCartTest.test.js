
// Test File 4 - Testing Remove from Cart Functionality
const assert = require('assert');

function removeItemFromCart() {
    const cartCounter = document.getElementById('cartCounter');
    let currentCount = parseInt(cartCounter.textContent) || 0;
    cartCounter.textContent = Math.max(0, currentCount - 1).toString();
    return parseInt(cartCounter.textContent);
}

describe('Remove from Cart Functionality Test', () => {
    it('should remove an item from the cart and decrement count', () => {
        // Simulating the cart counter with an initial count of 2
        document.body.innerHTML = '<div id="cartCounter">2</div>';

        const newCount = removeItemFromCart();
        assert.equal(newCount, 1); // Expect cart count to be 1 after removing an item
    });
});
