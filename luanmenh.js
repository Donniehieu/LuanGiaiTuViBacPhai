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
                      
              
               
               if(kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam=== mk[j]) {
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



