document.addEventListener("DOMContentLoaded", function () {
    /*** 1. 主题切换功能 ***/
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // 检查 localStorage 中是否存有主题设置
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Light Mode";
    }

    // 监听按钮点击事件，切换主题
    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // 判断当前是否为 dark mode，并更新按钮文本
        if (body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "Light Mode";
            localStorage.setItem("theme", "dark"); // 存储主题
        } else {
            themeToggleBtn.textContent = "Dark Mode";
            localStorage.setItem("theme", "light"); // 存储主题
        }
    });

    /*** 2. 日期/时间显示功能 ***/
    const dateRadio = document.getElementById("date-radio");
    const timeRadio = document.getElementById("time-radio");
    const dateTimeBtn = document.getElementById("date-time-button");
    const dateTimeOutput = document.getElementById("date-time-output");

    dateTimeBtn.addEventListener("click", function () {
        const now = new Date();
        let outputText = "";

        if (dateRadio.checked) {
            // 格式化日期：Mon, Feb 1, 2025
            const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
            outputText = now.toLocaleDateString("en-US", options);
        } else if (timeRadio.checked) {
            // 格式化时间：08:10:56 PM
            const options = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
            outputText = now.toLocaleTimeString("en-US", options);
        }

        // 更新页面上的输出文本
        dateTimeOutput.textContent = outputText;
    });
});




