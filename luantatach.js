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

function LuanCungTatAch() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Tật Ách',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };
}
function LuanCungTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
    keyArr.push(`Vị trí địa sinh cung Tật Ách tại ${vitriDiaSinhCungMenh}`);
    console.log(`Vị trí địa sinh cung Tật Ách tại ${vitriDiaSinhCungMenh}`);
    LuanCachCucSaoTuViTatAch(keyArr);
    LuanCachCucSaoLiemTrinhTatAch(keyArr);
    LuanCachCucSaoThienDongTatAch(keyArr);
    LuanCachCucSaoVuKhucTatAch(keyArr);
    LuanCachCucThaiDuongTatAch(keyArr);
    LuanCachCucThienCoTatAch(keyArr);
    LuanCacCachCucThienPhuTatAch(keyArr);
    LuanCachCucThaiAmTatAch(keyArr);
    LuanCachCucThamLangTatAch(keyArr);
    LuanCachCucCuMonTatAch(keyArr);
    LuanCachCucThienTuongTatAch(keyArr);
    LuanCachCucThienLuongTatAch(keyArr);
    LuanCachCucThatSatTatAch(keyArr);
    LuanCachCucPhaQuanTatAch(keyArr);
    LuanCachCucXuongKhucTatAch(keyArr);
    LuanCachCucKhoiVietTatAch(keyArr);
    LuanCachCucLocTonTatAch(keyArr);
    LuanCachCucTaHuuTatAch(keyArr);
    LuanCachCucKinhDuongDaLaTatAch(keyArr);
    LuanCachCucHoaLinhTatAch(keyArr);
    LuanCachCucKhongKiepTatAch(keyArr);
    LuanCachCucTuHoaTatAch(keyArr);
    LuanCachCucLucBaiTinhTatAch(keyArr);
    LuanCacCachCucKhacTatAch(keyArr);
}
function LuanCachCucSaoTuViTatAch(keyArr) {
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
    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ Tật Ách ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi")) {
        console.log("Tử Vi tọa thủ cung Tật Ách");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tật Ách ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ Tật Ách miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mb[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tật Ách ở ${mb[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tật Ách ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ Tật Ách ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", vd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tật Ách ở ${vd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tật Ách ở ${vd[i]}`);
        }
    }
    // Tử vi thủ Tật Ách gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);


    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        console.log("Tử Vi tọa thủ cung Tật Ách và hội chiếu các sao:", cattinh.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tật Ách và hội chiếu các", cattinh.join(", "));
    }
    //Tử vi thủ Tật Ách gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        console.log("Tử Vi tọa thủ cung Tật Ách và hội chiếu ", KhongKiep.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tật Ách và hội chiếu ", KhongKiep.join(", "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            console.log("Tử Vi tọa thủ cung Tật Ách và hội chiếu các sao:", hungtinh.join(", "));
            keyArr.push("Tử Vi tọa thủ cung Tật Ách và hội chiếu các", hungtinh.join(", "));

        }
    }

    // Tử vi thủ Tật Ách đồng cung với Tham Lang ở mão dậu


    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[i], "Tử Vi") && isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", Tham)) {
            console.log(`Tử Vi đồng cung với Tham Lang tại Tật Ách ở ${maodau[i]}`);
            keyArr.push(`Tử Vi đồng cung với Tham Lang tại Tật Ách ở ${maodau[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            console.log(`Tử Vi tọa thủ cung Tật Ách ở ${maodau[i]} gặp`, KhongKiep.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Tật Ách ở ${maodau[i]} gặp`, KhongKiep.join(", "));
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Tật Ách ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                console.log(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Tật Ách ở Ngọ và không gặp`, HinhKy.join(", "));
                keyArr.push(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Tật Ách ở Ngọ và không gặp`, HinhKy.join(", "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Tật Ách ở Hợi, Nữ có Tử Vi tọa thủ cung Tật Ách ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                console.log(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tật Ách ở Hợi`);
                keyArr.push(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tật Ách ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Tật Ách", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                console.log(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tật Ách ở Dần`);
                keyArr.push(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tật Ách ở Dần`);
            }
        }
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thiên Phủ")) {
        console.log("Tử Vi, Thiên Phủ đồng cung tại Tật Ách");
        keyArr.push("Tử Vi, Thiên Phủ đồng cung tại Tật Ách");
    }

    // Tử phủ đồng cung, Tật Ách an tại dần thân, sinh năm giáp




    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                console.log(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
                keyArr.push(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }

    // Tử vi hoặc Thiên Phủ tọa Tật Ách gặp Tả Hữu
    for (let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            console.log(`${tuphu[i]} tọa thủ cung Tật Ách gặp`, TaHuu.join(", "));
            keyArr.push(`${tuphu[i]} tọa thủ cung Tật Ách gặp`, TaHuu.join(", "));
        }

    }
    // Tử hoặc Phủ tọa thủ cung Tật Ách đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tật Ách", tuphu[i], "Kình Dương")) {
            console.log(`${tuphu[i]} tọa thủ cung Tật Ách đồng cung Kình Dương`);
            keyArr.push(`${tuphu[i]} tọa thủ cung Tật Ách đồng cung Kình Dương`);
        }

    }
    // Tử vi tọa Tật Ách đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        console.log("Tử Vi đồng cung với Thiên Phủ tại Tật Ách gặp", TaHuu.join(", "));
        keyArr.push("Tử Vi đồng cung với Thiên Phủ tại Tật Ách gặp", TaHuu.join(", "));
    }
    // Tử vi tại Tật Ách gặp cát tinh
    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        console.log("Tử Vi tọa thủ cung Tật Ách gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tật Ách gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push("Tử Vi tọa thủ cung Tật Ách gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
            console.log("Tử Vi tọa thủ cung Tật Ách gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
        }
    }


    // Tử vi tại Tật Ách đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Toái") && kiemTraCachCuc("Phá Toái", Kinh)) {
        console.log("Tử Vi tọa thủ cung Tật Ách đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Tử Vi", "Thất Sát")) {
            console.log(`Tử Vi đồng cung với Thất Sát tại Tật Ách ở ${tyhoi[i]}`);
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Tật Ách ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Tật Ách

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thất Sát") && isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Hóa Quyền")) {
        console.log("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Tật Ách");
        keyArr.push("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Tật Ách");
    }

    // Tử Vũ hoặc Tử Phá đồng cung tại Tật Ách gặp Kình Đà
    for (let i = 0; i < vupha.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", vupha[i]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"])) {
            console.log(`Tử Vi đồng cung với ${vupha[i]} tại Tật Ách gặp Kình Dương, Đà La`);
            keyArr.push(`Tử Vi đồng cung với ${vupha[i]} tại Tật Ách gặp Kình Dương, Đà La`);
        }
    }
    // Tử vi hoặc Vũ Khúc thủ Tật Ách gặp Sát tinh

    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            console.log(`${tuvu[i]} tọa thủ cung Tật Ách gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`${tuvu[i]} tọa thủ cung Tật Ách gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
    }
    // Tử vi hoặc Phá Quân thủ Tật Ách tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], tupha[j])) {
                console.log(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]}`);
                keyArr.push(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    console.log(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                    keyArr.push(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    console.log(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                    keyArr.push(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    console.log(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                    keyArr.push(`${tupha[j]} tọa thủ cung Tật Ách tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                }
            }
        }
    }

    // // Tử vi tại Tật Ách gặp Kiếp, Đào Hồng Không tại Tật Ách
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        console.log("Tử Vi tọa thủ cung Tật Ách đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung Tật Ách
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Hữu Bật")) {
        console.log("Tử Vi tọa thủ cung Tật Ách đồng cung Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại Tật Ách chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            console.log(`Tử Vi tọa thủ cung Tật Ách ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Tật Ách ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        console.log("Tử Vi tọa thủ cung Tật Ách gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Tật Ách hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        console.log("Tử Vi tọa thủ cung Tật Ách đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Tật Ách
    if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        console.log("Tử Vi tọa thủ cung Tật Ách hội chiếu Thiên Phủ");
        keyArr.push("Tử Vi tọa thủ cung Tật Ách hội chiếu Thiên Phủ");
    }

    // Tử Vi đồng cung Thất Sát
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thất Sát")) {
        console.log("Tử Vi, Thất Sát đồng cung tại Tật Ách");
        keyArr.push("Tử Vi, Thất Sát đồng cung tại Tật Ách");
    }
    // Thiên Lương
    if(isHaiSaoDongCungTaiCung("Tật Ách", "Tử Vi", "Thiên Lương")) {
        console.log("Tử Vi, Thiên Lương đồng cung tại Tật Ách");
        keyArr.push("Tử Vi, Thiên Lương đồng cung tại Tật Ách");
    }
}

function LuanCachCucSaoLiemTrinhTatAch(keyArr) {
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

    // Liêm Trinh Tọa thủ Tật Ách
    if (isSaoToaThuTaiCung("Tật Ách", "Liêm Trinh")) {
        console.log("Liêm Trinh tọa thủ cung Tật Ách");
        keyArr.push("Liêm Trinh tọa thủ cung Tật Ách");
    }
    // Liêm Trinh Miếu địa tọa thủ Tật Ách gặp cát tinh
    // Liêm Trinh tọa thủ cung Tật Ách gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ Tật Ách gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Tật Ách gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tật Ách", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", vuong[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ Tật Ách gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Tật Ách gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Tật Ách", dac[i], "Liêm Trinh", "Văn Khúc")) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Liêm Trinh")) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }

        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tật Ách ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                console.log(`Tuổi Bính Liêm Trinh tọa thủ cung Tật Ách ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Tật Ách ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tật Ách ở ${maodau[i]} gặp`, HoaLinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tật Ách ở ${maodau[i]} gặp`, HoaLinh.join(", "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Tật Ách", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Hỏa Linh"])) {
        console.log("Liêm Trinh tọa thủ cung Tật Ách gặp tứ sát Kình Đà Hỏa Linh");
        keyArr.push("Liêm Trinh tọa thủ cung Tật Ách gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", ["Bạch Hổ"])) {
            console.log("Liêm Trinh tọa thủ cung Tật Ách gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
            keyArr.push("Liêm Trinh tọa thủ cung Tật Ách gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

}

function LuanCachCucSaoThienDongTatAch(keyArr) {
    const MVD = ["Dần", "Thân", "Tý", "Mão", "Tỵ", "Hợi"];
    const HD = ["Ngọ", "Sửu", "Mùi", "Tuất", "Thìn", "Dậu"];
    const tyhoi = ["Tỵ", "Hợi"];
    const dinh_canh = ["Đ.", "C."];
    const dinhcanh = ["Đinh", "Canh"];
    const tuatngo = ["Tuất", "Ngọ"];
    const DanThan = ["Dần", "Thân"];
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    //Thiên Đồng toạ thủ cung Tật Ách
    if (isSaoToaThuTaiCung("Tật Ách", "Thiên Đồng")) {
        console.log("Thiên Đồng tọa thủ cung Tật Ách");
        keyArr.push("Thiên Đồng tọa thủ cung Tật Ách");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", MVD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i]);
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Tật Ách ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tật Ách", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Lương ở " + DanThan[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        console.log("Thiên Đồng tọa thủ cung Tật Ách ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
        keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        console.log("Quý Chị có Thiên Đồng tọa thủ cung Tật Ách ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
        keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Tật Ách ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Đồng", "Thiên Việt")) {
        console.log("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Việt");
        keyArr.push("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Tinh", "Linh Tinh", "Hóa Kỵ"])) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", HD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + HD[i] + " gặp", HinhKy.join(", "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tuatngo[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + tuatngo[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyhoi[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                console.log("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i]);
                keyArr.push("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Quý Anh có Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Quý Anh có Thiên Đồng tọa thủ cung Tật Ách ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }
}

function LuanCachCucSaoVuKhucTatAch(keyArr) {
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
    const cattinh = ["Hóa Khoa", "Hóa Lộc", "Hóa Quyền", "Tả Phù", "Hữu Bật", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Tử Vi", "Thiên Phủ", "Thiên Tướng", "Tham Lang"];

    const suumui = ["Sửu", "Mùi"];
    gkn = ["G.", "K.", "N."];
    giap_ky_nham = ["Giáp", "Kỷ", "Nhâm"];
    danthan = ["Dần", "Thân"];

    // Vũ Khúc tọa thủ cung Tật Ách
    if (isSaoToaThuTaiCung("Tật Ách", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tật Ách");
        keyArr.push("Vũ Khúc tọa thủ cung Tật Ách");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ Tật Ách gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
        }
        // Vũ Khúc tọa thủ cung Tật Ách gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Vũ Khúc", KhoiViet)) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Vũ Khúc", MaLoc) === false) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp`, MaLoc.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${mvd[i]} gặp`, MaLoc.join(", "));

        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Tật Ách ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Tật Ách", suumui[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${suumui[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Mão", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tật Ách ở Mão");
        keyArr.push("Vũ Khúc tọa thủ cung Tật Ách ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Dậu", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tật Ách ở Dậu");
        keyArr.push("Vũ Khúc tọa thủ cung Tật Ách ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ Tật Ách
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý Chị có Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]}`);
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Phá Quân`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                    keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Kình Đà Quả Tú`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Tật Ách", "Hợi", "Thái Âm", "Tham Lang")) {
            console.log("Vũ Khúc tọa thủ cung Tật Ách ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");
            keyArr.push("Vũ Khúc tọa thủ cung Tật Ách ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Tật Ách", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Tật Ách", "Vũ Khúc", "Hỏa Tinh")) {
            console.log(`Người tuổi ${giap_ky_nham[i]} có Vũ Khúc tọa thủ cung Tật Ách ở Hợi đồng cung Phá Quân và Hỏa Tinh`);
            keyArr.push(`Người tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Tật Ách ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Vũ Khúc", "Tham Lang")) {
        console.log("Vũ Khúc tọa thủ cung Tật Ách đồng cung Tham Lang");
        keyArr.push("Vũ Khúc tọa thủ cung Tật Ách đồng cung Tham Lang");

    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Tật Ách", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            console.log(`Vũ Khúc tọa thủ cung Tật Ách ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tật Ách ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
        }
    }
}

function LuanCachCucThaiDuongTatAch(keyArr) {
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

    const binhdinh = ["B.", "Đ."];
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
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i]);
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));

            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thái Dương tọa thủ cung Tật Ách ở " + mvd[i]);
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Tật Ách ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + ham[i]);
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", hoity[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + hoity[i]);
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                console.log("Thái Dương tọa thủ cung Tật Ách ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", than_tuat_ty[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + than_tuat_ty[i]);
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Thiên Hình")) {
        console.log("Thái Dương tọa thủ cung Tật Ách đồng cung Thiên Hình");
        keyArr.push("Thái Dương tọa thủ cung Tật Ách đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtannhamky.length; i++) {
        if (lasoData.canNam === canhtannhamky[i] && isSaoToaThuTaiCungVaChi("Tật Ách", "Ngọ", "Thái Dương")) {
            console.log("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Tật Ách ở Ngọ");
            keyArr.push("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Tật Ách ở Ngọ");
        }
    }
    for (let i = 0; i < binhdinh.length; i++) {
        if (lasoData.canNam === binhdinh[i] && isHaiSaoDongCungTaiCungChi("Tật Ách", "Tý", "Thái Dương")) {
            console.log("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Tật Ách ở Tý");
            keyArr.push("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Tật Ách ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", muithan[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + muithan[i]);
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Thái Âm")) {
        console.log("Thái Dương tọa thủ cung Tật Ách đồng cung Thái Âm");
        keyArr.push("Thái Dương tọa thủ cung Tật Ách đồng cung Thái Âm");

    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Tật Ách tại Sửu");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Tật Ách tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Tật Ách tại Sửu");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Tật Ách tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Tật Ách tại Mùi");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Tật Ách tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Tật Ách tại Mùi");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Tật Ách tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        console.log("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Tật Ách tại Sửu");
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Tật Ách tại Sửu");
    }
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc("Thái Dương", ["Thái Âm"])) {
        console.log("Cung Tật Ách Vô Chính Diệu gặp Thái Dương, Thái Âm");
        keyArr.push("Cung Tật Ách Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong))) {
            console.log("Thái Dương tọa thủ cung Tật Ách ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
            keyArr.push("Thái Dương tọa thủ cung Tật Ách ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
        }
    }

    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        console.log("Thái Dương tọa thủ cung Tật Ách ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
        keyArr.push("Thái Dương tọa thủ cung Tật Ách ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }
}

function LuanCachCucThienCoTatAch(keyArr) {
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
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i]);
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Tật Ách ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Tật Ách nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            console.log(`Quý Anh có Thiên Cơ tọa thủ cung Tật Ách ở ${thintuat[i]}`);
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Tật Ách ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Tật Ách", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            console.log(`Thiên Cơ Thiên Lương đồng cung tại Tật Ách ở ${thintuat[i]}`);
            keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Tật Ách ở ${thintuat[i]}`);
            if (kiemTraDiaSinh("Thiên Cơ", kinhdahoalinhtuong)) {
                console.log(`Thiên Cơ Thiên Lương đồng cung tại Tật Ách ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
                keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Tật Ách ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    console.log(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Tật Ách ở ${maodau[i]} gặp Song Hao`);
                    keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Tật Ách ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    console.log(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Tật Ách ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                    keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Tật Ách ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tật Ách ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Tật Ách", "Thiên Cơ") && kiemTraCachCuc("Thiên Cơ", nguyetdongluong)) {
        console.log("Thiên Cơ tọa thủ cung Tật Ách gặp Thiên Đồng, Thiên Lương, Thái Âm");
        keyArr.push("Thiên Cơ tọa thủ cung Tật Ách gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }
}
function LuanCacCachCucThienPhuTatAch(keyArr) {

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

    if (isSaoToaThuTaiCung("Tật Ách", "Thiên Phủ")) {
        console.log("Thiên Phủ tọa thủ cung Tật Ách");
        keyArr.push("Thiên Phủ tọa thủ cung Tật Ách");

        if (kiemTraCachCuc("Thiên Phủ", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
        }
        if (kiemTraCachCuc("Thiến Phủ", lucsattinh)) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Sát tinh: ", lucsattinh.join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Sát tinh: ", lucsattinh.join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Tuất", "Thiên Phủ")) {
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                console.log(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Tật Ách ở Tuất không gặp Sát tinh`);
                keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Tật Ách ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            console.log(`Thiên Phủ tọa thủ cung Tật Ách ở Tý đồng cung Vũ Khúc`);
            keyArr.push(`Thiên Phủ tọa thủ cung Tật Ách ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tật Ách ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tật Ách ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            console.log(`Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp Thiên Tướng`);
            keyArr.push(`Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                console.log(`Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
                keyArr.push(`Thiên Phủ tọa thủ cung Tật Ách ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Tả Hữu, Xương Khúc");
        keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            console.log("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
            keyArr.push("Thiên Phủ tọa thủ cung Tật Ách gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }

}

function LuanCachCucThaiAmTatAch(keyArr) {

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
    if (isSaoToaThuTaiCung("Tật Ách", "Thái Âm")) {
        console.log("Thái Âm tọa thủ cung Tật Ách");
        keyArr.push("Thái Âm tọa thủ cung Tật Ách");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Tật Ách", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            console.log(`Thái Âm tọa thủ cung Tật Ách ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                console.log(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Âm", "Thiên Hình")) {
        console.log("Thái Âm tọa thủ cung Tật Ách đồng cung Thiên Hình");
        keyArr.push("Thái Âm tọa thủ cung Tật Ách đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        console.log(`Thái Âm tọa thủ cung Phu Thê`);
        keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Thái Âm") && isHaiSaoDongCungTaiCung("Tật Ách", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Tật Ách", "Thái Âm", "Lộc Tồn")) {
        console.log("Thái Âm tọa thủ cung Tật Ách đồng cung Vũ Khúc, Lộc Tồn");
        keyArr.push("Thái Âm tọa thủ cung Tật Ách đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            console.log("Thái Âm tọa thủ cung Tật Ách đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
            keyArr.push("Thái Âm tọa thủ cung Tật Ách đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
        }
    }
}
function LuanCachCucThamLangTatAch(keyArr) {

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
    if (isSaoToaThuTaiCung("Tật Ách", "Tham Lang")) {
        console.log("Tham Lang tọa thủ cung Tật Ách");
        keyArr.push("Tham Lang tọa thủ cung Tật Ách");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            for (let j = 0; j < mauky.length; j++) {
                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    console.log("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                    keyArr.push("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Tật Ách ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                }
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tật Ách", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (isHaiSaoDongCungTaiCung("Tật Ách", ham[i], "Tham Lang", "Thiên Riêu")) {
                console.log(`Tham Lang đồng cung Thiên Riêu tại cung Tật Ách ở ${ham[i]}`);
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Tật Ách ở ${ham[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tật Ách", tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang đồng cung Vũ Khúc tại cung Tật Ách ở ${tumo[i]}`);
            keyArr.push(`Tham Lang đồng cung Vũ Khúc tại cung Tật Ách ở ${tumo[i]}`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}`);
            keyArr.push(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}s`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", lucsattinh) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            console.log(`Tham Lang tọa thủ cung Tật Ách ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
            keyArr.push(`Tham Lang tọa thủ cung Tật Ách ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tham Lang", "Liêm Trinh")) {
        console.log("Tham Lang tọa thủ cung Tật Ách đồng cung Liêm Trinh");
        keyArr.push("Tham Lang tọa thủ cung Tật Ách đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Hợi", "Tham Lang", "Liêm Trinh") && kiemTraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        console.log("Tham Lang tọa thủ cung Tật Ách ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");
        keyArr.push("Tham Lang tọa thủ cung Tật Ách ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }

}
function LuanCachCucCuMonTatAch(keyArr) {
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
    const TueHoPhu = ["Thái Tuế", "Bạch Hổ", "Quan Phù"];

    if (isSaoToaThuTaiCung("Tật Ách", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Tật Ách");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", mvd[i], "Cự Môn")) {
            console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
            }

            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Tật Ách", mvd[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Cự Môn")) {

            console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Tật Ách", ham[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp `);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", thintuat[i], "Cự Môn") && lasoData.canNam === dc[j]) {
                console.log(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Tật Ách ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Tật Ách ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", thintuat[i], "Cự Môn") && lasoData.canNam === qt[j]) {
                console.log(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Tật Ách ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Tật Ách ở ${thintuat[i]}`);
            }
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", suumui[i], "Cự Môn") && lasoData.canNam === ab[j]) {
                console.log(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Tật Ách ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Tật Ách ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Cự Môn", "Hóa Kỵ")) {
        console.log("Cự Môn tọa thủ cung Tật Ách đồng cung Hoá Kỵ");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tật Ách đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Dần", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tật Ách ở Dần đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Thân", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tật Ách ở Thân đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Thân", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Phụ Mẫu", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tật Ách ở Thân gặp Thái Dương, Phụ Mẫu có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách ở Thân gặp Thái Dương, Phụ Mẫu có Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Dần", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Phụ Mẫu", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tật Ách ở Dần gặp Thái Dương, Phụ Mẫu có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách ở Dần gặp Thái Dương, Phụ Mẫu có Thái Dương");

    }
    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Phụ Mẫu", "Thái Dương", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Phụ Mẫu đồng cung Thái Dương xung chiếu cung Tật Ách ở Dần");
        keyArr.push("Cự Môn tọa thủ cung Phụ Mẫu đồng cung Thái Dương xung chiếu cung Tật Ách ở Dần");

    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", danthan[i], "Cự Môn", "Thái Dương") && kiemTraCachCuc("Cự Môn", "Hóa Lộc")) {
            console.log(`Cự Môn tọa thủ cung Tật Ách ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
            keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Dần", "Thiên Cơ", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Tật Ách ở Dần đồng cung Thiên Cơ");
        keyArr.push("Cự Môn tọa thủ cung Tật Ách ở Dần đồng cung Thiên Cơ");
    }



    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === atkb[i]) {
                console.log(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]}`);
                keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log(`Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]}`);
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", maodau[j], "Cự Môn", "Thiên Cơ") && kiemTraCachCuc("Cự Môn", ["Đại Hao", "Tiểu Hao"])) {
                console.log(`Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Tật Ách", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở', maodau[j].join);
                keyArr.push('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Tật Ách ở', maodau[j].join);
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Tật Ách", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                console.log(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Tật Ách ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);
                keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Tật Ách ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn đồng cung Lộc Tồn tại cung Tật Ách ở ${tyhoi[i]}`);
                keyArr.push(`Cự Môn đồng cung Lộc Tồn tại cung Tật Ách ở ${tyhoi[i]}`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                console.log(`Cự Môn tọa thủ cung Tật Ách ở ${tyngo[i]} gặp Khoa Lộc Quyền`);
                keyArr.push(`Cự Môn tọa thủ cung Tật Ách ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

}
function LuanCachCucThienTuongTatAch(keyArr) {
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
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));


        }
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${vuong[i]} gặp Kình Dương, Đà La`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Tật Ách", ham[i], "Thiên Tướng")) {
            console.log(`Quý chị có Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Tật Ách ở ${ham[i]}`);
        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", thintuat[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tật Ách ở ${thintuat[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tật Ách ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            console.log(`Thiên Tướng đồng cung Liêm Trinh tại cung Tật Ách ở ${tyngo[i]} gặp Kình Dương`);
            keyArr.push(`Thiên Tướng đồng cung Liêm Trinh tại cung Tật Ách ở ${tyngo[i]} gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Tướng", "Hồng Loan")) {
        console.log("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Tật Ách");
        keyArr.push("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Tật Ách");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        console.log("Quý chị có Thiên Tướng tọa thủ cung Tật Ách gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Tật Ách gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
    }
}

function LuanCachCucThienLuongTatAch(keyArr) {
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

    if (isSaoToaThuTaiCung("Tật Ách", "Thiên Lương")) {
        console.log("Thiên Lương tọa thủ cung Tật Ách");
        keyArr.push("Thiên Lương tọa thủ cung Tật Ách");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${ham[i]}`);
        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", thintuat[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${thintuat[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", "Ngọ", "Thiên Lương") && lasoData.canNam === dkq[i]) {
            console.log("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Tật Ách ở Ngọ");
            keyArr.push("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Tật Ách ở Ngọ");

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Dần", "Thiên Lương", "Thái Dương")) {
        console.log("Thiên Lương đồng cung Thái Dương tại cung Tật Ách ở Dần");
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Tật Ách ở Dần");
    }

    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Tý", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Xương", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Tật Ách ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Tật Ách ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Ngọ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Khúc", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Tật Ách ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Tật Ách ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
    }

    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tysuudanmaothintyngo[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Linh Tinh"])) {
            console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
            keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            console.log(`Thiên Lương đồng cung Thiên Đồng tại cung Tật Ách ở ${vuong[i]}`);
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Tật Ách ở ${vuong[i]}`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Phụ Mẫu", "Thân", "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Thiên Cơ"])) {
        console.log("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Tật Ách ở Dần gặp Thái Âm, Thiên Cơ");
        keyArr.push("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Tật Ách ở Dần gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", mieu[i], "Thiên Lương", "Văn Xương")) {
            console.log(`Thiên Lương đồng cung Văn Xương tại cung Tật Ách ở ${mieu[i]}`);
            keyArr.push(`Thiên Lương đồng cung Văn Xương tại cung Tật Ách ở ${mieu[i]}`);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Tỵ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        console.log("Thiên Lương tọa thủ cung Tật Ách ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
        keyArr.push("Thiên Lương tọa thủ cung Tật Ách ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Thiên Lương", "Thiên Mã")) {
            console.log(`Thiên Lương đồng cung Thiên Mã tại cung Tật Ách ở ${tyhoi[i]}`);
            keyArr.push(`Thiên Lương đồng cung Thiên Mã tại cung Tật Ách ở ${tyhoi[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyhoi[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thiên Mã"])) {
            console.log(`Thiên Lương tọa thủ cung Tật Ách ở ${tyhoi[i]} gặp Thiên Mã`);
            keyArr.push(`Thiên Lương tọa thủ cung Tật Ách ở ${tyhoi[i]} gặp Thiên Mã`);
        }
    }

}
function LuanCachCucThatSatTatAch(keyArr) {
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

    if (isSaoToaThuTaiCung("Tật Ách", "Thất Sát")) {
        console.log("Thất Sát tọa thủ cung Tật Ách");
        keyArr.push("Thất Sát tọa thủ cung Tật Ách");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            console.log(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));

        }
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            console.log(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", mvd[i], "Thất Sát", "Thiên Hình")) {
            console.log(`Thất Sát đồng cung Thiên Hình tại cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Tật Ách ở ${mvd[i]}`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[j], "Thất Sát") && lasoData.canNam === gcdk[i]) {
                console.log(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Tật Ách ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Tật Ách ở ${danthan[j]}`);
            }

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                console.log(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                console.log(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", ham[i], "Thất Sát", "Thiên Hình")) {
                console.log(`Thất Sát đồng cung Thiên Hình tại cung Tật Ách ở ${ham[i]}`);
                keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Tật Ách ở ${ham[i]}`);
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Tật Ách ở ${ham[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Tật Ách ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                console.log(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Tật Ách ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Tật Ách ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Tỵ", "Thất Sát", "Tử Vi")) {
        console.log("Thất Sát đồng cung Tử Vi tại cung Tật Ách ở Tỵ");
        keyArr.push("Thất Sát đồng cung Tử Vi tại cung Tật Ách ở Tỵ");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            console.log("Thất Sát đồng cung Tử Vi tại cung Tật Ách ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
            keyArr.push("Thất Sát đồng cung Tử Vi tại cung Tật Ách ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", suumui[i], "Thất Sát", "Liêm Trinh")) {
            console.log(`Thất Sát đồng cung Liêm Trinh tại cung Tật Ách ở ${suumui[i]}`);
            keyArr.push(`Thất Sát đồng cung Liêm Trinh tại cung Tật Ách ở ${suumui[i]}`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                console.log(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Tật Ách ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Tật Ách ở ${suumui[i]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        console.log(`Thất Sát tọa thủ cung Tật Ách gặp Phá Quân, Tham Lang`);
        keyArr.push(`Thất Sát tọa thủ cung Tật Ách gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                console.log(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Tật Ách gặp Phá Quân, Tham Lang`);
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Tật Ách gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Tật Ách", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        console.log("Thất Sát tọa thủ cung Tật Ách gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
        keyArr.push("Thất Sát tọa thủ cung Tật Ách gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            console.log(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Tật Ách`);
            keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Tật Ách`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            console.log(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
            keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
function LuanCachCucPhaQuanTatAch(keyArr) {
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
        if (isSaoToaThuTaiCung("Tật Ách", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]}`);

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Tật Ách", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Tật Ách", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Tật Ách", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                console.log(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Tật Ách ở ${mieu[i]}`);
                keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Tật Ách ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", ham[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                console.log(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Tật Ách ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Tật Ách ở ${maodau[i]}`);
            }
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                console.log(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Tật Ách ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Tật Ách ở ${danthan[j]}`);
            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            console.log(`Người tuổi Mậu có Phá Quân tọa thủ cung Tật Ách ở ${tyhoi[i]}`);
            keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Tật Ách ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Tật Ách gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Tật Ách gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Tật Ách gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Tật Ách gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        console.log("Phá Quân đồng cung Lộc Tồn tại cung Tật Ách ở Ngọ và gặp Thiếu Dương");
        keyArr.push("Phá Quân đồng cung Lộc Tồn tại cung Tật Ách ở Ngọ và gặp Thiếu Dương");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            console.log(`Phá Quân tọa thủ cung Tật Ách ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
            keyArr.push(`Phá Quân tọa thủ cung Tật Ách ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }
}
function LuanCachCucXuongKhucTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi", "Tỵ", "Hợi"];
    const tuphukhoiviettahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Thiên Khôi", "Thiên Việt", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];

    const tyhoi = ["Tỵ", "Hợi"];
    const danmao = ["Dần", "Mão"];

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", dac_dia[i], XuongKhuc[j])) {
                console.log(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Thiên Lương`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Thiên Lương`);
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Tật Ách", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    console.log(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Tật Ách ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Tật Ách ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Tật Ách", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    console.log(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Tật Ách ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Tật Ách ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Tật Ách", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    console.log(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Tật Ách ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Tật Ách ở ${dac_dia[i]}`);

                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        console.log(`Văn Xương Văn Khúc giáp Tật Ách`);
        keyArr.push(`Văn Xương Văn Khúc giáp Tật Ách`);
        if (isSaoToaThuTaiCung("Tật Ách", "Thái Dương")) {
            console.log("Tật Ách có Thái Dương giáp Văn Xương, Văn Khúc");
            keyArr.push("Tật Ách có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Tật Ách có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
        keyArr.push("Tật Ách có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Tật Ách có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
        keyArr.push("Tật Ách có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                console.log(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Tật Ách ở ${tyhoi[i]}`);
                keyArr.push(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Tật Ách ở ${tyhoi[i]}`);
            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                console.log(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Tật Ách ở ${danmao[i]} gặp Kình Dương`);
                keyArr.push(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Tật Ách ở ${danmao[i]} gặp Kình Dương`);

            }
        }
    }
}
function LuanCachCucKhoiVietTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", KhoiViet[i])) {

            if (kiemTraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], lucsattinh)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Kỵ", "Thiên Hình"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Hóa Kỵ, Thiên Hình`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Hóa Lộc mà không gặp các sao Sát tinh`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Tử Vi", KhoiViet[i])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tật Ách ở Ngọ đồng cung Tử Vi`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tật Ách ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        console.log(`Khôi Việt giáp Tật Ách`);
        keyArr.push(`Khôi Việt giáp Tật Ách`);
        if (isSaoToaThuTaiCung("Tật Ách", "Thái Dương")) {
            console.log("Tật Ách có Thái Dương giáp Khôi Việt");
            keyArr.push("Tật Ách có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Tật Ách", "Hóa Lộc")) {
            console.log("Tật Ách có Hóa Lộc giáp Khôi Việt");
            keyArr.push("Tật Ách có Hóa Lộc giáp Khôi Việt");
        }
    }
}
function LuanCachCucLocTonTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Tật Ách", "Lộc Tồn")) {

        if (kiemTraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            console.log("Lộc Tồn toạ thủ cung Tật Ách gặp", tuphuxuongkhuckhoivietma.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tật Ách gặp", tuphuxuongkhuckhoivietma.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            console.log("Lộc Tồn toạ thủ cung Tật Ách gặp", quangquyquanrieuy.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tật Ách gặp", quangquyquanrieuy.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            console.log("Lộc Tồn toạ thủ cung Tật Ách gặp", khongkiephaokypha.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tật Ách gặp", khongkiephaokypha.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            console.log("Lộc Tồn toạ thủ cung Tật Ách gặp Phá Quân");
            keyArr.push("Lộc Tồn toạ thủ cung Tật Ách gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Lộc Tồn", "Hóa Lộc")) {
            console.log("Lộc Tồn đồng cung Hoá Lộc tại cung Tật Ách");
            keyArr.push("Lộc Tồn đồng cung Hoá Lộc tại cung Tật Ách");
        }
        if (isSaoToaThuTaiCung("Tật Ách", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Tật Ách", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            console.log("Song Lộc hội chiếu tại cung Tật Ách");
            keyArr.push("Song Lộc hội chiếu tại cung Tật Ách");

        }
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Lộc Tồn", "Thiên Mã")) {
            console.log("Lộc Tồn đồng cung Thiên Mã tại cung Tật Ách");
            keyArr.push("Lộc Tồn đồng cung Thiên Mã tại cung Tật Ách");
        }
        if (isSaoToaThuTaiCung("Tật Ách", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Tật Ách", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            console.log("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Tật Ách ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Tật Ách ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Phụ Mẫu", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Phụ Mẫu ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Phụ Mẫu ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}

function LuanCachCucTaHuuTatAch(keyArr) {
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
        if (isSaoToaThuTaiCung("Tật Ách", TaHuu[i])) {

            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tật Ách gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tật Ách gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tật Ách gặp`, conguyetdongluonglongphuong.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tật Ách gặp`, conguyetdongluonglongphuong.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tật Ách gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tật Ách gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                console.log(`${TaHuu[i]} toạ thủ cung Tật Ách gặp Kình Dương`);
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tật Ách gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", suumui[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc(KhoaLocQuyen)) {
            console.log(`Tả Phù, Hữu Bật đồng cung Tật Ách ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Tật Ách ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            console.log(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tật Ách ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                console.log(`Tả Phù, Hữu Bật đồng cung tại Tật Ách ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
                keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Tật Ách ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            console.log(`Hữu Bật, Thiên Tướng đồng cung tại Tật Ách ở ${tyhoi[i]}`);
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Tật Ách ở ${tyhoi[i]}`);
        }
    }



    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        console.log(`Tả Phù Hữu Bật giáp Tật Ách`);
        keyArr.push(`Tả Phù Hữu Bật giáp Tật Ách`);
        if (isSaoToaThuTaiCung("Tật Ách", "Tử Vi")) {
            console.log(`Tật Ách có Tử Vi giáp Tả Phù Hữu Bật`);
            keyArr.push(`Tật Ách có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }
}
function LuanCachCucKinhDuongDaLaTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];

    if (isSaoToaThuTaiCung("Tật Ách", "Kình Dương")) {

        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            console.log("Kình Dương toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
            keyArr.push("Kình Dương toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Hóa Kỵ")) {
            console.log("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Tật Ách");
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Tật Ách");
        }

    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        console.log("Thái Dương, Thái Âm đồng cung tại Tật Ách gặp Kình Dương");
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Tật Ách gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            console.log(`Thiên Phủ, Tử Vi đồng cung tại Tật Ách ở ${tymui[i]} gặp Kình Dương`);
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung tại Tật Ách ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"]) && isSaoToaThuTaiCung("Tật Ách", "Kình Dương")) {
        console.log("Kình Dương toạ thủ cung Tật Ách gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
        keyArr.push("Kình Dương toạ thủ cung Tật Ách gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Tật Ách", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        console.log("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Tật Ách ở Ngọ gặp Địa Giải, Phượng Các");
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Tật Ách ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Kình Dương", "Tham Lang")) {
            console.log(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Tật Ách ở ${tumo[i]}`);
            keyArr.push(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Tật Ách ở ${tumo[i]}`);

        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        console.log(`Kình Dương, Đà La giáp Tật Ách`);
        keyArr.push(`Kình Dương, Đà La giáp Tật Ách`);
        if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ")) {
            console.log(`Tật Ách có Hóa Kỵ giáp Kình Dương, Đà La`);
            keyArr.push(`Tật Ách có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Lực Sỹ")) {
        console.log("Kình Dương, Lực Sỹ đồng cung tại Tật Ách");
        keyArr.push("Kình Dương, Lực Sỹ đồng cung tại Tật Ách");
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Đà La")) {

        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            console.log("Đà La toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");
            keyArr.push("Đà La toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            console.log("Đà La toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
            keyArr.push("Đà La toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", dac_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", ham_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
        }
    }
}

function LuanCachCucHoaLinhTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", HoaLinh[i])) {

            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                console.log(`${HoaLinh[i]} toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Tật Ách gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", dac_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", ham_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                console.log(`Tham Lang, Vũ Khúc đồng cung Tật Ách ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Tật Ách ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Địa Kiếp", "Vũ Khúc")) {
                    console.log(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Tật Ách ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                    keyArr.push(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Tật Ách ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Hỏa Tinh") && isSaoToaThuTaiCung("Phụ Mẫu", "Linh Tinh")) {
        console.log("Hỏa Tinh toạ thủ cung Tật Ách gặp Linh Tinh ở Phụ Mẫu");
        keyArr.push("Hỏa Tinh toạ thủ cung Tật Ách gặp Linh Tinh ở Phụ Mẫu");
        if (kiemTraCachCuc("Hỏa Tinh", ["Kình Dương"])) {
            console.log("Hỏa Tinh toạ thủ cung Tật Ách đối xung Linh Tinh và gặp Kình Dương");
            keyArr.push("Hỏa Tinh toạ thủ cung Tật Ách đối xung Linh Tinh và gặp Kình Dương");
        }
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Linh Tinh") && isSaoToaThuTaiCung("Phụ Mẫu", "Hỏa Tinh")) {
        console.log("Linh Tinh toạ thủ cung Tật Ách gặp Hỏa Tinh ở Phụ Mẫu");
        keyArr.push("Linh Tinh toạ thủ cung Tật Ách gặp Hỏa Tinh ở Phụ Mẫu");
        if (kiemTraCachCuc("Linh Tinh", ["Kình Dương"])) {
            console.log("Linh Tinh toạ thủ cung Tật Ách đối xung Hỏa Tinh và gặp Kình Dương");
            keyArr.push("Linh Tinh toạ thủ cung Tật Ách đối xung Hỏa Tinh và gặp Kình Dương");
        }
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hỏa Tinh", "Linh Tinh")) {
        console.log("Hỏa Tinh, Linh Tinh đồng cung tại Tật Ách");
        keyArr.push("Hỏa Tinh, Linh Tinh đồng cung tại Tật Ách");
    }

    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        console.log("Hỏa Tinh toạ thủ cung Tật Ách ở Hợi gặp Thiên Hình, Tham Lang");
        keyArr.push("Hỏa Tinh toạ thủ cung Tật Ách ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        console.log("Linh Tinh đồng cung với Thiên Mã tại Tật Ách gặp Kình Dương, Đà La");
        keyArr.push("Linh Tinh đồng cung với Thiên Mã tại Tật Ách gặp Kình Dương, Đà La");
    }
}

function LuanCachCucKhongKiepTatAch(keyArr) {
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


    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", dac_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);

                }

            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", ham_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tật Ách ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                }


            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung tại Tật Ách ở ${tyhoi[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Tật Ách ở ${tyhoi[i]}`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tusinh[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung tại Tật Ách ở ${tusinh[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Tật Ách ở ${tusinh[i]}`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            console.log(`Địa Không, Địa Kiếp đồng cung Tật Ách ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Tật Ách ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        console.log(`Địa Không, Địa Kiếp giáp Tật Ách`);
        keyArr.push(`Địa Không, Địa Kiếp giáp Tật Ách`);
        if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ")) {
            console.log(`Tật Ách có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
            keyArr.push(`Tật Ách có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        console.log("Địa Kiếp, Thiên Cơ đồng cung tại Tật Ách gặp Hoả Tinh");
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung tại Tật Ách gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Tật Ách", "Địa Kiếp", "Lưu Hà")) {
        console.log("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Tật Ách");
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Tật Ách");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Tật Ách", tyhoi[i], "Địa Không", "Thiên Mã")) {
            console.log("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Tật Ách ở " + tyhoi[i]);
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Tật Ách ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        console.log("Địa Kiếp toạ thủ cung Tật Ách gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
        keyArr.push("Địa Kiếp toạ thủ cung Tật Ách gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}
function LuanCachCucTuHoaTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];

    const hoaky_dac_dia = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const hoaky_ham_dia = ["Dần", "Thân", "Tỵ", "Hợi", "Tý", "Sửu", "Mão", "Ngọ", "Dậu", "Tuất", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const danmao = ["Dần", "Mão"];
    const dinhky = ["Đinh", "Kỵ"];
    const dk = ["Đ.", "K."];
    const ngothintuat = ["Ngọ", "Thìn", "Tuất"];
    const danthan = ["Dần", "Thân"];

    if (isSaoToaThuTaiCung("Tật Ách", "Hoá Lộc")) {
        console.log("Hoá Lộc toạ thủ cung Tật Ách");
        keyArr.push("Hoá Lộc toạ thủ cung Tật Ách");

        if (kiemTraCachCuc("Hoá Lộc", ["Hóa Quyền", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Thiên Mã"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách gặp Thiên Mã");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Hoá Quyền")) {
        console.log("Hoá Quyền toạ thủ cung Tật Ách");
        keyArr.push("Hoá Quyền toạ thủ cung Tật Ách");

        if (kiemTraCachCuc("Hoá Quyền", ["Hóa Lộc", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Thiên Mã"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Thiên Mã");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Vũ Khúc", "Cự Môn"])) {
            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp Vũ Khúc, Cự Môn");
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp Vũ Khúc, Cự Môn");
        }
        if (kiemTraCachCuc("Hoá Quyền", lucsattinh)) {

            console.log("Hoá Quyền toạ thủ cung Tật Ách gặp " + lucsattinh.join(", "));
            keyArr.push("Hoá Quyền toạ thủ cung Tật Ách gặp " + lucsattinh.join(", "));
        }
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hoá Khoa")) {
        console.log("Hoá Khoa toạ thủ cung Tật Ách");
        keyArr.push("Hoá Khoa toạ thủ cung Tật Ách");

        if (kiemTraCachCuc("Hoá Khoa", ["Hóa Lộc", "Hóa Quyền", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Thiên Mã"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Thiên Mã");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
        }
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ")) {
        console.log("Hóa Kỵ toạ thủ cung Tật Ách");
        keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách");

        if (kiemTraCachCuc("Hóa Kỵ", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Mã"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Mã");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm", "Thiên Hình"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Thái Dương, Thái Âm, Thiên Hình");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Thái Dương, Thái Âm, Thiên Hình");
        }
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Kỵ", "Cự Môn")) {
            console.log("Hóa Kỵ, Cự Môn đồng cung tại Tật Ách");
            keyArr.push("Hóa Kỵ, Cự Môn đồng cung tại Tật Ách");
        }
        if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Kỵ", "Tham Lang")) {
            console.log("Hóa Kỵ, Tham Lang đồng cung tại Tật Ách");
            keyArr.push("Hóa Kỵ, Tham Lang đồng cung tại Tật Ách");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
            console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Đồng, Thiên Lương");
            keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Thiên Đồng, Thiên Lương");
        }



    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm"])) {
        console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Thái Dương, Thái Âm");
        keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Thái Dương, Thái Âm");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tumo[i], "Hoá Lộc") && isHaiSaoDongCungTaiCungChi("Tật Ách", tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Tật Ách ở " + tumo[i]);
            keyArr.push("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Tật Ách ở " + tumo[i]);
        }
    }

    for (let i = 0; i < dinhky.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", "Hoá Lộc") && isSaoToaThuTaiCung("Phụ Mẫu", "Lộc Tồn") && lasoData.canNam === dk[i]) {
            console.log("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Tật Ách gặp Lộc Tồn ở Phụ Mẫu");
            keyArr.push("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Tật Ách gặp Lộc Tồn ở Phụ Mẫu");
        }
    }


    for (let i = 0; i < ngothintuat.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tật Ách", ngothintuat[i], "Hoá Lộc", "Thiên Lương")) {
            console.log("Hoá Lộc, Thiên Lương đồng cung tại Tật Ách ở " + ngothintuat[i]);
            keyArr.push("Hoá Lộc, Thiên Lương đồng cung tại Tật Ách ở " + ngothintuat[i]);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[i], "Hoá Lộc") && kiemTraCachCuc("Hóa Lộc", ["Thiên Cơ", "Thiên Lương", "Lộc Tồn"])) {
            console.log("Hoá Lộc toạ thủ cung Tật Ách ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
            keyArr.push("Hoá Lộc toạ thủ cung Tật Ách ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
        }
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Quyền", "Hóa Lộc") && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Quyền, Hóa Lộc đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Quyền, Hóa Lộc đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Quyền") && kiemTraCachCuc("Hóa Quyền", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Quyền toạ thủ cung Tật Ách gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Quyền toạ thủ cung Tật Ách gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");

    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền")) {
        console.log(`Hóa Quyền, Hóa Lộc giáp Tật Ách`);
        keyArr.push(`Hóa Quyền, Hóa Lộc giáp Tật Ách`);
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa toạ thủ cung Tật Ách gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa toạ thủ cung Tật Ách gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Khoa", "Hóa Lộc") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa, Hóa Lộc đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa, Hóa Lộc đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Khoa"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        console.log(`Hóa Khoa, Hóa Lộc giáp Tật Ách`);
        keyArr.push(`Hóa Khoa, Hóa Lộc giáp Tật Ách`);
    }


    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Khoa", "Hóa Quyền") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa, Hóa Quyền đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa, Hóa Quyền đồng cung tại Tật Ách không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa toạ thủ cung Tật Ách gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        console.log(`Hóa Khoa, Hóa Quyền giáp Tật Ách`);
        keyArr.push(`Hóa Khoa, Hóa Quyền giáp Tật Ách`);
    }

    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen) && kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
        console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen.concat(XuongKhuc).concat(KhoiViet))) {
        console.log("Hóa Kỵ toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");
        keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");

    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[i], "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Đồng", "Thiên Lương"])) {
            console.log("Hoá Khoa toạ thủ cung Tật Ách ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
            keyArr.push("Hoá Khoa toạ thủ cung Tật Ách ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
        }
    }

    if (isSaoToaThuTaiCungVaChi("Tật Ách", "Tý", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
        console.log("Hóa Kỵ toạ thủ cung Tật Ách ở Tý gặp Thiên Đồng, Thiên Lương");
        keyArr.push("Hóa Kỵ toạ thủ cung Tật Ách ở Tý gặp Thiên Đồng, Thiên Lương");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hoá Quyền", "Thiên Khốc ")) {
        console.log("Hoá Quyền, Thiên Khốc đồng cung tại Tật Ách");
        keyArr.push("Hoá Quyền, Thiên Khốc đồng cung tại Tật Ách");
    }

}

function LuanCachCucLucBaiTinhTatAch(keyArr) {
    const lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    const songhao_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const tangho_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const danthan = ["Dần", "Thân"];
    const songhao = ["Đại Hao", "Tiểu Hao"];
    const tangho = ["Tang Môn", "Bạch Hổ"];



    for (let i = 0; i < songhao_dac.length; i++) {

        for (let j = 0; j < songhao.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", songhao_dac[i], songhao[j])) {
                console.log(songhao[j] + " toạ thủ tại cung Tật Ách ở " + songhao_dac[i]);
                keyArr.push(songhao[j] + " toạ thủ tại cung Tật Ách ở " + songhao_dac[i]);
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", songhao[i]) && kiemTraCachCuc("Vô Chính Diệu", songhao[i])) {
            console.log("Cung Tật Ách Vô Chính Diệu có " + songhao[i]);
            keyArr.push("Cung Tật Ách Vô Chính Diệu có " + songhao[i]);
        }
    }

    for (let i = 0; i < tangho.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", tangho[i])) {

            for (let j = 0; j < tangho_dac.log; j++) {
                if (isSaoToaThuTaiCungVaChi("Tật Ách", tangho_dac[j], tangho[i])) {
                    console.log(tangho[i] + " toạ thủ cung Tật Ách tại " + tangho_dac[j]);
                    keyArr.push(tangho[i] + " toạ thủ cung Tật Ách tại " + tangho_dac[j]);
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có " + tangho[i] + " toạ thủ cung Tật Ách");
                keyArr.push("Quý Chị có " + tangho[i] + " toạ thủ cung Tật Ách");
            }
        }
    }

    for (let i = 0; i < tangho.length; i++) {

        if (isSaoToaThuTaiCung("Tật Ách", tangho[i]) && kiemTraCachCuc(tangho[i], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log(tangho[i] + " toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push(tangho[i] + " toạ thủ cung Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isSaoToaThuTaiCung("Tật Ách", tangho[i]) && kiemTraCachCuc(tangho[i], ["Địa Không", "Địa Kiếp"])) {
            console.log(tangho[i] + " toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
            keyArr.push(tangho[i] + " toạ thủ cung Tật Ách gặp Địa Không, Địa Kiếp");
        }
        if (isSaoToaThuTaiCung("Tật Ách", tangho[i]) && kiemTraCachCuc(tangho[i], ["Kình Dương ", "Thiên Hình"])) {

            console.log(tangho[i] + " toạ thủ cung Tật Ách gặp Kinh Dương, Thiên Hình");
            keyArr.push(tangho[i] + " toạ thủ cung Tật Ách gặp Kinh Dương, Thiên Hình");

        }

        if (isHaiSaoDongCungTaiCung("Tật Ách", tangho[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hoả Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log(tangho[i] + ", Tham Lang đồng cung tại Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Tật Ách gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }

    }


    if (isSaoToaThuTaiCung("Tật Ách", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Thiên Hình"])) {

        console.log("Bạch Hổ toạ thủ cung Tật Ách gặp Thiên Hình");
        keyArr.push("Bạch Hổ toạ thủ cung Tật Ách gặp Thiên Hình");


    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Bạch Hổ", "Thiên Hình")) {
        console.log("Bạch Hổ, Thiên Hình đồng cung tại Tật Ách");
        keyArr.push("Bạch Hổ, Thiên Hình đồng cung tại Tật Ách");

    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Bạch Hổ", "Tấu Thư")) {
        console.log("Bạch Hổ, Tấu Thư đồng cung tại Tật Ách");
        keyArr.push("Bạch Hổ, Tấu Thư đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Bạch Hổ", "Phi Liêm")) {
        console.log("Bạch Hổ, Phi Liêm đồng cung tại Tật Ách");
        keyArr.push("Bạch Hổ, Phi Liêm đồng cung tại Tật Ách");
    }



    const khochu = ["Thiên Khốc", "Thiên Hư"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Tỵ", "Hợi", "Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < khochu.length; i++) {
        if (isSaoToaThuTaiCung("Tật Ách", khochu[i])) {

            for (let j = 0; j < khochu_dac.length; j++) {
                if (isSaoToaThuTaiCungVaChi("Tật Ách", khochu_dac[j], khochu[i])) {
                    console.log((khochu[i] + " toạ thủ cung Tật Ách tại " + khochu_dac[j]));
                    keyArr.push((khochu[i] + " toạ thủ cung Tật Ách tại " + khochu_dac[j]));
                    if (kiemTraCachCuc(khochu[i], ["Hóa Lộc"])) {
                        console.log(khochu[i] + " toạ thủ cung Tật Ách tại " + khochu_dac[j] + " gặp Hóa Lộc");
                        keyArr.push(khochu[i] + " toạ thủ cung Tật Ách tại " + khochu_dac[j] + " gặp Hóa Lộc");
                    }
                }
            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < tyngo.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", tyngo[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
                console.log(khochu[i] + " toạ thủ cung Tật Ách tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
                keyArr.push(khochu[i] + " toạ thủ cung Tật Ách tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
            }
            if (isHaiSaoDongCungTaiCungChi("Tật Ách", tyngo[j], khochu[i], "Phá Quân")) {
                console.log(khochu[i] + " đồng cung Phá Quân tại Tật Ách" + " ở " + tyngo[j]);
                keyArr.push(khochu[i] + " đồng cung Phá Quân tại Tật Ách" + " ở " + tyngo[j]);
            }
        }
    }
    for (let k = 0; k < khochu.length; k++) {
        for (let i = 0; i < khochu_ham.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", khochu_ham[i], khochu[k])) {
                console.log(khochu[k] + " toạ thủ cung Tật Ách tại " + khochu_ham[i]);
                keyArr.push(khochu[k] + " toạ thủ cung Tật Ách tại " + khochu_ham[i]);

            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La"])) {
                console.log(khochu[i] + " toạ thủ cung Tật Ách tại " + danthan[j] + " gặp Kình Dương, Đà La");
                keyArr.push(khochu[i] + " toạ thủ cung Tật Ách tại " + danthan[j] + " gặp Kình Dương, Đà La");
            }
            if (isSaoToaThuTaiCungVaChi("Tật Ách", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Thiên Hình", "Thiên Mã"])) {
                console.log(khochu[i] + " toạ thủ cung Tật Ách tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
                keyArr.push(khochu[i] + " toạ thủ cung Tật Ách tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tật Ách", maodau[j], songhao[i]) && kiemTraCachCuc(songhao[i], ["Thiên Cơ", "Cự Môn"])) {
                console.log(songhao[i] + " toạ thủ cung Tật Ách tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
                keyArr.push(songhao[i] + " toạ thủ cung Tật Ách tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
            }
        }
    }
}




function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Tật Ách đồng cung Vô Chính Diệu");
        return true;
    }
}
function LuanCacCachCucKhacTatAch(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Tật Ách');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Tật Ách an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Tật Ách an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Tật Ách an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Tật Ách an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Tật Ách an tại Sửu");
    }

    // Nếu là đàn bà cung Tật Ách an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Tật Ách của chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Tật Ách của chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Tật Ách của chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Tật Ách của chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Tật Ách đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Tật Ách đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Tật Ách đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Tật Ách đồng cung Vô Chính Diệu tại Mùi");
    }

    //Tật Ách vô chính diệu gặp Song Hao
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Tật Ách Vô Chính Diệu gặp Song Hao");
    }
    // Tật Ách vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Thiên Đồng', 'Thiên Lương', 'Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Tật Ách Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
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

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Quyền", "Lộc Tồn")) {
        keyArr.push("Hóa Quyền, Lộc Tồn đồng cung tại Tật Ách");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Lộc", "Lộc Tồn", "Bác Sỹ")) {
        keyArr.push("Hóa Lộc, Lộc Tồn, Bác Sỹ đồng cung tại Tật Ách");
    }

    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Dần", "Liêm Trinh", "Hóa Kỵ")) {
        keyArr.push("Liêm Trinh, Hóa Kỵ đồng cung tại Tật Ách ở Dần");
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Thân", "Liêm Trinh", "Hóa Kỵ")) {
        keyArr.push("Liêm Trinh, Hóa Kỵ đồng cung tại Tật Ách ở Thân");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Kỵ", "Thiên Đồng")) {
        keyArr.push("Hóa Kỵ, Thiên Đồng đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCung("Tật Ách", "Văn Xương", "Văn Khúc")) {
        keyArr.push("Vũ Khúc, Tham Lang, Văn Xương, Văn Khúc đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Vũ Khúc", "Thiên Riêu")) {
        keyArr.push("Vũ Khúc, Thiên Riêu đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Vũ Khúc", "Thiên Riêu") && isHaiSaoDongCungTaiCung("Tật Ách", "Phá Toái", "Thien Việt")) {
        keyArr.push("Vũ Khúc, Thiên Riêu, Phá Toái, Thiên Việt đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Thiên Riêu") && isHaiSaoDongCungTaiCung("Tật Ách", "Đà La", "Hóa Kỵ")) {
        keyArr.push("Thái Dương, Thiên Riêu, Đà La, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Thiên Hình")) {
        keyArr.push("Thái Dương, Thiên Hình đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Dương", "Long Trì")) {
        keyArr.push("Thái Dương, Long Trì đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Cơ", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Địa Không,", "Địa Kiếp")) {
        keyArr.push("Thiên Cơ, Thiên Hình, Địa Không, Địa Kiếp đồng cung tại Tật Ách");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Cơ", "Kình Dương") && isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Cơ", "Đà La")) {
        keyArr.push("Thiên Cơ, Kình Dương, Đà La đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Cơ", "Thiên Khốc") && isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Cơ", "Thiên Hư")) {
        keyArr.push("Thiên Cơ, Thiên Khốc, Thiên Hư đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Âm", "Thiên Riêu") && isHaiSaoDongCungTaiCung("Tật Ách", "Đà La", "Hóa Kỵ")) {
        keyArr.push("Thái Âm, Thiên Riêu, Đà La, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Âm", "Thiên Hình")) {
        keyArr.push("Thái Âm Thiên Hình đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tham Lang", "Thiên Riêu")) {
        keyArr.push("Tham Lang, Thiên Riêu đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tham Lang", "Hóa Kỵ")) {
        keyArr.push("Tham Lang, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Cự Môn", "Kình Dương") && isHaiSaoDongCungTaiCung("Tật Ách", "Cự Môn", "Hỏa Tinh")) {
        keyArr.push("Cự Môn, Kình Dương, Hỏa Tinh đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Cự Môn", "Hóa Kỵ")) {
        keyArr.push("Cự Môn, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Tướng", "Thiên Hình")) {
        keyArr.push("Thiên Tướng, Thiên Hình đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thất Sát", "Đại Hao") && isHaiSaoDongCungTaiCung("Tật Ách", "Tiểu Hao", "Hóa Kỵ")) {
        keyArr.push("Thất Sát, Đại Hao, Tiểu Hao, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thất Sát", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Đà La", "Phá Quân")) {
        keyArr.push("Thất Sát, Thiên Hình, Đà La, Phá Quân đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Phá Quân", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Phục Binh", "Địa Không")) {
        keyArr.push("Phá Quân, Thiên Hình, Phục Binh, Địa Không đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Phá Quân", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Kỵ", "Kình Dương")) {
        keyArr.push("Phá Quân, Thiên Hình, Hóa Kỵ, Kình Dương đồng cung tại Tật Ách");
    }

    if (isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Hỏa Tinh") && isHaiSaoDongCungTaiCung("Tật Ách", "Linh Tinh", "Địa Không") && isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Địa Kiếp")) {
        keyArr.push("Kình Dương, Hỏa Tinh, Linh Tinh, Địa Không, Địa Kiếp đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Địa Không", "Địa Kiếp")) {

        keyArr.push("Kình Dương, Thiên Hình, Địa Không, Địa Kiếp đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Thiên Hình")) {
        keyArr.push("Kình Dương, Thiên Hình đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Thìn", "Kình Dương", "Hỏa Tinh") && isHaiSaoDongCungTaiCung("Tật Ách", "Linh Tinh", "Lưu Hà")) {
        keyArr.push("Kình Dương, Hỏa Tinh, Linh Tinh, Lưu Hà đồng cung tại Tật Ách ở Thìn");
    }
    if (isHaiSaoDongCungTaiCungChi("Tật Ách", "Tang Môn", "Điếu Khách") && isSaoToaThuTaiCung("Tật Ách", "Hóa Kỵ")) {
        keyArr.push("Tang Môn, Điếu Khách, Hóa Kỵ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Mã", "Thiên Hình")) {
        keyArr.push("Thiên Mã, Thiên Hình đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thái Tuế", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Mã", "Kiếp Sát")) {
        keyArr.push("Thái Tuế, Thiên Hình, Thiên Mã, Kiếp Sát đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Tang Môn", "Điếu Khách")) {
        keyArr.push("Tang Môn, Điếu Khách đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Khốc", "Thiên Hư") && isHaiSaoDongCungTaiCung("Tật Ách", "Tang Môn", "Bạch Hổ")) {
        keyArr.push("Thiên Khốc, Thiên Hư, Tang Môn, Bạch Hổ đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Thiên Riêu", "Thiên Hình") && isHaiSaoDongCungTaiCung("Tật Ách", "Địa Không", "Địa Kiếp")) {
        keyArr.push("Thiên Riêu, Thiên Hình, Địa Không, Địa Kiếp đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Đào Hoa", "Hồng Loan") && isHaiSaoDongCungTaiCung("Tật Ách", "Địa Không", "Địa Kiếp")) {
        keyArr.push("Đào Hoa, Hồng Loan, Địa Không, Địa Kiếp đồng cung tại Tật Ách");
    }
    if (isHaiSaoDongCungTaiCung("Tật Ách", "Đào Hoa", "Hồng Loan") && isHaiSaoDongCungTaiCung("Tật Ách", "Kình Dương", "Hóa Kỵ")) {
        keyArr.push("Đào Hoa, Hồng Loan, Kình Dương, Hóa Kỵ đồng cung tại Tật Ách");
    }

    // Các sao tốt hội chiếu
    const phutinhtatach = getDanhSachPhuTinhTungCung()[7].phuTinh[0].sao;

    if(kiemTraCachCuc(phutinhtatach, ["Thiên Giải"])) {
        console.log("Thiên Giải hội chiếu cung Tật Ách");
        keyArr.push("Thiên Giải hội chiếu cung Tật Ách");
        
    }   
    if(isSaoToaThuTaiCung("Tật Ách", "Thiên Giải")) {
        console.log("Thiên Giải toạ thủ cung Tật Ách");
        keyArr.push("Thiên Giải toạ thủ cung Tật Ách");
    }
    // Địa giải
    if(kiemTraCachCuc(phutinhtatach, ["Địa Giải"])) {
        console.log("Địa Giải hội chiếu cung Tật Ách");
        keyArr.push("Địa Giải hội chiếu cung Tật Ách");
    }
    if(isSaoToaThuTaiCung("Tật Ách", "Địa Giải")) {
        console.log("Địa Giải toạ thủ cung Tật Ách");
        keyArr.push("Địa Giải toạ thủ cung Tật Ách");
    }
    //Giải thần
    if(kiemTraCachCuc(phutinhtatach, ["Giải Thần"])) {
        console.log("Giải Thần hội chiếu cung Tật Ách");
        keyArr.push("Giải Thần hội chiếu cung Tật Ách");
    }
    if(isSaoToaThuTaiCung("Tật Ách", "Giải Thần")) {
        console.log("Giải Thần toạ thủ cung Tật Ách");
        keyArr.push("Giải Thần toạ thủ cung Tật Ách");
    }
    // Lộc Tồn, Hóa Lộc, Bác Sỹ
    if(kiemTraCachCuc(phutinhtatach, ["Bác Sỹ", "Lộc Tồn", "Hóa Lộc"]) && kiemTraCachCuc(phutinhtatach, ["Kình Dương", "Đà La"])===false) {
        console.log("Bác Sỹ, Lộc Tồn, Hóa Lộc hội chiếu cung Tật Ách mà không gặp Kình Dương, Đà La");
        keyArr.push("Bác Sỹ, Lộc Tồn, Hóa Lộc hội chiếu cung Tật Ách mà không gặp Kình Dương, Đà La");
    }
    if(isHaiSaoDongCungTaiCung("Tật Ách", "Bác Sỹ", "Lộc Tồn") && kiemTraCachCuc("Bác Sỹ", ["Hỏa Tinh", "Linh Tinh"]) === false) {
        console.log("Bác Sỹ, Lộc Tồn đồng cung tại Tật Ách mà không gặp Hỏa Tinh, Linh Tinh");
        keyArr.push("Bác Sỹ, Lộc Tồn đồng cung tại Tật Ách mà không gặp Hỏa Tinh, Linh Tinh");
    }
    //Lộc Tồn, Hóa Lộc mà không gặp không kiếp
    if(kiemTraCachCuc(phutinhtatach, ["Lộc Tồn", "Hóa Lộc"]) && kiemTraCachCuc(phutinhtatach, ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Lộc Tồn, Hóa Lộc hội chiếu cung Tật Ách mà không gặp Địa Không, Địa Kiếp");
        keyArr.push("Lộc Tồn, Hóa Lộc hội chiếu cung Tật Ách mà không gặp Địa Không, Địa Kiếp");
    }
    // Bác sỹ hóa lộc
    if(isHaiSaoDongCungTaiCung("Tật Ách", "Bác Sỹ", "Hóa Lộc") && kiemTraCachCuc("Bác Sỹ", ["Hỏa Tinh", "Linh Tinh"]) === false) {
        console.log("Bác Sỹ, Hóa Lộc đồng cung tại Tật Ách mà không gặp Hỏa Tinh, Linh Tinh");
        keyArr.push("Bác Sỹ, Hóa Lộc đồng cung tại Tật Ách mà không gặp Hỏa Tinh, Linh Tinh");
    }
    // Hóa Quyền gặp các sao giải cứu hội chiếu phu tinh Tật Ách
    if(kiemTraCachCuc(phutinhtatach, ["Hóa Quyền"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Giải", "Địa Giải", "Giải Thần"]) ){
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
    }
    // Hóa Quyền gặp các sao cúu giải Lực Sỹ Bác Sỹ,Hóa Khoa
    if(kiemTraCachCuc(phutinhtatach, ["Hóa Quyền"]) && kiemTraCachCuc(phutinhtatach, ["Lực Sỹ", "Bác Sỹ", "Hóa Khoa"]) ){
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ, Hóa Khoa");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ, Hóa Khoa");
    }
    // Hóa Quyền ,Khoa hội chiếu
    if(kiemTraCachCuc(phutinhtatach, ["Hóa Quyền", "Hóa Khoa"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Giải", "Địa Giải", "Giải Thần"]) ){
        console.log("Hóa Quyền, Hóa Khoa hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
        keyArr.push("Hóa Quyền, Hóa Khoa hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
    }
    // Hóa Quyền, Hóa Khoa hội chiếu
    if(kiemTraCachCuc(phutinhtatach, ["Hóa Quyền", "Hóa Khoa"]) && kiemTraCachCuc(phutinhtatach, ["Lực Sỹ", "Bác Sỹ"]) ){
        console.log("Hóa Quyền, Hóa Khoa hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ");
        keyArr.push("Hóa Quyền, Hóa Khoa hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ");
    }
    // Hóa Khoa Quyền tọa thủ
    if(isHaiSaoDongCungTaiCung("Tật Ách", "Hóa Quyền", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Giải", "Địa Giải", "Giải Thần"]) ){
        console.log("Hóa Quyền, Hóa Khoa tọa thủ cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
        keyArr.push("Hóa Quyền, Hóa Khoa tọa thủ cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
    }

    // Hóa Quyền gặp các sát tinh
    if(kiemTraCachCuc(phutinhtatach, ["Hóa Quyền"]) && kiemTraCachCuc(phutinhtatach, ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"]) ){
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sát tinh Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sát tinh Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
    }
    // gặp Kình Dương, Đà La
    if(kiemTraCachCuc(phutinhtatach, ["Kình Dương", "Đà La","Hóa Quyền"]) ){
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
    }
    // gặp Hỏa Tinh, Linh Tinh
    if(kiemTraCachCuc(phutinhtatach, ["Hỏa Tinh", "Linh Tinh","Hóa Quyền"]))
    {
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
    }
    // Hóa Quyền gặp Địa Không, Địa Kiếp
    if(kiemTraCachCuc(phutinhtatach, ["Địa Không", "Địa Kiếp","Hóa Quyền"]) ){
        console.log("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
        keyArr.push("Hóa Quyền hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
    }

    // Sao tốt Thiên Đức, Phúc Đức, Thanh Long
    if (kiemTraCachCuc(phutinhtatach, ["Thiên Đức", "Phúc Đức", "Thanh Long"])) {
        console.log("Thiên Đức, Phúc Đức, Thanh Long hội chiếu cung Tật Ách");
        keyArr.push("Thiên Đức, Phúc Đức, Thanh Long hội chiếu cung Tật Ách");
    }
    // Thiếu Dương, Thiếu Âm
    if (kiemTraCachCuc(phutinhtatach, ["Thiếu Dương", "Thiếu Âm"])) {
        console.log("Thiếu Dương, Thiếu Âm hội chiếu cung Tật Ách");
        keyArr.push("Thiếu Dương, Thiếu Âm hội chiếu cung Tật Ách");
    }

    // Hóa Khoa gặp các sao Thiên Đức, Phúc Đức, Thanh Long
    if (kiemTraCachCuc(phutinhtatach, ["Hóa Khoa"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Đức", "Phúc Đức", "Thanh Long"])) {
        console.log("Hóa Khoa hội chiếu cung Tật Ách gặp các sao Thiên Đức, Phúc Đức, Thanh Long");
        keyArr.push("Hóa Khoa hội chiếu cung Tật Ách gặp các sao Thiên Đức, Phúc Đức, Thanh Long");
    }
    // Tả Hữu và các sao giải
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Giải", "Địa Giải", "Giải Thần"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải, Địa Giải, Giải Thần");
    }
    // Tả Hữu và các sao cúu giải Lực Sỹ, Bác Sỹ, Hóa Khoa
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Lực Sỹ", "Bác Sỹ", "Hóa Khoa"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ, Hóa Khoa");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao cúu giải Lực Sỹ, Bác Sỹ, Hóa Khoa");
    }
    // Tả Phù và các từng các sao giải
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Giải"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ"]) && kiemTraCachCuc(phutinhtatach, ["Địa Giải"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Địa Giải");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Địa Giải");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ"]) && kiemTraCachCuc(phutinhtatach, ["Giải Thần"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Giải Thần");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải cứu Giải Thần");
    }

    // Tả Phụ Lực Sỹ, Bác Sỹ,  đơn lẻ
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Lực Sỹ", "Bác Sỹ"])){
        console.log("Tả Phụ, Lực Sỹ, Bác Sỹ hội chiếu cung Tật Ách");
        keyArr.push("Tả Phụ, Lực Sỹ, Bác Sỹ hội chiếu cung Tật Ách");
    }
    // Tả Phụ với các sao giải nhỏ
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ"]) && kiemTraCachCuc(phutinhtatach, ["Thanh Long", "Phúc Đức", "Thiên Đức"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải Thanh Long, Phúc Đức, Thiên Đức");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao giải Thanh Long, Phúc Đức, Thiên Đức");
    }
    // Hữu Bật và các từng các sao giải
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Thiên Giải"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Thiên Giải");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Địa Giải"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Địa Giải");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Địa Giải");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Giải Thần"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Giải Thần");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải cứu Giải Thần");
    }
    // Hữu Bật Lực Sỹ, Bác Sỹ,  đơn lẻ
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật", "Lực Sỹ", "Bác Sỹ"])){
        console.log("Hữu Bật, Lực Sỹ, Bác Sỹ hội chiếu cung Tật Ách");
        keyArr.push("Hữu Bật, Lực Sỹ, Bác Sỹ hội chiếu cung Tật Ách");
    }
    // Hữu Bật với các sao giải nhỏ
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Thanh Long", "Phúc Đức", "Thiên Đức"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải Thanh Long, Phúc Đức, Thiên Đức");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao giải Thanh Long, Phúc Đức, Thiên Đức");
    }

    // Tả Hữu với các sao sát tinh
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật"]) && kiemTraCachCuc(phutinhtatach, ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao sát tinh Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao sát tinh Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
    }
    // Tả Phụ, Hữu Bật gặp Kình Dương, Đà La
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật", "Kình Dương", "Đà La"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
    }
    // Tả Phụ, Hữu Bật gặp Hỏa Tinh, Linh Tinh
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật", "Hỏa Tinh", "Linh Tinh"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
    }
    // Tả Phụ, Hữu Bật gặp Địa Không, Địa Kiếp
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hữu Bật", "Địa Không", "Địa Kiếp"])) {
        console.log("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
        keyArr.push("Tả Phụ, Hữu Bật hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
    }
    // Tả Phụ gặp các sao sát tinh
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Kình Dương", "Đà La"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Hỏa Tinh", "Linh Tinh"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Tả Phụ", "Địa Không", "Địa Kiếp"])) {
        console.log("Tả Phụ hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
        keyArr.push("Tả Phụ hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
    }
    // Hữu Bật gặp các sao sát tinh
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật", "Kình Dương", "Đà La"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao Kình Dương, Đà La");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật", "Hỏa Tinh", "Linh Tinh"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao Hỏa Tinh, Linh Tinh");
    }
    if (kiemTraCachCuc(phutinhtatach, ["Hữu Bật", "Địa Không", "Địa Kiếp"])) {
        console.log("Hữu Bật hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
        keyArr.push("Hữu Bật hội chiếu cung Tật Ách gặp các sao Địa Không, Địa Kiếp");
    }
    



}
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        console.log("Cung Tật Ách Vô Chính Diệu");
        keyArr.push("Cung Tật Ách Vô Chính Diệu");

    }

}
function TatAchKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Tật Ách và cung Thân
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
        keyArr.push("Tật Ách Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Tật Ách Kiếp Thân Không");
        return true;

    }
    return false;
}



