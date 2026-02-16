function showTime() {
    const now = new Date();

    // Get the Time
    const time = now.toLocaleTimeString();

    // Get the Day and Date
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    const date = now.toLocaleDateString('en-GB', options);

    // Target the 'live-clock' span specifically
    const clockElement = document.getElementById('live-clock');
    
    if (clockElement) {
        clockElement.innerHTML = `${date} | ${time}`;
    }
}

// Update immediately, then every second
showTime();
setInterval(showTime, 1000);