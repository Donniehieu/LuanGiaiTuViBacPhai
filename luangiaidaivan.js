
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

function Luantamhopdaivan(chiTuoi, chiDaiVan) {

    const hanhTuoi = getNguHanhTamHopByChi(chiTuoi);
    const hanhDaiVan = getNguHanhTamHopByChi(chiDaiVan);
    console.log(`Ngũ hành tuổi: ${hanhTuoi}, Ngũ hành đại vận: ${hanhDaiVan}`);
    if (!hanhTuoi || !hanhDaiVan) return "Không xác định được tam hợp hoặc ngũ hành.";
    // Luận sinh khắc
    const sinhKhac = xetSinhKhacTamHop(hanhTuoi, hanhDaiVan);

    return hienHuongCoTamHop(sinhKhac);
}

function LuanNguhanhMenhvaDaivan(lasoData, chiDaiVan){
   

    const hanhMenh = lasoData.hanhMenh;
    const hanhDaiVan = layNguHanhChi(chiDaiVan);

    if (!hanhMenh || !hanhDaiVan) return "Không xác định được ngũ hành của tuổi hoặc đại vận.";

    // Luận sinh khắc
    const sinhKhac = xetSinhKhacBinhHoaMenhVaChiDaiVan(hanhMenh, hanhDaiVan);

    return hienHuongCoMenhChiDaiVan(sinhKhac);
}
function Luangiaidaivan() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    // const chiDaiVanCungMenh = lasoData.lasoOb[0].chi;
    // const chiDaiVanCungPhuMau = lasoData.lasoOb[1].chi;
    // const chiDaiVanCungPhucDuc = lasoData.lasoOb[2].chi;
    // const chiDaiVanCungDienTrach = lasoData.lasoOb[3].chi;
    // const chiDaiVanCungQuanLoc = lasoData.lasoOb[4].chi;
    // const chiDaiVanCungNoBoc = lasoData.lasoOb[5].chi;
    // const chiDaiVanCungThienDi = lasoData.lasoOb[6].chi;
    // const chiDaiVanCungTatAch = lasoData.lasoOb[7].chi;
    // const chiDaiVanCungTaiBach = lasoData.lasoOb[8].chi;
    // const chiDaiVanCungTuTuc = lasoData.lasoOb[9].chi;
    // const chiDaiVanCungPhuThe = lasoData.lasoOb[10].chi;
    // const chiDaiVanCungHuynhDe = lasoData.lasoOb[11].chi;
    // const hanhMenh = lasoData.hanhMenh;
    const chiNam= lasoData.chiNam;

    luanGiaiDaiVanTaiMenh.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[0].chi));
    luanGiaiDaiVanTaiPhuMau.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[1].chi));
    luanGiaiDaiVanTaiPhucDuc.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[2].chi));
    luanGiaiDaiVanTaiDienTrach.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[3].chi));
    luanGiaiDaiVanTaiQuanLoc.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[4].chi));
    luanGiaiDaiVanTaiNoBoc.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[5].chi));
    luanGiaiDaiVanTaiThienDi.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[6].chi));
    luanGiaiDaiVanTaiTatAch.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[7].chi));
    luanGiaiDaiVanTaiTaiBach.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[8].chi));
    luanGiaiDaiVanTaiTuTuc.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[9].chi));
    luanGiaiDaiVanTaiPhuThe.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[10].chi));
    luanGiaiDaiVanTaiHuynhDe.push(Luantamhopdaivan(chiNam, lasoData.lasoOb[11].chi));



  
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanMenh, luanGiaiDaiVanTaiMenh);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanPhuMau, luanGiaiDaiVanTaiPhuMau);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanPhucDuc, luanGiaiDaiVanTaiPhucDuc);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanDienTrach, luanGiaiDaiVanTaiDienTrach);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanQuanLoc, luanGiaiDaiVanTaiQuanLoc);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanNoBoc, luanGiaiDaiVanTaiNoBoc);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanThienDi, luanGiaiDaiVanTaiThienDi);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanTatAch, luanGiaiDaiVanTaiTatAch);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanTaiBach, luanGiaiDaiVanTaiTaiBach);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanTuTuc, luanGiaiDaiVanTaiTuTuc);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanPhuThe, luanGiaiDaiVanTaiPhuThe);
    TraSao(comboLuanDaiVanData, fileLuangiaiDaiVan, classDaiVanHuyenDe, luanGiaiDaiVanTaiHuynhDe);

}