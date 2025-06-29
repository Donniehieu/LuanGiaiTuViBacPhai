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
        if(isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tỵ, Ngọ, Dần, Thân");
        }
        //Tử vi tọa thủ Mệnh tại Thìn Tuất
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Thìn, Tuất");
        }
        // Tử vi tọa thủ Mệnh tại Sửu Mùi
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Sửu, Mùi");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") ||isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Tử Vi") || isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Tử Vi")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tý, Hợi, Mão, Dậu");
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
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Kình Dương"]) || isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Đà La"])  || isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Địa Không"]) || isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Địa Kiếp"]) )   {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Kình Dương hoặc Đà La hoặc Địa Không hoặc Địa Kiếp");
        }

 


}