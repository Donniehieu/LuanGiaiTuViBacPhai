function tinhdaivan(menhIdx, cucSo, amduong) {
    let daiVanArr = Array(12).fill(0);
    let isThuan = (amduong === "Dương Nam" || amduong === "Âm Nữ");
    let idx = menhIdx;
    for (let i = 0; i < 12; ++i) {
        daiVanArr[idx] = cucSo + i * 10;
        idx = (idx + (isThuan ? 1 : -1) + 12) % 12;
    }
    return daiVanArr;
}
function getTenCungByChiArr(chiArr, arrCung) {
    // arrCung: mảng 12 object {cungTen, chi, ...}
    return chiArr.map(chi => {
        let found = arrCung.find(c => c.chi === chi);
        return found ? found.cungTen : chi;
    });
}
function tinhTieuvan(chiNamSinh, chiNam, gioitinh) {
    const CHI12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const tieuvanKhoi = (() => {
        if (["Dần", "Ngọ", "Tuất"].includes(chiNamSinh)) return "Thìn";
        if (["Thân", "Tý", "Thìn"].includes(chiNamSinh)) return "Tuất";
        if (["Tỵ", "Dậu", "Sửu"].includes(chiNamSinh)) return "Mùi";
        if (["Hợi", "Mão", "Mùi"].includes(chiNamSinh)) return "Sửu";
        return "Tý";
    })();
    const khoiIdx = CUNG_CELLS.findIndex(c => c.chi === tieuvanKhoi);
    if (khoiIdx === -1) return Array(12).fill("");
    const step = gioitinh === "Nam" ? 1 : -1;

    let chiIdx = CHI12.indexOf(chiNamSinh);
    let tieuvanArr = Array(12).fill("");
    for (let i = 0; i < 12; ++i) {
        let cungIdx = (khoiIdx + i * step + 12 * 5) % 12;
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
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let olds = cell.querySelectorAll('.nguyet-han-label');
        olds.forEach(o => o.remove());
    });

    let idxThang = (idxTieuHan - (thangSinh - 1) + 12) % 12;
    const GIO12 = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    let gioIdx = GIO12.indexOf(gioSinhChi);
    if (gioIdx === -1) gioIdx = 0;
    let idxTH1 = (idxThang + gioIdx) % 12;

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
    document.querySelectorAll('.laso-cell').forEach(cell => {
        let old = cell.querySelector('.daivan-label');
        if (old) old.remove();
    });
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
        if (i === 11 && tuoiHienTai >= start) {
            return i + 1;
        }
        if (i == 0 && tuoiHienTai <= start) {
            return i;
        }
    }
    return -1;
}

// === Hàm xác định các nhóm tam hợp Tuế Hổ Phù ===
function getTamHopTueHoPhuGroups(lasoOb) {
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let cungLaSo = lasoOb.slice(0, 12);
    let result = [];
    TAM_HOP_CHI.forEach(group => {
        let cungTrongTamHop = cungLaSo.filter(cung => group.includes(cung.chi));
        let hasThaiTue = cungTrongTamHop.some(cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(sao =>
                (sao.ten && sao.ten.replace(/\s+/g, "").toLowerCase() === "tháituế") ||
                (sao.name && sao.name.replace(/\s+/g, "").toLowerCase() === "tháituế")
            )
        );
        if (hasThaiTue && cungTrongTamHop.length === 3) {
            result.push({
                tamHop: group.join('-'),
                cacChi: group
            });
        }
    });
    return result;
}

// === Hàm xác định các nhóm tam hợp có Tuế Phá (Vòng Tang Tuế Điếu) ===
function getTangTueDieuGroups(lasoOb) {
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let cungLaSo = lasoOb.slice(0, 12);
    let result = [];
    TAM_HOP_CHI.forEach(group => {
        let cungTrongTamHop = cungLaSo.filter(cung => group.includes(cung.chi));
        let hasTuePha = cungTrongTamHop.some(cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(
                sao =>
                    (sao.ten && sao.ten.replace(/\s+/g, "").toLowerCase() === "tuếphá") ||
                    (sao.name && sao.name.replace(/\s+/g, "").toLowerCase() === "tuếphá")
            )
        );
        if (hasTuePha && cungTrongTamHop.length === 3) {
            result.push({
                tamHop: group.join('-'),
                cacChi: group
            });
        }
    });
    return result;
}

// === Hàm xác định các nhóm tam hợp Âm Long Trực (có Thiếu Âm) ===
function getAmLongTrucGroups(lasoOb) {
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let cungLaSo = lasoOb.slice(0, 12);
    let result = [];
    TAM_HOP_CHI.forEach(group => {
        let cungTrongTamHop = cungLaSo.filter(cung => group.includes(cung.chi));
        let hasThieuAm = cungTrongTamHop.some(cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(
                sao =>
                    (sao.ten && sao.ten.replace(/\s+/g, "").toLowerCase() === "thiếuâm") ||
                    (sao.name && sao.name.replace(/\s+/g, "").toLowerCase() === "thiếuâm")
            )
        );
        if (hasThieuAm && cungTrongTamHop.length === 3) {
            result.push({
                tamHop: group.join('-'),
                cacChi: group
            });
        }
    });
    return result;
}

