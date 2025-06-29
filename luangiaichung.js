

function LuanGiaiChung() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
   
 
    const sinh_khac_nam_sinh = xetSinhKhacNguHanhCanChi(lasoData.canNam, lasoData.chiNam);
    const quan_he_namsinh = hienHuongCoCanChi(sinh_khac_nam_sinh);
    const quan_he_menh_thien_ma= xetSinhKhacMenhVaThienMa(lasoData.hanhMenh);


   
    luanGiaiChung.push(quan_he_namsinh);
    luanGiaiChung.push(checkLocTonHayLuuNienVanTinh(lasoData));
    luanGiaiChung.push(quan_he_menh_thien_ma);
    luanGiaiChung.push(lasoData.am_duong_tinh_chat);
    

    luanGiaiLoiKhuyen.push(quan_he_namsinh);
    luanGiaiLoiKhuyen.push(lasoData.am_duong_tinh_chat);

    luanGiaiLoiKhuyen.push(quan_he_menh_thien_ma);

}
function checkLocTonHayLuuNienVanTinh(lasoData){

    let loc="";
 
   if(lasoData.canNam ==='G.' || lasoData.canNam==='Ấ.' || lasoData.canNam ==='C.' || lasoData.canNam==='T.' ){

          loc= "Can Giáp, Can Ất, Can Canh, Can Tân được hưởng trọn vẹn Lộc Tồn chính danh";
   }
   if(lasoData.canNam ==='B.' || lasoData.canNam==='K.' || lasoData.canNam ==='M.' || lasoData.canNam==='Q.' || lasoData.canNam ==='N.' || lasoData.canNam==='Đ.' ){

          loc= "Can năm sinh Bính, Đinh, Mậu, Kỷ, Nhâm, Quý được hưởng trọn vẹn Lưu Niên Văn Tinh chính danh";
   }
  
   return loc;

}
