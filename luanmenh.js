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
    LuanCachCucSaoThienDong(keyArr);
    LuanCachCucSaoVuKhuc(keyArr);
    LuanCachCucThaiDuong(keyArr);
    LuanCachCucThienCo(keyArr);
    LuanCacCachCucThienPhu(keyArr);
    LuanCachCucThaiAm(keyArr);
    LuanCachCucThamLang(keyArr);
    LuanCachCucCuMon(keyArr);
    LuanCachCucThienTuong(keyArr);
    LuanCachCucThienLuong(keyArr);
    LuanCachCucThatSat(keyArr);
    LuanCachcCucPhaQuan(keyArr);
    LuanCachCucXuongKhuc(keyArr);
    LuanCachCucKhoiViet(keyArr);
    LuanCachCucLocTon(keyArr);
    LuanCachCucTaHuu(keyArr);
    LuanCachCucKinhDuongDaLa(keyArr);
    LuanCachCucHoaLinh(keyArr);
    LuanCachCucKhongKiep(keyArr);
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
    const vupha = ["Vũ Khúc", "Phá Quân"];
    const tupha = ["Tử Vi", "Phá Quân"];
    const tuvu = ["Tử Vi", "Vũ Khúc"];
    const tumo = ["Thìn", "Tuất", "Mùi", "Sửu"];
    const tyngo = ["Tý", "Ngọ"];

    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ mệnh ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi")) {
        console.log("Tử Vi tọa thủ cung Mệnh");
        keyArr.push("Tử Vi tọa thủ cung Mệnh");
    }

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

        console.log(`Tử Vi tọa thủ cung Mệnh ở ${maodau[i]} gặp`, KhongKiep.join(", "));
        keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${maodau[i]} gặp`, KhongKiep.join(", "));

    }
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Tham)) {
            console.log(`Tử Vi đồng cung với ${Tham} tại Mệnh`);
            keyArr.push(`Tử Vi đồng cung với ${Tham} tại Mệnh`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            console.log(`Tử Vi tọa thủ cung Mệnh ở ${maodau[i]} gặp`, KhongKiep.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${maodau[i]} gặp`, KhongKiep.join(", "));
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
    for (let i = 0; i < tuphu.length; i++) {
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


    // Tử vi tại mệnh gặp cát tinh
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        console.log("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));
        keyArr.push("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
            console.log("Tử Vi tọa thủ cung Mệnh gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
        }
    }

    console.log(lasoData.cungCu);
    // Tử vi tại mệnh đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Thiên Tướng") && (lasoData.cungCu, "Phá Toai") && kiemTraCachCuc("Phá Toái", Kinh)) {
        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá toại tại cung thân hợp chiếu với sao Kình Dương");
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Thiên Tướng, Phá toại tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
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
            if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], tupha[j])) {
                console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]}`);
                keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    console.log(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                    keyArr.push(`${tupha[j]} tọa thủ cung Mệnh tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                }
            }
        }
    }

    // // Tử vi tại Mệnh gặp Kiếp, Đào Hồng Không tại Mệnh
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung mệnh
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hữu Bật")) {
        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại mệnh chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            console.log(`Tử Vi tọa thủ cung Mệnh ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Mệnh ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        console.log("Tử Vi tọa thủ cung Mệnh gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
        keyArr.push("Tử Vi tọa thủ cung Mệnh gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Mệnh hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Mệnh", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        console.log("Tử Vi tọa thủ cung Mệnh đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Mệnh đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        console.log("Tử Vi tọa thủ cung Mệnh hội chiếu Thiên Phủ");
        keyArr.push("Tử Vi tọa thủ cung Mệnh hội chiếu Thiên Phủ");
    }
}


function LuanCachCucSaoLiemTrinh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Thìn", "Tuất"];
    const vuong = ["Tý", "Ngọ", "Dần", "Thân"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Tỵ", "Hợi", "Mão", "Dậu"];
    const phutuong = ["Thiên Phủ", "Thiên Tướng"];
    const tyhoi = ["Tỵ", "Hợi"];
    const maodau = ["Mão", "Dậu"];

    // Liêm Trinh Tọa thủ mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh")) {
        console.log("Liêm Trinh tọa thủ cung Mệnh");
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh");
    }
    // Liêm Trinh Miếu địa tọa thủ mệnh gặp cát tinh
    // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ mệnh gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ mệnh gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Liêm Trinh", "Văn Khúc")) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Liêm Trinh")) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }

        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));

        }
        if (lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                console.log(`Tuổi Bính Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${maodau[i]} gặp`, HoaLinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${maodau[i]} gặp`, HoaLinh.join(", "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", Kinh.concat(Da).concat(HoaLinh))) {
        console.log("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh");
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", Ho)) {
            console.log("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
            keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

}


function LuanCachCucSaoThienDong(keyArr) {
    const MVD = ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"];
    const HD = ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"];
    const tyhoi = ["Tỵ", "Hợi"];
    const dinh_canh = ["Đ.", "C."];
    const tuatngo = ["Tuất", "Ngọ"];
    const DanThan = ["Dần", "Thân"];
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    //Thiên Đồng toạ thủ cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Đồng")) {
        console.log("Thiên Đồng tọa thủ cung Mệnh");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", MVD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thiên Đồng", "Thiên Việt")) {
        console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
            console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", HD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp", HinhKy.join(", "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tuatngo[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + tuatngo[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                console.log("Người tuổi " + dinh_canh[i] + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
                keyArr.push("Người tuổi " + dinh_canh[i] + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }



}

function LuanCachCucSaoVuKhuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const vuong = ["Tý", "Ngọ", "Dần", "Thân"];
    const dac = ["Mão", "Dậu"];
    const ham = ["Tỵ", "Hợi"];
    const mvd = mieu.concat(vuong).concat(dac);
    const TuPhuTuongTham = ["Tử Vi", "Thiên Phủ", "Thiên Tướng", "Tham Lang"];
    const cattinh = KhoaLocQuyen.concat(TaHuu).concat(XuongKhuc).concat(KhoiViet).concat(TuPhuTuongTham);
    const suumui = ["Sửu", "Mùi"];
    gkn = ["G.", "K.", "N."];
    giap_ky_nham = ["Giáp", "Kỷ", "Nhâm"];
    danthan = ["Dần", "Thân"];

    // Vũ Khúc tọa thủ cung Mệnh
    if (isSaoToaThuTaiCung("Mệnh", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Mệnh");
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ mệnh gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
        }
        // Vũ Khúc tọa thủ cung Mệnh gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", KhoiViet)) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Vũ Khúc", MaLoc) === false) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp`, MaLoc.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${mvd[i]} gặp`, MaLoc.join(", "));

        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Mệnh ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Mão", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Mệnh ở Mão");
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dậu", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Mệnh ở Dậu");
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ mệnh
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Phá Quân`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                    keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Đà Quả Tú`);
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
                keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Thái Âm", "Tham Lang")) {
            console.log("Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");
            keyArr.push("Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Mệnh", "Vũ Khúc", "Hỏa Tinh")) {
            console.log(`Người tuổi ${giap_ky_nham[i]} có Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân và Hỏa Tinh`);
            keyArr.push(`Người tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Mệnh ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Mệnh", "Vũ Khúc", "Tham Lang")) {
        console.log("Vũ Khúc tọa thủ cung Mệnh đồng cung Tham Lang");
        keyArr.push("Vũ Khúc tọa thủ cung Mệnh đồng cung Tham Lang");

    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            console.log(`Vũ Khúc tọa thủ cung Mệnh ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Mệnh ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
        }
    }





}

function LuanCachCucThaiDuong(keyArr) {
    const mieu = ["Tỵ", "Ngọ"];
    const vuong = ["Dần", "Mão", "Thìn"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Thân", "Dậu", "Tuất", "Hợi", "Tý"];
    const mvd = mieu.concat(vuong).concat(dac);
    const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
    const kinhdakhongkiephinhrieu = ["Kình Dương", "Đà La", "Địa Không", "Địa Kiếp", "Thiên Riêu", "Thiên Hình"];
    const hoity = ["Tý", "Hợi"];
    const than_tuat_ty = ["Thân", "Tuất", "Tý"];
    const canhtannhamky = ["C.", "T.", "N.", "K."];
    const binhdin = ["B.", "Đ."];
    const CanhTanNhamKy = ["Canh", "Tân", "Nhâm", "Kỷ"];
    const BinhDinh = ["Bính", "Đinh"];
    const muithan = ["Mùi", "Thân"];
    const XuongKhuc = ["Văn Xương", "Văn Khúc"];
    const ThaiToa = ["Tam Thai", "Bát Tọa"];
    const KhoiHong = ["Thiên Khôi", "Đào Hồng"];
    const suumui = ["Sửu", "Mùi"];
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));

            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Mệnh ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + ham[i]);
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", hoity[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + hoity[i]);
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                console.log("Thái Dương tọa thủ cung Mệnh ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", than_tuat_ty[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + than_tuat_ty[i]);
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thiên Hình")) {
        console.log("Thái Dương tọa thủ cung Mệnh đồng cung Thiên Hình");
        keyArr.push("Thái Dương tọa thủ cung Mệnh đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtannhamky.length; i++) {
        if (lasoData.canNam === canhtannhamky[i] && isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thái Dương")) {
            console.log("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Mệnh ở Ngọ");
            keyArr.push("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Mệnh ở Ngọ");
        }
    }
    for (let i = 0; i < binhdin.length; i++) {
        if (lasoData.canNam === binhdin[i] && isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thái Dương")) {
            console.log("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Mệnh ở Tý");
            keyArr.push("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Mệnh ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", muithan[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + muithan[i]);
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thái Âm")) {
        console.log("Thái Dương tọa thủ cung Mệnh đồng cung Thái Âm");
        keyArr.push("Thái Dương tọa thủ cung Mệnh đồng cung Thái Âm");

    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Mệnh tại Sửu");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Mệnh tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Mệnh tại Sửu");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Mệnh tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Mệnh tại Mùi");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Mệnh tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão", "Thái Âm", "Hợi")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Mệnh tại Mùi");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Mệnh tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        console.log("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Mệnh tại Sửu");
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Mệnh tại Sửu");
    }
    if (MenhVoChinhDieu() === true && kiemtraCachCuc("Thái Dương", ["Thái Âm"])) {
        console.log("Cung Mệnh Vô Chính Diệu gặp Thái Dương, Thái Âm");
        keyArr.push("Cung Mệnh Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong))) {
            console.log("Thái Dương tọa thủ cung Mệnh ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
            keyArr.push("Thái Dương tọa thủ cung Mệnh ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
        }
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        console.log("Thái Dương tọa thủ cung Mệnh ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
        keyArr.push("Thái Dương tọa thủ cung Mệnh ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }
}

function LuanCachCucThienCo(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Thìn", "Tuất", "Mão", "Dậu"];
    const vuong = ["Tỵ", "Thân"];
    const dac = ["Tý", "Ngọ", "Sửu", "Mùi"];
    const ham = ["Dần", "Hợi"];
    const mvd = mieu.concat(vuong).concat(dac);
    const LocHinhYQuangQuy = ["Hóa Lộc", "Thiên Hình", "Thiên Y", "Ân Quang", "Thiên Quý"];
    const maodau = ["Mão", "Dậu"];
    const at_tan_ky_binh = ["Ất", "Tân", "Kỷ", "Bính"];
    const atkb = ["A.", "T.", "K.", "B."];
    const abd = ["A.", "B.", "D."];
    const at_binh_dinh = ["Ất", "Bính", "Đinh"];
    const tyngo = ["Tý", "Ngọ"];
    const thintuat = ["Thìn", "Tuất"];
    const kinhdahoalinhtuong = ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Thiên Tướng"];
    const nguyetdongluong = ["Thái Âm", "Thiên Đồng", "Thiên Lương"];

    // Thiên Cơ Miếu Vượng Địa
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Mệnh nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            console.log(`Quý Anh có Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]}`);
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Mệnh", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            console.log(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương`);
            keyArr.push(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương`);
            if (kiemTraDiaSinh("Thiên Cơ", kinhdahoalinhtuong)) {
                console.log(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương gặp các sao Kình Đà Hỏa Linh Tướng`);
                keyArr.push(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    console.log(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${maodau[i]} gặp Song Hao`);
                    keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    console.log(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                    keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Mệnh", "Thiên Cơ") && kiemtraCachCuc("Thiên Cơ", nguyetdongluong)) {
        console.log("Thiên Cơ tọa thủ cung Mệnh gặp Thiên Đồng, Thiên Lương, Thái Âm");
        keyArr.push("Thiên Cơ tọa thủ cung Mệnh gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }
}
// function LuanCachCucThienCo(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const mieu = ["Thìn", "Tuất", "Mão", "Dậu"];
//     const vuong = ["Tỵ", "Thân"];
//     const dac = ["Tý", "Ngọ", "Sửu", "Mùi"];
//     const ham = ["Dần", "Hợi"];
//     const mvd = mieu.concat(vuong).concat(dac);
//     const LocHinhYQuangQuy = ["Hóa Lộc", "Thiên Hình", "Thiên Y", "Ân Quang", "Thiên Quý"];
//     const maodau = ["Mão", "Dậu"];
//     const at_tan_ky_binh = ["Ất", "Tân", "Kỷ", "Bính"];
//     const atkb = ["A.", "T.", "K.", "B."];
//     const abd = ["A.", "B.", "D."];
//     const at_binh_dinh = ["Ất", "Bính", "Đinh"];
//     const tyngo = ["Tý", "Ngọ"];
//     const thintuat = ["Thìn", "Tuất"];
//     const kinhdahoalinhtuong = ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh", "Thiên Tướng"];
//     const nguyetdongluong = ["Thái Âm", "Thiên Đồng", "Thiên Lương"];

//     // Thiên Cơ Miếu Vượng Địa
//     for (let i = 0; i < mvd.length; i++) {

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));

//         console.log("Quý Chị có Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);
//         keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Mệnh ở " + mvd[i]);


//     }
//     // Thiên Cơ Mệnh nam Thìn Tuất
//     for (let i = 0; i < thintuat.length; i++) {

//         console.log(`Quý Anh có Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]}`);
//         keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]}`);

//         console.log(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương`);
//         keyArr.push(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương`);

//         console.log(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương gặp các sao Kình Đà Hỏa Linh Tướng`);
//         keyArr.push(`Thiên Cơ tọa thủ cung Mệnh ở ${thintuat[i]} đồng cung Thiên Lương gặp các sao Kình Đà Hỏa Linh Tướng`);



//     }


//     //Thiên Cơ Mão Dậu
//     for (let i = 0; i < maodau.length; i++) {


//         for (let j = 0; j < at_tan_ky_binh.length; j++) {


//             console.log(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${maodau[i]} gặp Song Hao`);
//             keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${maodau[i]} gặp Song Hao`);


//         }

//     }
//     // Thiên Cơ Tý Ngọ
//     for (let i = 0; i < tyngo.length; i++) {

//         for (let j = 0; j < at_binh_dinh.length; j++) {

//             console.log(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//             keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Mệnh ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));


//         }


//     }
//     // Thiên Cơ Hãm địa
//     for (let i = 0; i < ham.length; i++) {

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i]);
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i]);

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));

