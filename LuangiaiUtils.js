const Kinh = "Kình Dương";
const Da = "Đà La";
const Kiep = "Địa Không";
const Khong = "Địa Kiếp";
const KhongKiep= [Khong, Kiep];
const Ho = "Bạch Hổ";
const Cai ="Hoa Cái";
const Long ="Long Trì";
const Phuong = "Phượng Các";
const LongPhuong = [Long, Phuong];
const HoaLinh =["Hỏa Tinh","Linh Tinh"]
const lucsattinh = [Kinh, Da, Khong, Kiep, "Hỏa Tinh","Linh Tinh"];
const tulinh = [Ho, Cai, Long, Phuong];
const Khoa ="Hóa Khoa";
const Loc = "Hóa Lộc";
const Quyen = "Hóa Quyền";
const KhoaLocQuyen = [Khoa, Loc, Quyen];
const Phu = "Thiên Phủ";
const Vu ="Vũ Khúc";
const Tuong ="Thiên Tướng";
const PhuVuTuong = [Phu, Vu, Tuong];
const Xuong ="Văn Xương";
const Khuc ="Văn Khúc";
const XuongKhuc = [Xuong, Khuc];
const Khoi = "Thiên Khôi";
const Viet = "Thiên Việt";
const KhoiViet = [Khoi, Viet];
const Ta ="Tả Phù";
const Huu = "Hữu Bật";
const TaHuu = [Ta, Huu];
const Tham ="Tham Lang";
const Tu = "Tử Vi";
const Hinh ="Thiên Hình";
const Ky ="Hóa Kỵ";
const HinhKy = [Hinh, Ky];
const An = "Quốc Ấn";
const Hong ="Hồng Loan";
const Dao = "Đào Hoa";
const MaLoc =["Thiên Mã","Hóa Lộc"];


//tìm cung nào có sao nào đó tọa thủ
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
    const normalize = s => (typeof s === 'string' ? s.replace(/\s+/g, '').toLowerCase() : '');

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

// Hàm giúp tạo ra các mảng có chiều dài từ 1 đến n từ một mảng đầu vào
function getCombinations(array) {
  const result = [];
  const n = array.length;

  // Hàm đệ quy để sinh tổ hợp
  function combine(start, combo) {
    if (combo.length > 0) result.push(combo);
    for (let i = start; i < n; i++) {
      combine(i + 1, combo.concat(array[i]));
    }
  }

  combine(0, []);
  return result;
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

function isCungVoChinhDieu(idCung){
    getDanhSachChinhTinhTungCung()[idCung].chinhTinh.length === 0
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

/**
 * Kiểm tra sự xuất hiện của sao tại cung/chi với nhiều trường hợp khác nhau
 * @param {Object} options - Các lựa chọn:
 *   - tenSao: tên sao cần tìm (bắt buộc)
 *   - tenCung: tên cung cần kiểm tra (không bắt buộc, nếu không có sẽ kiểm tra trên tất cả các cung)
 *   - chi: tên chi cần kiểm tra (không bắt buộc, nếu không có sẽ kiểm tra trên tất cả các chi)
 *   - sao2: tên sao thứ 2 (nếu kiểm tra đông cung)
 *   - chi2: tên chi thứ 2 (nếu kiểm tra đông cung và chi đồng cung)
 *   - mode: kiểu kiểm tra:
 *      + "toaThu" (sao tọa thủ cung, có thể chỉ định thêm chi)
 *      + "haiSaoDongCung" (hai sao cùng cung, có thể chỉ định chi/chi2)
 *      + "toaThuChiOnly" (sao tại chi, không quan tâm cung)
 * @returns {boolean}
 */
function kiemTraSaoCung(options = {}) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return false;
    const normalize = s => (typeof s === 'string' ? s.replace(/\s+/g, '').toLowerCase() : '');

    switch (options.mode) {
        case "toaThu":
            {
                // Kiểm tra sao tọa thủ tại cung và (nếu có) chi
                return lasoOb.some(cung =>
                    (!options.tenCung || cung.tenCung === options.tenCung) &&
                    (!options.chi || cung.chi === options.chi) &&
                    Array.isArray(cung.sao) &&
                    cung.sao.some(sao => normalize(sao.ten) === normalize(options.tenSao))
                );
            }
        case "haiSaoDongCung":
            {
                // Kiểm tra hai sao đồng cung (và có thể cả chi, chi2)
                return lasoOb.some(cung =>
                    (!options.tenCung || cung.tenCung === options.tenCung) &&
                    (!options.chi || cung.chi === options.chi || !options.chi2 && cung.chi === options.chi) &&
                    Array.isArray(cung.sao) &&
                    cung.sao.some(sao => normalize(sao.ten) === normalize(options.tenSao)) &&
                    cung.sao.some(sao => normalize(sao.ten) === normalize(options.sao2))
                );
            }
        case "toaThuChiOnly":
            {
                // Tìm cung có chi đúng và chứa sao tên đúng (không cần tên cung)
                return lasoOb.some(
                    cung =>
                        (!options.chi || cung.chi === options.chi) &&
                        Array.isArray(cung.sao) &&
                        cung.sao.some(sao => normalize(sao.ten) === normalize(options.tenSao))
                );
            }
        default:
            return false;
    }
}
