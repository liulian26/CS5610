document.addEventListener("DOMContentLoaded", function() {
    loadTheme();
    setTimeout(setUpDateTimeDisplay, 100);

});


// function that switch theme
function loadTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (!themeToggleBtn) {
        console.error("Theme toggle button not found!");
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
    themeToggleBtn.addEventListener("click", toggleTheme);
}


// function that toggle theme
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
    setTimeout(setUpDateTimeDisplay, 100);
}

// function that display data, time
function setUpDateTimeDisplay() {
    const dateTimeBtn = document.getElementById("date-time-button");

    if (!dateTimeBtn) {
        console.error("Date time button not found!");
        return;
    }
    console.log("Date-time button found and event added");
    dateTimeBtn.addEventListener("click", showDateTime);
}

function showDateTime() {
    const dateRadio = document.getElementById("date-radio");
    const timeRadio = document.getElementById("time-radio");
    const dateTimeOutput = document.getElementById("date-time-output");


    if (!dateRadio || !timeRadio || !dateTimeOutput) {
        console.error("One or more date-time elements not found!");
        return;
    }


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