//         console.log("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push("Thiên Cơ tọa thủ cung Mệnh ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));


//     }
//     // Cơ Nguyệt Đồng Lương

//     console.log("Thiên Cơ tọa thủ cung Mệnh gặp Thiên Đồng, Thiên Lương, Thái Âm");
//     keyArr.push("Thiên Cơ tọa thủ cung Mệnh gặp Thiên Đồng, Thiên Lương, Thái Âm");

// }

function LuanCacCachCucThienPhu(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Tỵ", "Hợi", "Mùi"];
    const binhhoa = ["Mão", "Dậu", "Sửu"];
    const giapky = ["Giáp", "Kỷ"];
    const gk = ["G.", "K."];
    const cn = ["C.", "N."];
    const canhnham = ["Canh", "Nham"];
    const ngotuat = ["Ngọ", "Tuất"];
    const mvd = mieu.concat(vuong).concat(dac);
    const TuTuongTham = ["Tử Vi", "Thiên Tướng", "Tham Lang"];

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ")) {
        console.log("Thiên Phủ tọa thủ cung Mệnh");
        keyArr.push("Thiên Phủ tọa thủ cung Mệnh");

        if (kiemTraCachCuc("Thiên Phủ", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
            console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
        }
        if (kiemTraCachCuc("Thiến Phủ", lucsattinh)) {
            console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Sát tinh: ", lucsattinh.join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Sát tinh: ", lucsattinh.join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tuất", "Thiên Phủ")) {
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                console.log(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tuất không gặp Sát tinh`);
                keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            console.log(`Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc`);
            keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            console.log(`Thiên Phủ tọa thủ cung Mệnh ở ${tuatngo[i]} gặp Thiên Tướng`);
            keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${tuatngo[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                console.log(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
                keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Phủ") && kiemtraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc");
        keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
            keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }

}
// function LuanCacCachCucThienPhu(keyArr) {

//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }

//     const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
//     const vuong = ["Thìn", "Tuất"];
//     const dac = ["Tỵ", "Hợi", "Mùi"];
//     const binhhoa = ["Mão", "Dậu", "Sửu"];
//     const giapky = ["Giáp", "Kỷ"];
//     const gk = ["G.", "K."];
//     const cn = ["C.", "N."];
//     const canhnham = ["Canh", "Nham"];
//     const ngotuat = ["Ngọ", "Tuất"];
//     const mvd = mieu.concat(vuong).concat(dac);
//     const TuTuongTham =["Tử Vi", "Thiên Tướng","Tham Lang"];


//     console.log("Thiên Phủ tọa thủ cung Mệnh");
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh");


//     console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));


//     console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Sát tinh: ", lucsattinh.join(", "));
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Sát tinh: ", lucsattinh.join(", "));


//     console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));






//     console.log("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));


//     console.log("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//     for (let i = 0; i < gk.length; i++) {

//         console.log(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tuất không gặp Sát tinh`);
//         keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tuất không gặp Sát tinh`);



//     }
//     for (let i = 0; i < canhnham.length; i++) {

//         console.log(`Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc`);
//         keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc`);

//         console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//     }



//     for (let i = 0; i < ngotuat.length; i++) {

//         console.log(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng`);
//         keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng`);

//         console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
//         keyArr.push(`Thiên Phủ tọa thủ cung Mệnh ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
//     }




//     console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc");
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc");

//     console.log("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
//     keyArr.push("Thiên Phủ tọa thủ cung Mệnh gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");

// }

function LuanCachCucThaiAm(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Dậu", "Tuất", "Hợi"];
    const vuong = ["Thân", "Tý"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
    const maoty = ["Mão", "Tý"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm")) {
        console.log("Thái Âm tọa thủ cung Mệnh");
        keyArr.push("Thái Âm tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Mệnh", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            console.log(`Thái Âm tọa thủ cung Mệnh ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Thiên Hình")) {
        console.log("Thái Âm tọa thủ cung Mệnh đồng cung Thiên Hình");
        keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        console.log(`Thái Âm tọa thủ cung Phu Thê`);
        keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Mệnh", "Thái Âm") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Mệnh", "Thái Âm", "Lộc Tồn")) {
        console.log("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn");
        keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            console.log("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
            keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
        }
    }



}
// function LuanCachCucThaiAm(keyArr) {

//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }

//     const mieu = ["Dậu", "Tuất", "Hợi"];
//     const vuong = ["Thân", "Tý"];
//     const dac = ["Sửu", "Mùi"];
//     const ham = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
//     const daohonghy = ["Đào Hoa", "Hồng Loan", "Thiên Hỷ"];
//     const maoty = ["Mão", "Tý"];

//     const mvd = mieu.concat(vuong).concat(dac);

//     console.log("Thái Âm tọa thủ cung Mệnh");
//     keyArr.push("Thái Âm tọa thủ cung Mệnh");


//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]}`);

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//     }



//     for (let i = 0; i < dac.length; i++) {


//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);


//     }

//     for (let i = 0; i < ham.length; i++) {

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]}`);

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));

//         console.log(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: Kình Dương, Đà La`);
//         keyArr.push(`Thái Âm tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: Kình Dương, Đà La`);


//     }



//     console.log("Thái Âm tọa thủ cung Mệnh đồng cung Thiên Hình");
//     keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Thiên Hình");



//     console.log(`Thái Âm tọa thủ cung Phu Thê`);
//     keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);



//     console.log("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn");
//     keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn");

//     console.log("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
//     keyArr.push("Thái Âm tọa thủ cung Mệnh đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));





// }


function LuanCachCucThamLang(keyArr) {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Sửu", "Mùi"];
    const vuong = ["Thìn", "Tuất"];
    const dac = ["Dần", "Thân"];
    const ham = ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const suumui = ["Sửu", "Mùi"];
    const tusinh = ["Dần", "Tỵ", "Thân", "Hợi"];
    const mk = ["M.", "K."];
    const mauky = ["Mậu", "Kỷ"];

    const mvd = mieu.concat(vuong).concat(dac);
    if (isSaoToaThuTaiCung("Mệnh", "Tham Lang")) {
        console.log("Tham Lang tọa thủ cung Mệnh");
        keyArr.push("Tham Lang tọa thủ cung Mệnh");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            for (let j = 0; j < mauky.length; j++) {



                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    console.log("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", HoaLinh.join(", "));
                    keyArr.push("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Mệnh ở " + mvd[i] + " gặp các sao cát tinh: ", HoaLinh.join(", "));
                }
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", ham[i], "Tham Lang", "Thiên Riêu")) {
                console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Riêu`);
                keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Riêu`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Vũ Khúc`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Vũ Khúc`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang tọa thủ cung ${lasoData.cungCu} ở ${tumo[i]} đồng cung Vũ Khúc`);
            keyArr.push(`Tham Lang tọa thủ cung ${lasoData.cungCu} ở ${tumo[i]} đồng cung Vũ Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", lucsattinh) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
            keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Tham Lang", "Liêm Trinh")) {
        console.log("Tham Lang tọa thủ cung Mệnh đồng cung Liêm Trinh");
        keyArr.push("Tham Lang tọa thủ cung Mệnh đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Hợi", "Tham Lang", "Liêm Trinh") && kiemtraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        console.log("Tham Lang tọa thủ cung Mệnh ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");
        keyArr.push("Tham Lang tọa thủ cung Mệnh ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }



}
// function LuanCachCucThamLang(keyArr) {

//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const mieu = ["Sửu", "Mùi"];
//     const vuong = ["Thìn", "Tuất"];
//     const dac = ["Dần", "Thân"];
//     const ham = ["Tý", "Ngọ", "Mão", "Dậu", "Tỵ", "Hợi"];
//     const thamvu = ["Tham Lang", "Vũ Khúc"];
//     const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
//     const suumui = ["Sửu", "Mùi"];
//     const tusinh = ["Dần", "Tỵ", "Thân", "Hợi"];
//     const mk = ["M.", "K."];
//     const mauky = ["Mậu", "Kỷ"];

//     const mvd = mieu.concat(vuong).concat(dac);

//     console.log("Tham Lang tọa thủ cung Mệnh");
//     keyArr.push("Tham Lang tọa thủ cung Mệnh");

//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]}`);


//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
//         for (let j = 0; j < mauky.length; j++) {

//             console.log('Người tuổi', mauky[j], 'có Tham Lang tọa thủ cung Mệnh ở', mvd[i], 'gặp các sao Hỏa Tinh, Linh Tinh');
//             keyArr.push('Người tuổi', mauky[j], 'có Tham Lang tọa thủ cung Mệnh ở', mvd[i], 'gặp các sao Hỏa Tinh, Linh Tinh');



//         }
//     }




//     for (let i = 0; i < vuong.length; i++) {

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

//     }

//     for (let i = 0; i < ham.length; i++) {

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]}`);

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));

//         console.log(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Riêu`);
//         keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Riêu`);




//         for (let i = 0; i < tumo.length; i++) {

//             console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Vũ Khúc`);
//             keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} đồng cung Vũ Khúc`);

//             console.log(`Tham Lang tọa thủ cung ${lasoData.cungCu} ở ${tumo[i]} đồng cung Vũ Khúc`);
//             keyArr.push(`Tham Lang tọa thủ cung ${lasoData.cungCu} ở ${tumo[i]} đồng cung Vũ Khúc`);

//             console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
//             keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);

//         }
//         for (let i = 0; i < suumui.length; i++) {

//             console.log(`Tham Lang tọa thủ cung Mệnh ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
//             keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);

//         }
//         for (let i = 0; i < tumo.length; i++) {

//             console.log(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
//             keyArr.push(`Tham Lang tọa thủ cung Mệnh ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);

//         }


//         console.log("Tham Lang tọa thủ cung Mệnh đồng cung Liêm Trinh");
//         keyArr.push("Tham Lang tọa thủ cung Mệnh đồng cung Liêm Trinh");




//         console.log("Tham Lang tọa thủ cung Mệnh ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");
//         keyArr.push("Tham Lang tọa thủ cung Mệnh ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");
//     }


// }

function LuanCachCucCuMon(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Mão", "Dậu"];
    const vuong = ["Tý", "Ngọ", "Dần"];
    const dac = ["Thân", "Hợi"];
    const ham = ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"];
    const mvd = mieu.concat(vuong).concat(dac);
    const KhoaTueHinh = ["Hóa Khoa", "Thái Tuế", "Thiên Hình"];
    const thintuat = ["Thìn", "Tuất"];
    const dinhcanh = ["Đinh", "Canh"];
    const dc = ["Đ.", "C."];
    const quytan = ["Quý", "Tân"];
    const qt = ["Q.", "T."];
    const suumui = ["Sửu", "Mùi"];
    const ab = ["Â.", "B."];
    const atbinh = ["Ất", "Bính"];
    const danthan = ["Dần", "Thân"];
    const attankybinh = ["Ất", "Tân", "Kỷ", "Bính"];
    const atkb = ["Ấ.", "T.", "K.", "B."];
    const maodau = ["Mão", "Dậu"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const binhtan = ["Bính", "Tân"];
    const bt = ["B.", "T."];
    const tyhoi = ["Tý", "Hợi"];
    const tyngo = ["Tý", "Ngọ"];

    if (isSaoToaThuTaiCung("Mệnh", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Mệnh");
        keyArr.push("Cự Môn tọa thủ cung Mệnh");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", mvd[i], "Cự Môn")) {
            console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
            }

            if (kiemtraCachCuc("Cự Môn", TueHQuanPhu)) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", mvd[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemtraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemtraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Cự Môn")) {

            console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemtraCachCuc("Cự Môn", TueHQuanPhu)) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Mệnh", ham[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemtraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemtraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemtraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp `);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Cự Môn") && lasoData.canNam === dinhcanh[j] && lasoData.chiNam === thintuat[i]) {
                console.log(`Người tuổi ${dc[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${dc[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", thintuat[i], "Cự Môn") && lasoData.canNam === quytan[j] && lasoData.chiNam === thintuat[i]) {
                console.log(`Người tuổi ${qt[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${qt[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
            }
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Cự Môn") && lasoData.canNam === ab[j] && lasoData.chiNam === suumui[i]) {
                console.log(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Mệnh ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Mệnh ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Hóa Kỵ")) {
        console.log("Cự Môn tọa thủ cung Mệnh đồng cung Hoá Kỵ");
        keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Thân", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Mệnh ở Thân đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Thân", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Thiên Di", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Mệnh ở Thân gặp Thái Dương, Thiên Di có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Thân gặp Thái Dương, Thiên Di có Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Dần", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Thiên Di", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Mệnh ở Dần gặp Thái Dương, Thiên Di có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần gặp Thái Dương, Thiên Di có Thái Dương");

    }
    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Thiên Di", "Thái Dương", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Dần");
        keyArr.push("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Dần");

    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Cự Môn", "Thái Dương") && kiemtraCachCuc("Cự Môn", "Hóa Lộc")) {
            console.log(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
            keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Thiên Cơ", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thiên Cơ");
        keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thiên Cơ");
    }



    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === attankybinh[i]) {
                console.log(`Người tuổi ${attankybinh[i]} có Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
                keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
                keyArr.push(` Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ") && kiemtraCachCuc("Cự Môn", ["Đại Hao,Tiểu Hao"])) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ gặp Đại Hao, Tiểu Hao`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Mệnh", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log('Quý chị có Cự Môn tọa thủ cung Mệnh ở', maodau[j], 'đồng cung Thiên Cơ');
                keyArr.push('Quý chị có Cự Môn tọa thủ cung Mệnh ở', maodau[j], 'đồng cung Thiên Cơ');
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Mệnh", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                console.log(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Mệnh ở ${tumo[i]}`);
                keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Mệnh ở ${tumo[i]}`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Lộc Tồn`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                console.log(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} gặp Khoa Lộc Quyền`);
                keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

}


// function LuanCachCucCuMon(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }

//     const mieu = ["Mão", "Dậu"];
//     const vuong = ["Tý", "Ngọ", "Dần"];
//     const dac = ["Thân", "Hợi"];
//     const ham = ["Sửu", "Mùi", "Thìn", "Tuất", "Tỵ"];
//     const mvd = mieu.concat(vuong).concat(dac);
//     const KhoaTueHinh = ["Hóa Khoa", "Thái Tuế", "Thiên Hình"];
//     const thintuat = ["Thìn", "Tuất"];
//     const dinhcanh = ["Đinh", "Canh"];
//     const dc = ["Đ.", "C."];
//     const quytan = ["Quý", "Tân"];
//     const qt = ["Q.", "T."];
//     const suumui = ["Sửu", "Mùi"];
//     const ab = ["Â.", "B."];
//     const atbinh = ["Ất", "Bính"];
//     const danthan = ["Dần", "Thân"];
//     const attankybinh = ["Ất", "Tân", "Kỷ", "Bính"];
//     const atkb = ["Ấ.", "T.", "K.", "B."];
//     const maodau = ["Mão", "Dậu"];
//     const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
//     const binhtan = ["Bính", "Tân"];
//     const bt = ["B.", "T."];
//     const tyhoi = ["Tý", "Hợi"];
//     const tyngo = ["Tý", "Ngọ"];


//     console.log("Cự Môn tọa thủ cung Mệnh");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh");

//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]}`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp Tuế Hổ Phù`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp Tuế Hổ Phù`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Lộc Tồn`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Lộc Tồn`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));


//     }

//     for (let i = 0; i < ham.length; i++) {


//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]}`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Tuế Hổ Phù`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Tuế Hổ Phù`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} đồng cung Lộc Tồn`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} đồng cung Lộc Tồn`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp `);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);





//     }
//     for (let i = 0; i < thintuat.length; i++) {
//         for (let j = 0; j < dinhcanh.length; j++) {

//             console.log(`Người tuổi ${dc[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
//             keyArr.push(`Người tuổi ${dc[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);

//         }
//         for (let j = 0; j < quytan.length; j++) {

//             console.log(`Người tuổi ${qt[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);
//             keyArr.push(`Người tuổi ${qt[j]} có Cự Môn tọa thủ cung Mệnh ở ${thintuat[i]}`);

//         }

//     }
//     for (let i = 0; i < suumui.length; i++) {
//         for (let j = 0; j < atbinh.length; j++) {

//             console.log(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Mệnh ở ${suumui[i]}`);
//             keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Mệnh ở ${suumui[i]}`);

//         }


//     }


//     console.log("Cự Môn tọa thủ cung Mệnh đồng cung Hoá Kỵ");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Hoá Kỵ");

//     console.log("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh đồng cung Thái Dương");

//     console.log("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");

//     console.log("Cự Môn tọa thủ cung Mệnh ở Thân đồng cung Thái Dương");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh ở Thân đồng cung Thái Dương");

//     console.log("Cự Môn tọa thủ cung Mệnh ở Thân gặp Thái Dương, Thiên Di có Thái Dương");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh ở Thân gặp Thái Dương, Thiên Di có Thái Dương");

//     console.log("Cự Môn tọa thủ cung Mệnh ở Dần gặp Thái Dương, Thiên Di có Thái Dương");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần gặp Thái Dương, Thiên Di có Thái Dương");


//     console.log("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Dần");
//     keyArr.push("Cự Môn tọa thủ cung Thiên Di đồng cung Thái Dương xung chiếu cung Mệnh ở Dần");


//     for (let i = 0; i < danthan.length; i++) {

//         console.log(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
//         keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);

//     }

//     console.log("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thiên Cơ");
//     keyArr.push("Cự Môn tọa thủ cung Mệnh ở Dần đồng cung Thiên Cơ");




//     for (let i = 0; i < attankybinh.length; i++) {
//         for (let j = 0; j < maodau.length; j++) {

//             console.log(`Người tuổi ${attankybinh[i]} có Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
//             keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);

//             console.log(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);
//             keyArr.push(` Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ`);

//             console.log(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ gặp Đại Hao, Tiểu Hao`);
//             keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${maodau[j]} đồng cung Thiên Cơ gặp Đại Hao, Tiểu Hao`);

//             console.log('Quý chị có Cự Môn tọa thủ cung Mệnh ở', maodau[j], 'đồng cung Thiên Cơ');
//             keyArr.push('Quý chị có Cự Môn tọa thủ cung Mệnh ở', maodau[j], 'đồng cung Thiên Cơ');

//         }
//     }
//     for (let i = 0; i < tumo.length; i++) {
//         for (let j = 0; j < binhtan.length; j++) {

//             console.log(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Mệnh ở ${tumo[i]}`);
//             keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Mệnh ở ${tumo[i]}`);



//         }
//         for (let i = 0; i < tyhoi.length; i++) {

//             console.log(`Cự Môn tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Lộc Tồn`);
//             keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Lộc Tồn`);
//         }


//         for (let i = 0; i < tyngo.length; i++) {

//             console.log(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} gặp Khoa Lộc Quyền`);
//             keyArr.push(`Cự Môn tọa thủ cung Mệnh ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

//         }

//     }

// }

function LuanCachCucThienTuong(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    } catch (e) { lasoData = {}; }

    const mieu = ["Dần", "Thân"];
    const vuong = ["Thìn", "Tuất", "Tý", "Ngọ"];
    const dac = ["Sửu", "Mùi", "Tỵ", "Hợi"];
    const ham = ["Mão", "Dậu"];
    const TuPhuVu = ["Tử Vi", "Thiên Phủ", "Vũ Khúc"];
    const thintuat = ["Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const DaoHongHoaKhuc = ["Đào Hoa", "Hồng Loan", "Hoa Cái", "Vũ Khúc"];

    const mvd = mieu.concat(vuong).concat(dac);

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));


        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${vuong[i]} gặp Kình Dương, Đà La`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }




    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Tướng")) {
            console.log(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", thintuat[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${thintuat[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${tyngo[i]} đồng cung Liêm Trinh gặp Kình Dương`);
            keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${tyngo[i]} đồng cung Liêm Trinh gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Mệnh", "Thiên Tướng", "Hồng Loan")) {
        console.log("Quý chị có Thiên Tướng tọa thủ cung Mệnh đồng cung Hồng Loan");
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Mệnh đồng cung Hồng Loan");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        console.log("Quý chị có Thiên Tướng tọa thủ cung Mệnh gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Mệnh gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
    }


}
// function LuanCachCucThienTuong(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

