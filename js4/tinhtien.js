const tenHang = { 1: "CPU", 2: "HDD", 3: "RAM", 4: "ROM" };
const soLuongCo = { 1: 14, 2: 14, 3: 12, 4: 23 };
const donGia = { 1: 120, 2: 10, 3: 29, 4: 130 };

// Khi đánh dấu chọn mua thì mở ô số lượng, bỏ chọn thì khoá lại và xoá số
function batTatO(i) {
    const chon = document.getElementById("chon" + i);
    const mua = document.getElementById("mua" + i);
    mua.disabled = !chon.checked;
    if (!chon.checked) mua.value = "";
}

// Tính tổng tiền các mặt hàng đã chọn
function tinhTien() {
    let tong = 0;
    for (let i = 1; i <= 4; i++) {
        if (!document.getElementById("chon" + i).checked) continue;

        const soLuong = parseInt(document.getElementById("mua" + i).value);
        if (isNaN(soLuong) || soLuong <= 0) {
            alert("Mặt hàng " + tenHang[i] + ": hãy nhập số lượng mua lớn hơn 0.");
            return;
        }
        if (soLuong > soLuongCo[i]) {
            alert("Mặt hàng " + tenHang[i] + ": số lượng mua vượt quá số lượng còn (" + soLuongCo[i] + ").");
            return;
        }
        tong += soLuong * donGia[i];
    }

    if (document.getElementById("vat").checked) {
        tong = tong * 1.1;
    }
    document.getElementById("tongcong").value = Math.round(tong * 100) / 100;
}

// Đưa tất cả về trạng thái ban đầu
function nhapLai() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("chon" + i).checked = false;
        document.getElementById("mua" + i).disabled = true;
        document.getElementById("mua" + i).value = "";
    }
    document.getElementById("vat").checked = false;
    document.getElementById("tongcong").value = "0";
}
