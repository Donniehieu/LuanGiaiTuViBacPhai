const IDclassDaivan = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
    "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
    "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"]

let classluangiaiChung = "general-content";
let classLoiKhuyen = "advice-content";
let fileLuangiaiChung = "Luangiaichung";
let fileLoiKhuyen = "LoiKhuyen";
let fileLuangiaiDaiVan = "Luandaivan";
let lasoOb = [];
let luanGiaiChung = [];
let luanGiaiCungMenh = [];
let luanGiaiCungPhuMau = [];
let luanGiaiCungPhucDuc = [];
let luanGiaiCungDienTrach = [];
let luanGiaiCungQuanLoc = [];
let luanGiaiCungNoBoc = [];
let luanGiaiCungThienDi = [];
let luanGiaiCungTatAch = [];
let luanGiaiCungTaiBach = [];
let luanGiaiCungTuTuc = [];
let luanGiaiCungPhuThe = [];
let luanGiaiCungHuynhDe = [];
let luanGiaiLoiKhuyen = [];
let idCungMenh = 0;
let idCungPhuMau = 1;
let idCungPhucDuc = 2;
let idCungDienTrach = 3;
let idCungQuanLoc = 4;
let idCungNoBoc = 5;
let idCungThienDi = 6;
let idCungTatAch = 7;
let idCungTaiBach = 8;
let idCungTuTuc = 9;
let idCungPhuThe = 10;
let idCungHuynhDe = 11;
let idCungThan = getCungData().findIndex(cung => cung.tenCung === JSON.parse(localStorage.getItem('laso_data')).cungCu);
let VoChinhDieu = "Vô Chính Diệu";
let comboLaso = [];
// Lấy danh sách  các sao
function getAllStarsInCells() {
    // Các class selector chứa sao (mỗi selector nên lấy đúng các sao bạn đã an)
    const saoSelectors = [
        '.sao-tot',
        '.sao-xau',
        '.chinh-tinh'
        // ... bổ sung nếu bạn có thêm class cho các loại sao khác
    ];
    for (let i = 0; i < 12; ++i) {
        const cellNum = CUNG_CELLS[(i + IDCungMenh) % 12].cell;
        const cell = document.querySelector('.cell' + cellNum);
        if (!cell) continue;
        let saoList = [];
        saoSelectors.forEach(sel => {
            cell.querySelectorAll(sel).forEach(e => {
                let ten = e.innerText.trim();
                let cls = e.className.trim();
                if (ten) {
                    // Tránh lặp lại cùng tên - class (nếu cần)
                    if (!saoList.some(obj => obj.ten === ten && obj.class === cls))
                        saoList.push({ ten: ten, class: cls });
                }
            });
        });
        lasoOb.push({
            tenCung: TEN_CUNG_FULL[i],
            chi: CUNG_CELLS[(i + IDCungMenh) % 12].chi,
            sao: saoList,
            cell: cellNum
        });
    }
    
    return lasoOb;
}


// lấy các sao chính tinh phụ tinh của từng cung
function getSaoCuaCung(cung, dsChinh, dsPhu) {
    // Lấy tất cả sao của 1 cung: chính tinh + phụ tinh
    let idx = dsChinh.findIndex(c => c.tenCung === cung.tenCung);
   
    if (idx === -1) return [];
    return [].concat(dsChinh[idx].chinhTinh, dsPhu[idx].phuTinh).filter(Boolean);
    
}