//     } catch (e) { lasoData = {}; }

//     const mieu = ["Dần", "Thân"];
//     const vuong = ["Thìn", "Tuất", "Tý", "Ngọ"];
//     const dac = ["Sửu", "Mùi", "Tỵ", "Hợi"];
//     const ham = ["Mão", "Dậu"];
//     const TuPhuVu = ["Tử Vi", "Thiên Phủ", "Vũ Khúc"];
//     const thintuat = ["Thìn", "Tuất"];
//     const tyngo = ["Tý", "Ngọ"];
//     const DaoHongHoaKhuc = ["Đào Hoa", "Hồng Loan", "Hoa Cái", "Vũ Khúc"];

//     const mvd = mieu.concat(vuong).concat(dac);

//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]}`);

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));



//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));


//     }
//     for (let i = 0; i < vuong.length; i++) {

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${vuong[i]} gặp Kình Dương, Đà La`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${vuong[i]} gặp Kình Dương, Đà La`);

//     }




//     for (let i = 0; i < ham.length; i++) {

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);


//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);

//         console.log(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Mệnh ở ${ham[i]}`);
//     }

//     for (let i = 0; i < thintuat.length; i++) {

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${thintuat[i]}`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${thintuat[i]}`);

//     }

//     for (let i = 0; i < tyngo.length; i++) {

