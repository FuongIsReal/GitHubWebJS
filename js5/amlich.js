// Can: lấy phần dư của năm cho 10
function layCan(namDuong) {
    const du = namDuong % 10;
    switch (du) {
        case 0: return "Canh";
        case 1: return "Tân";
        case 2: return "Nhâm";
        case 3: return "Quý";
        case 4: return "Giáp";
        case 5: return "Ất";
        case 6: return "Bính";
        case 7: return "Đinh";
        case 8: return "Mậu";
        case 9: return "Kỷ";
    }
}

// Chi: lấy phần dư của năm cho 12
function layChi(namDuong) {
    const du = namDuong % 12;
    switch (du) {
        case 0: return "Thân";
        case 1: return "Dậu";
        case 2: return "Tuất";
        case 3: return "Hợi";
        case 4: return "Tý";
        case 5: return "Sửu";
        case 6: return "Dần";
        case 7: return "Mẹo";
        case 8: return "Thìn";
        case 9: return "Tỵ";
        case 10: return "Ngọ";
        case 11: return "Mùi";
    }
}

// Năm âm lịch = Can + Chi
function doiNam() {
    const nam = parseInt(document.getElementById("namDuong").value);
    const kq = document.getElementById("ketqua");

    if (isNaN(nam) || nam <= 0) {
        kq.textContent = "Vui lòng nhập năm dương lịch hợp lệ.";
        return;
    }
    kq.textContent = "Năm " + nam + " là năm " + layCan(nam) + " " + layChi(nam) + ".";
}
