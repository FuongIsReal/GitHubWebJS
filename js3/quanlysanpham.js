// Bước 2: mảng chứa danh sách sản phẩm
let sanPham = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];

// Vị trí sản phẩm đang được chọn để sửa (-1 là chưa chọn)
let viTriSua = -1;

// Bước 3: hiển thị danh sách bằng vòng lặp, mỗi dòng gồm STT, tên và nút Xoá
function hienThiDanhSach() {
    const tbody = document.getElementById("dsBody");
    tbody.innerHTML = "";

    sanPham.forEach(function (ten, i) {
        const tr = document.createElement("tr");

        const tdStt = document.createElement("td");
        tdStt.textContent = i + 1;

        const tdTen = document.createElement("td");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = ten;
        link.onclick = function () {
            chonDeSua(i);
            return false;
        };
        tdTen.appendChild(link);

        const tdXoa = document.createElement("td");
        const nutXoa = document.createElement("button");
        nutXoa.textContent = "Xoá";
        nutXoa.onclick = function () {
            xoaSanPham(i);
        };
        tdXoa.appendChild(nutXoa);

        tr.append(tdStt, tdTen, tdXoa);
        tbody.appendChild(tr);
    });

    document.getElementById("soLuong").textContent = "(" + sanPham.length + " sản phẩm)";
}

// Bước 5: lấy tên mới nhập và đưa vào mảng, sau đó hiển thị thông báo
function themSanPham() {
    const ten = document.getElementById("tenMoi").value.trim();
    if (ten === "") {
        alert("Hãy nhập tên sản phẩm.");
        return;
    }
    sanPham.push(ten);
    document.getElementById("tenMoi").value = "";
    hienThiDanhSach();
    alert("Đã thêm sản phẩm: " + ten);
}

// Bước 6: khi nhấn vào tên sản phẩm, đưa tên đó lên ô sửa
function chonDeSua(i) {
    viTriSua = i;
    document.getElementById("tenSua").value = sanPham[i];
}

// Bước 6: sau khi sửa tên và nhấn Sửa thì cập nhật lại mảng
function suaSanPham() {
    if (viTriSua === -1) {
        alert("Hãy nhấn vào một tên sản phẩm trong danh sách trước.");
        return;
    }
    const ten = document.getElementById("tenSua").value.trim();
    if (ten === "") {
        alert("Tên sản phẩm không được để trống.");
        return;
    }
    sanPham[viTriSua] = ten;
    viTriSua = -1;
    document.getElementById("tenSua").value = "";
    hienThiDanhSach();
    alert("Đã sửa thành: " + ten);
}

// Bước 7: tìm vị trí sản phẩm, xoá khỏi mảng rồi hiển thị lại bảng
function xoaSanPham(i) {
    if (!confirm("Xoá sản phẩm \"" + sanPham[i] + "\"?")) return;
    sanPham.splice(i, 1);
    viTriSua = -1;
    document.getElementById("tenSua").value = "";
    hienThiDanhSach();
}

hienThiDanhSach();
