// Xử lý đăng nhập và lưu trạng thái đăng nhập vào localStorage
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
                window.location.href = "templates/HomePage.html"; // Chuyển sang trang chính sau đăng nhập
            } else {
                if (errorMsg) errorMsg.textContent = 'Sai tài khoản hoặc mật khẩu!';
            }
        });
    }
});

