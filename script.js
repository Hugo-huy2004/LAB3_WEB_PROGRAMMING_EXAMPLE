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
                window.location.href = 'HomePage.html'; // Chuyển sang trang chính sau đăng nhập
            } else {
                if (errorMsg) errorMsg.textContent = 'Sai tài khoản hoặc mật khẩu!';
            }
        });
    }
});
// Tìm form có ID "loginForm" và gắn sự kiện submit
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value; 
    let errorElement = document.getElementById("error"); 
    if (
      (username === "myprogram" && password === "123")
    ) {
        window.location.href = "templates/HomePage.html";
    } else {
        errorElement.textContent = "Sai tài khoản hoặc mật khẩu";
    }
});