// Hàm lấy bộ sao của tam cung tứ chiếu cho từng cung (Mệnh, đối cung, 2 cung tam hợp)
function getSaoTuChieuForCung(i, dsChinh, dsPhu) {
    // i: index cung chính, dsChinh/dsPhu: mảng chính/phụ tinh 12 cung
    const arrCung = dsChinh.map((c, idx) => ({
        tenCung: c.tenCung,
        chi: c.chi,
        idx
    }));

    const cungChinh = arrCung[i];
    const idxDoi = (i + 6) % 12;
    const cungDoi = arrCung[idxDoi];

    // Tam hợp
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let group = TAM_HOP_CHI.find(gr => gr.includes(cungChinh.chi));
    let cungTamHop1 = null, cungTamHop2 = null;
    if (group) {
        const chi1 = group.find(chi => chi !== cungChinh.chi);
        const chi2 = group.find(chi => chi !== cungChinh.chi && chi !== chi1);
        cungTamHop1 = arrCung.find(c => c.chi === chi1);
        cungTamHop2 = arrCung.find(c => c.chi === chi2);
    }
    // Lấy sao của 4 cung
    let saoCungChinh = getSaoCuaCung(cungChinh, dsChinh, dsPhu);
    let saoCungDoi = getSaoCuaCung(cungDoi, dsChinh, dsPhu);
    let saoTamHop1 = cungTamHop1 ? getSaoCuaCung(cungTamHop1, dsChinh, dsPhu) : [];
    let saoTamHop2 = cungTamHop2 ? getSaoCuaCung(cungTamHop2, dsChinh, dsPhu) : [];
    // Trả về mảng bộ sao (chuẩn tứ chiếu)
    return [
        { loai: "cungChinh", sao: saoCungChinh },
        { loai: "doiCung", sao: saoCungDoi },
        { loai: "tamHop1", sao: saoTamHop1 },
        { loai: "tamHop2", sao: saoTamHop2 }
    ];
}
// Hàm này nhận dữ liệu từ JS khác để hiển thị lên giao diện 
// UI chính của luận giải lá số
function setLasoData() {
    const general = GetThongTinChung();
    const cung = getCungData();
    const advice = getAdviceData();
    const anhBanLaSo = localStorage.getItem('anhBanLaSo');
    document.getElementById('svg-holder').innerHTML = anhBanLaSo
        ? `<img src="${anhBanLaSo}" alt="Ảnh bàn lá số" style="max-width:700 px;width:100%;border-radius:12px;border:1.5px solid #bce3dd;">`
        : "<em>Không tìm thấy ảnh bàn lá số!</em>";

    // Tổng quan
    document.getElementById('general-content').innerHTML =
        general && (Array.isArray(general) ? renderLines(general) : renderLines([general]))

    // Nhận xét từng cung
    if (Array.isArray(cung) && cung.length > 0) {
        document.getElementById('cung-content').innerHTML =
            cung.map(item =>
                `<div class="cung-item">
                    <b>${item.tenCung}:</b> <br>
                    <span>${renderLines(item.luandai)}</span>
                </div>`
            ).join('');
    }

    // Lời khuyên
    document.getElementById('advice-content').innerHTML =
        advice && (Array.isArray(advice) ? renderLines(advice) : renderLines([advice]))
}
// render từng cung
function renderLines(lines) {
    if (Array.isArray(lines)) {
        return lines.map(line => `<div>${line}</div>`).join('');
    }
    return lines ? `<div>${lines}</div>` : '';
}

// Danh sách các combo sao lấy trong file excel
let comboLuanChungData = [];
let comboLuanDaiVanData = [];
let comboLoiKhuyenData = [];
/**
 * Load một file Excel, trả về arr qua callback
 */
function loadComboExcel(file, cb) {
    fetch(`${file}.xlsx`)
        .then(res => res.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const arr = [];
            for (let i = 0; i < rows.length; ++i) {
                const row = rows[i];
                if (!row[0]) continue;
                arr.push({
                    keyNorm: row[0].toString().trim(),
                    keyRaw: row[0].toString().trim(),
                    values: row.slice(1).filter(Boolean).map(x => x.toString().trim())
                });
            }
            if (cb) cb(arr);
        });
}

// Hiển thị sao của tổng quan và lời khuyên qua việc so sánh sao trong cung so với sao trong file excel
function TraSao(comboData, file, idClass, keyArr) {
    if (!comboData.length) {
        loadComboExcel(file, (arr) => {
            // Lưu lại cho lần sau không cần load nữa
           
            if (file === fileLuangiaiChung) comboLuanChungData = arr;
            if (file === fileLuangiaiDaiVan) comboLuanDaiVanData = arr;
            if (file === fileLoiKhuyen) comboLuanDaiVanData = arr;
            const ynghia = traCuuNhieuBoSao(keyArr, arr);
            hienThiKetQuaNhieuBoSao(ynghia, idClass);

        });
    } else {
        const ynghia = traCuuNhieuBoSao(keyArr, comboData);
        hienThiKetQuaNhieuBoSao(ynghia, idClass);

    }
}

/**
 * So sánh nhiều bộ sao (keys) trong comboData
 */
