// Function to update the current time in milliseconds
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Update time on page load
updateTime();

// Optionally, update time every second for a live clock effect
setInterval(updateTime, 1000);