//         console.log(`Thiên Tướng tọa thủ cung Mệnh ở ${tyngo[i]} đồng cung Liêm Trinh gặp Kình Dương`);
//         keyArr.push(`Thiên Tướng tọa thủ cung Mệnh ở ${tyngo[i]} đồng cung Liêm Trinh gặp Kình Dương`);

//     }


//     console.log("Quý chị có Thiên Tướng tọa thủ cung Mệnh đồng cung Hồng Loan");
//     keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Mệnh đồng cung Hồng Loan");


//     console.log("Quý chị có Thiên Tướng tọa thủ cung Mệnh gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
//     keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Mệnh gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");



// }

function LuanCachCucThienLuong(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const mieu = ["Ngọ", "Thìn", "Tuất"];
    const vuong = ["Tý", "Mão", "Dần", "Thân"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Hợi", "Dậu", "Tỵ"];
    const mvd = mieu.concat(vuong).concat(dac);
    const tyhoi = ["Tỵ", "Hợi"];
    const dau = ["Dậu"];
    const thintuat = ["Thìn", "Tuất"];
    const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
    const dkq = ["Đ.", "K.", "Q."];
    const tysuudanmaothintyngo = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];

    if (isSaoToaThuTaiCung("Mệnh", "Thiên Lương")) {
        console.log("Thiên Lương tọa thủ cung Mệnh");
        keyArr.push("Thiên Lương tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);


        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", thintuat[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${thintuat[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thiên Lương") && lasoData.canNam === dinhkyquy[i]) {
            console.log("Người tuổi", dkq[i], "có Thiên Lương tọa thủ cung Mệnh ở Ngọ");
            keyArr.push("Người tuổi", dkq[i], "có Thiên Lương tọa thủ cung Mệnh ở Ngọ");

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Dần", "Thiên Lương", "Thái Dương")) {
        console.log("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tý", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Xương", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Mệnh ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Khúc", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Mệnh ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
    }

    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tysuudanmaothintyngo[i], "Thiên Lương") && kiemtraCachCuc("Thiên Lương", ["Thái Âm, Linh Tinh"])) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Thiên Đồng`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Thiên Đồng`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Thiên Di", "Dần", "Thiên Lương", "Thiên Đồng") && kiemtraCachCuc("Thiên Lương", ["Thái Âm, Thiên Cơ"])) {
        console.log("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thiên Đồng gặp Thái Âm, Thiên Cơ");
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thiên Đồng gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mieu[i], "Thiên Lương", "Văn Xương")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mieu[i]} đồng cung Văn Xương `);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mieu[i]} đồng cung Văn Xương `);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Mệnh", "Tỵ", "Thiên Lương") && kiemtraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        console.log("Thiên Lương tọa thủ cung Mệnh ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
        keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Thiên Lương", "Thiên Mã")) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Thiên Mã `);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Thiên Mã `);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Thiên Lương") && kiemtraCachCuc("Thiên Lương", ["Thiên Mã"])) {
            console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]}  Thiên Mã`);
            keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]}  Thiên Mã`);
        }
    }


}
// function LuanCachCucThienLuong(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }

//     const mieu = ["Ngọ", "Thìn", "Tuất"];
//     const vuong = ["Tý", "Mão", "Dần", "Thân"];
//     const dac = ["Sửu", "Mùi"];
//     const ham = ["Hợi", "Dậu", "Tỵ"];
//     const mvd = mieu.concat(vuong).concat(dac);
//     const tyhoi = ["Tỵ", "Hợi"];
//     const dau = ["Dậu"];
//     const thintuat = ["Thìn", "Tuất"];
//     const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
//     const dkq = ["Đ.", "K.", "Q."];
//     const tysuudanmaothintyngo = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];


//     console.log("Thiên Lương tọa thủ cung Mệnh");
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh");


//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]}`);

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));




//     }

//     for (let i = 0; i < ham.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${ham[i]}`);



//     }

//     for (let i = 0; i < thintuat.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${thintuat[i]}`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${thintuat[i]}`);

//     }

//     for (let i = 0; i < dinhkyquy.length; i++) {

//         console.log("Người tuổi", dkq[i], "có Thiên Lương tọa thủ cung Mệnh ở Ngọ");
//         keyArr.push("Người tuổi", dkq[i], "có Thiên Lương tọa thủ cung Mệnh ở Ngọ");


//     }

//     console.log("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thái Dương");



//     console.log("Thiên Lương tọa thủ cung Mệnh ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");


//     console.log("Thiên Lương tọa thủ cung Mệnh ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");


//     for (let i = 0; i < tysuudanmaothintyngo.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);