function traCuuNhieuBoSao(keysToFind, comboData) {
    return keysToFind.map(rawKey => {
        const key = (typeof rawKey === 'string') ? rawKey.trim() : String(rawKey).trim();
        const found = comboData.find(item => item.keyNorm.trim() === key);
        return {
            key,
            found: !!found,
            values: found ? found.values : []
        }
    });
}
// B1: Map tên file Excel cho từng cung (có thể dùng 1 file chung hoặc từng file riêng)
const cungExcelFileMap = {
    'Mệnh': 'LuanMenh',
    'Phụ Mẫu': 'LuanPhuMau',
    'Phúc Đức': 'LuanPhucDuc',
    'Điền Trạch': 'LuanDienTrach',
    'Quan Lộc': 'LuanQuanLoc',
    'Nô Bộc': 'LuanNoBoc',
    'Thiên Di': 'LuanThienDi',
    'Tật Ách': 'LuanTatAch',
    'Tài Bạch': 'LuanTaiBach',
    'Tử Tức': 'LuanTuTuc',
    'Phu Thê': 'LuanPhuThe',
    'Huynh Đệ': 'LuanHuynhDe',
    // ... thêm các cung khác, hoặc mặc định dùng 1 file
};
const defaultFileExcel = 'ComboDemo';

// B2: Bộ nhớ cache dữ liệu Excel của từng file để không load lại nhiều lần
const excelDataCache = {};

// Hàm tra cứu và hiển thị cho từng cung
function traCuuVaHienThiChoCung(item, comboData, keyArr) {
    // keyArr là mảng bộ sao cần tra, ví dụ ['Sát Phá Lang','Tử Vi',...]
    const results = traCuuNhieuBoSao(keyArr, comboData);
   
    const divId = `cung-${item.tenCung.replace(/\s/g, '').toLowerCase()}`;
    const excelDiv = document.querySelector(`#${divId} .bo-sao-excel`);
    // Lọc tất cả bộ sao tra được
    const foundResults = results.filter(r => r.found && r.values.length > 0);
    if (foundResults.length > 0) {
        excelDiv.innerHTML = foundResults.map(r =>
            `<div class="bo-sao-group">
                <b>${r.key}:</b>
                ${r.values.map(v => `<div>• ${v}</div>`).join('')}
            </div>`
        ).join('');
    } else {
        excelDiv.innerHTML = `<em>Không có thông tin tra cứu từ Excel</em>`;
    }
}

function hienThiKetQuaNhieuBoSao(results, targetDivId = 'result') {
    let el = document.getElementById(targetDivId);
    
    if (!el) el = document.querySelector('.' + targetDivId);
    if (!el) {
        results.forEach(r => {
            if (r.found) {
                console.log(r.key + ":");
                r.values.forEach(v => console.log("  - " + v));
            } else {
                console.log(r.key + ": Không tìm thấy");
            }
        });
        return;
    }

    // Hiển thị tất cả kết quả, không filter found
    let html = results.map(r => {
        if (r.found) {
            return `<div data-bo-sao-key="${r.key}">
                <b>${r.key}:</b>
                ${r.values.map(v => `<div>• ${v}</div>`).join('')}
            </div>`;
        }
    }).join('');
    if (html) el.insertAdjacentHTML('beforeend', html);
}

function clearAllSaoResults(idClassArr) {
    idClassArr.forEach(id => {
        let el = document.getElementById(id) || document.querySelector('.' + id);
        if (el) el.innerHTML = '';
    });
}
function locChinhTinh(saoList) {
    // Lọc ra những sao có class chứa 'chinh-tinh'
    return saoList.filter(sao =>
        typeof sao.class === 'string' &&
        sao.class.split(/\s+/).includes('chinh-tinh')
    );
}
// Luận chính tinh
function getDanhSachChinhTinhTungCung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    let dsCung = lasoData.lasoOb;
    // Nếu dsCung chưa có, trả về mảng rỗng
    if (!Array.isArray(dsCung)) return [];

    // Lọc chính tinh cho từng cung, chỉ lấy tên
    return dsCung.map(cung => ({
        tenCung: cung.tenCung,
        chi: cung.chi,
        chinhTinh: locChinhTinh(cung.sao).map(sao => sao.ten)
    }));
}

