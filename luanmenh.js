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
        if(lasoData.gioitinh==="Nữ" ) {
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
        if(lasoData.gioitinh==="Nữ" ) {
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
        if(lasoData.gioitinh==="Nữ" ) {
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
        if(lasoData.gioitinh==="Nữ" ) {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Mệnh ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Mệnh", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            console.log(`Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            keyArr.push(`Liêm Trinh tọa thủ cung Mệnh ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if(kiemTraCachCuc("Liêm Trinh", [XuongKhuc])&& lasoData.canNam==="B.") {
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
    if( isSaoToaThuTaiCung("Mệnh", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", Kinh.concat(Da).concat(HoaLinh))) {
        console.log("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh");
        keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh");
        if(kiemTraCachCuc("Liêm Trinh",Ho )){
            console.log("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
            keyArr.push("Liêm Trinh tọa thủ cung Mệnh gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }
        
}

function LuanCachCucSaoThienDong(keyArr) {
    const MVD = [Dần, Thân, Tý, Mão, Tỵ, Hợi];
    const HD = [Ngọ, Sửu, Mùi, Tuất, Thìn, Dậu];
    const tyhoi = ["Tỵ", "Hợi"];
    const dinh_canh = ["Đ.", "C."];
    const tuatngo= ["Tuất", "Ngọ"];
    const DanThan = ["Dần", "Thân"];
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
           if(kiemTraCachCuc("Thiên Đồng",XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if(kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if(kiemTraCachCuc("Thiên Đồng", HinhKy)) {    
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if(lasoData.gioitinh==="Nữ" ) {
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
            if(kiemTraCachCuc("Thiên Đồng",["Hóa Lộc", "Hóa Quyền","Lộc Tồn","Hỏa Linh","Hóa Kỵ"])){
                console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if( isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Đồng","Thái Âm") && kiemTraCachCuc("Thiên Đồng",lucsattinh )   ) {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc","Thiên Riêu", "Tang Môn"])&& lasoData.gioitinh==="Nữ") {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if( isHaiSaoDongCungTaiCung("Mệnh", "Thiên Đồng", "Thiên Việt") ) {
        console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        if(kiemTraCachCuc("Thiên Đồng",["Hóa Lộc", "Hóa Quyền","Lộc Tồn","Hỏa Linh","Hóa Kỵ"])){
            console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", HD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            if(kiemTraCachCuc("Thiên Đồng",XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
             if(kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
             if(kiemTraCachCuc("Thiên Đồng", HinhKy)) {    
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
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
            if(lasoData.canNam===dinh_canh[i]){
              console.log("Người tuổi " + lasoData.canNam + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
              keyArr.push("Người tuổi " + lasoData.canNam + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            }
            if(lasoData.gioitinh==="Nam" && kiemTraCachCuc("Thiên Đồng",lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }   

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
           if(kiemTraCachCuc("Thiên Đồng",XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if(kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if(kiemTraCachCuc("Thiên Đồng", HinhKy)) {    
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if(lasoData.gioitinh==="Nữ" ) {
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
            if(kiemTraCachCuc("Thiên Đồng",["Hóa Lộc", "Hóa Quyền","Lộc Tồn","Hỏa Linh","Hóa Kỵ"])){
                console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if( isHaiSaoDongCungTaiCungChi("Mệnh", "Ngọ", "Thiên Đồng","Thái Âm") && kiemTraCachCuc("Thiên Đồng",lucsattinh )   ) {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Mệnh", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc","Thiên Riêu", "Tang Môn"])&& lasoData.gioitinh==="Nữ") {
        console.log("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if( isHaiSaoDongCungTaiCung("Mệnh", "Thiên Đồng", "Thiên Việt") ) {
        console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt");
        if(kiemTraCachCuc("Thiên Đồng",["Hóa Lộc", "Hóa Quyền","Lộc Tồn","Hỏa Linh","Hóa Kỵ"])){
            console.log("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Mệnh", HD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i]);
            if(kiemTraCachCuc("Thiên Đồng",XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
             if(kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
             if(kiemTraCachCuc("Thiên Đồng", HinhKy)) {    
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + MVD[i] + " gặp", HinhKy.join(", "));
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
            if(lasoData.canNam===dinh_canh[i]){
              console.log("Người tuổi " + lasoData.canNam + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
              keyArr.push("Người tuổi " + lasoData.canNam + " có Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i]);
            }
            if(lasoData.gioitinh==="Nam" && kiemTraCachCuc("Thiên Đồng",lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Mệnh ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
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



