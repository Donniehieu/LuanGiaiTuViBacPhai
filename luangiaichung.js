

function LuanGiaiChung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
   
 
    const sinh_khac_nam_sinh = xetSinhKhacNguHanhCanChi(lasoData.canNam, lasoData.chiNam);
    const quan_he_namsinh = hienHuongCoCanChi(sinh_khac_nam_sinh);
    const quan_he_menh_thien_ma= xetSinhKhacMenhVaThienMa(lasoData.hanhMenh);
    luanGiaiChung.push(quan_he_namsinh);
    luanGiaiChung.push(quan_he_menh_thien_ma);
   
    luanGiaiChung.push(lasoData.am_duong_tinh_chat);

    luanGiaiLoiKhuyen.push(quan_he_namsinh);
    luanGiaiLoiKhuyen.push(lasoData.am_duong_tinh_chat);

    luanGiaiLoiKhuyen.push(quan_he_menh_thien_ma);

}

