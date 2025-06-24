
function getAllStarsInCells() {
    // Các class selector chứa sao (mỗi selector nên lấy đúng các sao bạn đã an)
    const saoSelectors = [

        '.sao-tot',
        '.sao-xau',
        '.chinh-tinh'
        // ... bổ sung nếu bạn có thêm class cho các loại sao khác
    ];

    let result = [];
    for (let i = 0; i < 12; ++i) {
        const cellNum = CUNG_CELLS[i].cell;
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
        result.push({
            chi: CUNG_CELLS[i].chi,
            cellNum: cellNum,
            sao: saoList
        });
    }
    return result;
}

// Hàm này nhận dữ liệu từ JS khác để hiển thị lên giao diện
function setLasoData() {

    const general = GetThongTinChung();
   
    const cung = getCungData();

    const advice = getAdviceData();
    console.log(advice);

    const anhBanLaSo = localStorage.getItem('anhBanLaSo');
    document.getElementById('svg-holder').innerHTML = anhBanLaSo
        ? `<img src="${anhBanLaSo}" alt="Ảnh bàn lá số" style="max-width:600px;width:100%;border-radius:12px;border:1.5px solid #bce3dd;">`
        : "<em>Không tìm thấy ảnh bàn lá số!</em>";

    // Tổng quan
    document.getElementById('general-content').innerHTML =
        general && (Array.isArray(general) ? renderLines(general) : renderLines([general])) || '<em>Chưa có dữ liệu</em>';

    // Nhận xét từng cung
    if (Array.isArray(cung) && cung.length > 0) {
        document.getElementById('cung-content').innerHTML =
            cung.map(item =>
                `<div class="cung-item">
                    <b>${item.tenCung}:</b> <br>
                    <span>${renderLines(item.luandai)}</span>
                </div>`
            ).join('');
    } else {
        document.getElementById('cung-content').innerHTML = '<em>Chưa có dữ liệu</em>';
    }

    // Lời khuyên
    document.getElementById('advice-content').innerHTML =
        advice && (Array.isArray(advice) ? renderLines(advice) : renderLines([advice])) || '<em>Chưa có dữ liệu</em>';
}

function renderLines(lines) {
    if (Array.isArray(lines)) {
        return lines.map(line => `<div>${line}</div>`).join('');
    }
    return lines ? `<div>${lines}</div>` : '';
}

let comboData1 = [];
let comboData2 = [];

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

/**
 * Hàm tra cứu, truyền đúng dữ liệu comboData cho từng file
 * @param {Array} comboData - dữ liệu đã load của file Excel tương ứng
 * @param {string} file - tên file (nếu cần load nếu chưa có dữ liệu)
 * @param {string} idClass - id div để hiển thị
 */
function TraSao(comboData, file, idClass) {
    console.log("Bắt đầu tra cứu bộ sao...");

    if (!comboData.length) {
        loadComboExcel(file, (arr) => {
            // Lưu lại cho lần sau không cần load nữa
            if (file === 'ComboDemo1') comboData1 = arr;
            if (file === 'ComboDemo2') comboData2 = arr;
            const ynghia = traCuuNhieuBoSao(['Sát Phá Lang', 'Tử Vi'], arr);
            hienThiKetQuaNhieuBoSao(ynghia, idClass);
            console.log(ynghia);
        });
    } else {
        const ynghia = traCuuNhieuBoSao(['Sát Phá Lang', 'Tử Vi'], comboData);
        hienThiKetQuaNhieuBoSao(ynghia, idClass);
        console.log(ynghia);
    }
}

/**
 * So sánh nhiều bộ sao (keys) trong comboData
 */
function traCuuNhieuBoSao(keysToFind, comboData) {
    return keysToFind.map(rawKey => {
        const key = rawKey.trim();
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
function hienThiKetQuaNhieuBoSao(results, targetDivId = 'result') {
    let html = results.map(r => {
        if (r.found) {
            return `<div>
                <b>${r.key}:</b><br>
                ${r.values.map(v => `<div>• ${v}</div>`).join('')}
            </div>`;
        } else {
            return `<div><b>${r.key}:</b> <em>Không tìm thấy bộ sao này!</em></div>`;
        }
    }).join('<hr>');
    if (document.getElementById(targetDivId)) {
        document.getElementById(targetDivId).innerHTML = html;
    } else {
        // Nếu không có div, log ra console
        results.forEach(r => {
            if (r.found) {
                console.log(r.key + ":");
                r.values.forEach(v => console.log("  - " + v));
            } else {
                console.log(r.key + ": Không tìm thấy");
            }
        });
    }
}