//     }
//     for (let i = 0; i < vuong.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Thiên Đồng`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${vuong[i]} đồng cung Thiên Đồng`);

//     }


//     console.log("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thiên Đồng gặp Thái Âm, Thiên Cơ");
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Dần đồng cung Thiên Đồng gặp Thái Âm, Thiên Cơ");

//     for (let i = 0; i < mieu.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${mieu[i]} đồng cung Văn Xương `);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${mieu[i]} đồng cung Văn Xương `);

//     }

//     console.log("Thiên Lương tọa thủ cung Mệnh ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
//     keyArr.push("Thiên Lương tọa thủ cung Mệnh ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));

//     for (let i = 0; i < tyhoi.length; i++) {

//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Thiên Mã `);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Thiên Mã `);


//         console.log(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]}  Thiên Mã`);
//         keyArr.push(`Thiên Lương tọa thủ cung Mệnh ở ${tyhoi[i]}  Thiên Mã`);

//     }


// }

function LuanCachCucThatSat(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
    const vuong = ["Tỵ", "Hợi"];
    const dac = ["Sửu", "Mùi"];
    const ham = ["Mão", "Dậu", "Thìn", "Tuất"];
    const danthan = ["Dần", "Thân"];
    const gcdk = ["G.", "C.", "Đ.", "K."];
    const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
    const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const makinh = ["Thiên Mã", "Kình Dương"];
    const at = ["Â.", "T."];
    const attan = ["Ất", "Tân"];
    const maodau = ["Mão", "Dậu"];
    const tahuulongphuongquangquy = ["Tả Phù", "Hữu Bật", "Long Trì", "Phượng Các", "Ân Quang", "Thiên Quý"];
    const batkhoamaanhong = ["Hữu Bật", "Hoá Khoa", "Thiên Mã", "Quốc Ấn", "Hồng Loan"];
    const suumui = ["Sửu", "Mùi"];
    const atky = ["Ất", "Kỷ"];
    const ak = ["A.", "K."];
    const td = ["T.", "Đ."];
    const tandinh = ["Tân", "Đinh"];
    const phatham = ["Phá Quân", "Tham Lang"];
    const bm = ["B.", "M."];
    const binhmau = ["Bính", "Mậu"];

    const mvd = mieu.concat(vuong).concat(dac);

    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát")) {
        console.log("Thất Sát tọa thủ cung Mệnh");
        keyArr.push("Thất Sát tọa thủ cung Mệnh");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));

        }
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Mệnh", mvd[i], "Thất Sát", "Thiên Hình")) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Thiên Hình`);
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Thiên Hình`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], "Thất Sát") && lasoData.canNam === giapcanhdinhky[i]) {
                console.log(`Người tuổi ${gcdk[i]} có Thất Sát tọa thủ cung Mệnh ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${gcdk[i]} có Thất Sát tọa thủ cung Mệnh ở ${danthan[j]}`);
            }

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", ham[i], "Thất Sát", "Thiên Hình")) {
                console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Hình`);
                keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Hình`);
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                console.log(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Mệnh ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Mệnh ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tỵ", "Thất Sát", "Tử Vi")) {
        console.log("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi");
        keyArr.push("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            console.log("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
            keyArr.push("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Thất Sát", "Liêm Trinh")) {
            console.log(`Thất Sát tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Liêm Trinh`);
            keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Liêm Trinh`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                console.log(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Mệnh ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Mệnh ở ${suumui[i]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        console.log(`Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
        keyArr.push(`Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                console.log(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Mệnh gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Mệnh", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        console.log("Thất Sát tọa thủ cung Mệnh gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
        keyArr.push("Thất Sát tọa thủ cung Mệnh gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            console.log(`Người tuổi ${binhmau[i]} có Thất Sát tọa thủ cung Mệnh đồng cung Kình Dương`);
            keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát tọa thủ cung Mệnh đồng cung Kình Dương`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            console.log(`Thất Sát tọa thủ cung ${lasoData.cungCu} Cuộc gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
            keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} Cuộc gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
// function LuanCachCucThatSat(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const mieu = ["Dần", "Thân", "Tý", "Ngọ"];
//     const vuong = ["Tỵ", "Hợi"];
//     const dac = ["Sửu", "Mùi"];
//     const ham = ["Mão", "Dậu", "Thìn", "Tuất"];
//     const danthan = ["Dần", "Thân"];
//     const gcdk = ["G.", "C.", "Đ.", "K."];
//     const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
//     const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
//     const makinh = ["Thiên Mã", "Kình Dương"];
//     const at = ["Â.", "T."];
//     const attan = ["Ất", "Tân"];
//     const maodau = ["Mão", "Dậu"];
//     const tahuulongphuongquangquy = ["Tả Phù", "Hữu Bật", "Long Trì", "Phượng Các", "Ân Quang", "Thiên Quý"];
//     const batkhoamaanhong = ["Hữu Bật", "Hoá Khoa", "Thiên Mã", "Quốc Ấn", "Hồng Loan"];
//     const suumui = ["Sửu", "Mùi"];
//     const atky = ["Ất", "Kỷ"];
//     const ak = ["A.", "K."];
//     const td = ["T.", "Đ."];
//     const tandinh = ["Tân", "Đinh"];
//     const phatham = ["Phá Quân", "Tham Lang"];
//     const bm = ["B.", "M."];
//     const binhmau = ["Bính", "Mậu"];

//     const mvd = mieu.concat(vuong).concat(dac);


//     console.log("Thất Sát tọa thủ cung Mệnh");
//     keyArr.push("Thất Sát tọa thủ cung Mệnh");


//     for (let i = 0; i < mvd.length; i++) {

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);

//         console.log(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);
//         keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${mvd[i]}`);




//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));



//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));


//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Thiên Hình`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${mvd[i]} đồng cung Thiên Hình`);

//     }

//     for (let i = 0; i < giapcanhdinhky.length; i++) {
//         for (let j = 0; j < danthan.length; j++) {

//             console.log(`Người tuổi ${gcdk[i]} có Thất Sát tọa thủ cung Mệnh ở ${danthan[j]}`);
//             keyArr.push(`Người tuổi ${gcdk[i]} có Thất Sát tọa thủ cung Mệnh ở ${danthan[j]}`);


//         }
//     }

//     for (let i = 0; i < ham.length; i++) {

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Hình`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${ham[i]} đồng cung Thiên Hình`);

//         console.log(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);
//         keyArr.push(`Quý chị có Thất Sát tọa thủ cung Mệnh ở ${ham[i]}`);


//     }
//     for (let i = 0; i < maodau.length; i++) {
//         for (let j = 0; j < attan.length; j++) {

//             console.log(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Mệnh ở ${maodau[i]}`);
//             keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Mệnh ở ${maodau[i]}`);

//         }
//     }

//     console.log("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi");
//     keyArr.push("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi");

//     console.log("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
//     keyArr.push("Thất Sát tọa thủ cung Mệnh ở Tỵ đồng cung Tử Vi gặp các sao cát tinh: ", batkhoamaanhong.join(", "));



//     for (let i = 0; i < suumui.length; i++) {

//         console.log(`Thất Sát tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Liêm Trinh`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh ở ${suumui[i]} đồng cung Liêm Trinh`);

//         for (let j = 0; j < atky.length; j++) {

//             console.log(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Mệnh ở ${suumui[i]}`);
//             keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Mệnh ở ${suumui[i]}`);

//         }
//     }

//     for (let j = 0; j < phatham.length; j++) {

//         console.log(`Thất Sát tọa thủ cung Mệnh gặp ${phatham[j]}`);
//         keyArr.push(`Thất Sát tọa thủ cung Mệnh gặp ${phatham[j]}`);
//         for (let i = 0; i < td.length; i++) {

//             console.log(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Mệnh gặp ${phatham[j]}`);
//             keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Mệnh gặp ${phatham[j]}`);

//         }

//     }

//     console.log("Thất Sát tọa thủ cung Mệnh gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
//     keyArr.push("Thất Sát tọa thủ cung Mệnh gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");


//     for (let i = 0; i < binhmau.length; i++) {

//         console.log(`Người tuổi ${binhmau[i]} có Thất Sát tọa thủ cung Mệnh đồng cung Kình Dương`);
//         keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát tọa thủ cung Mệnh đồng cung Kình Dương`);


//         console.log(`Thất Sát tọa thủ cung ${lasoData.cungCu} Cuộc gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
//         keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} Cuộc gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);


//     }
// }

function LuanCachcCucPhaQuan(keyArr) {
    let lasoData = {};

    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const mieu = ["Tý", "Ngọ"];
    const vuong = ["Sửu ", "Mùi"];
    const dac = ["Thìn", "Tuất"];
    const ham = ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi "];
    const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
    const dkq = ["Đ.", "K.", "Q."];
    const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const hokyhinhsonghao = ["Bạch Hổ", "Thiên Hình", "Hoá Kỵ", "Đại Hao", "Tiểu Hao"];
    const mvd = mieu.concat(vuong).concat(dac);
    const maodau = ["Mão", "Dậu"];
    const atq = ["Â.", "T.", "Q."];
    const attanquy = ["Ất", "Tân", "Quý"];
    const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
    const gcdk = ["G.", "C.", "Đ.", "K."];
    const danthan = ["Dần", "Thân"];
    const tyhoi = ["Tỵ", "Hợi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];



    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Mệnh", mvd[i], "Phá Quân")) {
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Mệnh", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                console.log(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${mieu[i]}`);
                keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", ham[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                console.log(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${maodau[i]}`);
            }
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                console.log(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]}`);
            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            console.log(`Người tuổi Mậu có Phá Quân tọa thủ cung Mệnh ở ${tyhoi[i]}`);
            keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Mệnh ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Mệnh gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        console.log("Phá Quân tọa thủ cung Mệnh ở Ngọ đồng cung Lộc Tồn và gặp Thiếu Dương");
        keyArr.push("Phá Quân tọa thủ cung Mệnh ở Ngọ đồng cung Lộc Tồn và gặp Thiếu Dương");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            console.log(`Phá Quân tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
            keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }




}
// function LuanCachcCucPhaQuan(keyArr) {
//     let lasoData = {};

