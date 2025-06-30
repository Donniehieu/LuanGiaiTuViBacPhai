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
        if(isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Tử Vi", "Thẩt Sát")) {
            keyArr.push("Tử Vi Thất Sát đồng cung tọa thủ cung Mệnh ở Tỵ");
        }
         if(isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Tử Vi", "Thẩt Sát") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền"]) ) {
            keyArr.push("Tử Vi Thất Sát đồng cung tọa thủ cung Mệnh ở Tỵ gặp Hóa Quyền");
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
        // Tử Vi tọa thủ Mệnh Phá Toái Không Kiếp
        if(isHaiSaoDongCungTaiCung("Mệnh","Tử Vi", "Phá Toái") && kiemTraCachCuc("Tử Vi", ["Địa Không","Địa Kiếp"]) ) { 
            keyArr.push("Tử Vi tọa thủ cung Mệnh có Phá Toái đồng cung với Địa Không, Địa Kiếp");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Đào Hoa","Hồng Loan", "Địa Không", "Địa Kiếp"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh có Đào Hoa, Hồng Loan, Địa Không, Địa Kiếp");
        }
        


        //Tử vi tọa thủ Mệnh tại Thìn Tuất
         if ( isHaiSaoDongCungTaiCungChi("Mệnh", "Thìn", "Tử Vi", "Phá Toái")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Thìn có Phá Toái đồng cung");
        }
        if ( isHaiSaoDongCungTaiCungChi("Mệnh", "Tuất", "Tử Vi", "Phá Toái")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tuất có Phá Toái đồng cung");
        }
        // Tử vi tọa thủ Mệnh tại Sửu Mùi
        if ( isHaiSaoDongCungTaiCungChi("Mệnh", "Mùi", "Tử Vi", "Phá Toái")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Mùi có Phá Toái đồng cung");
        }
         if ( isHaiSaoDongCungTaiCungChi("Mệnh", "Sửu", "Tử Vi", "Phá Toái")) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Sửu có Phá Toái đồng cung");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tý");
        
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền","Hóa Lộc", "Hóa Khoa"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Tý gặp Quyền, Lộc, Khoa");
        
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền","Hóa Lộc", "Hóa Khoa"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Ngọ gặp Quyền, Lộc, Khoa");
        
        }
         if( isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền","Hóa Lộc", "Hóa Khoa","Kình Dương","Đà La"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Quyền, Lộc, Khoa, Kình, Đà");
        
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
         if(isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Tử Vi", "Thẩt Sát")) {
            keyArr.push("Tử Vi Thất Sát đồng cung tọa thủ cung Mệnh ở Hợi");
        }
         if(isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Tử Vi", "Thẩt Sát") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền"]) ) {
            keyArr.push("Tử Vi Thất Sát đồng cung tọa thủ cung Mệnh ở Hợi gặp Hóa Quyền");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam" && lasoData.chiCan === "N." ){
            keyArr.push("Nam mệnh sinh năm Nhâm có Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
          if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam" && lasoData.chiCan === "G." ){
            keyArr.push("Nam mệnh sinh năm Giáp có Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
               if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nữ" && lasoData.chiCan === "N." ){
            keyArr.push("Nữ mệnh sinh năm Nhâm có Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
          if( isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nữ" && lasoData.chiCan === "G." ){
            keyArr.push("Nữ mệnh sinh năm Giáp có Tử Vi tọa thủ cung Mệnh ở Hợi");
        }
        if ( isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Mão");
        }
        if( isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Tử Vi") ){
            keyArr.push("Tử Vi tọa thủ cung Mệnh ở Dậu");
        }
        if( isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Văn Khúc", "Văn Xương",] )) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu các sao Văn Khúc, Văn Xương");
        }
        if(isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hữu Bật")  ) {
            keyArr.push("Tử Vi đồng cung Tả Phù Hữu Bật");    
        }

        if( isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Tướng", "Văn Khúc", "Văn Xương", "Thiên Khôi", "Thiên Việt", "Tả Phù", "Hữu Bật"] )) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu các sao Thiên Tướng, Văn Khúc, Văn Xương, Thiên Khôi, Thiên Việt, Tả Phù, Hữu Bật");
        }
        // Nếu Tử Vi thủ mênh và gặp thiên Phủ
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Phủ"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu Thiên Phủ");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Phủ"]) && kiemTraCachCuc("Tử Vi", ["Tả Phù", "Hữu Bật"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu Thiên Phủ gặp Tả Phù, Hữu Bật");
        }
        if(isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Kình Dương") && kiemTraCachCuc("Tử Vi", ["Thiên Phủ"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu Thiên Phủ có Kình Dương đồng cung");
        }

        // Nếu Tử vi thủ mệnh gặp Lộc Mã
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Mã", "Lộc Tồn"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Thiên Mã, Lộc Tồn");
        }
         if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Vũ Khúc","Phá Quân","Kình Dương","Đà La"]) ) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Vũ Khúc, Phá Quân, Kình Dương, Đà La");
        }
        if(isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Thiên Phủ", "Vũ Khúc","Thiên Tướng","Tả Phù","Hữu Bật","Long Trì","Phượng Các","Hóa Khoa","Hóa Quyền","Hóa Lộc"]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Thiên Kiếp"])===null) {) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh và gặp Thiên Phủ, Vũ Khúc, Thiên Tướng, Tả Phù, Hữu Bật, Long Trì, Phượng Các, Hóa Khoa, Hóa Quyền, Hóa Lộc không gặp Kình Dương, Thiên Kiếp");
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
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Dậu","Tử Vi","Tham Lang")){
            keyArr.push("Tử Vi đồng cung Tham Lang tại Dậu");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh","Ngọ","Tử Vi") && kiemTraCachCuc("Tử Vi",["Thiên Hình", "Kình Dương", "Đà La"])===null && lasoData.chiCan ==="G.") {
            keyArr.push("Sinh năm Giáp có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp Thiên Hình, Kình Dương, Đà La");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh","Ngọ","Tử Vi") && kiemTraCachCuc("Tử Vi",["Thiên Hình", "Kình Dương", "Đà La"])===null && lasoData.chiCan ==="Đ.") {
            keyArr.push("Sinh năm Đinh có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp Thiên Hình, Kình Dương, Đà La");
        }
        if(isSaoToaThuTaiCungVaChi("Mệnh","Ngọ","Tử Vi") && kiemTraCachCuc("Tử Vi",["Thiên Hình", "Kình Dương", "Đà La"])===null && lasoData.chiCan ==="K.") {
            keyArr.push("Sinh năm Kỷ có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp Thiên Hình, Kình Dương, Đà La");
        }
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Dần","Tử Vi","Thiên Phủ")) {
            keyArr.push("Tử Vi đồng cung Thiên Phủ tại Dần");
        }
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Dần","Tử Vi","Thiên Phủ") && lasoData.chiCan ==="G.") {
            keyArr.push("Sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại Dần");
        }
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Dần","Tử Vi","Thiên Phủ") && lasoData.chiCan ==="K." && kiemTraCachCuc("Tử Vi",["Hóa Quyền"])) {
            keyArr.push("Sinh năm Kỷ có Tử Vi đồng cung Thiên Phủ tại Dần tại Mệnh gặp Hóa Quyền");
        }
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Thân","Tử Vi","Thiên Phủ")) {
            keyArr.push("Tử Vi đồng cung Thiên Phủ tại Thân");
        }
        if(isHaiSaoDongCungTaiCungChi("Mệnh","Thân","Tử Vi","Thiên Phủ") && lasoData.chiCan ==="G.") {
            keyArr.push("Sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại Thân");
        }


    }
