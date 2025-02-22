document.addEventListener("DOMContentLoaded", function() {
});

// function that switch theme
function switchTheme() {
    const theme = document.getElementById("theme-toggle");

    // check and load the theme from local storage
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
    // switch theme
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
    
}