function locPhuTinh(saoList) {
    // Lọc ra những sao có class chứa 'chinh-tinh'
    return saoList.filter(sao =>
        typeof sao.class === 'string' &&
        sao.class.split(/\s+/).includes('phu-tinh')
    );
}
// Luận chính tinh
function getDanhSachPhuTinhTungCung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    let dsCung = lasoData.lasoOb;
    // Nếu dsCung chưa có, trả về mảng rỗng
    if (!Array.isArray(dsCung)) return [];

    // Lọc chính tinh cho từng cung, chỉ lấy tên
    return dsCung.map(cung => ({
        tenCung: cung.tenCung,
        chi: cung.chi,
        phuTinh: locPhuTinh(cung.sao).map(sao => sao.ten)
    }));
}


function getTuChieuForCung(i, arrCung) {
    // i: index cung chính trong mảng 12 cung (arrCung)
    // arrCung: [{tenCung, chi, ...}]
    const cungChinh = arrCung[i];
    const idxDoi = (i + 6) % 12;
    const cungDoi = arrCung[idxDoi];

    // Xác định tam hợp chứa chi của cung chính
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let group = TAM_HOP_CHI.find(gr => gr.includes(cungChinh.chi));
    let cungTamHop1 = null, cungTamHop2 = null;
    if (group) {
        const chi1 = group.find(chi => chi !== cungChinh.chi);
        const chi2 = group.find(chi => chi !== cungChinh.chi && chi !== chi1);
        cungTamHop1 = arrCung.find(c => c.chi === chi1);
        cungTamHop2 = arrCung.find(c => c.chi === chi2);
    }
    // Đảm bảo không null (có thể check tiếp)
    return [cungChinh, cungDoi, cungTamHop1, cungTamHop2].filter(Boolean);
}