//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const mieu = ["Tý", "Ngọ"];
//     const vuong = ["Sửu ", "Mùi"];
//     const dac = ["Thìn", "Tuất"];
//     const ham = ["Dần", "Thân", "Mão", "Dậu", "Tỵ", "Hợi "];
//     const dinhkyquy = ["Đinh", "Kỷ", "Quý"];
//     const dkq = ["Đ.", "K.", "Q."];
//     const tuphuxuongkhuckhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
//     const hokyhinhsonghao = ["Bạch Hổ", "Thiên Hình", "Hoá Kỵ", "Đại Hao", "Tiểu Hao"];
//     const mvd = mieu.concat(vuong).concat(dac);
//     const maodau = ["Mão", "Dậu"];
//     const atq = ["Â.", "T.", "Q."];
//     const attanquy = ["Ất", "Tân", "Quý"];
//     const giapcanhdinhky = ["Giáp", "Canh", "Đinh", "Kỷ"];
//     const gcdk = ["G.", "C.", "Đ.", "K."];
//     const danthan = ["Dần", "Thân"];
//     const tyhoi = ["Tỵ", "Hợi"];
//     const tumo =["Thìn","Tuất","Sửu","Mùi"];



//     for (let i = 0; i < mvd.length; i++) {

//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]}`);


//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);

//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);

//     }
//     for (let i = 0; i < mieu.length; i++) {
//         for (let j = 0; j < dinhkyquy.length; j++) {

//                 console.log(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${mieu[i]}`);
//                 keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${mieu[i]}`);



//         }

//     }
//     for (let i = 0; i < ham.length; i++) {

//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]}`);


//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);

//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);

//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));




//     }

//     for (let i = 0; i < maodau.length; i++) {
//         for (let j = 0; j < attanquy.length; j++) {

//                 console.log(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${maodau[i]}`);
//                 keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Mệnh ở ${maodau[i]}`);

//         }
//     }

//     for (let i = 0; i < gcdk.length; i++) {
//         for (let j = 0; j < danthan.length; j++) {

//                 console.log(`Người tuổi ${giapcanhdinhky[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]}`);
//                 keyArr.push(`Người tuổi ${giapcanhdinhky[i]} có Phá Quân tọa thủ cung Mệnh ở ${danthan[j]}`);

//         }
//     }

//     for (let i = 0; i < tyhoi.length; i++) {

//             console.log(`Người tuổi Mậu có Phá Quân tọa thủ cung Mệnh ở ${tyhoi[i]}`);
//             keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Mệnh ở ${tyhoi[i]}`);

//     }


//         console.log("Phá Quân tọa thủ cung Mệnh gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
//         keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");



//         console.log("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
//         keyArr.push("Phá Quân tọa thủ cung Mệnh gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");



//         console.log("Phá Quân tọa thủ cung Mệnh ở Ngọ đồng cung Lộc Tồn và gặp Thiếu Dương");
//         keyArr.push("Phá Quân tọa thủ cung Mệnh ở Ngọ đồng cung Lộc Tồn và gặp Thiếu Dương");


//     for(let i = 0; i < tumo.length; i++) {

//             console.log(`Phá Quân tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
//             keyArr.push(`Phá Quân tọa thủ cung Mệnh ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);

//     }

// }

function LuanCachCucXuongKhuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
    const tuphukhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];

    const tyhoi = ["Tỵ", "Hợi"];
    const danmao = ["Dần", "Mão"];
    for (let i = 0; i < XuongKhuc.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", XuongKhuc[i])) {
            console.log(`${XuongKhuc[i]} toạ thủ cung Mệnh`);
            keyArr.push(`${XuongKhuc[i]} toạ thủ cung Mệnh`);
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], XuongKhuc[j])) {
                console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Lương`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Lương`);
                }
                if (kiemtraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Mệnh", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Hoá Lộc`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCungChi("Mệnh", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Vũ Khúc`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Vũ Khúc`);
                }
                if (isHaiSaoDongCungTaiCungChi("Mệnh", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Tả Phù`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Tả Phù`);

                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        console.log(`${XuongKhuc[i]} Vũ Khúc giáp mệnh`);
        keyArr.push(`${XuongKhuc[i]} Vũ Khúc giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương")) {
            console.log("Mệnh có Thái Dương giáp Văn Xương, Văn Khúc");
            keyArr.push("Mệnh có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Mệnh có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
        keyArr.push("Mệnh có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Mệnh có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
        keyArr.push("Mệnh có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${tyhoi[i]} đồng cung Liêm Trinh`);
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${tyhoi[i]} đồng cung Liêm Trinh`);


            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${danmao[i]} đồng cung Phá Quân gặp Kình Dương`);
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${danmao[i]} đồng cung Phá Quân gặp Kình Dương`);

            }
        }
    }



}
// function LuanCachCucXuongKhuc(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }


//     const dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
//     const tuphukhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];

//     const tyhoi = ["Tỵ", "Hợi"];
//     const danmao = ["Dần", "Mão"];
//     for (let i = 0; i < XuongKhuc.length; i++) {

//             console.log(`${XuongKhuc[i]} toạ thủ cung Mệnh`);
//             keyArr.push(`${XuongKhuc[i]} toạ thủ cung Mệnh`);

//     }
//     for (let i = 0; i < dac_dia.length; i++) {
//         for (let j = 0; j < XuongKhuc.length; j++) {

//                 console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
//                 keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Lương`);
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Lương`);

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Hoá Lộc`);
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Hoá Lộc`);

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Vũ Khúc`);
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Vũ Khúc`);

//                     console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Tả Phù`);
//                     keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} đồng cung Tả Phù`);


//             }
//         }






//             console.log("Mệnh có Thái Dương giáp Văn Xương, Văn Khúc");
//             keyArr.push("Mệnh có Thái Dương giáp Văn Xương, Văn Khúc");



//         console.log("Mệnh có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
//         keyArr.push("Mệnh có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");


//         console.log("Mệnh có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
//         keyArr.push("Mệnh có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");


//     for (let i = 0; i < tyhoi.length; i++) {
//         for (let j = 0; j < XuongKhuc.length; j++) {

//                 console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${tyhoi[i]} đồng cung Liêm Trinh`);
//                 keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${tyhoi[i]} đồng cung Liêm Trinh`);



//         }
//     }

//     for (let i = 0; i < danmao.length; i++) {
//         for (let j = 0; j < XuongKhuc.length; j++) {

//                 console.log(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${danmao[i]} đồng cung Phá Quân gặp Kình Dương`);
//                 keyArr.push(`${XuongKhuc[j]} toạ thủ cung Mệnh ở ${danmao[i]} đồng cung Phá Quân gặp Kình Dương`);


//         }
//     }

// }

function LuanCachCucKhoiViet(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", KhoiViet[i])) {
            console.log(`${KhoiViet[i]} toạ thủ cung Mệnh`);
            keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh`);
            if (kiemtraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
            }
            if (kiemtraCachCuc(KhoiViet[i], lucsattinh)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemtraCachCuc(KhoiViet[i], HinhKy)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Thiên Hình`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], xuongkhuckhoatuetau)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Lộc mà không gặp các sao Sát tinh`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Tử Vi", KhoiViet[i])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Mệnh ở Ngọ đồng cung Tử Vi`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        console.log(`Khôi Việt giáp mệnh`);
        keyArr.push(`Khôi Việt giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Thái Dương")) {
            console.log("Mệnh có Thái Dương giáp Khôi Việt");
            keyArr.push("Mệnh có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc")) {
            console.log("Mệnh có Hóa Lộc giáp Khôi Việt");
            keyArr.push("Mệnh có Hóa Lộc giáp Khôi Việt");
        }
    }
}

// function LuanCachCucKhoiViet(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
//     const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

//     for (let i = 0; i < KhoiViet.length; i++) {

//             console.log(`${KhoiViet[i]} toạ thủ cung Mệnh`);
//             keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh`);

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Thiên Hình`);
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Thiên Hình`);

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);


//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Lộc mà không gặp các sao Sát tinh`);
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh gặp Hóa Lộc mà không gặp các sao Sát tinh`);

//                 console.log(`${KhoiViet[i]} toạ thủ cung Mệnh ở Ngọ đồng cung Tử Vi`);
//                 keyArr.push(`${KhoiViet[i]} toạ thủ cung Mệnh ở Ngọ đồng cung Tử Vi`);




//     }

//         keyArr.push(`Khôi Việt giáp mệnh`);

//             console.log("Mệnh có Thái Dương giáp Khôi Việt");
//             keyArr.push("Mệnh có Thái Dương giáp Khôi Việt");

//             console.log("Mệnh có Hóa Lộc giáp Khôi Việt");
//             keyArr.push("Mệnh có Hóa Lộc giáp Khôi Việt");


// }

function LuanCachCucLocTon(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Mệnh", "Lộc Tồn")) {
        console.log("Lộc Tồn toạ thủ cung Mệnh");
        keyArr.push("Lộc Tồn toạ thủ cung Mệnh");
        if (kiemtraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            console.log("Lộc Tồn toạ thủ cung Mệnh gặp", tuphuxuongkhuckhoivietma.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", tuphuxuongkhuckhoivietma.join(", "));
        }
        if (kiemtraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            console.log("Lộc Tồn toạ thủ cung Mệnh gặp", quangquyquanrieuy.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", quangquyquanrieuy.join(", "));
        }
        if (kiemtraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            console.log("Lộc Tồn toạ thủ cung Mệnh gặp", khongkiephaokypha.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", khongkiephaokypha.join(", "));
        }
        if (kiemtraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            console.log("Lộc Tồn toạ thủ cung Mệnh gặp Phá Quân");
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Lộc Tồn", "Hóa Lộc")) {
            console.log("Lộc Tồn toạ thủ cung Mệnh đồng cung Hoá Lộc");
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh đồng cung Hoá Lộc");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            console.log("Song Lộc xung chiếu");
            keyArr.push("Song Lộc xung chiếu");

        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Lộc Tồn", "Thiên Mã")) {
            console.log("Lộc Tồn toạ thủ cung Mệnh đồng cung Thiên Mã");
            keyArr.push("Lộc Tồn toạ thủ cung Mệnh đồng cung Thiên Mã");
        }
        if (isSaoToaThuTaiCung("Mệnh", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Mệnh", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            console.log("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Mệnh ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Mệnh ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Thiên Di", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Thiên Di ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Thiên Di ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}
// function LuanCachCucLocTon(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const tyngo = ["Tý", "Ngọ"];
//     const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
//     const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
//     const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];


//     console.log("Lộc Tồn toạ thủ cung Mệnh");
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh");

//     console.log("Lộc Tồn toạ thủ cung Mệnh gặp", tuphuxuongkhuckhoivietma.join(", "));
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", tuphuxuongkhuckhoivietma.join(", "));

//     console.log("Lộc Tồn toạ thủ cung Mệnh gặp", quangquyquanrieuy.join(", "));
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", quangquyquanrieuy.join(", "));

//     console.log("Lộc Tồn toạ thủ cung Mệnh gặp", khongkiephaokypha.join(", "));
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp", khongkiephaokypha.join(", "));

//     console.log("Lộc Tồn toạ thủ cung Mệnh gặp Phá Quân");
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh gặp Phá Quân");


//     console.log("Lộc Tồn toạ thủ cung Mệnh đồng cung Hoá Lộc");
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh đồng cung Hoá Lộc");

//     console.log("Song Lộc xung chiếu");
//     keyArr.push("Song Lộc xung chiếu");


//     console.log("Lộc Tồn toạ thủ cung Mệnh đồng cung Thiên Mã");
//     keyArr.push("Lộc Tồn toạ thủ cung Mệnh đồng cung Thiên Mã");

//     console.log("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
//     keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");


//     for (let i = 0; i < tyngo.length; i++) {

//         console.log(`Lộc Tồn toạ thủ cung Mệnh ở ${tyngo[i]}`);
//         keyArr.push(`Lộc Tồn toạ thủ cung Mệnh ở ${tyngo[i]}`);


//         console.log(`Lộc Tồn toạ thủ cung Thiên Di ở ${tyngo[i]}`);
//         keyArr.push(`Lộc Tồn toạ thủ cung Thiên Di ở ${tyngo[i]}`);

//         console.log(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
//         keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);

//     }
// }

function LuanCachCucTaHuu(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuxuongkhuckhoivietkhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const conguyetdongluonglongphuong = ["Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"];
    const suumui = ["Sửu", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const tyhoi = ["Tỵ", "Hợi"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < TaHuu.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", TaHuu[i])) {
            console.log(`${TaHuu[i]} toạ thủ cung Mệnh`);
            keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh`);
            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, conguyetdongluonglongphuong.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, conguyetdongluonglongphuong.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp Kình Dương`);
                keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", suumui[i], "Tả Phù", "Hữu Bật") && kiemtraCachCuc(KhoaLocQuyen)) {
            console.log(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Mệnh", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                console.log(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
                keyArr.push(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            console.log(`Hữu Bật, Thiên Tướng đồng cung Mệnh ở ${tyhoi[i]}`);
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung Mệnh ở ${tyhoi[i]}`);
        }
    }



    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        console.log(`Tả Phù Hữu Bật giáp mệnh`);
        keyArr.push(`Tả Phù Hữu Bật giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Tử Vi")) {
            console.log(`Mệnh có Tử Vi giáp Tả Phù Hữu Bật`);
            keyArr.push(`Mệnh có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }



}

