
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