// Cách cục định nghĩa
const DS_CACH_CUC = [
    { key: "Sát Phá Tham", need: ["Thất Sát", "Phá Quân", "Tham Lang"] },
    { key: "Tử Phủ Vũ Tướng", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng"] },
    { key: "Cơ Nguyệt Đồng Lương", need: ["Thiên Cơ", "Thiên Lương", "Thiên Đồng", "Thái Âm"] },
    { key: "Cự Nhật", need: ["Thái Dương", "Cự Môn"] },
    { key: "Kình Đà", need: ["Kình Dương", "Đà La"] },
    { key: "Xương Khúc", need: ["Văn Xương", "Văn Khúc"] },
    { key: "Hoả Linh", need: ["Hỏa Tinh", "Linh Tinh"] },
    { key: "Không Kiếp", need: ["Địa Không", "Địa Kiếp"] },
    { key: "Quang Quý", need: ["Ân Quang", "Thiên Quý"] },
    { key: "Tả Hữu", need: ["Tả Phù", "Hữu Bật"] },
    { key: "Song Hao", need: ["Đại Hao", "Tiểu Hao"] },
    { key: "Tang Hổ", need: ["Tang Môn", "Bạch Hổ"] },
    { key: "Khốc Hư", need: ["Thiên Khốc", "Thiên Hư"] },
    { key: "Hình Riêu", need: ["Thiên Hình", "Thiên Riêu"] },
    { key: "Thai Toạ", need: ["Tam Thai", "Bát Toạ"] },
    { key: "Đào Hồng", need: ["Đào Hoa", "Hồng Loan"] },
    { key: "Ấn Phù", need: ["Quốc Ấn", "Đường Phù"] },
    { key: "Song Hao Quyền Lộc Kiếp Hoả", need: ["Đại Hao", "Tiểu Hao", "Hóa Quyền", "Hóa Lộc", "Địa Kiếp", "Hỏa Tinh"] },
    { key: "Tử Phủ Vũ Tướng Xương Khúc Khôi Việt Tả Hữu Khoa Quyền Lộc Long", need: ["Tử Vi", "Thiên Phủ", "Vũ Khúc", "Thiên Tướng", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Tả Phù", "Hữu Bật", "Hóa Khoa", "Hóa Quyền", "Hóa Lộc", "Long Trì", "Phượng Các"] },
    { key: "Tử Khúc Phá Dương Đà", need: ["Tử Vi", "Vũ Khúc", "Phá Quân", "Kình Dương", "Đà La"] }
    
];

// Helper tứ chiếu
function getStarsInTuChieu(i, dsChinh, dsPhu) {
    const arrCung = dsChinh.map((c, idx) => ({
        tenCung: c.tenCung,
        chi: c.chi,
        idx
    }));
    const cungChinh = arrCung[i];
    const idxDoi = (i + 6) % 12;
    const cungDoi = arrCung[idxDoi];

    // Tam hợp
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let group = TAM_HOP_CHI.find(gr => gr.includes(cungChinh.chi));
    let cungTamHop1 = null, cungTamHop2 = null;
    if (group) {
        const chi1 = group.find(chi => chi !== cungChinh.chi);
        const chi2 = group.find(chi => chi !== cungChinh.chi && chi !== chi1);
        cungTamHop1 = arrCung.find(c => c.chi === chi1);
        cungTamHop2 = arrCung.find(c => c.chi === chi2);
    }
    let idxs = [i, idxDoi];
    if (cungTamHop1) idxs.push(cungTamHop1.idx);
    if (cungTamHop2) idxs.push(cungTamHop2.idx);

    // Lấy tên sao từng cung
    let saoTuchieu = [];
    idxs.forEach(idx => {
        saoTuchieu = saoTuchieu.concat(dsChinh[idx].chinhTinh, dsPhu[idx].phuTinh);
    });
    // Loại bỏ trùng lặp
    return Array.from(new Set(saoTuchieu.filter(Boolean)));
}

// Tìm toàn bộ cách cục xuất hiện trong bộ sao tứ chiếu
function findCachCuc(saoArr) {
    let cachCucFound = [];
    DS_CACH_CUC.forEach(cach => {
        // Nếu tất cả required sao đều có trong bộ sao tứ chiếu
        if (cach.need.every(sao => saoArr.includes(sao))) {
            cachCucFound.push(cach.key);
        }
    });
    return cachCucFound;
}

// ======= TÍCH HỢP HIỆN THỊ SONG SONG SAO LẺ + CÁCH CỤC + TRA CỨU EXCEL =======

function LuanGiaiCacCungVaHienThi() {
    const dsChinh = getDanhSachChinhTinhTungCung();
    const dsPhu = getDanhSachPhuTinhTungCung();
    let cungArr = getCungData();
    // hiển thị HTML
    document.getElementById('cung-content').innerHTML =
        cungArr.map((item, i) => {
            const chinhTinh = dsChinh[i].chinhTinh;
            const phuTinh = dsPhu[i].phuTinh;
            let contentHtml = '';
            // Chính tinh
            if (chinhTinh.length === 0) {
                contentHtml += `<div><i>Vô Chính Diệu</i></div>`;

            } else if (chinhTinh.length === 1) {
                contentHtml += `<div><b>${chinhTinh[0]}</b> tọa thủ tại ${item.tenCung}</div>`;

            } else if (chinhTinh.length === 2) {
                contentHtml += `<div><b>${chinhTinh.join(" và ")} đồng cung tại ${item.tenCung}</b></div>`;
            }



            // Phụ tinh
            if (phuTinh.length > 0) {
                contentHtml += `<div>Phụ tinh: ${phuTinh.join(", ")}</div>`;
            }
            // Cách cục từ sao tứ chiếu
            const saoTuChieu = getStarsInTuChieu(i, dsChinh, dsPhu);
            const cachCuc = findCachCuc(saoTuChieu);
            if (cachCuc.length > 0) {
                contentHtml += `<div><b>Cách cục:</b> <span style="color: #d0021b">${cachCuc.join(", ") } </span></div>`;
            }
            // Nơi tra cứu Excel sẽ được bơm vào .bo-sao-excel bên dưới
            contentHtml += `<div class="bo-sao-excel"><em>Đang tra cứu bộ sao...</em></div>`;

            // CHUẨN sticky scroll: tên cung riêng .cung-title, toàn bộ còn lại .cung-content
            return `<div class="cung-item" id="cung-${item.tenCung.replace(/\s/g, '').toLowerCase()}">
                    <div class="cung-title">${item.tenCung}</div>
                    <div class="cung-content">${contentHtml}</div>
                </div>`;
        }).join('');


    // B3: Lặp qua từng cung và tra cứu sao
    // Add sao từng cung vào mảng key

    cungArr.forEach((item, i) => {
        const keyArr = [];
        //xét các chính tinh
        const chinhTinh = dsChinh[i].chinhTinh;

        
        if (chinhTinh.length === 0) {
            keyArr.push("Vô Chính Diệu");
        } else if (chinhTinh.length === 1) {
        
            keyArr.push(chinhTinh[0] + " tọa thủ tại " + item.chi);
        } else if (chinhTinh.length === 2) {
            keyArr.push(chinhTinh[0] + " và " + chinhTinh[1] + " đồng cung tại " + item.chi);
        }
        else chinhTinh.forEach(ct => {
            if (ct)
               
            if (chinhTinh.length == 2) {
                keyArr.push(chinhTinh[0] + " và " + chinhTinh[1] + " đồng cung tại " + item.chi);
            }
        });
        
        
        // Xét các phụ tinh
        const phuTinh = dsPhu[i].phuTinh;
        phuTinh.forEach(pt => { if (pt)  keyArr.push(pt + " tọa thủ tại " + item.tenCung); });

        //Xét các sao trong tứ chiếu
        const cachCuc = findCachCuc(getStarsInTuChieu(i, dsChinh, dsPhu));
     
        // Kiểm tra nếu cung Mệnh và cung Thân có sao Địa Không và Địa Kiếp
        MenhKhongThanKiep(idCungMenh, idCungThan, dsChinh, dsPhu, keyArr);
        ThanMenhDongCungVoChinhDieu(keyArr); // Kiểm tra Thân mệnh đồng cung Vô Chính Diệu
        LuanCungMenh(keyArr); // Luận cung Mệnh
        
        // Kiểm tra xem Mênh tại Tý Ngọ có Thiên Khốc Thiên Hư đồng cung
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Khốc", "Thiên Hư") || isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Khốc", "Thiên Hư")) {
            keyArr.push("Mệnh Tý Ngọ có Thiên Khốc Thiên Hư đồng cung");
        }
        // Kiểm tra cung Quan có Thiên Lương độc tọa tại Hợi hoặc Tý
        if (isSaoToaThuTaiCungVaChi("Quan Lộc", "Hợi", "Thiên Lương")) {
            keyArr.push("Quan Lộc có Thiên Lương thủ tọa tại Hợi");
        }
        if (isSaoToaThuTaiCungVaChi("Quan Lộc", "Tý", "Thiên Lương")) {
            keyArr.push("Quan Lộc có Thiên Lương thủ tọa tại Tý");
        }
        // Kiểm tra cung Quan có Thiên Đồng Thiên Lương đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Thiên Đồng", "Thiên Lương") ) {
            keyArr.push("Quan Lộc có Thiên Đồng Thiên Lương đồng cung");
        }
        // Kiểm tra cung Quan có Tử Vi, Thiên Tướng đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Tử Vi", "Thiên Tướng")) {
            keyArr.push("Quan Lộc có Tử Vi Thiên Tướng đồng cung");
        }
        // Kiểm tra cung Quan có Tham Lang Tử Vi đồng cung
        if (isHaiSaoDongCungTaiCung("Quan Lộc", "Tham Lang", "Tử Vi")) {
            keyArr.push("Quan Lộc có Tham Lang Tử Vi đồng cung");
        }
        cachCuc.forEach(cc => keyArr.push(cc + " hội chiếu tại " + item.tenCung));

        //Lọc trùng
        const keyArrUniq = Array.from(new Set(keyArr.filter(Boolean)));
        const tenFile = cungExcelFileMap[item.tenCung] || defaultFileExcel;
        if (excelDataCache[tenFile]) {
            traCuuVaHienThiChoCung(item, excelDataCache[tenFile], keyArrUniq);
        } else {
            loadComboExcel(tenFile, function (comboData) {
                excelDataCache[tenFile] = comboData;
                traCuuVaHienThiChoCung(item, comboData, keyArrUniq);
            });
        }
    });
}

// Thân mệnh đồng cung mệnh vô chính diệu

// Hàm chính luận giải lá số
function LuanGiaiLaso() {
    setTimeout(setLasoData(), 200);
    TraSao(comboLuanChungData, fileLuangiaiChung, classluangiaiChung, luanGiaiChung);  // Tổng quan
    TraSao(comboLoiKhuyenData, fileLoiKhuyen, classLoiKhuyen, luanGiaiLoiKhuyen);   // Lời khuyên
    HienThiNhanXetDaiVan();
    LuanGiaiChung();
    LuanGiaiDaiVan();
    LuanGiaiCacCungVaHienThi();
}