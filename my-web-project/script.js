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

