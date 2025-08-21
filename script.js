
// Xử lý đăng nhập demo, chuyển hướng đúng sang templates/HomePage.html
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('error');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            if (username === 'myprogram' && password === '123') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'templates/HomePage.html';
            } else {
                if (errorMsg) errorMsg.textContent = 'Sai tài khoản hoặc mật khẩu!';
            }
        });
    }
});

