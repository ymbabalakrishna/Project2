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

const members = [
    { name: "Yamba Balakrishna", birthday: "02-17" }, // Month-Day
    { name: "Yamba Shireesha", birthday: "02-17" },
    { name: "Ramesh", birthday: "02-18" }
];

function checkBirthdays() {
    const now = new Date();
    // Get month and day in MM-DD format
    // We add 1 to month because JS months start at 0
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const todayStr = `${month}-${day}`;

    // Find members whose birthday is today
    const birthdayPeople = members.filter(m => m.birthday === todayStr);

    const displayArea = document.getElementById('birthday-display');
    
    if (birthdayPeople.length > 0) {
        const names = birthdayPeople.map(m => m.name).join(", ");
        displayArea.innerHTML = `🎉 Happy Birthday to: <strong>${names}</strong>! 🎂`;
        displayArea.style.display = "block"; // Show the div
    } else {
        displayArea.style.display = "none"; // Hide it if no one has a birthday
    }
}

// Run it once when page loads
checkBirthdays();

setInterval(() => {
    showTime(); // Your existing clock function
    
    // Check for birthdays once every hour (3600000 ms) 
    // instead of every second to save performance
    if (new Date().getMinutes() === 0 && new Date().getSeconds() === 0) {
        checkBirthdays();
    }
}, 1000);