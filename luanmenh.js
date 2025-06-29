function kiemTraDiaSinh(banMenh, cungVi) {
    // Gom Thủy và Thổ làm một nhóm theo bảng
    let group = banMenh;
    if (banMenh === "Thổ") group = "Thủy - Thổ";
    if (banMenh === "Thủy") group = "Thủy - Thổ";

    // Bảng tra cứu
    const table = {
        "Kim": {
            "Sinh địa": ["Tỵ"],
            "Vượng địa": ["Dậu"],
            "Bại địa": ["Ngọ"],
            "Tuyệt địa": ["Dần"]
        },
        "Mộc": {
            "Sinh địa": ["Hợi"],
            "Vượng địa": ["Mão"],
            "Bại địa": ["Tý"],
            "Tuyệt địa": ["Thân"]
        },
        "Hỏa": {
            "Sinh địa": ["Dần"],
            "Vượng địa": ["Ngọ"],
            "Bại địa": ["Mão"],
            "Tuyệt địa": ["Hợi"]
        },
        "Thủy - Thổ": {
            "Sinh địa": ["Thân"],
            "Vượng địa": ["Tý"],
            "Bại địa": ["Dậu"],
            "Tuyệt địa": ["Tỵ"]
        }
    };

    // Tìm nhóm đúng
    const mapping = table[group];

    // Tìm trạng thái địa
    for (let key in mapping) {
        if (mapping[key].includes(cungVi)) {
            return key;
        }
    }
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

function LuanCungMenh(keyArr){
    LuanCachCucSaoTuViTaiMenh(keyArr);
    LuanCachCucSaoLiemTrinh(keyArr);
    LuanCacCachCucKhac(keyArr);
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
function LuanCachCucSaoLiemTrinh(keyArr) {
        //Nếu Liêm Trinh tại Thìn Tuất Sửu Mùi , Tý Ngọ Dần Thân mà gặp Văn Xương Quan Phù dễ đến cửa quan
        

        


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


    function LuanCacCachCucKhac(keyArr){
        let lasoData = {};
        try {
            lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
        } catch (e) { lasoData = {}; }
        const lasoOb = lasoData.lasoOb || [];
        if (!Array.isArray(lasoOb)) return;
        const cungMenh = lasoOb.find(c => c.tenCung === 'Mệnh');
        const chiCungMenh = lasoData.lasoOb[0].chi;
        
        // Nếu là đàn ông sinh năm Ngọ, Mùi, Mệnh an tại Tý, Sửu thì cuộc đời vất vả lo toan
       
        if(lasoData.gioitinh === 'Nam' && 
           (lasoData.chiNam === 'Ngọ') && 
           (chiCungMenh === 'Tý' )) {
            keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Tý");
        }
        if(lasoData.gioitinh === 'Nam' && 
           (lasoData.chiNam === 'Ngọ') && 
           (chiCungMenh === 'Sửu' )) {
            keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Sửu");
        }
        if(lasoData.gioitinh === 'Nam' && 
           (lasoData.chiNam === 'Mùi') && 
           (chiCungMenh === 'Tý' )) {
            keyArr.push("Anh sinh năm Mùi, Mệnh an tại Tý");
        }
          if(lasoData.gioitinh === 'Nam' && 
           (lasoData.chiNam === 'Mùi') && 
           (chiCungMenh === 'Tý' )) {
            keyArr.push("Anh sinh năm Mùi, Mệnh an tại Sửu");
        }
        
        // Nếu là đàn bà cung mệnh an tại Tứ Mộ khôn ngoan

        if(lasoData.gioitinh === 'Nữ' && 
           (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
            keyArr.push("Cung Mệnh của chị được an tại ví trí Tứ Mộ");
        }
        if(lasoData.gioitinh === 'Nữ' && 
           (chiCungMenh === 'Dậu')) {
            keyArr.push("Cung Mệnh của chị được an tại ví trí cung Dậu");
        }
        if(lasoData.gioitinh === 'Nữ' && 
           (chiCungMenh === 'Tý')) {
            keyArr.push("Cung Mệnh của chị được an tại ví trí cung Tý");
        }
        if(lasoData.gioitinh === 'Nữ' && 
           (chiCungMenh === 'Ngọ')) {
            keyArr.push("Cung Mệnh của chị được an tại ví trí cung Ngọ");
        }
       
       

    }

function ThanMenhDongCungVoChinhDieu(keyArr){
    if(idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0){
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu");
        console.log("Thân và Mệnh đồng cung Vô Chính Diệu");
        return true;
    }
}


function MenhKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Mệnh và cung Thân
    const saoMenh = [].concat(
        (dsChinh[idxCungMenh] && dsChinh[idxCungMenh].chinhTinh) || [],
        (dsPhu[idxCungMenh] && dsPhu[idxCungMenh].phuTinh) || []
    );
    const saoThan = [].concat(
        (dsChinh[idxCungThan] && dsChinh[idxCungThan].chinhTinh) || [],
        (dsPhu[idxCungThan] && dsPhu[idxCungThan].phuTinh) || []
    );

    // Kiểm tra điều kiện
    const menhKhong = saoMenh.includes("Địa Không");
    const thanKiep = saoThan.includes("Địa Kiếp") || saoThan.includes("Địa Không");

    // Nếu đủ điều kiện, hiển thị cách cục hoặc trả về true
    if (menhKhong && thanKiep) {
        keyArr.push("Mệnh Không Thân Kiếp");
        return true;
    }
    return false;
}
