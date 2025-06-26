const IDclassDaivan = ["Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
    "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
    "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"]

let classluangiaiChung = "general-content";


let fileLuangiaiChung = "LuangiaiChung";
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


let VoChinhDieu = "Vô Chính Diệu";


let comboLaso = [];
function getAllStarsInCells() {
    // Các class selector chứa sao (mỗi selector nên lấy đúng các sao bạn đã an)
    const saoSelectors = [

        '.sao-tot',
        '.sao-xau',
        '.chinh-tinh'
        // ... bổ sung nếu bạn có thêm class cho các loại sao khác
    ];

  
    for (let i = 0; i < 12; ++i) {
        const cellNum = CUNG_CELLS[(i +IDCungMenh)%12].cell;
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

// Hàm này nhận dữ liệu từ JS khác để hiển thị lên giao diện
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

function renderLines(lines) {
    if (Array.isArray(lines)) {
        return lines.map(line => `<div>${line}</div>`).join('');
    }
    return lines ? `<div>${lines}</div>` : '';
}

let comboData1 = [];
let comboData2 = [];
let comboLuanChungData = [];
let comboLuanDaiVanData=[];
/**
 * Load một file Excel, trả về arr qua callback
 */
function loadComboExcel(file, cb) {
    fetch(`${file}.xlsx`)
        .then(res => res.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, {type:'array'});
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, {header:1});
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

// Hiển thị sao của tổng quan và lời khuyên
function TraSao(comboData, file, idClass, keyArr) {
    

    if (!comboData.length) {
        loadComboExcel(file, (arr) => {
            // Lưu lại cho lần sau không cần load nữa
            if (file === 'ComboDemo1') comboData1 = arr;
            if (file === 'ComboDemo2') comboData2 = arr;
            if (file === fileLuangiaiChung) comboLuanChungData = arr;
            if (file === fileLuangiaiDaiVan) comboLuanDaiVanData = arr;
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

/**
 * Hiển thị kết quả ra một div có id (mặc định "result")
 */


// Giả sử đã có: loadComboExcel, traCuuNhieuBoSao, renderLines...

// B1: Map tên file Excel cho từng cung (có thể dùng 1 file chung hoặc từng file riêng)
const cungExcelFileMap = {
    'Mệnh': 'ComboDemo1',
    'Phụ Mẫu': 'ComboDemo2',
    'Phúc Đức': 'ComboDemo2',
    'Điền Trạch': 'ComboDemo1',
    'Quan Lộc': 'ComboDemo1',
    'Nô Bộc': 'ComboDemo2',
    'Thiên Di': 'ComboDemo2',
    'Tật Ách': 'ComboDemo1',
    'Tài Bạch': 'ComboDemo1',
    'Tử Tức': 'ComboDemo2',
    'Phu Thê': 'ComboDemo2',
    'Huynh Đệ': 'ComboDemo2',
    // ... thêm các cung khác, hoặc mặc định dùng 1 file
};
const defaultFileExcel = 'ComboDemo1';

// B2: Bộ nhớ cache dữ liệu Excel của từng file để không load lại nhiều lần
const excelDataCache = {};

// Hiển thị sao của từng cung
function renderCungKiemTraSao(keyArr) {
    const cungArr = getCungData();
    // Render khung từng cung và placeholder tra cứu Excel
    document.getElementById('cung-content').innerHTML =
        cungArr.map(item =>
            `<div class="cung-item" id="cung-${item.tenCung.replace(/\s/g,'').toLowerCase()}">
                <b>${item.tenCung}:</b><br>
                <span>${renderLines(item.luandai)}</span>
                <div class="bo-sao-excel"><em>Đang tra cứu bộ sao...</em></div>
            </div>`
        ).join('');

    // Sau khi render, tra cứu từng cung
    cungArr.forEach(item => {
        const tenFile = cungExcelFileMap[item.tenCung] || defaultFileExcel;
        
        // Đã có cache thì dùng luôn
        if (excelDataCache[tenFile]) {
            traCuuVaHienThiChoCung(item, excelDataCache[tenFile], keyArr);
        } else {
            // Chưa có thì load file
            loadComboExcel(tenFile, function(comboData) {
                excelDataCache[tenFile] = comboData;
                traCuuVaHienThiChoCung(item, comboData, keyArr);
            });
        }
    });
}
// Hàm tra cứu và hiển thị cho từng cung
function traCuuVaHienThiChoCung(item, comboData, keyArr) {
    // keyArr là mảng bộ sao cần tra, ví dụ ['Sát Phá Lang','Tử Vi',...]
    const results = traCuuNhieuBoSao(keyArr, comboData);
    console.log(`Kết quả tra cứu cho cung ${item.tenCung}:`, results);
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
/**
 * Hiển thị bộ sao cho nhiều cung/đại vận, mỗi cung một vùng riêng.
 * Luôn hiển thị đầy đủ các bộ sao, không lặp/trùng, không ghi đè kết quả cũ nếu chưa clear.
 * 
 * idClassArr:  mảng id/class các vùng cung cần hiển thị
 * keyArrArr:   mảng mảng bộ sao của từng cung (mỗi phần tử là 1 mảng cho 1 cung)
 * comboData:   dữ liệu bộ sao đã load (mỗi item: {keyNorm, values})
 * file:        tên file để load nếu comboData chưa có
 */
function TraSaoNhieuDaiVan(comboData, file, idClassArr, keyArrArr) {
    function process(data) {
        console.log(idClassArr);
        for (let i = 0; i < idClassArr.length; ++i) {
            let keys = keyArrArr[i];
            const id = idClassArr[i];
            
            if (!keys || !id) continue;
            if (!Array.isArray(keys)) keys = [keys];
            // Loại bỏ key trùng nhau trong cùng 1 cung
            keys = Array.from(new Set(keys.map(k => k.trim())));

            // tra cứu
            const ynghia = traCuuNhieuBoSao(keys, data);

            // HIỆN ĐẦY ĐỦ BỘ SAO (dù found hay không)
            hienThiKetQuaNhieuBoSao(ynghia, id);
        }
    }

    if (!comboData || !comboData.length) {
        loadComboExcel(file, (arr) => {
            process(arr);
        });
    } else {
        process(comboData);
    }
}

function traCuuNhieuBoSao(keysToFind, comboData) {
    if (!Array.isArray(keysToFind)) {
        if (typeof keysToFind === 'string') keysToFind = [keysToFind];
        else return [];
    }
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

function hienThiKetQuaNhieuBoSao(results, targetDivId = 'result') {
    let el = document.getElementById(targetDivId);
    console.log(el);
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
    if (html) el.insertAdjacentHTML('beforeend', html) ;
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

function isToaThu(idFromCungMenhtoHuynhDe) {
    if (getDanhSachChinhTinhTungCung()[idFromCungMenhtoHuynhDe].chinhTinh.length == 1) return true; else return false;
}
function isVoChinhDieu(idFromCungMenhtoHuynhDe) {
    if (getDanhSachChinhTinhTungCung()[idFromCungMenhtoHuynhDe].chinhTinh.length == 0) return true; else return false;
}
function isVoDongCung(idFromCungMenhtoHuynhDe) {
    if (getDanhSachChinhTinhTungCung()[idFromCungMenhtoHuynhDe].chinhTinh.length == 2) return true; else return false;
}
function isMenhVoChinhDieu() {
    return isVoChinhDieu(0);
}

function LuanGiaiLaso(){
    setTimeout(setLasoData(), 200);
    TraSao(comboLuanChungData, fileLuangiaiChung, classluangiaiChung, luanGiaiChung);  // Tổng quan
    TraSao(comboData2, 'ComboDemo2', 'advice-content', ['Sát Phá Lang']);   // Lời khuyên
    
    renderCungKiemTraSao(['Sát Phá Lang']);              // Từng cung                                
    renderDaivanSection();
    getDanhSachChinhTinhTungCung();
    LuanGiaiChung();
    Luangiaidaivan();
    
    

}

