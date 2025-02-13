const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    registeredUsers.push({ username, email, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    alert('注册成功，请登录');
    container.classList.remove('right-panel-active');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = registeredUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert('登录成功');
        window.location.href = 'https://zxyxs.github.io/dashboard.html';
    } else {
        alert('邮箱或密码错误，或用户未注册');
    }
});
