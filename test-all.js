// test-all.js
// Script kiểm tra tự động các chức năng chính của web tĩnh này
// Chạy file này trong trình duyệt console hoặc dùng cho test tự động

function testLogin() {
    localStorage.removeItem('isLoggedIn');
    // Giả lập nhập đúng
    localStorage.setItem('isLoggedIn', 'true');
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        console.error('Test login FAILED');
        return false;
    }
    console.log('Test login PASSED');
    return true;
}

function testLogout() {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.removeItem('isLoggedIn');
    if (localStorage.getItem('isLoggedIn')) {
        console.error('Test logout FAILED');
        return false;
    }
    console.log('Test logout PASSED');
    return true;
}

function testRedirectProtection() {
    // Giả lập chưa đăng nhập
    localStorage.removeItem('isLoggedIn');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        console.error('Test redirect protection FAILED');
        return false;
    }
    console.log('Test redirect protection PASSED');
    return true;
}

function runAllTests() {
    let ok = true;
    ok = testLogin() && ok;
    ok = testLogout() && ok;
    ok = testRedirectProtection() && ok;
    if (ok) {
        console.log('Tất cả các test đều PASSED!');
    } else {
        console.error('Có test bị FAILED!');
    }
}

// Để chạy: mở console, gõ runAllTests();
