
let luanGiaiDaiVanTaiMenh = [];
let luanGiaiDaiVanTaiPhuMau = [];
let luanGiaiDaiVanTaiPhucDuc = [];
let luanGiaiDaiVanTaiDienTrach = [];
let luanGiaiDaiVanTaiQuanLoc = [];
let luanGiaiDaiVanTaiNoBoc = [];
let luanGiaiDaiVanTaiThienDi = [];
let luanGiaiDaiVanTaiTatAch = [];
let luanGiaiDaiVanTaiTaiBach = [];
let luanGiaiDaiVanTaiTuTuc = [];
let luanGiaiDaiVanTaiPhuThe = [];
let luanGiaiDaiVanTaiHuynhDe = [];

const arrLuanGiaiDaiVanTungCung = [
    luanGiaiDaiVanTaiMenh,
    luanGiaiDaiVanTaiPhuMau,
    luanGiaiDaiVanTaiPhucDuc,
    luanGiaiDaiVanTaiDienTrach,
    luanGiaiDaiVanTaiQuanLoc,
    luanGiaiDaiVanTaiNoBoc,
    luanGiaiDaiVanTaiThienDi,
    luanGiaiDaiVanTaiTatAch,
    luanGiaiDaiVanTaiTaiBach,
    luanGiaiDaiVanTaiTuTuc,
    luanGiaiDaiVanTaiPhuThe,
    luanGiaiDaiVanTaiHuynhDe
];

function Luantamhopdaivan(chiTuoi, chiDaiVan) {

    const hanhTuoi = getNguHanhTamHopByChi(chiTuoi);
    const hanhDaiVan = getNguHanhTamHopByChi(chiDaiVan);
 
    if (!hanhTuoi || !hanhDaiVan) return "Không xác định được tam hợp hoặc ngũ hành.";
    // Luận sinh khắc
    const sinhKhac = xetSinhKhacTamHop(hanhTuoi, hanhDaiVan);

    return hienHuongCoTamHop(sinhKhac);
}

function LuanNguhanhMenhvaDaivan(lasoData, chiDaiVan) {
    const hanhMenh = lasoData.hanhMenh;
    if (!hanhMenh) return "Không xác định được ngũ hành của tuổi hoặc đại vận.";

    // Luận sinh khắc
    const sinhKhac = xetSinhKhacBinhHoaMenhVaChiDaiVan(hanhMenh, chiDaiVan);
    console.log(sinhKhac);
 
    return hienHuongCoMenhChiDaiVan(sinhKhac);

}
function Luangiaidaivan() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const chiNam = lasoData.chiNam;

    for (let i = 0; i < 12; ++i) {
        
        const chiCungDaiVan = lasoData.lasoOb[i].chi;
        arrLuanGiaiDaiVanTungCung[i].push(Luantamhopdaivan(chiNam, chiCungDaiVan));
        arrLuanGiaiDaiVanTungCung[i].push(LuanNguhanhMenhvaDaivan(lasoData, chiCungDaiVan));
       
        TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, IDclassDaivan[i], arrLuanGiaiDaiVanTungCung[i]);

    }
    

}