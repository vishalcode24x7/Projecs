const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(0)';
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.style.transform = 'translateX(-100%)';
    }
});