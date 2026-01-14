const btn = document.getElementById("themeBtn");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const THEME_KEY = "theme";

/* Apply theme */
function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
}

/* Get system theme */
function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

/* Initialize theme on page load */
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    applyTheme(savedTheme || getSystemTheme());
}

/* Button toggle */
btn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
});

/* Listen for OS theme changes (only if user hasn't chosen manually) */
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(getSystemTheme());
    }
});

/* Run on load */
initTheme();