function LuanCachCucSaoLiemTrinh(keyArr) {
        
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
        
        if(ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh==="Thìn") {
            keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Thìn");
        }
        if(ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh==="Tuất") {
            keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Tuất");
        }
        if(ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh==="Sửu") {
            keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Sửu");
        }
        if(ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh==="Mùi") {
            keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Mùi");
        }
        
        //mệnh vô chính diệu gặp Song Hao
        if(isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu',['Đại Hao','Tiểu Hao'])) {
            keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao");
        }
        // mệnh vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
        if(isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu',['Thiên Đồng','Thiên Lương','Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu',['Đại Hao','Tiểu Hao'])) {
            keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
        }

        if(lasoData.cungCu==="Phu Thê"){
            keyArr.push("Thân Cư Phu Thê");
        }
        if(lasoData.cungCu==="Tài Bạch"){
            keyArr.push("Thân Cư Tài Bạch");
        }
        if(lasoData.cungCu==="Phúc Đức"){
            keyArr.push("Thân Cư Phúc Đức");
        }

    }

function ThanMenhDongCungVoChinhDieu(keyArr){
    if(idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0){
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu");
        
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
    const menhKhong = saoMenh.includes("Địa Không") ;
    const thanKiep = saoThan.includes("Địa Kiếp") ;
    
    const menhKiep = saoMenh.includes("Địa Kiếp") ;
    const thanKhong = saoThan.includes("Địa Không") ;

    // Nếu đủ điều kiện, hiển thị cách cục hoặc trả về true
    if (menhKhong && thanKiep) {
        keyArr.push("Mệnh Không Thân Kiếp");
        return true;
    }else if( menhKiep && thanKhong) {
        keyArr.push("Mệnh Kiếp Thân Không");
        return true;
        
    }
    return false;
}
