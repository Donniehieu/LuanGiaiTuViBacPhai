

function LuanGiaiChung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    //Luận về sinh khắc can chi của năm sinh
 
    const sinh_khac_nam_sinh = xetSinhKhacNguHanhCanChi(lasoData.canNam, lasoData.chiNam);
    const quan_he_namsinh = hienHuongCoCanChi(sinh_khac_nam_sinh);
    luanGiaiChung.push(quan_he_namsinh);


    
}

