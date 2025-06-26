
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

function Luangiaidaivan() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    luanGiaiDaiVanTaiMenh.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[0].chi));
    luanGiaiDaiVanTaiPhuMau.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[1].chi));
    luanGiaiDaiVanTaiPhucDuc.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[2].chi));
    luanGiaiDaiVanTaiDienTrach.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[3].chi));
    luanGiaiDaiVanTaiQuanLoc.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[4].chi));
    luanGiaiDaiVanTaiNoBoc.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[5].chi));
    luanGiaiDaiVanTaiThienDi.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[6].chi));
    luanGiaiDaiVanTaiTatAch.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[7].chi));
    luanGiaiDaiVanTaiTaiBach.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[8].chi));
    luanGiaiDaiVanTaiTuTuc.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[9].chi));
    luanGiaiDaiVanTaiPhuThe.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[10].chi));
    luanGiaiDaiVanTaiHuynhDe.push(Luantamhopdaivan(lasoData.chiNam, lasoData.lasoOb[11].chi));

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