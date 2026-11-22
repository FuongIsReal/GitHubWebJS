function tinhSoNgay() {
    const thang = parseInt(document.getElementById("thang").value);
    const ketQua = document.getElementById("ketqua");

    if (isNaN(thang) || thang < 1 || thang > 12) {
        ketQua.className = "loi";
        ketQua.textContent = "Hãy nhập số thứ tự tháng từ 1 đến 12.";
        return;
    }

    ketQua.className = "";
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ketQua.textContent = "Tháng " + thang + " có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ketQua.textContent = "Tháng " + thang + " có 30 ngày";
            break;
        case 2:
            ketQua.textContent = "Tháng 2 có 28 hoặc 29 ngày";
            break;
    }
}