// function LuanCachCucTaHuu(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const tuphuxuongkhuckhoivietkhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
//     const conguyetdongluonglongphuong = ["Thiên Cơ", "Thái Âm", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"];
//     const suumui = ["Sửu", "Mùi"];
//     const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
//     const tyhoi = ["Tỵ", "Hợi"];
//     const maodau = ["Mão", "Dậu"];

//     for (let i = 0; i < TaHuu.length; i++) {

//         console.log(`${TaHuu[i]} toạ thủ cung Mệnh`);
//         keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh`);

//         console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
//         keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));

//         console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, conguyetdongluonglongphuong.join(", "));
//         keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp`, conguyetdongluonglongphuong.join(", "));

//         console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));
//         keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp các sao Sát tinh: `, lucsattinh.join(", "));

//         console.log(`${TaHuu[i]} toạ thủ cung Mệnh gặp Kình Dương`);
//         keyArr.push(`${TaHuu[i]} toạ thủ cung Mệnh gặp Kình Dương`);


//     }
//     for (let i = 0; i < suumui.length; i++) {

//         console.log(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
//         keyArr.push(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);

//     }
//     for (let i = 0; i < tumo.length; i++) {

//         console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
//         keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);

//         console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
//         keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);

//         console.log(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
//         keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Mệnh ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);

//         console.log(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
//         keyArr.push(`Tả Phù, Hữu Bật đồng cung Mệnh ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);





//     }
//     for (let i = 0; i < tyhoi.length; i++) {

//         console.log(`Hữu Bật, Thiên Tướng đồng cung Mệnh ở ${tyhoi[i]}`);
//         keyArr.push(`Hữu Bật, Thiên Tướng đồng cung Mệnh ở ${tyhoi[i]}`);

//     }




//     keyArr.push(`Tả Phù Hữu Bật giáp mệnh`);

//     console.log(`Mệnh có Tử Vi giáp Tả Phù Hữu Bật`);
//     keyArr.push(`Mệnh có Tử Vi giáp Tả Phù Hữu Bật`);





// }

