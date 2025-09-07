import { showAllPodcasts, setupEventListeners } from './scripts/ui/renderCard.js';
import { initModalHandlers } from './scripts/ui/modalHandlers.js';

// Initialize the application
function init() {
    showAllPodcasts();
    setupEventListeners();
    initModalHandlers();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);