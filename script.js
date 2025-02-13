const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'https://zxyxs.github.io/dashboard.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 登录逻辑可以在这里实现
    alert('登录成功');
});
