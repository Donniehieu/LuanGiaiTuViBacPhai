
function showMenhKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu) {

    // Lấy các sao của cung Mệnh và cung Thân
    const saoMenh = [].concat(
        (dsChinh[idxCungMenh] && dsChinh[idxCungMenh].chinhTinh) || [],
        (dsPhu[idxCungMenh] && dsPhu[idxCungMenh].phuTinh) || []
    );
    const saoThan = [].concat(
        (dsChinh[idxCungThan] && dsChinh[idxCungThan].chinhTinh) || [],
        (dsPhu[idxCungThan] && dsPhu[idxCungThan].phuTinh) || []
    );

    // Kiểm tra điều kiện
    const menhKhong = saoMenh.includes("Địa Không");
    const thanKiep = saoThan.includes("Địa Kiếp") || saoThan.includes("Địa Không");

    // Nếu đủ điều kiện, hiển thị cách cục hoặc trả về true
    if (menhKhong && thanKiep) {

        return true;
    }
    return false;
}//tìm cung nào có sao nào đó tọa thủ
function isSaoToaThuTaiCung(tenCungKiemTra, tenSao) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    return cung.sao.some(
        sao => sao.ten.replace(/\s+/g, '').toLowerCase() === tenSao.replace(/\s+/g, '').toLowerCase()
    );
}


//tìm sao nào đó tọa thủ một cung nào đó tại chi nào đó
function isSaoToaThuTaiCungVaChi(tenCungKiemTra, chiKiemTra, tenSao) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra && c.chi === chiKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    return cung.sao.some(
        sao => sao.ten.replace(/\s+/g, '').toLowerCase() === tenSao.replace(/\s+/g, '').toLowerCase()
    );
}
//Hai sao đông cung tại một cung không phân biệt chi
function isHaiSaoDongCungTaiCung(tenCungKiemTra, sao1, sao2) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c => c.tenCung === tenCungKiemTra);
    if (!cung || !Array.isArray(cung.sao)) return false;
    // Tìm hai sao theo tên, không phân biệt class
    const hasSao1 = cung.sao.some(sao => sao.ten.replace(/\s+/g, '').toLowerCase() === sao1.replace(/\s+/g, '').toLowerCase());
    const hasSao2 = cung.sao.some(sao => sao.ten.replace(/\s+/g, '').toLowerCase() === sao2.replace(/\s+/g, '').toLowerCase());
    return hasSao1 && hasSao2;
}
//Hai sao đông cung tại một cung tại chi nào đấy
function isHaiSaoDongCungTaiCungChi(tenCungKiemTra, chiKiemTra, sao1, sao2) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const cung = lasoOb.find(c =>
        c.tenCung === tenCungKiemTra && c.chi === chiKiemTra
    );
    if (!cung || !Array.isArray(cung.sao)) return false;
    // So sánh tên sao bỏ khoảng trắng và thường hóa
    const normalize = s => s.replace(/\s+/g, '').toLowerCase();
    const hasSao1 = cung.sao.some(sao => normalize(sao.ten) === normalize(sao1));
    const hasSao2 = cung.sao.some(sao => normalize(sao.ten) === normalize(sao2));
    return hasSao1 && hasSao2;
}
// tìm cung tọa thủ của sao cụ thể để ra cách cục
function timCungCuaSao(tenSao) {
    // 1. Lấy dữ liệu lá số từ localStorage
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    // 2. Lấy mảng 12 cung (mỗi cung là object, có các thuộc tính như tenCung, chi, sao,...)
    const lasoOb = lasoData.lasoOb || [];

    return lasoOb.find(
        cung =>
            Array.isArray(cung.sao) &&
            cung.sao.some(
                sao => {
                    console.log("Tìm sao:", sao.ten);
                    return sao.ten === tenSao;
                }
            )
    ) || null; // Nếu không tìm thấy, trả về null
}
function getNhiHopNhiHai(idCungGoc) {
    // Đảm bảo id trong khoảng 0-11
    if (typeof idCungGoc !== "number" || idCungGoc < 0 || idCungGoc > 11) return null;

    // Theo quy luật bạn liệt kê:
    // nhiHop: (12 - idCungGoc) % 12
    // nhiHai: (idCungGoc + 5) % 12

    const nhiHop = (11 - idCungGoc+12) % 12;
    const nhiHai = (5-idCungGoc + 12) % 12;

    return { nhiHop, nhiHai };
}
function getTamPhuongTuChinhIdx(idxCungGoc) {
    // Trả về chỉ số các cung tam phương tứ chính
    console.log("Chỉ số cung gốc:", idxCungGoc);
    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp
    
    ];
}
function getHoiChieuCungTot(idxCungGoc) {
    // Trả về chỉ số các cung tam phương tứ chính
    console.log("Chỉ số cung gốc:", idxCungGoc);
    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp
        (11 - idxCungGoc+12) % 12,// Cung nhị hợp
      
    
    ];
}
function getHoiChieuCungXau(idxCungGoc) {
    // Trả về chỉ số các cung hội chiếu xấu }
    return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp
        (5 - idxCungGoc+12) % 12,// Cung nhị hợp
      
    
    ];
}
function getHoiChieuCung(idxCungGoc) {
    // Trả về chỉ số các cung hội chiếu }
     return [
        (idxCungGoc + 4) % 12, // Cung tam hợp
        (idxCungGoc + 6) % 12,  // Cung đối
        (idxCungGoc + 8) % 12, // Cung tam hợp
        (11 - idxCungGoc+12) % 12,// Cung nhị hợp
        (5-idxCungGoc + 12) % 12  //cung nhị hại
    ];
}
/**
 * Kiểm tra cung gốc và tam phương tứ chính có đủ các sao trong một bộ không
 * @param {Array} lasoOb - mảng 12 cung
 * @param {string} tenSaoGoc - tên sao gốc (ví dụ "Tử Vi")
 * @param {Array<string>} boSaoCanKiemTra - tên các sao cần kiểm tra trong tam phương tứ chính
 * @returns {object|null} - Nếu đủ bộ sao thì trả về thông tin (cung gốc, các cung hội hợp, các sao hội hợp), ngược lại trả về null
 */
