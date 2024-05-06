
// Test File 1 - Testing Banner Visibility
const assert = require('assert');

function toggleBannerVisibility() {
    const banner = document.querySelector('.banner-container');
    banner.classList.toggle('hidden');
    return banner.classList.contains('hidden');
}

describe('Banner Visibility Test', () => {
    it('should toggle banner visibility', () => {
        // Simulating the initial state as visible
        document.body.innerHTML = '<div class="banner-container"></div>';
        let isHidden = toggleBannerVisibility();
        assert.equal(isHidden, true); // Expect banner to be hidden after toggle

        isHidden = toggleBannerVisibility();
        assert.equal(isHidden, false); // Expect banner to be visible after second toggle
    });
});
