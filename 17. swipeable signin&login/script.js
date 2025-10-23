const loginButton = document.querySelector('.switch-login');
const signupButton = document.querySelector('.switch-signup');
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');


loginButton.addEventListener('click', () => {
    signup.style.transform = "translateX(0%)";
});

signupButton.addEventListener('click', () => {
    signup.style.transform = "translateX(100%)";
});