function LuanCachCucKinhDuongDaLa(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];

    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương")) {
        console.log("Kình Dương toạ thủ cung Mệnh");
        keyArr.push("Kình Dương toạ thủ cung Mệnh");
        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            console.log("Kình Dương toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
            keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Hóa Kỵ")) {
            console.log("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung Mệnh");
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung Mệnh");
        }

    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        cconsole.log("Thái Dương, Thái Âm đồng cung Mệnh gặp Kình Dương");
        keyArr.push("Thái Dương, Thái Âm đồng cung Mệnh gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            console.log(`Thiên Phủ, Tử Vi đồng cung Mệnh ở ${tymui[i]} gặp Kình Dương`);
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung Mệnh ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"])) {
        console.log("Kình Dương toạ thủ cung Mệnh gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        console.log("Kình Dương, Thái Âm, Thiên Đồng đồng cung Mệnh ở Ngọ gặp Địa Giải, Phượng Các");
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung Mệnh ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Kình Dương", "Tham Lang")) {
            console.log(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp Kình Dương`);
            keyArr.push(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp Kình Dương`);

        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        console.log(`Kình Dương, Đà La giáp mệnh`);
        keyArr.push(`Kình Dương, Đà La giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
            console.log(`Mệnh có Hóa Kỵ giáp Kình Dương, Đà La`);
            keyArr.push(`Mệnh có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Kình Dương", "Lực Sỹ")) {
        console.log("Kình Dương, Lực Sỹ đồng cung Mệnh");
        keyArr.push("Kình Dương, Lực Sỹ đồng cung Mệnh");
    }

    if (isSaoToaThuTaiCung("Mệnh", "Đà La")) {
        console.log("Đà La toạ thủ cung Mệnh");
        keyArr.push("Đà La toạ thủ cung Mệnh");
        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            console.log("Đà La toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");
            keyArr.push("Đà La toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            console.log("Đà La toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
            keyArr.push("Đà La toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Mệnh ở ${dac_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Mệnh ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Mệnh ở ${ham_dia[i]}`);
        }
    }


}
// function LuanCachCucKinhDuongDaLa(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }


//     const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
//     const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
//     const tymui = ["Tỵ", "Mùi"];
//     const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];


//         console.log("Kình Dương toạ thủ cung Mệnh");
//         keyArr.push("Kình Dương toạ thủ cung Mệnh");

//             console.log("Kình Dương toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
//             keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn");

//             console.log("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung Mệnh");
//             keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung Mệnh");



//     for (let i = 0; i < dac_dia.length; i++) {

//             console.log(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]}`);
//             keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${dac_dia[i]}`);

//     }
//     for (let i = 0; i < ham_dia.length; i++) {

//             console.log(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]}`);
//             keyArr.push(`Kình Dương toạ thủ cung Mệnh ở ${ham_dia[i]}`);

//     }

//         console.log("Thái Dương, Thái Âm đồng cung Mệnh gặp Kình Dương");
//         keyArr.push("Thái Dương, Thái Âm đồng cung Mệnh gặp Kình Dương");


//     for (let i = 0; i < tymui.length; i++) {

//             console.log(`Thiên Phủ, Tử Vi đồng cung Mệnh ở ${tymui[i]} gặp Kình Dương`);
//             keyArr.push(`Thiên Phủ, Tử Vi đồng cung Mệnh ở ${tymui[i]} gặp Kình Dương`);

//     }


//         console.log("Kình Dương toạ thủ cung Mệnh gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
//         keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");

//         console.log("Kình Dương, Thái Âm, Thiên Đồng đồng cung Mệnh ở Ngọ gặp Địa Giải, Phượng Các");
//         keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung Mệnh ở Ngọ gặp Địa Giải, Phượng Các");


//     for (let i = 0; i < tumo.length; i++) {

//             console.log(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp Kình Dương`);
//             keyArr.push(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp Kình Dương`);


//     }


//         console.log("Kình Dương toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Đà La");
//         keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Đà La");



//         console.log("Kình Dương toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp, Đà La");
//         keyArr.push("Kình Dương toạ thủ cung Mệnh gặp Địa Không, Địa Kiếp, Đà La");


//         console.log(`Kình Dương, Đà La giáp mệnh`);
//         keyArr.push(`Kình Dương, Đà La giáp mệnh`);

//             console.log(`Mệnh có Hóa Kỵ giáp Kình Dương, Đà La`);
//             keyArr.push(`Mệnh có Hóa Kỵ giáp Kình Dương, Đà La`);




//         console.log("Kình Dương, Lực Sỹ đồng cung Mệnh");
//         keyArr.push("Kình Dương, Lực Sỹ đồng cung Mệnh");



//         console.log("Đà La toạ thủ cung Mệnh");
//         keyArr.push("Đà La toạ thủ cung Mệnh");

//             console.log("Đà La toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");
//             keyArr.push("Đà La toạ thủ cung Mệnh gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");



//             console.log("Đà La toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
//             keyArr.push("Đà La toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");


//     for (let i = 0; i < dac_dia.length; i++) {

//             console.log(`Đà La toạ thủ cung Mệnh ở ${dac_dia[i]}`);
//             keyArr.push(`Đà La toạ thủ cung Mệnh ở ${dac_dia[i]}`);

//     }
//     for (let i = 0; i < ham_dia.length; i++) {

//             console.log(`Đà La toạ thủ cung Mệnh ở ${ham_dia[i]}`);
//             keyArr.push(`Đà La toạ thủ cung Mệnh ở ${ham_dia[i]}`);

//     }


// }

function LuanCachCucHoaLinh(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", HoaLinh[i])) {
            console.log(`${HoaLinh[i]} toạ thủ cung Mệnh`);
            keyArr.push(`${HoaLinh[i]} toạ thủ cung Mệnh`);
            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                console.log(`${HoaLinh[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                console.log(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Mệnh", tumo[i], "Thiên Kiếp", "Vũ Khúc")) {
                    console.log(`Thiên Kiếp, Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                    keyArr.push(`Thiên Kiếp, Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }

    if (isSaoToaThuTaiCung("Mệnh", "Hỏa Tinh") && isSaoToaThuTaiCung("Thiên Di", "Linh Tinh")) {
        console.log("Hỏa Tinh toạ thủ cung Mệnh gặp Linh Tinh ở Thiên Di");
        keyArr.push("Hỏa Tinh toạ thủ cung Mệnh gặp Linh Tinh ở Thiên Di");
        if (kiemtraCachCuc("Hỏa Tinh", ["Kình Dương"])) {
            console.log("Hỏa Tinh toạ thủ cung Mệnh đối xung Linh Tinh và gặp Kình Dương");
            keyArr.push("Hỏa Tinh toạ thủ cung Mệnh đối xung Linh Tinh và gặp Kình Dương");
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Linh Tinh") && isSaoToaThuTaiCung("Thiên Di", "Hỏa Tinh")) {
        console.log("Linh Tinh toạ thủ cung Mệnh gặp Hỏa Tinh ở Thiên Di");
        keyArr.push("Linh Tinh toạ thủ cung Mệnh gặp Hỏa Tinh ở Thiên Di");
        if (kiemtraCachCuc("Linh Tinh", ["Kình Dương"])) {
            console.log("Linh Tinh toạ thủ cung Mệnh đối xung Hỏa Tinh và gặp Kình Dương");
            keyArr.push("Linh Tinh toạ thủ cung Mệnh đối xung Hỏa Tinh và gặp Kình Dương");
        }
    }
    if (isHaiSaoDongCungTaiCung("Mệnh", "Hỏa Tinh", "Linh Tinh")) {
        console.log("Hỏa Tinh, Linh Tinh đồng cung Mệnh");
        keyArr.push("Hỏa Tinh, Linh Tinh đồng cung Mệnh");


    }

    if (isSaoToaThuTaiCungVaChi("Mệnh", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        console.log("Hỏa Tinh toạ thủ cung Mệnh ở Hợi gặp Thiên Hình, Tham Lang");
        keyArr.push("Hỏa Tinh toạ thủ cung Mệnh ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isSaoToaThuTaiCung("Mệnh", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        console.log("Linh Tinh toạ thủ cung Mệnh gặp Thiên Mã, Kình Dương, Đà La");
        keyArr.push("Linh Tinh toạ thủ cung Mệnh gặp Thiên Mã, Kình Dương, Đà La");
    }




}
// function LuanCachCucHoaLinh(keyArr) {
//     let lasoData = {};
//     try {
//         lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
//     } catch (e) { lasoData = {}; }
//     const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
//     const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
//     const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
//     const thamvu = ["Tham Lang", "Vũ Khúc"];

//     for (let i = 0; i < HoaLinh.length; i++) {

//         console.log(`${HoaLinh[i]} toạ thủ cung Mệnh`);
//         keyArr.push(`${HoaLinh[i]} toạ thủ cung Mệnh`);

//         console.log(`${HoaLinh[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
//         keyArr.push(`${HoaLinh[i]} toạ thủ cung Mệnh gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);


//     }

//     for (let i = 0; i < dac_dia.length; i++) {
//         for (let j = 0; j < HoaLinh.length; j++) {

//             console.log(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
//             keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);

//         }
//     }

//     for (let i = 0; i < ham_dia.length; i++) {
//         for (let j = 0; j < HoaLinh.length; j++) {

//             console.log(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
//             keyArr.push(`${HoaLinh[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);

//         }
//     }

//     for (let i = 0; i < tumo.length; i++) {
//         for (let j = 0; j < HoaLinh.length; j++) {

//             console.log(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
//             keyArr.push(`Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);

//             console.log(`Thiên Kiếp, Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);
//             keyArr.push(`Thiên Kiếp, Tham Lang, Vũ Khúc đồng cung Mệnh ở ${tumo[i]} gặp ${HoaLinh[j]}`);

//         }
//     }



//         console.log("Hỏa Tinh toạ thủ cung Mệnh gặp Linh Tinh ở Thiên Di");
//         keyArr.push("Hỏa Tinh toạ thủ cung Mệnh gặp Linh Tinh ở Thiên Di");

//             console.log("Hỏa Tinh toạ thủ cung Mệnh đối xung Linh Tinh và gặp Kình Dương");
//             keyArr.push("Hỏa Tinh toạ thủ cung Mệnh đối xung Linh Tinh và gặp Kình Dương");



//         console.log("Linh Tinh toạ thủ cung Mệnh gặp Hỏa Tinh ở Thiên Di");
//         keyArr.push("Linh Tinh toạ thủ cung Mệnh gặp Hỏa Tinh ở Thiên Di");

//             console.log("Linh Tinh toạ thủ cung Mệnh đối xung Hỏa Tinh và gặp Kình Dương");
//             keyArr.push("Linh Tinh toạ thủ cung Mệnh đối xung Hỏa Tinh và gặp Kình Dương");



//         console.log("Hỏa Tinh, Linh Tinh đồng cung Mệnh");
//         keyArr.push("Hỏa Tinh, Linh Tinh đồng cung Mệnh");





//         console.log("Hỏa Tinh toạ thủ cung Mệnh ở Hợi gặp Thiên Hình, Tham Lang");
//         keyArr.push("Hỏa Tinh toạ thủ cung Mệnh ở Hợi gặp Thiên Hình, Tham Lang");


//         console.log("Linh Tinh toạ thủ cung Mệnh gặp Thiên Mã, Kình Dương, Đà La");
//         keyArr.push("Linh Tinh toạ thủ cung Mệnh gặp Thiên Mã, Kình Dương, Đà La");





// }


function LuanCachCucKhongKiep(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const dac_dia = ["Dần", "Thân", "Tỵ", "Hợi"];
    const ham_dia = ["Tý", "Sửu", "Mão", "Thìn", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const khongkiep = ["Địa Không", "Địa Kiếp"];
    const tyhoi = ["Tỵ", "Hợi"];
    const danthan = ["Dần", "Thân"];
    const tusinh = ["Dần", "Thân", "Tỵ", "Hợi"];
    const cunhatphukhockhach = ["Cự Môn", "Thái Dương", "Thiên Phủ", "Thiên Khốc", "Thiên Hư"];

    for (let i = 0; i < khongkiep.length; i++) {
        if (isSaoToaThuTaiCung("Mệnh", khongkiep[i])) {
            console.log(`${khongkiep[i]} toạ thủ cung Mệnh`);
            keyArr.push(`${khongkiep[i]} toạ thủ cung Mệnh`);

        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", dac_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);

                }

            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Mệnh", ham_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                }


            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tyhoi[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tyhoi[i]}`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tusinh[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tusinh[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tusinh[i]}`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        console.log(`Địa Không, Địa Kiếp giáp mệnh`);
        keyArr.push(`Địa Không, Địa Kiếp giáp mệnh`);
        if (isSaoToaThuTaiCung("Mệnh", "Hóa Kỵ")) {
            console.log(`Mệnh có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
            keyArr.push(`Mệnh có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        console.log("Địa Kiếp, Thiên Cơ đồng cung Mệnh gặp Hoả Tinh");
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung Mệnh gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Mệnh", "Địa Kiếp", "Lưu Hà")) {
        console.log("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Mệnh");
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung Mệnh");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Địa Không", "Thiên Mã")) {
            console.log("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung Mệnh ở " + tyhoi[i]);
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung Mệnh ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Mệnh", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        console.log("Địa Kiếp toạ thủ cung Mệnh gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
        keyArr.push("Địa Kiếp toạ thủ cung Mệnh gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}

function LuanCachCucKhongKiep(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const dac_dia = ["Dần", "Thân", "Tỵ", "Hợi"];
    const ham_dia = ["Tý", "Sửu", "Mão", "Thìn", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const khongkiep = ["Địa Không", "Địa Kiếp"];
    const tyhoi = ["Tỵ", "Hợi"];
    const danthan = ["Dần", "Thân"];
    const tusinh = ["Dần", "Thân", "Tỵ", "Hợi"];
    const cunhatphukhockhach = ["Cự Môn", "Thái Dương", "Thiên Phủ", "Thiên Khốc", "Thiên Hư"];

    for (let i = 0; i < khongkiep.length; i++) {

        console.log(`${khongkiep[i]} toạ thủ cung Mệnh`);
        keyArr.push(`${khongkiep[i]} toạ thủ cung Mệnh`);


    }
    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]}`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);




        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]}`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);

            console.log(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
            keyArr.push(`${khongkiep[j]} toạ thủ cung Mệnh ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);




        }
    }

    for (let i = 0; i < tyhoi.length; i++) {

        console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tyhoi[i]}`);
        keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tyhoi[i]}`);

    }
    for (let i = 0; i < tusinh.length; i++) {

        console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tusinh[i]}`);
        keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${tusinh[i]}`);

    }

    for (let i = 0; i < danthan.length; i++) {

        console.log(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        keyArr.push(`Địa Không, Địa Kiếp đồng cung Mệnh ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);

    }

    console.log(`Địa Không, Địa Kiếp giáp mệnh`);
    keyArr.push(`Địa Không, Địa Kiếp giáp mệnh`);

    console.log(`Mệnh có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
    keyArr.push(`Mệnh có Hóa Kỵ giáp Địa Không, Địa Kiếp`);





    console.log("Địa Kiếp, Thiên Cơ đồng cung Mệnh gặp Hoả Tinh");
    keyArr.push("Địa Kiếp, Thiên Cơ đồng cung Mệnh gặp Hoả Tinh");



    console.log("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Mệnh");
    keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung Mệnh");


    for (let i = 0; i < tyhoi.length; i++) {

        console.log("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung Mệnh ở " + tyhoi[i]);
        keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung Mệnh ở " + tyhoi[i]);

    }

    console.log("Địa Kiếp toạ thủ cung Mệnh gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    keyArr.push("Địa Kiếp toạ thủ cung Mệnh gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");

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
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        console.log("Cung Mệnh Vô Chính Diệu");
        keyArr.push("Cung Mệnh Vô Chính Diệu");
        return true;
    }
    return false;
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



