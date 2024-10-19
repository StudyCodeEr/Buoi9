document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault(); // Ngăn form không gửi đi ngay lập tức
    
    var ho = document.getElementById('ho').value.trim();
    var ten = document.getElementById('ten').value.trim();
    var sdt = document.getElementById('sdt').value.trim();
    
    // Kiểm tra họ và tên
    if (ho === "" || ten === "") {
        alert("Vui lòng nhập Họ và Tên.");
        return false;
    }
    
    // Kiểm tra số điện thoại (phải là số và độ dài là 10)
    var sdtPattern = /^[0-9]{10}$/;
    if (!sdtPattern.test(sdt)) {
        alert("Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số.");
        return false;
    }
    
    // Nếu tất cả thông tin hợp lệ, bạn có thể gửi form
    alert("Đăng ký thành công!");
    this.submit(); // Tiếp tục gửi form nếu tất cả điều kiện đúng
};
