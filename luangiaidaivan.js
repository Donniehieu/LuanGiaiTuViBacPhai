
let luanGiaiDaiVan_01 = [];
let luanGiaiDaiVan_02 = [];
let luanGiaiDaiVan_03 = [];
let luanGiaiDaiVan_04 = [];
let luanGiaiDaiVan_05 = [];
let luanGiaiDaiVan_06 = [];
let luanGiaiDaiVan_07 = [];
let luanGiaiDaiVan_08 = [];
let luanGiaiDaiVan_09 = [];
let luanGiaiDaiVan_10 = [];
let luanGiaiDaiVan_11 = [];
let luanGiaiDaiVan_12 = [];
let quanhetamhop_daivan_01;
let quanhetamhop_daivan_02;
let quanhetamhop_daivan_03;
let quanhetamhop_daivan_04;
let quanhetamhop_daivan_05;
let quanhetamhop_daivan_06;
let quanhetamhop_daivan_07;
let quanhetamhop_daivan_08;
let quanhetamhop_daivan_09;
let quanhetamhop_daivan_10;
let quanhetamhop_daivan_11;
let quanhetamhop_daivan_12;
let tamhoptuoi;
let tamhopdaivan_01;
let tamhopdaivan_02;
let tamhopdaivan_03;
let tamhopdaivan_04;
let tamhopdaivan_05;
let tamhopdaivan_06;
let tamhopdaivan_07;
let tamhopdaivan_08;
let tamhopdaivan_09;
let tamhopdaivan_10;
let tamhopdaivan_11;
let tamhopdaivan_12;

let nguhanhdaivan_01;
let nguhanhdaivan_02;
let nguhanhdaivan_03;
let nguhanhdaivan_04;
let nguhanhdaivan_05;
let nguhanhdaivan_06;
let nguhanhdaivan_07;
let nguhanhdaivan_08;
let nguhanhdaivan_09;
let nguhanhdaivan_10;
let nguhanhdaivan_11;
let nguhanhdaivan_12;
function Luantamhopdaivan(chiTuoi, chiDaiVan) {
    // Xác định ngũ hành tam hợp của tuổi và của đại vận
    function getNguHanhTamHopByChi(chi) {
        if (["Dần", "Ngọ", "Tuất"].includes(chi)) return "Hỏa";
        if (["Thân", "Tý", "Thìn"].includes(chi)) return "Thủy";
        if (["Tỵ", "Dậu", "Sửu"].includes(chi)) return "Kim";
        if (["Hợi", "Mão", "Mùi"].includes(chi)) return "Mộc";
        return "";
    }
    const hanhTuoi = getNguHanhTamHopByChi(chiTuoi);
    const hanhDaiVan = getNguHanhTamHopByChi(chiDaiVan);
    console.log(`Ngũ hành tuổi: ${hanhTuoi}, Ngũ hành đại vận: ${hanhDaiVan}`);
    if (!hanhTuoi || !hanhDaiVan) return "Không xác định được tam hợp hoặc ngũ hành.";
    // Luận sinh khắc
    const sinhKhac = xetSinhKhacTamHop(hanhTuoi, hanhDaiVan);
    console.log(hienHuongCoTamHop(sinhKhac));
    return hienHuongCoTamHop(sinhKhac);
}