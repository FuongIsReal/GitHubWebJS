function xemGia() {
    // Lấy tên nhập vào, bỏ khoảng trắng thừa và đổi về chữ thường để so sánh
    const ten = document.getElementById("ten_hoa_qua").value.trim().toLowerCase();
    const ketQua = document.getElementById("ketqua");

    let gia;
    switch (ten) {
        case "ổi":
        case "dưa hấu":
            gia = 20000;
            break;
        case "táo":
            gia = 30000;
            break;
        case "cam":
        case "chôm chôm":
            gia = 40000;
            break;
        case "măng cụt":
            gia = 50000;
            break;
        default:
            gia = null;
    }

    if (gia === null) {
        ketQua.className = "loi";
        ketQua.textContent = "Tìm không thấy";
    } else {
        ketQua.className = "";
        ketQua.textContent = gia + " VNĐ/kg";
    }
}
