const futuresData = [
    { symbol: "ES", price: 4500.25, change: "+1.25", volume: 1500 },
    { symbol: "NQ", price: 15670.5, change: "-12.50", volume: 850 },
    { symbol: "GC", price: 1935.2, change: "+7.5", volume: 300 },
    { symbol: "CL", price: 76.23, change: "-0.45", volume: 1200 }
];

const futuresTableBody = document.getElementById("futuresData");
const themeToggle = document.getElementById("themeToggle");

// Populate Futures Data
function populateFuturesTable(data) {
    futuresTableBody.innerHTML = ""; // Clear existing rows
    data.forEach((item) => {
        const row = document.createElement("tr");

        // Populate row data
        row.innerHTML = `
            <td>${item.symbol}</td>
            <td>${item.price}</td>
            <td class="${item.change.startsWith("+") ? "positive" : "negative"}">${item.change}</td>
            <td>${item.volume}</td>
        `;
        futuresTableBody.appendChild(row);
    });
}

// Theme Toggler
themeToggle.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("main-theme");
    body.classList.toggle("christmas-theme");

    // Update Button Text
    themeToggle.textContent = body.classList.contains("christmas-theme")
        ? "Switch to Main Theme ✨"
        : "Switch to Christmas Theme 🎄";
});

// Initialize
populateFuturesTable(futuresData);

// Simulate Real-Time Updates (every 3 seconds)
setInterval(() => {
    futuresData.forEach((item) => {
        // Simulate price change
        const randomChange = (Math.random() * 10 - 5).toFixed(2);
        item.price = +(item.price + +randomChange).toFixed(2);
        item.change = `${randomChange.startsWith("-") ? "" : "+"}${randomChange}`;
    });
    populateFuturesTable(futuresData);
}, 3000);
