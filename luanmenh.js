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

function LuanCungMenh() {
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
function LuanCungMenh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
    keyArr.push(`Vị trí địa sinh cung Mệnh tại ${vitriDiaSinhCungMenh}`);
    console.log(`Vị trí địa sinh cung Mệnh tại ${vitriDiaSinhCungMenh}`);
    LuanCachCucSaoTuViTaiMenh(keyArr);
    LuanCachCucSaoLiemTrinh(keyArr);
    LuanCacCachCucKhac(keyArr);
}




function LuanCachCucSaoTuViTaiMenh(keyArr) {


    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Tỵ", "Ngọ", "Dần", "Thân"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Sửu", "Mùi"];
    const binh = ["Hợi", "Tý", "Mão", "Dậu"];
    const maodau = ["Mão", "Dậu"];
    const gdk = ["G.", "Đ.", "K."];
    const giap_dinh_ky = ["Giáp", "Đinh", "Kỷ"];
    const nhamgiap = ["Nhâm", "Giáp"];
    const nh_giap = ["N.", "G."];
    const danthan = ["Dần", "Thân"];
    const tuphu = ["Tử Vi", "Thiên Phủ"];
    const tyhoi = ["Tỵ", "Hợi"];
    const vupha =["Vũ Khúc","Phá Quân"];
    const tupha = ["Tử Vi", "Phá Quân"];
    const tuvu = ["Tử Vi", "Vũ Khúc"];
    const tumo =["Thìn","Tuất", "Mùi", "Sửu"];

    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ mệnh ở miếu, vượng, đắc địa

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ mệnh miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mb[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Mệnh ở ${mb[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ mệnh ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", vd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Mệnh ở ${vd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${vd[i]}`);
        }
    }
    // Tử vi thủ mệnh gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);
  

    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        console.log("Tử Vi tọa thủ cung Mệnh và hội chiếu các sao:", cattinh.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu các", cattinh.join(", "));
    }
    //Tử vi thủ mệnh gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        console.log("Tử Vi tọa thủ cung Mệnh và hội chiếu ", KhongKiep.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu ", KhongKiep.join(", "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            console.log("Tử Vi tọa thủ cung Mệnh và hội chiếu các sao:", hungtinh.join(", "));
            keyArr.push("Tử Vi tọa thủ cung Mệnh và hội chiếu các", hungtinh.join(", "));

        }
    }

    // Tử vi thủ mệnh đồng cung với Tham Lang

    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Tham)) {
            console.log(`Tử Vi đồng cung với ${Tham} tại Mệnh`);
            keyArr.push(`Tử Vi đồng cung với ${Tham} tại Mệnh`);
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Mệnh ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                console.log(`Sinh năm ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp`, HinhKy.join(", "));
                keyArr.push(`Sinh năm ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Mệnh ở Ngọ và không gặp`, HinhKy.join(", "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Mệnh ở Hợi, Nữ có Tử Vi tọa thủ cung Mệnh ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                console.log(`Nam mệnh sinh năm ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Hợi`);
                keyArr.push(`Nam mệnh sinh năm ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                console.log(`Nữ mệnh sinh năm ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Dần`);
                keyArr.push(`Nữ mệnh sinh năm ${nhamgiap[i]} có Tử Vi tọa thủ cung Mệnh ở Dần`);
            }
        }
    }
    // Tử phủ đồng cung, mệnh an tại dần thân, sinh năm giáp


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                console.log(`Sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
                keyArr.push(`Sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }


    // Tử vi tọa mệnh đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Phủ gặp", TaHuu.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Phủ gặp", TaHuu.join(", "));
    }
    // Tử vi hoặc Thiên Phủ tọa mệnh gặp Tả Hữu
    for(    let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            console.log(`${tuphu[i]} tọa thủ cung Mệnh gặp`, TaHuu.join(", "));
            keyArr.push(`${tuphu[i]} tọa thủ cung Mệnh gặp`, TaHuu.join(", "));
        }
        
    }

    // Tử hoặc Phủ tọa thủ cung Mệnh đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", tuphu[i], "Kình Dương")) {
            console.log(`${tuphu[i]} tọa thủ cung Mệnh đồng cung Kình Dương`);
            keyArr.push(`${tuphu[i]} tọa thủ cung Mệnh đồng cung Kình Dương`);
        }

    }
     console.log("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "),"Không gặp", KhongKiep.concat(Kinh).join(", "));

    // Tử vi tại mệnh gặp cát tinh
    if( isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An)) ) {
         console.log("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));
         keyArr.push("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if(kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh))==false){
       keyArr.push("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "),"Không gặp", KhongKiep.concat(Kinh).join(", "));
       console.log("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "),"Không gặp", KhongKiep.concat(Kinh).join(", "));
       }
    }
    
    console.log(lasoData.cungCu);
    // Tử vi tại mệnh đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if( isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Tướng") && (lasoData.cungCu,"Phá Toai") && kiemTraCachCuc("Phá Toái", Kinh) ) {
        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá toại tại cung thân hợp chiếu với sao Kình Dương");
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá toại tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for(let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Tử Vi", "Thất Sát")) {
            console.log(`Tử Vi đồng cung với Thất Sát tại Mệnh ở ${tyhoi[i]}`);
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Mệnh ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Mệnh

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thất Sát") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền"])) {
        console.log("Tử Vi đồng cung với Thất Sát tại Mệnh gặp Hóa Quyền");
        keyArr.push("Tử Vi đồng cung với Thất Sát tại Mệnh gặp Hóa Quyền");
    }
    
    // Tử Vũ hoặc Tử Phá đồng cung tại Mệnh gặp Kình Đà
    for (let i = 0; i < vupha.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", vupha[i]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"])) {
            console.log(`Tử Vi đồng cung với ${vupha[i]} tại Mệnh gặp Kình Dương, Đà La`);
            keyArr.push(`Tử Vi đồng cung với ${vupha[i]} tại Mệnh gặp Kình Dương, Đà La`);
        }
    }
    // Tử vi hoặc Vũ Khúc thủ mệnh gặp Sát tinh
   
    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            console.log(`${tuvu[i]} tọa thủ cung Mệnh gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`${tuvu[i]} tọa thủ cung Mệnh gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
    }
    // Tử vi hoặc Phá Quân thủ mệnh tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], tupha[j]) ) {
                console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]}`);
                keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]}`);
                if(kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            
                
                
                    console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                
            
        }
    }
    
   


}

function LuanCachCucSaoLiemTrinh(keyArr) {

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Thìn", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Thìn");

    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tuất", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tuất");

    }
    // Tử vi tọa thủ Mệnh tại Sửu Mùi
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Mùi", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mùi");

    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Sửu", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Sửu");

    }
    // Liêm tọa thủ Mệnh tại Tý Ngọ
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tý");

    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Ngọ");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Tý gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Ngọ gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Dần gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Thân gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Thìn gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Tuất gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Sửu gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nam") {
        keyArr.push("Anh có Liêm Trinh tọa thủ cung Mệnh ở Mùi gặp Văn Xương, Văn Khúc");

    }

    // Nữ miếu vượng đắc địa gặp sao tốt
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Tý gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Ngọ gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Dần gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Thân gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Thìn gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Tuất gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Sửu gặp Văn Xương, Văn Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Văn Xương", "Văn Khúc"]) && lasoData.gioitinh === "Nữ") {
        keyArr.push("Chị có Liêm Trinh tọa thủ cung Mệnh ở Mùi gặp Văn Xương, Văn Khúc");

    }

    // Miếu vượng đắc địa gặp sao tốt
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tý gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Ngọ gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Dần gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Thân gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Thìn gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tuất gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Sửu gặp Quyền, Lộc, Khoa, Phủ, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mùi gặp Quyền, Lộc, Khoa, Phủ, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Sửu gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mùi gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");

    }

    // Miếu Vượng Đắc mà gặp Sát Tinh, Kỵ, Hình
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tý gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Ngọ gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Dần gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Thân gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thìn", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Thìn gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tuất gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Sửu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Sửu gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mùi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mùi gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }

    // Liêm Trinh toạ thủ hãm địa
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tỵ");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Hợi");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mão");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Liêm Trinh")) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Dậu");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Tỵ gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Hợi gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Liêm Trinh", "Hoá Kỵ")) {


        keyArr.push("Liêm Trinh đồng cung Hoá Kỵ tại Tỵ");
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Liêm Trinh", "Hoá Kỵ") && isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Liêm Trinh", "Văn Khúc") && lasoData.chiCan === "B.") {

        keyArr.push("Liêm Trinh đồng cung Hoá Kỵ tại Tỵ, Văn Xương, Văn Khúc tại Mệnh và sinh năm Bính");

    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Liêm Trinh", "Hoá Kỵ") && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Liêm Trinh", "Văn Khúc") && lasoData.chiCan === "B.") {

        keyArr.push("Liêm Trinh đồng cung Hoá Kỵ tại Hợi, Văn Xương, Văn Khúc tại Mệnh và sinh năm Bính");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Hợi gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mão gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Hoả Tinh", "Linh Tinh", "Hoá Kỵ", "Thiên Hình"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Dậu gặp Kình Dương, Đà La, Địa Không, Địa Kiếp, Hoả Tinh, Linh Tinh, Hoá Kỵ, Thiên Hình");

    }
    if (isSaoToaThuTaiCung("Mệnh", "Dậu", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hoả Tinh", "Linh Tinh"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Dậu gặp Hoả Tinh, Linh Tinh");


    }
    if (isSaoToaThuTaiCung("Mệnh", "Mão", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Hoả Tinh", "Linh Tinh"])) {
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh ở Mão gặp Hoả Tinh, Linh Tinh");

    }
    // đắc dịa gặp Tướng
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Thìn", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Thìn");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tuất", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Tuất");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Sửu", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Sửu");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Mùi", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Mùi");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Tý");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Ngọ");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Dần");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Thân", "Liêm Trinh", "Thiên Tướng")) {
        keyArr.push("Liêm Trinh đồng cung Thiên Tướng tại Thân");
    }


    // hãm địa gặp Hổ
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Liêm Trinh", "Bạch Hổ")) {
        keyArr.push("Liêm Trinh đồng cung Bạch Hổ tại Tỵ");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Liêm Trinh", "Bạch Hổ")) {
        keyArr.push("Liêm Trinh đồng cung Bạch Hổ tại Hợi");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Mão", "Liêm Trinh", "Bạch Hổ")) {
        keyArr.push("Liêm Trinh đồng cung Bạch Hổ tại Mão");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dậu", "Liêm Trinh", "Bạch Hổ")) {
        keyArr.push("Liêm Trinh đồng cung Bạch Hổ tại Dậu");
    }

}
function LuanCachCucSaoThienDong(keyArr) {
    MVD = [Dần, Thân, Tý, Mão, Tỵ, Hợi];
    HD = [Ngọ, Sửu, Mùi, Tuất, Thìn, Dậu];
    //Thiên Đồng toạ thủ cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng")) {

        keyArr.push("Thiên Đồng tọa thủ cung Mệnh");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", MVD[i], "Thiên Đồng")) {
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            if (MVD[i] === "Dần" && kiemTraCachCuc("Thiên Đồng", ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Dần gặp Quyền, Lộc, Khoa, Phủ, Tả, Hữu, Tướng, Xương, Khúc");
            }
        }

    }
    // Thiên Đồng hãm địa
    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", HD[i], "Thiên Đồng")) {
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
        }
    }




}

function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu");

        return true;
    }
}
function LuanCacCachCucKhac(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Mệnh');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Mệnh an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Mệnh an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Mệnh an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Mệnh an tại Sửu");
    }

    // Nếu là đàn bà cung mệnh an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Mệnh của chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Mệnh của chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Mệnh của chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Mệnh của chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Mệnh đồng cung Vô Chính Diệu tại Mùi");
    }

    //mệnh vô chính diệu gặp Song Hao
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao");
    }
    // mệnh vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Thiên Đồng', 'Thiên Lương', 'Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
    }

    if (lasoData.cungCu === "Phu Thê") {
        keyArr.push("Thân Cư Phu Thê");
    }
    if (lasoData.cungCu === "Tài Bạch") {
        keyArr.push("Thân Cư Tài Bạch");
    }
    if (lasoData.cungCu === "Phúc Đức") {
        keyArr.push("Thân Cư Phúc Đức");
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
    const thanKiep = saoThan.includes("Địa Kiếp");

    const menhKiep = saoMenh.includes("Địa Kiếp");
    const thanKhong = saoThan.includes("Địa Không");

    // Nếu đủ điều kiện, hiển thị cách cục hoặc trả về true
    if (menhKhong && thanKiep) {
        keyArr.push("Mệnh Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Mệnh Kiếp Thân Không");
        return true;

    }
    return false;
}