function kiemTraCachCuc(tenSaoGoc, boSaoCanKiemTra) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    const cungGoc = timCungCuaSao(tenSaoGoc);
    console.log("Cung gốc:", cungGoc);
    if (!cungGoc) return null;
    const idxCungGoc = lasoData.lasoOb.findIndex(c => c.tenCung === cungGoc.tenCung)   || cungGoc.idCunggoc;
    console.log("Chỉ số cung gốc:", idxCungGoc);
    const idxHop = getHoiChieuCung(idxCungGoc);

    // Gộp các sao của 3 cung hội hợp thành 1 mảng phẳng
    let saoHoiHop = [];
    idxHop.forEach(idx => {
        const cung = lasoOb[idx];
        if (cung && Array.isArray(cung.sao)) {
            saoHoiHop.push(...cung.sao.map(sao => sao.ten));
        }
    });
   
    console.log("Các sao hội hợp:", saoHoiHop);
    console.log("Bộ sao cần kiểm tra:", boSaoCanKiemTra);
    // Chuẩn hóa so sánh
    const normalize = s => (s ? String(s) : '').replace(/\s+/g, '').toLowerCase();

    // Kiểm tra đủ bộ sao không (bộ hợp phải chứa tất cả phần tử boSaoCanKiemTra)
    const hopDuBo = boSaoCanKiemTra.every(
        s => saoHoiHop.some(hop => normalize(hop) === normalize(s))
    );

    console.log("Cung gốc:", cungGoc.tenCung, "Chi:", cungGoc.chi);
    console.log("Các sao hội hợp:", saoHoiHop);
    console.log("Đủ bộ hợp:", hopDuBo);

    if (!hopDuBo) return null;
    // Nếu thỏa mãn cách cục, trả về chi tiết
    return {
        cungGoc: { tenCung: cungGoc.tenCung, chi: cungGoc.chi },
        cacSaoHoiHop: saoHoiHop,
        idxHoiHop: idxHop
    };
}



//tìm sao cụ thể tại chi cụ thể trong lá số
function isSaoToaThuTaiChi(tenSao, chiKiemTra) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const normalize = s => s.replace(/\s+/g, '').toLowerCase();
    // Tìm cung có chi đúng và chứa sao tên đúng
    return lasoOb.some(
        cung =>
            cung.chi === chiKiemTra &&
            Array.isArray(cung.sao) &&
            cung.sao.some(sao => normalize(sao.ten) === normalize(tenSao))
    );
}
