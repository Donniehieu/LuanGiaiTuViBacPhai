function danhGiaViTriCungMenh(hanh, chi) {
    const quyTac = HANH_DIA_VI[hanh];
    if (!quyTac) return "Không xác định hành";
    if (quyTac.sinh === chi) return "Sinh địa";
    if (quyTac.vuong === chi) return "Vượng địa";
    if (quyTac.bai === chi) return "Bại địa";
    if (quyTac.tuyet === chi) return "Tuyệt địa";
    return "Bình thường";
}

function LuanMenhCung(){
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Mệnh',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };

}



function LuanCachCucSaoTuViTaiMenh(keyArr) {
  // Nếu  Mệnh có Tử VI ở Tỵ Ngọ Dần Thân thì thông minh...
        if(isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tỵ");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Ngọ");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Dần");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Thân");
        }
        //Tử vi tọa thủ Mệnh tại Thìn Tuất
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Tử Vi") ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Thìn");
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Tử Vi") ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tuất");
        }
        // Tử vi tọa thủ Mệnh tại Sửu Mùi
        if ( isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Mùi");
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Sửu");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Tử Vi") )
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tý");
        
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
        if ( isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Mão");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Dậu");
        }
        if( isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Tướng", "Văn Khúc", "Văn Xương", "Thiên Khôi", "Thiên Việt", "Tả Phù", "Hữu Bật"] )) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu các sao Thiên Tướng, Văn Khúc, Văn Xương, Thiên Khôi, Thiên Việt, Tả Phù, Hữu Bật");
        }
        // Nếu Tử Vi thủ mênh và gặp thiên Phủ
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Phủ"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu Thiên Phủ");
        }
        // Nếu Tử vi thủ mệnh gặp Lộc Mã
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Mã", "Lộc Tồn"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Thiên Mã, Lộc Tồn");
        }
        // Nếu Tử vi đồng cung với Thất Sát 
        if(isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thất Sát")) {
            keyArr.push("Tử Vi đồng cung với Thất Sát");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Kình Dương, Đà La");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Địa Không", "Địa Kiếp"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Địa Không, Địa Kiếp");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La","Địa Không", "Địa Kiếp"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Kình Dương, Đà La, Địa Không, Địa Kiếp");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Kình Dương"]) )   {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Kình Dương");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Đà La"]) )   {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Đà La");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Địa Không"]) )   {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Địa Không");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Địa Kiếp"]) )   {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Địa Kiếp");
        }

    }