// === Hàm xác định các nhóm tam hợp Dương Tử Phúc (có Thiếu Dương) ===
function getDuongTuPhucGroups(lasoOb) {
    const TAM_HOP_CHI = [
        ["Dần", "Ngọ", "Tuất"],
        ["Thân", "Tý", "Thìn"],
        ["Tỵ", "Dậu", "Sửu"],
        ["Hợi", "Mão", "Mùi"]
    ];
    let cungLaSo = lasoOb.slice(0, 12);
    let result = [];
    TAM_HOP_CHI.forEach(group => {
        let cungTrongTamHop = cungLaSo.filter(cung => group.includes(cung.chi));
        let hasThieuDuong = cungTrongTamHop.some(cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(
                sao =>
                    (sao.ten && sao.ten.replace(/\s+/g, "").toLowerCase() === "thiếudương") ||
                    (sao.name && sao.name.replace(/\s+/g, "").toLowerCase() === "thiếudương")
            )
        );
        if (hasThieuDuong && cungTrongTamHop.length === 3) {
            result.push({
                tamHop: group.join('-'),
                cacChi: group
            });
        }
    });
    return result;
}

// ==== Hàm render đại vận có hiển thị Tuế Hổ Phù, Tang Tuế Điếu, Âm Long Trực, Dương Tử Phúc ====
function renderDaivanSection() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const menhIdx = lasoData.IDCungMenh;
    const cucSo = lasoData.cucSo;
    const amduong = lasoData.amduong;
    const tuoiAm = lasoData.tuoiAm;
    const lasoOb = lasoData.lasoOb || [];

    const CUNG_CELLS = window.CUNG_CELLS || [
        { chi: "Dần" },{ chi: "Mão" },{ chi: "Thìn" },{ chi: "Tỵ" },{ chi: "Ngọ" },{ chi: "Mùi" },
        { chi: "Thân" },{ chi: "Dậu" },{ chi: "Tuất" },{ chi: "Hợi" },{ chi: "Tý" },{ chi: "Sửu" }
    ];
    const TEN_CUNG_FULL = window.TEN_CUNG_FULL || [
        "Mệnh", "Phụ Mẫu", "Phúc Đức", "Điền Trạch",
        "Quan Lộc", "Nô Bộc", "Thiên Di", "Tật Ách",
        "Tài Bạch", "Tử Tức", "Phu Thê", "Huynh Đệ"
    ];
    const lsDaiVan = tinhdaivan(menhIdx, cucSo, amduong);

    // Lấy nhóm tam hợp Tuế Hổ Phù
    const tamHopGroups = getTamHopTueHoPhuGroups(lasoOb);
    // Lấy nhóm vòng Tang Tuế Điếu
    const tangTueDieuGroups = getTangTueDieuGroups(lasoOb);
    // Lấy nhóm tam hợp Âm Long Trực
    const amLongTrucGroups = getAmLongTrucGroups(lasoOb);
    // Lấy nhóm tam hợp Dương Tử Phúc
    const duongTuPhucGroups = getDuongTuPhucGroups(lasoOb);

    let arr = [];
    for (let i = 0; i < 12; ++i) {
        const idx = (menhIdx + i) % 12;
        const startAge = lsDaiVan[idx];
        const endAge = startAge + 9;
        const cungTen = TEN_CUNG_FULL[i];
        const chi = CUNG_CELLS[idx].chi;
        arr.push({
            cungTen,
            startAge,
            endAge,
            chi
        });
    }
    arr.sort((a, b) => a.startAge - b.startAge);

    let html = '';
   arr.forEach(item => {
    let tamHopNote = '';

    // Lấy lại tên cung của nhóm tam hợp này (nếu có)
    let group = tamHopGroups.find(g => g.cacChi.includes(item.chi));
    if (group) {
        const tenCungGroup = getTenCungByChiArr(group.cacChi, arr).join('-');
        tamHopNote += `<div class="tam-hop-note" style="color:rgb(209, 0, 0); margin-bottom: 0.5em;">
            <b>Cung này thuộc tam hợp Tuế Hổ Phù tại: ${tenCungGroup}</b>
        </div>`;
    }
    let groupTTD = tangTueDieuGroups.find(g => g.cacChi.includes(item.chi));
    if (groupTTD) {
        const tenCungGroup = getTenCungByChiArr(groupTTD.cacChi, arr).join('-');
        tamHopNote += `<div class="tang-tue-dieu-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
            <b>Cung này thuộc vòng Tang-Tuế-Điếu tại: ${tenCungGroup}</b>
        </div>`;
    }
    let groupALT = amLongTrucGroups.find(g => g.cacChi.includes(item.chi));
    if (groupALT) {
        const tenCungGroup = getTenCungByChiArr(groupALT.cacChi, arr).join('-');
        tamHopNote += `<div class="am-long-truc-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
            <b>Cung này thuộc tam hợp Âm Long Trực tại: ${tenCungGroup}</b>
        </div>`;
    }
    let groupDTP = duongTuPhucGroups.find(g => g.cacChi.includes(item.chi));
    if (groupDTP) {
        const tenCungGroup = getTenCungByChiArr(groupDTP.cacChi, arr).join('-');
        tamHopNote += `<div class="duong-tu-phuc-note" style="color: rgb(209, 0, 0); margin-bottom: 0.5em;">
            <b>Cung này thuộc tam hợp Dương Tử Phúc tại: ${tenCungGroup}</b>
        </div>`;
    }
    html += `<div class="daivan-item${(group || groupTTD || groupALT || groupDTP) ? ' thuoc-tam-hop-tue-ho-phu' : ''} ${item.cungTen}" id="${item.cungTen}" >
        <b ><br > Đại Vận:</b > ${item.startAge} tuổi - ${item.endAge} tuổi tại cung ${item.cungTen} (${item.chi}) 
        ${tamHopNote} 
    </div>`;
});

    document.getElementById('daivan-content').innerHTML = html;
}