const themeToggle = document.getElementById('theme-toggle');
console.log("hellow")
function toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        console.log("light")
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log("dark");
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
    console.log("dark");
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false;
    console.log("light");
}

themeToggle.addEventListener('change', toggle);