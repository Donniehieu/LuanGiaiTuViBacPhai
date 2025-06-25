
function tinhdaivan(menhIdx, cucSo, amduong) {
    // Số đại vận cho 12 cung, khởi tạo
    let daiVanArr = Array(12).fill(0);
    // Xác định chiều: thuận = +1, ngược = -1
    let isThuan = (amduong === "Dương Nam" || amduong === "Âm Nữ");
    // Đặt số cục tại cung Mệnh
    let idx = menhIdx;
    for (let i = 0; i < 12; ++i) {
        daiVanArr[idx] = cucSo + i * 10;
        // Tính chỉ số cung tiếp theo
        idx = (idx + (isThuan ? 1 : -1) + 12) % 12;
    }
    return daiVanArr;
}
function tinhTieuvan(chiNamSinh, chiNam, gioitinh) {
    // Xác định cung khởi tiểu vận dựa vào chi năm sinh
    // Dần Ngọ Tuất -> Thìn, Thân Tý Thìn -> Tuất, Tỵ Dậu Sửu -> Mùi, Hợi Mão Mùi -> Sửu
    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const tieuvanKhoi = (() => {
        if (["Dần", "Ngọ", "Tuất"].includes(chiNamSinh)) return "Thìn";
        if (["Thân", "Tý", "Thìn"].includes(chiNamSinh)) return "Tuất";
        if (["Tỵ", "Dậu", "Sửu"].includes(chiNamSinh)) return "Mùi";
        if (["Hợi", "Mão", "Mùi"].includes(chiNamSinh)) return "Sửu";
        // fallback: default về Tý nếu không xác định được
        return "Tý";
    })();
    // Tìm vị trí cung khởi trong CUNG_CELLS
    const khoiIdx = CUNG_CELLS.findIndex(c => c.chi === tieuvanKhoi);
    if (khoiIdx === -1) return Array(12).fill("");
    // Xác định chiều: Nam thuận, Nữ nghịch (thứ tự điền cung)
    const step = gioitinh === "Nam" ? 1 : -1;

    // Tính chi của năm tiểu hạn đầu tiên (năm tuổi âm)
    let chiIdx = CHI12.indexOf(chiNamSinh);
    let tieuvanArr = Array(12).fill("");
    for (let i = 0; i < 12; ++i) {
        // Vị trí cung hiện tại
        let cungIdx = (khoiIdx + i * step + 12 * 5) % 12;
        // Chi năm tiểu hạn tương ứng
        let chi = CHI12[(chiIdx + i) % 12];

        if (chi == chiNam) {
            tieuvanArr[cungIdx] = chi + " (T.H)";
            IDTieuHan = cungIdx;
        } else {
            tieuvanArr[cungIdx] = chi;
        }
    }
    return tieuvanArr;
}
function anNguyetHan(idxTieuHan, thangSinh, gioSinhChi) {
    // Xóa nhãn cũ
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let olds = cell.querySelectorAll('.nguyet-han-label');
        olds.forEach(o => o.remove());
    });

    // Bước 1: Từ cung tiểu hạn, coi làm tháng 1, đi NGƯỢC chiều kim đồng hồ tới tháng sinh -> idxThang
    let idxThang = (idxTieuHan - (thangSinh - 1) + 12) % 12;

    // Bước 2: Từ vị trí trên (coi là giờ Tý), đi THUẬN chiều kim đồng hồ tới giờ sinh
    const GIO12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    let gioIdx = GIO12.indexOf(gioSinhChi);
    if (gioIdx === -1) gioIdx = 0; // fallback
    let idxTH1 = (idxThang + gioIdx) % 12;

    // Đặt TH1 tại idxTH1, các tháng tiếp theo thuận chiều kim đồng hồ
    for (let i = 0; i < 12; ++i) {
        let idx = (idxTH1 + i) % 12;
        let cellNum = CUNG_CELLS[idx].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="nguyet-han-label nguyet-han">
                                                                                            TH${i + 1}
                                                                                        </div>`);
        }
    }
}
function renderDaivan(lsDaiVan) {
    // Xóa thông tin đại vận cũ nếu có
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let old = cell.querySelector('.daivan-label');
        if (old) old.remove();
    });
    // Hiển thị đại vận trên 12 cung
    for (let i = 0; i < 12; ++i) {
        let cellNum = CUNG_CELLS[i].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('afterbegin',
                `<div class="daivan-label dai-van">
                                                                                        ${lsDaiVan[i]}
                                                                                    </div>`);
        }
    }
}
function renderTieuVan(arrTieuvan) {
    for (let i = 0; i < 12; ++i) {
        let cellNum = CUNG_CELLS[i].cell;
        let cell = document.querySelector('.cell' + cellNum);
        if (cell) {
            cell.insertAdjacentHTML('beforeend',
                `<div class="tieuvan-label tieu-han">
                                                                                        ${arrTieuvan[i]}
                                                                                    </div>`);
        }
    }
}
function getCungDaiVanHienTai(daiVanArr, tuoiHienTai) {
    for (let i = 0; i < 12; ++i) {
        let start = daiVanArr[i];
        let end = daiVanArr[(i + 1) % 12];
        if (i < 11 && tuoiHienTai >= start && tuoiHienTai < end) {
            return i + 1;
        }
        // Nếu là cung cuối cùng
        if (i === 11 && tuoiHienTai >= start) {
            return i + 1;
        }
        if (i == 0 && tuoiHienTai <= start) {
            return i;
        }
    }
    return -1; // Không tìm thấy
}

function renderDaivanSection() {
  // Đầu file luangiai.js (trước khi render luận giải)
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const menhIdx =lasoData.IDCungMenh;
    const cucSo = lasoData.cucSo;
    const amduong = lasoData.amduong 
    const tuoiAm = lasoData.tuoiAm;
    // Tên cung
    const CUNG_CELLS = window.CUNG_CELLS || [
        { chi: "Dần" },{ chi: "Mão" },{ chi: "Thìn" },{ chi: "Tỵ" },{ chi: "Ngọ" },{ chi: "Mùi" },
        { chi: "Thân" },{ chi: "Dậu" },{ chi: "Tuất" },{ chi: "Hợi" },{ chi: "Tý" },{ chi: "Sửu" }
    ];
    const TEN_CUNG_FULL = window.TEN_CUNG_FULL || [
        "Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
        "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
        "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"
    ];
    // Tính đại vận
    const lsDaiVan = tinhdaivan(menhIdx, cucSo, amduong); // mảng 12 số bắt đầu đại vận
    // Xác định đại vận hiện tại dựa vào tuổi âm
    const idxDaiVan = getCungDaiVanHienTai(lsDaiVan, tuoiAm);

    // Render
    let arr = [];
for (let i = 0; i < 12; ++i) {
    // idx là vị trí cung đại vận theo vòng từ cung Mệnh
    const idx = (menhIdx + i) % 12;
    const startAge = lsDaiVan[idx];
    const endAge = startAge + 9;
    const cungTen = TEN_CUNG_FULL[i];
    arr.push({
        cungTen,
        startAge,
        endAge
    });
}

// Sắp xếp theo tuổi bắt đầu tăng dần
arr.sort((a, b) => a.startAge - b.startAge);

// Render ra HTML
let html = '';
arr.forEach(item => {
    html += `<div class="daivan-item ${item.cungTen}" id="${item.cungTen}">
  
    <b>Đại Vận:</b> ${item.startAge} tuổi - ${item.endAge } tuổi tại cung ${item.cungTen}
</div>`;
});

document.getElementById('daivan-content').innerHTML = html;
}