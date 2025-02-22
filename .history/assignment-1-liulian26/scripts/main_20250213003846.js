document.addEventListener("DOMContentLoaded", function() {
    applyTheme();
    switchTheme();
    setUpDateTimeDisplay();
});

// function that apply and save theme
function applyTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
}


// function that related buttom of switch theme 
function switchTheme() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", toggleTheme);
}


// function that toggle theme
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");

    body.classList.toggle("dark-theme");
    const newTheme = body.classList.contains("dark-theme") ? "dark" : "light";

    themeToggleBtn.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", newTheme);
}

// function that display data, time
function setUpDateTimeDisplay() {
    const dateTimeBtn = document.getElementById("date-time-button");
    dateTimeBtn.addEventListener("click", showDateTime);
}


function showDateTime() {
    const dateRadio = document.getElementById("date-radio");
    const timeRadio = document.getElementById("time-radio");
    const dateTimeOutput = document.getElementById("date-time-output");
    const now = new Date();
    let outputText = "";


    // Date format is "Mon, Feb 1, 2025" and time format is "08:10:56 PM."
    if (dateRadio.checked) {
        outputText = now.toLocaleDateString("en-US", {weekday: "short", year: "numeric", month: "short", day: "numeric"});
    } else if (timeRadio.checked) {
        outputText = now.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true});
    }
    dateTimeOutput.textContent = outputText;
}



