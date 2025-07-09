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

function LuanCungTuTuc() {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    const cungMenh = lasoData.lasoOb[0].chi;
    const hanhMenh = lasoData.lasoOb[0].hanh;
    const danhGia = danhGiaViTriCungMenh(hanhMenh, cungMenh);

    return {
        tenCung: 'Tử Tức',
        chi: cungMenh,
        hanh: hanhMenh,
        danhGia: danhGia
    };
}
function LuanCungTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const vitriDiaSinhCungMenh = kiemTraDiaSinh(lasoData.hanhMenh, lasoData.lasoOb[0].chi);
    keyArr.push(`Vị trí địa sinh cung Tử Tức tại ${vitriDiaSinhCungMenh}`);
    console.log(`Vị trí địa sinh cung Tử Tức tại ${vitriDiaSinhCungMenh}`);
    LuanCachCucSaoTuViTuTuc(keyArr);
    LuanCachCucSaoLiemTrinhTuTuc(keyArr);
    LuanCachCucSaoThienDongTuTuc(keyArr);
    LuanCachCucSaoVuKhucTuTuc(keyArr);
    LuanCachCucThaiDuongTuTuc(keyArr);
    LuanCachCucThienCoTuTuc(keyArr);
    LuanCacCachCucThienPhuTuTuc(keyArr);
    LuanCachCucThaiAmTuTuc(keyArr);
    LuanCachCucThamLangTuTuc(keyArr);
    LuanCachCucCuMonTuTuc(keyArr);
    LuanCachCucThienTuongTuTuc(keyArr);
    LuanCachCucThienLuongTuTuc(keyArr);
    LuanCachCucThatSatTuTuc(keyArr);
    LuanCachCucPhaQuanTuTuc(keyArr);
    LuanCachCucXuongKhucTuTuc(keyArr);
    LuanCachCucKhoiVietTuTuc(keyArr);
    LuanCachCucLocTonTuTuc(keyArr);
    LuanCachCucTaHuuTuTuc(keyArr);
    LuanCachCucKinhDuongDaLaTuTuc(keyArr);
    LuanCachCucHoaLinhTuTuc(keyArr);
    LuanCachCucKhongKiepTuTuc(keyArr);
    LuanCachCucTuHoaTuTuc(keyArr);
    LuanCachCucLucBaiTinhTuTuc(keyArr);
    LuanCacCachCucKhacTuTuc(keyArr);
}
function LuanCachCucSaoTuViTuTuc(keyArr) {
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
    const mvd = mieu.concat(vuong).concat(dac); // Tử vi thủ Tử Tức ở miếu, vượng, đắc địa

    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi")) {
        console.log("Tử Vi tọa thủ cung Tử Tức");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tử Tức ở ${mvd[i]}`);
        }
    }
    const mb = mieu.concat(binh);  // Tử vi Thủ Tử Tức miếu và bình hòa

    for (let i = 0; i < mb.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mb[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tử Tức ở ${mb[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tử Tức ở ${mb[i]}`);
        }
    }
    const vd = vuong.concat(dac); // Tử vi thủ Tử Tức ở vượng, đắc địa
    for (let i = 0; i < vd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", vd[i], "Tử Vi")) {
            console.log(`Tử Vi tọa thủ cung Tử Tức ở ${vd[i]}`);
            keyArr.push(`Tử Vi tọa thủ cung Tử Tức ở ${vd[i]}`);
        }
    }
    // Tử vi thủ Tử Tức gặp cát tinh
    let cattinh = PhuVuTuong.concat(XuongKhuc).concat(KhoiViet).concat(TaHuu).concat(KhoaLocQuyen).concat(LongPhuong);


    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi") && kiemTraCachCuc("Tử Vi", cattinh)) {
        console.log("Tử Vi tọa thủ cung Tử Tức và hội chiếu các sao:", cattinh.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tử Tức và hội chiếu các", cattinh.join(", "));
    }
    //Tử vi thủ Tử Tức gặp sát tinh
    let hungtinh = lucsattinh;


    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
        console.log("Tử Vi tọa thủ cung Tử Tức và hội chiếu ", KhongKiep.join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tử Tức và hội chiếu ", KhongKiep.join(", "));
        if (kiemTraCachCuc("Tử Vi", hungtinh)) {
            console.log("Tử Vi tọa thủ cung Tử Tức và hội chiếu các sao:", hungtinh.join(", "));
            keyArr.push("Tử Vi tọa thủ cung Tử Tức và hội chiếu các", hungtinh.join(", "));

        }
    }

    // Tử vi thủ Tử Tức đồng cung với Tham Lang ở mão dậu


    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[i], "Tử Vi") && isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", Tham)) {
            console.log(`Tử Vi đồng cung với Tham Lang tại Tử Tức ở ${maodau[i]}`);
            keyArr.push(`Tử Vi đồng cung với Tham Lang tại Tử Tức ở ${maodau[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhongKiep)) {
            console.log(`Tử Vi tọa thủ cung Tử Tức ở ${maodau[i]} gặp`, KhongKiep.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Tử Tức ở ${maodau[i]} gặp`, KhongKiep.join(", "));
        }
    }

    // Phú
    // Sinh năm Giáp Đinh Kỷ có Tử Vi tọa thủ cung Tử Tức ở Ngọ không gặp Hình Kỵ
    for (let i = 0; i < giap_dinh_ky.length; i++) {

        if (lasoData.chiCan === gdk[i]) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", "Ngọ", "Tử Vi") && kiemTraCachCuc("Tử Vi", HinhKy) == false) {
                console.log(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Tử Tức ở Ngọ và không gặp`, HinhKy.join(", "));
                keyArr.push(`Người tuổi ${giap_dinh_ky[i]} có Tử Vi tọa thủ cung Tử Tức ở Ngọ và không gặp`, HinhKy.join(", "));

            }
        }


    }
    // Sinh năm Nhâm Giáp Nam có Tử Vi tọa thủ cung Tử Tức ở Hợi, Nữ có Tử Vi tọa thủ cung Tử Tức ở Dần

    for (let i = 0; i < nhamgiap.length; i++) {
        if (lasoData.chiCan === nh_giap[i]) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", "Hợi", "Tử Vi") && lasoData.gioitinh === "Nam") {
                console.log(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tử Tức ở Hợi`);
                keyArr.push(`Quý Anh tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tử Tức ở Hợi`);
            }
            if (isSaoToaThuTaiCungVaChi("Tử Tức", "Dần", "Tử Vi") && lasoData.gioitinh === "Nữ") {
                console.log(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tử Tức ở Dần`);
                keyArr.push(`Quý Chị tuổi ${nhamgiap[i]} có Tử Vi tọa thủ cung Tử Tức ở Dần`);
            }
        }
    }
    // Tử phủ đồng cung, Tử Tức an tại dần thân, sinh năm giáp


    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", danthan[i], "Tử Vi", "Thiên Phủ")) {
            if (lasoData.chiCan === "G.") {
                console.log(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
                keyArr.push(`Bạn sinh năm Giáp có Tử Vi đồng cung Thiên Phủ tại ${danthan[i]}`);
            }
        }

    }

    // Tử vi hoặc Thiên Phủ tọa Tử Tức gặp Tả Hữu
    for (let i = 0; i < tuphu.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", tuphu[i]) && kiemTraCachCuc(tuphu[i], TaHuu)) {
            console.log(`${tuphu[i]} tọa thủ cung Tử Tức gặp`, TaHuu.join(", "));
            keyArr.push(`${tuphu[i]} tọa thủ cung Tử Tức gặp`, TaHuu.join(", "));
        }

    }
    // Tử hoặc Phủ tọa thủ cung Tử Tức đồng cung Kình
    for (let i = 0; i < tuphu.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tử Tức", tuphu[i], "Kình Dương")) {
            console.log(`${tuphu[i]} tọa thủ cung Tử Tức đồng cung Kình Dương`);
            keyArr.push(`${tuphu[i]} tọa thủ cung Tử Tức đồng cung Kình Dương`);
        }

    }
    // Tử vi tọa Tử Tức đồng cung với Thiên Phủ gặp Tả HỮu
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Thiên Phủ") && kiemTraCachCuc("Tử Vi", TaHuu)) {

        console.log("Tử Vi đồng cung với Thiên Phủ tại Tử Tức gặp", TaHuu.join(", "));
        keyArr.push("Tử Vi đồng cung với Thiên Phủ tại Tử Tức gặp", TaHuu.join(", "));
    }
    // Tử vi tại Tử Tức gặp cát tinh
    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi") && kiemTraCachCuc("Tử Vi", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An))) {
        console.log("Tử Vi tọa thủ cung Tử Tức gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));
        keyArr.push("Tử Vi tọa thủ cung Tử Tức gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "));

        if (kiemTraCachCuc("Tử Vi", KhongKiep.concat(Kinh)) == false) {
            keyArr.push("Tử Vi tọa thủ cung Tử Tức gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
            console.log("Tử Vi tọa thủ cung Tử Tức gặp cát tinh:", PhuVuTuong.concat(KhoaLocQuyen).concat(TaHuu).concat(LongPhuong).concat(An).join(", "), "Không gặp", KhongKiep.concat(Kinh).join(", "));
        }
    }


    // Tử vi tại Tử Tức đồng cung với Thiên Tướng, phá toại tại cung thân hợp chiếu với các sao Kình
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Thiên Tướng") && isSaoToaThuTaiCung(lasoData.cungCu, "Phá Toái") && kiemTraCachCuc("Phá Toái", Kinh)) {
        console.log("Tử Vi tọa thủ cung Tử Tức đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức đồng cung Thiên Tướng, Phá Toái tại cung thân hợp chiếu với sao Kình Dương");
    }
    // Tử Sát đồng lâm Tỵ Hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Tử Vi", "Thất Sát")) {
            console.log(`Tử Vi đồng cung với Thất Sát tại Tử Tức ở ${tyhoi[i]}`);
            keyArr.push(`Tử Vi đồng cung với Thất Sát tại Tử Tức ở ${tyhoi[i]}`);
        }
    }
    // Tử vi Thất Sát Hóa Quyền đồng cung tại Tử Tức

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Thất Sát") && isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Hóa Quyền")) {
        console.log("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Tử Tức");
        keyArr.push("Tử Vi, Thất Sát, Hóa Quyền đồng cung tại Tử Tức");
    }

    // Tử Vũ hoặc Tử Phá đồng cung tại Tử Tức gặp Kình Đà
    for (let i = 0; i < vupha.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", vupha[i]) && kiemTraCachCuc("Tử Vi", ["Kình Dương", "Đà La"])) {
            console.log(`Tử Vi đồng cung với ${vupha[i]} tại Tử Tức gặp Kình Dương, Đà La`);
            keyArr.push(`Tử Vi đồng cung với ${vupha[i]} tại Tử Tức gặp Kình Dương, Đà La`);
        }
    }
    // Tử vi hoặc Vũ Khúc thủ Tử Tức gặp Sát tinh

    for (let i = 0; i < tuvu.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", tuvu[i]) && kiemTraCachCuc(tuvu[i], lucsattinh)) {
            console.log(`${tuvu[i]} tọa thủ cung Tử Tức gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`${tuvu[i]} tọa thủ cung Tử Tức gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
    }
    // Tử vi hoặc Phá Quân thủ Tử Tức tại tứ mộ cung
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < tupha.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], tupha[j])) {
                console.log(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]}`);
                keyArr.push(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]}`);
                if (kiemTraCachCuc(tupha[j], ["Hóa Quyền", "Hóa Lộc", "Hóa Khoa", "Thiên Phủ", "Tả Phù", "Hữu Bật", "Thiên Tướng", "Văn Xương", "Văn Khúc"])) {
                    console.log(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                    keyArr.push(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp các sao cát tinh: Hóa Quyền, Hóa Lộc, Hóa Khoa, Thiên Phủ, Tả Phù, Hữu Bật, Thiên Tướng, Văn Xương, Văn Khúc`);
                }
                if (kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh))) {
                    console.log(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                    keyArr.push(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp các sao Sát tinh:`, KhongKiep.concat(Kinh).join(", "));
                }
                //gặp Không Kiếp Kình mà không gặp Văn Xương Văn Khúc Long Phượng
                if (kiemTraCachCuc(tupha[j], TaHuu.concat(XuongKhuc).concat(LongPhuong)) === false && kiemTraCachCuc(tupha[j], KhongKiep.concat(Kinh)) === true) {
                    console.log(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                    keyArr.push(`${tupha[j]} tọa thủ cung Tử Tức tại ${tumo[i]} gặp`, KhongKiep.concat(Kinh).join(", "), "mà không gặp Văn Xương, Văn Khúc, Long Trì Phượng Các");
                }
            }
        }
    }

    // // Tử vi tại Tử Tức gặp Kiếp, Đào Hồng Không tại Tử Tức
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", Dao) && isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", Hong) && isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", Khong) && kiemTraCachCuc("Tử Vi", Kiep)) {
        console.log("Tử Vi tọa thủ cung Tử Tức đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức đồng cung Địa Không, Đào Hoa, Hồng Loan gặp Địa Kiếp");
    }

    // Tử vi Tả Hữu đồng cung Tử Tức
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Tả Phù") && isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Hữu Bật")) {
        console.log("Tử Vi tọa thủ cung Tử Tức đồng cung Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức đồng cung Tả Phù, Hữu Bật");
    }

    //Tử vi tại Tử Tức chi Tý Ngọ gặp Khoa Lộc Quyền
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[i], "Tử Vi") && kiemTraCachCuc("Tử Vi", KhoaLocQuyen)) {
            console.log(`Tử Vi tọa thủ cung Tử Tức ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
            keyArr.push(`Tử Vi tọa thủ cung Tử Tức ở ${tyngo[i]} gặp`, KhoaLocQuyen.join(", "));
        }
    }
    // Tử vi tại mênh gặp Hóa Quyền, Hóa Lộc, Kình Đà
    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi") && kiemTraCachCuc("Tử Vi", ["Hóa Quyền", "Hóa Lộc", "Kình Dương", "Đà La"])) {
        console.log("Tử Vi tọa thủ cung Tử Tức gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức gặp Hóa Quyền, Hóa Lộc, Kình Dương, Đà La");
    }
    // Tử vi và Hóa Lộc đồng cung tại Tử Tức hội chiếu Tả Phù Hữu Bật
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tử Vi", "Hóa Lộc") && kiemTraCachCuc("Tử Vi", TaHuu)) {
        console.log("Tử Vi tọa thủ cung Tử Tức đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức đồng cung Hóa Lộc gặp Tả Phù, Hữu Bật");
    }
    // Tử Phủ Hội Chiếu cung Tử Tức
    if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi") && kiemTraCachCuc("Tử Vi", "Thiên Phủ")) {
        console.log("Tử Vi tọa thủ cung Tử Tức hội chiếu Thiên Phủ");
        keyArr.push("Tử Vi tọa thủ cung Tử Tức hội chiếu Thiên Phủ");
    }
}

function LuanCachCucSaoLiemTrinhTuTuc(keyArr) {
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

    // Liêm Trinh Tọa thủ Tử Tức
    if (isSaoToaThuTaiCung("Tử Tức", "Liêm Trinh")) {
        console.log("Liêm Trinh tọa thủ cung Tử Tức");
        keyArr.push("Liêm Trinh tọa thủ cung Tử Tức");
    }
    // Liêm Trinh Miếu địa tọa thủ Tử Tức gặp cát tinh
    // Liêm Trinh tọa thủ cung Tử Tức gặp hung tinh, kỵ hình


    for (let i = 0; i < mieu.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mieu[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mieu[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${mieu[i]}`);
        }
    }


    // Liêm Trinh Vượng địa tọa thủ Tử Tức gặp cát tinh 
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Tử Tức gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tử Tức", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", vuong[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", vuong[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${vuong[i]}`);
        }
    }
    // Liêm Trinh Đắc địa tọa thủ Tử Tức gặp cát tinh
    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc))) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp cát tinh:`, phutuong.concat(KhoaLocQuyen).concat(TaHuu).concat(XuongKhuc).join(", "));
        }
        // Liêm Trinh tọa thủ cung Tử Tức gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]}`);
        }
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", dac[i], "Liêm Trinh", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Tử Tức", dac[i], "Liêm Trinh", "Văn Khúc")) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${dac[i]} đồng cung Văn Xương, Văn Khúc`);
        }

    }



    // Liêm trinh hãm 
    for (let i = 0; i < ham.length; i++) {

        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Liêm Trinh")) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]}`);
        }

        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", lucsattinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }

        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HinhKy)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Liêm Trinh") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Quý Chị có Liêm Trinh tọa thủ cung Tử Tức ở ${ham[i]}`);
        }
    }
    // Liêm trinh Tỵ Hợi đồng cung với Hoá Kỵ
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Liêm Trinh", "Hóa Kỵ")) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${tyhoi[i]} đồng cung Hóa Kỵ`);
            if (kiemTraCachCuc("Liêm Trinh", [XuongKhuc]) && lasoData.canNam === "B.") {
                console.log(`Tuổi Bính Liêm Trinh tọa thủ cung Tử Tức ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
                keyArr.push(`Tuổi Bính Liêm Trinh tọa thủ cung Tử Tức ở ${tyhoi[i]} đồng cung Hóa Kỵ gặp Văn Xương, Văn Khúc`);
            }
        }
    }

    // Liêm Trinh toạ thủ tại Mão Dậu gặp Hoả Linh hội họp
    for (let i = 0; i < maodau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", maodau[i], "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", HoaLinh)) {
            console.log(`Liêm Trinh tọa thủ cung Tử Tức ở ${maodau[i]} gặp`, HoaLinh.join(", "));
            keyArr.push(`Liêm Trinh tọa thủ cung Tử Tức ở ${maodau[i]} gặp`, HoaLinh.join(", "));
        }
    }
    // Phú
    // Liêm Trinh tọa thủ gặp tứ sát Kình Đà Hỏa Linh 
    if (isSaoToaThuTaiCung("Tử Tức", "Liêm Trinh") && kiemTraCachCuc("Liêm Trinh", ["Kình Dương", "Đà La", "Hỏa Linh"])) {
        console.log("Liêm Trinh tọa thủ cung Tử Tức gặp tứ sát Kình Đà Hỏa Linh");
        keyArr.push("Liêm Trinh tọa thủ cung Tử Tức gặp tứ sát Kình Đà Hỏa Linh");
        if (kiemTraCachCuc("Liêm Trinh", ["Bạch Hổ"])) {
            console.log("Liêm Trinh tọa thủ cung Tử Tức gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
            keyArr.push("Liêm Trinh tọa thủ cung Tử Tức gặp tứ sát Kình Đà Hỏa Linh và Bạch Hổ");
        }
    }

}

function LuanCachCucSaoThienDongTuTuc(keyArr) {
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

    //Thiên Đồng toạ thủ cung Tử Tức
    if (isSaoToaThuTaiCung("Tử Tức", "Thiên Đồng")) {
        console.log("Thiên Đồng tọa thủ cung Tử Tức");
        keyArr.push("Thiên Đồng tọa thủ cung Tử Tức");
    }
    // Thiên Đồng miếu vượng địa
    for (let i = 0; i < MVD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", MVD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i] + " gặp", HinhKy.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i]);
                keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Tử Tức ở " + MVD[i]);
            }

        }

    }
    // Thiên đồng dần thân thì Thiên Đồng Thiên Lương sẽ đồng cung
    for (let i = 0; i < DanThan.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tử Tức", DanThan[i], "Thiên Đồng", "Thiên Lương")) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Lương ở " + DanThan[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Lương ở " + DanThan[i]);
            if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Linh", "Hóa Kỵ"])) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Lương ở " + DanThan[i] + " gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Linh, Hóa Kỵ");
            }
        }
    }
    // Thiên đồng tại Ngọ, đồng cung Thái Âm gặp các sát tinh
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
        console.log("Thiên Đồng tọa thủ cung Tử Tức ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
        keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở Ngọ đồng cung Thái Âm gặp các sao Sát tinh: ", lucsattinh.join(", "));
    }
    // Thiên Đông, Thái Âm đồng cung tại Tý gặp hổ khốc riêu tang
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Tý", "Thiên Đồng", "Thái Âm") && kiemTraCachCuc("Thiên Đồng", ["Bạch Hổ", "Thiên Khốc", "Thiên Riêu", "Tang Môn"]) && lasoData.gioitinh === "Nữ") {
        console.log("Quý Chị có Thiên Đồng tọa thủ cung Tử Tức ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
        keyArr.push("Quý Chị có Thiên Đồng tọa thủ cung Tử Tức ở Tý đồng cung Thái Âm gặp các sao Bạch Hổ, Thiên Khốc, Thiên Riêu, Tang Môn");
    }
    // Thiên Đồng đồng cung với Thiến Việt
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Đồng", "Thiên Việt")) {
        console.log("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Việt");
        keyArr.push("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Việt");
        if (kiemTraCachCuc("Thiên Đồng", ["Hóa Lộc", "Hóa Quyền", "Lộc Tồn", "Hỏa Tinh", "Linh Tinh", "Hóa Kỵ"])) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức đồng cung Thiên Việt gặp các sao cát tinh: Hóa Lộc, Hóa Quyền, Lộc Tồn, Hỏa Tinh, Linh Tinh, Hóa Kỵ");
        }
    }

    // Thiên Đồng hãm địa

    for (let i = 0; i < HD.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", HD[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i]);
            if (kiemTraCachCuc("Thiên Đồng", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Đồng", HinhKy)) {
                console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp", HinhKy.join(", "));
                keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + HD[i] + " gặp", HinhKy.join(", "));
            }
        }
    }
    for (let i = 0; i < tuatngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tuatngo[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + tuatngo[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + tuatngo[i]);
        }
    }
    // Thiên đồng tại tỵ hợi
    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyhoi[i], "Thiên Đồng")) {
            console.log("Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i]);
            keyArr.push("Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i]);
            if (lasoData.canNam === dinh_canh[i]) {
                console.log("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i]);
                keyArr.push("Người tuổi " + dinhcanh[i] + " có Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i]);
            }
            if (lasoData.gioitinh === "Nam" && kiemTraCachCuc("Thiên Đồng", lucsattinh)) {
                console.log("Quý Anh có Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Quý Anh có Thiên Đồng tọa thủ cung Tử Tức ở " + tyhoi[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
        }
    }
}

function LuanCachCucSaoVuKhucTuTuc(keyArr) {
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

    // Vũ Khúc tọa thủ cung Tử Tức
    if (isSaoToaThuTaiCung("Tử Tức", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tử Tức");
        keyArr.push("Vũ Khúc tọa thủ cung Tử Tức");
    }

    for (let i = 0; i < mvd.length; i++) {
        // Vũ Khúc miếu vượng địa tọa thủ Tử Tức gặp cát tinh
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", cattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp cát tinh:`, cattinh.join(", "));
        }
        // Vũ Khúc tọa thủ cung Tử Tức gặp hung tinh, kỵ hình
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", HinhKy)) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Vũ Khúc", "Văn Xương") && isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Văn Xương, Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && lasoData.gioitinh === "Nữ") {
            console.log(`Quý Chị có Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Vũ Khúc", "Văn Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Văn Khúc`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Văn Khúc`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Vũ Khúc", KhoiViet)) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung`, KhoiViet.join(", "));

        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", MaLoc) && isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Vũ Khúc", MaLoc) === false) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp`, MaLoc.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${mvd[i]} gặp`, MaLoc.join(", "));

        }

    }

    for (let i = 0; i < suumui.length; i++) {
        // Vũ Khúc tọa thủ cung Tử Tức ở Sửu, Mùi 
        if (isSaoToaThuTaiCungVaChi("Tử Tức", suumui[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${suumui[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${suumui[i]}`);
        }
    }

    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Mão", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tử Tức ở Mão");
        keyArr.push("Vũ Khúc tọa thủ cung Tử Tức ở Mão");

    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Dậu", "Vũ Khúc")) {
        console.log("Vũ Khúc tọa thủ cung Tử Tức ở Dậu");
        keyArr.push("Vũ Khúc tọa thủ cung Tử Tức ở Dậu");
    }
    // Vũ Khúc hãm địa tọa thủ Tử Tức
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Vũ Khúc")) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]}`);
            if (kiemTraCachCuc("Vũ Khúc", lucsattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh:`, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Vũ Khúc", HinhKy)) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ:`, HinhKy.join(", "));
            }
            // gặp cát tinh
            if (kiemTraCachCuc("Vũ Khúc", cattinh)) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp cát tinh:`, cattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý Chị có Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]}`);
                keyArr.push(`Quý Chị có Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân`);
            }
            if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Phá Quân`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", ham[i], "Vũ Khúc", "Phá Quân")) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân`);

                if (kiemTraCachCuc("Vũ Khúc", XuongKhuc)) {
                    console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                    keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Phá Quân gặp Văn Xương, Văn Khúc`);
                }
            }

            if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", Kinh.concat(Da).concat("Quả Tú"))) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Kình Đà Quả Tú`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Kình Đà Quả Tú`);

            }
            if (kiemTraCachCuc("Vũ Khúc", Kinh.concat("Kiếp Sát"))) {
                console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
                keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${ham[i]} gặp Kình Dương Kiếp Sát`);
            }
        }
    }
    // Vũ Phá đồng cung tại Hợi gặp Thái Âm , gặp Tham Lang mà không phải là Giáp Kỉ Nhâm thì khổ vô cùng
    if (lasoData.canNam !== "G." || lasoData.canNam !== "N." || lasoData.canNam !== "K.") {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Hợi", "Vũ Khúc", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Tử Tức", "Hợi", "Thái Âm", "Tham Lang")) {
            console.log("Vũ Khúc tọa thủ cung Tử Tức ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");
            keyArr.push("Vũ Khúc tọa thủ cung Tử Tức ở Hợi đồng cung Phá Quân gặp Thái Âm, Tham Lang");

        }
    }

    for (let i = 0; i < gkn.length; i++) {
        if (lasoData.canNam === gkn[i] && isHaiSaoDongCungTaiCungChi("Tử Tức", "Hợi", "Vũ Khúc", "Phá Quân ") && isHaiSaoDongCungTaiCung("Tử Tức", "Vũ Khúc", "Hỏa Tinh")) {
            console.log(`Người tuổi ${giap_ky_nham[i]} có Vũ Khúc tọa thủ cung Tử Tức ở Hợi đồng cung Phá Quân và Hỏa Tinh`);
            keyArr.push(`Người tuổi ${giap_ky_nham[i]}  có Vũ Khúc tọa thủ cung Tử Tức ở Hợi đồng cung Phá Quân và Hỏa Tinh`);

        }
    }

    // Vũ Khúc Tham Lang đồng cung
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Vũ Khúc", "Tham Lang")) {
        console.log("Vũ Khúc tọa thủ cung Tử Tức đồng cung Tham Lang");
        keyArr.push("Vũ Khúc tọa thủ cung Tử Tức đồng cung Tham Lang");

    }
    // Tại sủu mùi, vũ tham đồng cung và đồng cung kiếp sát
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", suumui[i], "Vũ Khúc", "Tham Lang") && isHaiSaoDongCungTaiCungChi("Tử Tức", suumui[i], "Vũ Khúc", "Kiếp Sát")) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${suumui[i]} đồng cung Tham Lang, Kiếp Sát`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[i], "Vũ Khúc") && kiemTraCachCuc("Vũ Khúc", KhoaLocQuyen)) {
            console.log(`Vũ Khúc tọa thủ cung Tử Tức ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
            keyArr.push(`Vũ Khúc tọa thủ cung Tử Tức ở ${danthan[i]} gặp các sao cát tinh:`, KhoaLocQuyen.join(", "));
        }
    }
}

function LuanCachCucThaiDuongTuTuc(keyArr) {
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
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i]);
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));

            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thái Dương tọa thủ cung Tử Tức ở " + mvd[i]);
                keyArr.push("Quý Chị có Thái Dương tọa thủ cung Tử Tức ở " + mvd[i]);
            }

        }
    }

    for (let i = 0; i < dac.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac[i], "Thái Dương") && isHaiSaoDongCungTaiCung("Tử Tức", "Thái Dương", "Hóa Kỵ") && kiemTraCachCuc("Thái Dương", kinhdakhongkiephinhrieu) === false) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + dac[i] + " đồng cung Hóa Kỵ và không gặp Kình Đà Không Kiếp Thiên Riêu");
        }
    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + ham[i]);
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + ham[i]);
            if (kiemTraCachCuc("Thái Dương", lucsattinh)) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Dương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }

        }
    }


    for (let i = 0; i < hoity.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", hoity[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + hoity[i]);
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + hoity[i]);
            if (kiemTraCachCuc("Thái Dương", XuongKhuc)) {
                console.log("Thái Dương tọa thủ cung Tử Tức ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));
                keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + hoity[i] + " gặp các sao cát tinh: ", XuongKhuc.join(", "));

            }
        }

    }

    for (let i = 0; i < than_tuat_ty.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", than_tuat_ty[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + than_tuat_ty[i]);
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + than_tuat_ty[i]);

        }
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Thái Dương", "Thiên Hình")) {
        console.log("Thái Dương tọa thủ cung Tử Tức đồng cung Thiên Hình");
        keyArr.push("Thái Dương tọa thủ cung Tử Tức đồng cung Thiên Hình");

    }

    for (let i = 0; i < canhtannhamky.length; i++) {
        if (lasoData.canNam === canhtannhamky[i] && isSaoToaThuTaiCungVaChi("Tử Tức", "Ngọ", "Thái Dương")) {
            console.log("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Tử Tức ở Ngọ");
            keyArr.push("Người tuổi " + CanhTanNhamKy[i] + " có Thái Dương tọa thủ cung Tử Tức ở Ngọ");
        }
    }
    for (let i = 0; i < binhdinh.length; i++) {
        if (lasoData.canNam === binhdinh[i] && isHaiSaoDongCungTaiCungChi("Tử Tức", "Tý", "Thái Dương")) {
            console.log("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Tử Tức ở Tý");
            keyArr.push("Người tuổi " + BinhDinh[i] + " có Thái Dương tọa thủ cung Tử Tức ở Tý");
        }
    }
    for (let i = 0; i < muithan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", muithan[i], "Thái Dương")) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + muithan[i]);
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + muithan[i]);
        }
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Thái Dương", "Thái Âm")) {
        console.log("Thái Dương tọa thủ cung Tử Tức đồng cung Thái Âm");
        keyArr.push("Thái Dương tọa thủ cung Tử Tức đồng cung Thái Âm");

    }

    if (lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Tài Bạch", "Mùi", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Sửu" && isHaiSaoDongCungTaiCung("Quan Lộc", "Mùi", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Tử Tức tại Sửu");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Mùi hội chiếu cung Tử Tức tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Tỵ") && isSaoToaThuTaiChi("Thái Âm", "Dậu")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Tử Tức tại Sửu");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Tử Tức tại Sửu");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Tài Bạch", "Sửu", "Thái Dương", "Thái Âm") ||
        lasoData.lasoOb[0].chi === "Mùi" && isHaiSaoDongCungTaiCung("Quan Lộc", "Sửu", "Thái Dương", "Thái Âm")) {

        console.log("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Tử Tức tại Mùi");
        keyArr.push("Thái Dương Thái Âm đồng cung tại Sửu hội chiếu cung Tử Tức tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Mùi" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {

        console.log("Thái Dương Thái Âm hội chiếu cung Tử Tức tại Mùi");
        keyArr.push("Thái Dương Thái Âm hội chiếu cung Tử Tức tại Mùi");
    }
    if (lasoData.lasoOb[0].chi === "Sửu" && isSaoToaThuTaiChi("Thái Dương", "Mão") && isSaoToaThuTaiChi("Thái Âm", "Hợi")) {
        console.log("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Tử Tức tại Sửu");
        keyArr.push("Thái Dương tại Mão Thái Âm ở Hợi hội chiếu cung Tử Tức tại Sửu");
    }
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc("Thái Dương", ["Thái Âm"])) {
        console.log("Cung Tử Tức Vô Chính Diệu gặp Thái Dương, Thái Âm");
        keyArr.push("Cung Tử Tức Vô Chính Diệu gặp Thái Dương, Thái Âm");
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", suumui[i], "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", XuongKhuc.concat(KhoiHong))) {
            console.log("Thái Dương tọa thủ cung Tử Tức ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
            keyArr.push("Thái Dương tọa thủ cung Tử Tức ở " + suumui[i] + " đồng cung Thái Âm gặp", XuongKhuc.concat(KhoiHong).join(", "));
        }
    }

    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Sửu", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Thái Dương", KhoaLocQuyen)) {
        console.log("Thái Dương tọa thủ cung Tử Tức ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
        keyArr.push("Thái Dương tọa thủ cung Tử Tức ở Sửu đồng cung Thái Âm gặp Khoa Lộc Quyền");
    }
}

function LuanCachCucThienCoTuTuc(keyArr) {
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
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i]);
            if (kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao))) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(SongHao).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(LocHinhYQuangQuy))) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(LocHinhYQuangQuy).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", TaHuu.concat(Linh).concat(Hinh))) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao cát tinh: ", TaHuu.concat(Linh).concat(Hinh).join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i]);
                keyArr.push("Quý Chị có Thiên Cơ tọa thủ cung Tử Tức ở " + mvd[i]);
            }
        }
    }
    // Thiên Cơ Tử Tức nam Thìn Tuất
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", thintuat[i], "Thiên Cơ") && lasoData.gioitinh === "Nam") {
            console.log(`Quý Anh có Thiên Cơ tọa thủ cung Tử Tức ở ${thintuat[i]}`);
            keyArr.push(`Quý Anh có Thiên Cơ tọa thủ cung Tử Tức ở ${thintuat[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", thintuat[i], "Thiên Cơ") && isHaiSaoDongCungTaiCungChi("Tử Tức", thintuat[i], "Thiên Cơ", "Thiên Lương")) {
            console.log(`Thiên Cơ Thiên Lương đồng cung tại Tử Tức ở ${thintuat[i]}`);
            keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Tử Tức ở ${thintuat[i]}`);
            if (kiemTraDiaSinh("Thiên Cơ", kinhdahoalinhtuong)) {
                console.log(`Thiên Cơ Thiên Lương đồng cung tại Tử Tức ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
                keyArr.push(`Thiên Cơ Thiên Lương đồng cung tại Tử Tức ở ${thintuat[i]} gặp các sao Kình Đà Hỏa Linh Tướng`);
            }
        }

    }


    //Thiên Cơ Mão Dậu
    for (let i = 0; i < maodau.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[i], "Thiên Cơ")) {

            for (let j = 0; j < at_tan_ky_binh.length; j++) {
                if (lasoData.canNam === atkb[j] && kiemTraCachCuc("Thiên Cơ", SongHao)) {

                    console.log(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Tử Tức ở ${maodau[i]} gặp Song Hao`);
                    keyArr.push(`Người tuổi ${at_tan_ky_binh[j]} có Thiên Cơ tọa thủ cung Tử Tức ở ${maodau[i]} gặp Song Hao`);
                }

            }
        }
    }
    // Thiên Cơ Tý Ngọ
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[i], "Thiên Cơ")) {
            for (let j = 0; j < at_binh_dinh.length; j++) {
                if (lasoData.canNam === abd[j] && kiemTraCachCuc("Thiên Cơ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                    console.log(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Tử Tức ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                    keyArr.push(`Người tuổi ${at_binh_dinh[j]} có Thiên Cơ tọa thủ cung Tử Tức ở ${tyngo[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                }

            }
        }

    }
    // Thiên Cơ Hãm địa
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Thiên Cơ")) {
            console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i]);
            keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i]);
            if (kiemTraCachCuc("Thiên Cơ", lucsattinh)) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Sát tinh: ", lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thiên Cơ", HinhKy.concat("Thiên Riêu"))) {
                console.log("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push("Thiên Cơ tọa thủ cung Tử Tức ở " + ham[i] + " gặp các sao Hình Kỵ: ", HinhKy.concat("Thiên Riêu").join(", "));
            }
        }
    }
    // Cơ Nguyệt Đồng Lương
    if (isSaoToaThuTaiCung("Tử Tức", "Thiên Cơ") && kiemTraCachCuc("Thiên Cơ", nguyetdongluong)) {
        console.log("Thiên Cơ tọa thủ cung Tử Tức gặp Thiên Đồng, Thiên Lương, Thái Âm");
        keyArr.push("Thiên Cơ tọa thủ cung Tử Tức gặp Thiên Đồng, Thiên Lương, Thái Âm");
    }
}
function LuanCacCachCucThienPhuTuTuc(keyArr) {

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

    if (isSaoToaThuTaiCung("Tử Tức", "Thiên Phủ")) {
        console.log("Thiên Phủ tọa thủ cung Tử Tức");
        keyArr.push("Thiên Phủ tọa thủ cung Tử Tức");

        if (kiemTraCachCuc("Thiên Phủ", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao: ", ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
        }
        if (kiemTraCachCuc("Thiến Phủ", lucsattinh)) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Sát tinh: ", lucsattinh.join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Sát tinh: ", lucsattinh.join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }

    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Tuất", "Thiên Phủ")) {
        if (kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức ở Tuất gặp các sao cát tinh: ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        if (kiemTraCachCuc("Thiên Phủ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet))) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức ở Tuất gặp các sao cát tinh: ", TaHuu.concat(TuTuongTham).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
        }
        for (let i = 0; i < gk.length; i++) {
            if (lasoData.canNam === gk[i] && kiemTraCachCuc("Thiên Phủ", lucsattinh) === false) {
                console.log(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Tử Tức ở Tuất không gặp Sát tinh`);
                keyArr.push(`Người tuổi ${giapky[i]} có Thiên Phủ tọa thủ cung Tử Tức ở Tuất không gặp Sát tinh`);

            }
        }
    }
    for (let i = 0; i < canhnham.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Tý", "Thiên Phủ", "Vũ Khúc")) {
            console.log(`Thiên Phủ tọa thủ cung Tử Tức ở Tý đồng cung Vũ Khúc`);
            keyArr.push(`Thiên Phủ tọa thủ cung Tử Tức ở Tý đồng cung Vũ Khúc`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tử Tức ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tử Tức ở Tý đồng cung Vũ Khúc gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
        }
    }

    for (let i = 0; i < ngotuat.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ngotuat[i], "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", "Thiên Tướng")) {
            console.log(`Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp Thiên Tướng`);
            keyArr.push(`Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp Thiên Tướng`);
            if (lasoData.canNam === cn[i] && kiemTraCachCuc("Thiên Phủ", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
                keyArr.push(`Người tuổi ${canhnham[i]} có Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat("Thiên Tướng").join(", "));
            }
            if (kiemTraCachCuc("Thiên Phủ", "Thiên Tướng, Thiên Lương")) {
                console.log(`Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
                keyArr.push(`Thiên Phủ tọa thủ cung Tử Tức ở ${ngotuat[i]} gặp Thiên Tướng, Thiên Lương`);
            }

        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Thiên Phủ") && kiemTraCachCuc("Thiên Phủ", TaHuu.concat(XuongKhuc))) {
        console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Tả Hữu, Xương Khúc");
        keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Tả Hữu, Xương Khúc");
        if (kiemTraCachCuc("Thiên Phủ", "Lộc Tồn")) {
            console.log("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
            keyArr.push("Thiên Phủ tọa thủ cung Tử Tức gặp các sao Tả Hữu, Xương Khúc, Lộc Tồn");
        }

    }

}

function LuanCachCucThaiAmTuTuc(keyArr) {

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
    if (isSaoToaThuTaiCung("Tử Tức", "Thái Âm")) {
        console.log("Thái Âm tọa thủ cung Tử Tức");
        keyArr.push("Thái Âm tọa thủ cung Tử Tức");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", daohonghy)) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Đào Hồng Hỷ: `, daohonghy.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }

        }
    }
    for (let i = 0; i < dac.length; i++) {

        if (isHaiSaoDongCungTaiCungChi("Tử Tức", dac[i], "Thái Âm", "Hoá Kỵ") && kiemTraCachCuc("Thái Âm", lucsattinh) === false) {
            console.log(`Thái Âm tọa thủ cung Tử Tức ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${dac[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Thái Âm")) {
            console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]}`);
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(daohonghy).join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", lucsattinh)) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Thái Âm", Kinh.concat(Da))) {
                console.log(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
                keyArr.push(`Thái Âm tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, Kinh.concat(Da).join(", "));
            }
        }
    }


    if (isHaiSaoDongCungTaiCung("Tử Tức", "Thái Âm", "Thiên Hình")) {
        console.log("Thái Âm tọa thủ cung Tử Tức đồng cung Thiên Hình");
        keyArr.push("Thái Âm tọa thủ cung Tử Tức đồng cung Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Phu Thê", "Thái Âm")) {
        console.log(`Thái Âm tọa thủ cung Phu Thê`);
        keyArr.push(`Thái Âm tọa thủ cung Phu Thê`);
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Thái Âm") && isHaiSaoDongCungTaiCung("Tử Tức", "Thái Âm", "Vũ Khúc") && isHaiSaoDongCungTaiCung("Tử Tức", "Thái Âm", "Lộc Tồn")) {
        console.log("Thái Âm tọa thủ cung Tử Tức đồng cung Vũ Khúc, Lộc Tồn");
        keyArr.push("Thái Âm tọa thủ cung Tử Tức đồng cung Vũ Khúc, Lộc Tồn");
        if (kiemTraCachCuc("Thái Âm", TaHuu)) {
            console.log("Thái Âm tọa thủ cung Tử Tức đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
            keyArr.push("Thái Âm tọa thủ cung Tử Tức đồng cung Vũ Khúc, Lộc Tồn gặp các sao: ", TaHuu.join(", "));
        }
    }
}
function LuanCachCucThamLangTuTuc(keyArr) {

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
    if (isSaoToaThuTaiCung("Tử Tức", "Tham Lang")) {
        console.log("Tham Lang tọa thủ cung Tử Tức");
        keyArr.push("Tham Lang tọa thủ cung Tử Tức");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]}`);

            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            for (let j = 0; j < mauky.length; j++) {
                if (kiemTraCachCuc("Tham Lang", HoaLinh) && lasoData.canNam === mk[j]) {
                    console.log("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                    keyArr.push("Người tuổi" + mauky[j] + " có Tham Lang tọa thủ cung Tử Tức ở " + mvd[i] + " gặp các sao: ", HoaLinh.join(", "));
                }
            }
        }

    }

    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tử Tức", vuong[i], "Tham Lang", "Hoá Kỵ") && kiemTraCachCuc("Tham Lang", lucsattinh) === false) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${vuong[i]} đồng cung Hoá Kỵ không gặp Sát tinh`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Tham Lang")) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]}`);
            if (kiemTraCachCuc("Tham Lang", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, KhoaLocQuyen.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", lucsattinh)) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Tham Lang", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (isHaiSaoDongCungTaiCung("Tử Tức", ham[i], "Tham Lang", "Thiên Riêu")) {
                console.log(`Tham Lang đồng cung Thiên Riêu tại cung Tử Tức ở ${ham[i]}`);
                keyArr.push(`Tham Lang đồng cung Thiên Riêu tại cung Tử Tức ở ${ham[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCung("Tử Tức", tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang đồng cung Vũ Khúc tại cung Tử Tức ở ${tumo[i]}`);
            keyArr.push(`Tham Lang đồng cung Vũ Khúc tại cung Tử Tức ở ${tumo[i]}`);
        }
        if (isHaiSaoDongCungTaiCung(lasoData.cungCu, tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}`);
            keyArr.push(`Tham Lang đồng cung tại ${lasoData.cungCu} ở ${tumo[i]}s`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hỏa Tinh", "Linh Tinh"])) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${tumo[i]} gặp Hoả Tinh, Linh Tinh`);
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", suumui[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) === true && kiemTraCachCuc("Tham Lang", KhoaLocQuyen.concat(TaHuu)) === false) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${suumui[i]} gặp Phá Quân không gặp Khoa Lộc Quyền Tả Hữu`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", tumo[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Phá Quân"]) && kiemTraCachCuc("Tham Lang", lucsattinh) && kiemTraCachCuc("Tham Lang", "Hóa Kỵ")) {
            console.log(`Tham Lang tọa thủ cung Tử Tức ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
            keyArr.push(`Tham Lang tọa thủ cung Tử Tức ở ${tumo[i]} gặp Phá Quân, Sát tinh, Hoá Kỵ`);
        }
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Tham Lang", "Liêm Trinh")) {
        console.log("Tham Lang tọa thủ cung Tử Tức đồng cung Liêm Trinh");
        keyArr.push("Tham Lang tọa thủ cung Tử Tức đồng cung Liêm Trinh");

    }

    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Hợi", "Tham Lang", "Liêm Trinh") && kiemTraCachCuc("Tham Lang", Kinh.concat(Da).concat("Thiên Hư, Thiên Không, Địa Không, Địa Kiếp"))) {
        console.log("Tham Lang tọa thủ cung Tử Tức ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");
        keyArr.push("Tham Lang tọa thủ cung Tử Tức ở Hợi đồng cung Liêm Trinh gặp Kinh, Đà, Thiên Hư, Thiên Không, Địa Không, Địa Kiếp");

    }

}
function LuanCachCucCuMonTuTuc(keyArr) {
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

    if (isSaoToaThuTaiCung("Tử Tức", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Tử Tức");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức");
    }
    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", mvd[i], "Cự Môn")) {
            console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaTueHinh).concat(KhoiViet).join(", "));
            }

            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Tử Tức", mvd[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Cự Môn")) {

            console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]}`);
            if (kiemTraCachCuc("Cự Môn", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", KhoaTueHinh.concat(TaHuu).concat(HoaLinh))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, KhoaTueHinh.concat(TaHuu).concat(HoaLinh).join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", ["Thái Tuế", "Bạch Hổ", "Quan Phù"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Tuế Hổ Phù`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Tuế Hổ Phù`);
            }
            if (isHaiSaoDongCungTaiCung("Tử Tức", ham[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Lộc Tồn`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} đồng cung Lộc Tồn`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Hóa Lộc, Thái Tuế"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            }
            if (kiemTraCachCuc("Cự Môn", ["Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao: `, ["Thiên Không", "Địa Không", "Địa Kiếp"].join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", HinhKy.concat("Thiên Riêu"))) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Hình Kỵ: `, HinhKy.concat("Thiên Riêu").join(", "));
            }
            if (kiemTraCachCuc("Cự Môn", lucsattinh)) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Cự Môn", ["Thiên Hư", "Thiên Không", "Địa Không", "Địa Kiếp"])) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp `);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${ham[i]} gặp Thiên Hư, Thiên Không, Địa Không, Địa Kiếp`);
            }



        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        for (let j = 0; j < dinhcanh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", thintuat[i], "Cự Môn") && lasoData.canNam === dc[j]) {
                console.log(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Tử Tức ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${dinhcanh[j]} có Cự Môn tọa thủ cung Tử Tức ở ${thintuat[i]}`);
            }
        }
        for (let j = 0; j < quytan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", thintuat[i], "Cự Môn") && lasoData.canNam === qt[j]) {
                console.log(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Tử Tức ở ${thintuat[i]}`);
                keyArr.push(`Người tuổi ${quytan[j]} có Cự Môn tọa thủ cung Tử Tức ở ${thintuat[i]}`);
            }
        }

    }
    for (let i = 0; i < suumui.length; i++) {
        for (let j = 0; j < atbinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", suumui[i], "Cự Môn") && lasoData.canNam === ab[j]) {
                console.log(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Tử Tức ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atbinh[j]} có Cự Môn tọa thủ cung Tử Tức ở ${suumui[i]}`);
            }
        }


    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Cự Môn", "Hóa Kỵ")) {
        console.log("Cự Môn tọa thủ cung Tử Tức đồng cung Hoá Kỵ");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức đồng cung Hoá Kỵ");
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tử Tức đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức đồng cung Thái Dương");
    }
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Dần", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tử Tức ở Dần đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức ở Dần đồng cung Thái Dương");
    }

    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Thân", "Cự Môn", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tử Tức ở Thân đồng cung Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức ở Thân đồng cung Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Thân", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Điền Trạch", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tử Tức ở Thân gặp Thái Dương, Điền Trạch có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức ở Thân gặp Thái Dương, Điền Trạch có Thái Dương");
    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Dần", "Cự Môn") && kiemTraCachCuc("Cự Môn", "Thái Dương") && isSaoToaThuTaiCung("Điền Trạch", "Thái Dương")) {
        console.log("Cự Môn tọa thủ cung Tử Tức ở Dần gặp Thái Dương, Điền Trạch có Thái Dương");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức ở Dần gặp Thái Dương, Điền Trạch có Thái Dương");

    }
    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCung("Điền Trạch", "Thái Dương", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Điền Trạch đồng cung Thái Dương xung chiếu cung Tử Tức ở Dần");
        keyArr.push("Cự Môn tọa thủ cung Điền Trạch đồng cung Thái Dương xung chiếu cung Tử Tức ở Dần");

    }
    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", danthan[i], "Cự Môn", "Thái Dương") && kiemTraCachCuc("Cự Môn", "Hóa Lộc")) {
            console.log(`Cự Môn tọa thủ cung Tử Tức ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
            keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${danthan[i]} đồng cung Thái Dương gặp Hoá Lộc`);
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Dần", "Thiên Cơ", "Cự Môn")) {
        console.log("Cự Môn tọa thủ cung Tử Tức ở Dần đồng cung Thiên Cơ");
        keyArr.push("Cự Môn tọa thủ cung Tử Tức ở Dần đồng cung Thiên Cơ");
    }



    for (let i = 0; i < attankybinh.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", maodau[j], "Cự Môn", "Thiên Cơ") && lasoData.canNam === atkb[i]) {
                console.log(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]}`);
                keyArr.push(`Người tuổi ${attankybinh[i]} có Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log(`Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]}`);
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]}`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", maodau[j], "Cự Môn", "Thiên Cơ") && kiemTraCachCuc("Cự Môn", ["Đại Hao", "Tiểu Hao"])) {
                console.log(`Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
                keyArr.push(`Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở ${maodau[j]} gặp Đại Hao, Tiểu Hao`);
            }
            if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCungChi("Tử Tức", maodau[j], "Cự Môn", "Thiên Cơ")) {
                console.log('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở', maodau[j].join);
                keyArr.push('Quý chị có Cự Môn đồng cung Thiên Cơ tại cung Tử Tức ở', maodau[j].join);
            }
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < binhtan.length; j++) {
            if (isSaoToaThuTaiCung("Tử Tức", tumo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", ["Kình Dương", "Hoá Kỵ"]) && lasoData.canNam !== bt[j]) {
                console.log(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Tử Tức ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);
                keyArr.push(`Người tuổi ${binhtan[j]} có Cự Môn tọa thủ cung Tử Tức ở ${tumo[i]} gặp Kình Dương, Hoá Kỵ`);

            }

        }
        for (let i = 0; i < tyhoi.length; i++) {
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Cự Môn", "Lộc Tồn")) {
                console.log(`Cự Môn đồng cung Lộc Tồn tại cung Tử Tức ở ${tyhoi[i]}`);
                keyArr.push(`Cự Môn đồng cung Lộc Tồn tại cung Tử Tức ở ${tyhoi[i]}`);
            }
        }

        for (let i = 0; i < tyngo.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[i], "Cự Môn") && kiemTraCachCuc("Cự Môn", KhoaLocQuyen)) {
                console.log(`Cự Môn tọa thủ cung Tử Tức ở ${tyngo[i]} gặp Khoa Lộc Quyền`);
                keyArr.push(`Cự Môn tọa thủ cung Tử Tức ở ${tyngo[i]} gặp Khoa Lộc Quyền`);

            }
        }
    }

}
function LuanCachCucThienTuongTuTuc(keyArr) {
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
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]}`);
        }
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc))) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, TuPhuVu.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).concat(XuongKhuc).join(", "));


        }
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", lucsattinh)) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", vuong[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Kình Dương", "Đà La"])) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${vuong[i]} gặp Kình Dương, Đà La`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${vuong[i]} gặp Kình Dương, Đà La`);
        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Thiên Tướng") && kiemTraCachCuc("Thiên Tướng", ["Hóa Lộc", "Thái Tuế"])) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]} gặp Hoá Lộc, Thái Tuế`);
        }
        if (lasoData.gioitinh === "Nữ" && isSaoToaThuTaiCung("Tử Tức", ham[i], "Thiên Tướng")) {
            console.log(`Quý chị có Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Quý chị có Thiên Tướng tọa thủ cung Tử Tức ở ${ham[i]}`);
        }
    }
    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", thintuat[i], "Thiên Tướng")) {
            console.log(`Thiên Tướng tọa thủ cung Tử Tức ở ${thintuat[i]}`);
            keyArr.push(`Thiên Tướng tọa thủ cung Tử Tức ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < tyngo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyngo[i], "Thiên Tướng", "Liêm Trinh") && kiemTraCachCuc("Thiên Tướng", "Kình Dương")) {
            console.log(`Thiên Tướng đồng cung Liêm Trinh tại cung Tử Tức ở ${tyngo[i]} gặp Kình Dương`);
            keyArr.push(`Thiên Tướng đồng cung Liêm Trinh tại cung Tử Tức ở ${tyngo[i]} gặp Kình Dương`);
        }
    }

    if (lasoData.gioitinh === "Nữ" && isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Tướng", "Hồng Loan")) {
        console.log("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Tử Tức");
        keyArr.push("Quý chị có Thiên Tướng đồng cung Hồng Loan tại cung Tử Tức");
    }
    if (lasoData.gioitinh === "Nữ" && kiemTraCachCuc("Thiên Tướng", DaoHongHoaKhuc)) {
        console.log("Quý chị có Thiên Tướng tọa thủ cung Tử Tức gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
        keyArr.push("Quý chị có Thiên Tướng tọa thủ cung Tử Tức gặp Đào Hoa, Hồng Loan, Hoa Cái, Vũ Khúc");
    }
}

function LuanCachCucThienLuongTuTuc(keyArr) {
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

    if (isSaoToaThuTaiCung("Tử Tức", "Thiên Lương")) {
        console.log("Thiên Lương tọa thủ cung Tử Tức");
        keyArr.push("Thiên Lương tọa thủ cung Tử Tức");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]}`);
            if (kiemTraCachCuc("Thiên Lương", XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet))) {
                console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, XuongKhuc.concat(TaHuu).concat(KhoaLocQuyen).concat(KhoiViet).join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", KhoiViet.concat(XuongKhuc).concat("Thái Tuế"))) {
                console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, KhoiViet.concat(XuongKhuc).concat("Thái Tuế").join(", "));
            }
            if (kiemTraCachCuc("Thiên Lương", lucsattinh.concat(HoaLinh))) {
                console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));

            }
        }

    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${ham[i]}`);
        }
    }

    for (let i = 0; i < thintuat.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", thintuat[i], "Thiên Lương")) {
            console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${thintuat[i]}`);
            keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${thintuat[i]}`);
        }
    }

    for (let i = 0; i < dinhkyquy.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", "Ngọ", "Thiên Lương") && lasoData.canNam === dkq[i]) {
            console.log("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Tử Tức ở Ngọ");
            keyArr.push("Người tuổi", dinhkyquy[i], "có Thiên Lương tọa thủ cung Tử Tức ở Ngọ");

        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Dần", "Thiên Lương", "Thái Dương")) {
        console.log("Thiên Lương đồng cung Thái Dương tại cung Tử Tức ở Dần");
        keyArr.push("Thiên Lương đồng cung Thái Dương tại cung Tử Tức ở Dần");
    }

    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Tý", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Xương", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Tử Tức ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Tử Tức ở Tý gặp Thái Dương, Văn Xương, Hoá Lộc");
    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Ngọ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Dương", "Văn Khúc", "Hoá Lộc"])) {
        console.log("Thiên Lương tọa thủ cung Tử Tức ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
        keyArr.push("Thiên Lương tọa thủ cung Tử Tức ở Ngọ gặp Thái Dương, Văn Khúc, Hoá Lộc");
    }

    for (let i = 0; i < tysuudanmaothintyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tysuudanmaothintyngo[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Linh Tinh"])) {
            console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
            keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${tysuudanmaothintyngo[i]} gặp Thái Âm, Linh Tinh`);
        }
    }
    for (let i = 0; i < vuong.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", vuong[i], "Thiên Lương", "Thiên Đồng")) {
            console.log(`Thiên Lương đồng cung Thiên Đồng tại cung Tử Tức ở ${vuong[i]}`);
            keyArr.push(`Thiên Lương đồng cung Thiên Đồng tại cung Tử Tức ở ${vuong[i]}`);
        }
    }

    if (lasoData.lasoOb[0].chi === "Dần" && isHaiSaoDongCungTaiCungChi("Điền Trạch", "Thân", "Thiên Lương", "Thiên Đồng") && kiemTraCachCuc("Thiên Lương", ["Thái Âm", "Thiên Cơ"])) {
        console.log("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Tử Tức ở Dần gặp Thái Âm, Thiên Cơ");
        keyArr.push("Thiên Lương đồng cung Thiên Đồng ở Thân xung chiếu cung Tử Tức ở Dần gặp Thái Âm, Thiên Cơ");
    }
    for (let i = 0; i < mieu.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", mieu[i], "Thiên Lương", "Văn Xương")) {
            console.log(`Thiên Lương đồng cung Văn Xương tại cung Tử Tức ở ${mieu[i]}`);
            keyArr.push(`Thiên Lương đồng cung Văn Xương tại cung Tử Tức ở ${mieu[i]}`);
        }
    }
    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Tỵ", "Thiên Lương") && kiemTraCachCuc("Thiên Lương", lucsattinh.concat("Đại Hao, Tiểu Hao"))) {
        console.log("Thiên Lương tọa thủ cung Tử Tức ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
        keyArr.push("Thiên Lương tọa thủ cung Tử Tức ở Tỵ gặp các sao Sát tinh: ", lucsattinh.concat("Đại Hao, Tiểu Hao").join(", "));
    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Thiên Lương", "Thiên Mã")) {
            console.log(`Thiên Lương đồng cung Thiên Mã tại cung Tử Tức ở ${tyhoi[i]}`);
            keyArr.push(`Thiên Lương đồng cung Thiên Mã tại cung Tử Tức ở ${tyhoi[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyhoi[i], "Thiên Lương") && kiemTraCachCuc("Thiên Lương", ["Thiên Mã"])) {
            console.log(`Thiên Lương tọa thủ cung Tử Tức ở ${tyhoi[i]} gặp Thiên Mã`);
            keyArr.push(`Thiên Lương tọa thủ cung Tử Tức ở ${tyhoi[i]} gặp Thiên Mã`);
        }
    }

}
function LuanCachCucThatSatTuTuc(keyArr) {
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

    if (isSaoToaThuTaiCung("Tử Tức", "Thất Sát")) {
        console.log("Thất Sát tọa thủ cung Tử Tức");
        keyArr.push("Thất Sát tọa thủ cung Tử Tức");
    }

    for (let i = 0; i < mvd.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]}`);
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]}`);
            }

        }
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh))) {
            console.log(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao cát tinh: `, tuphuxuongkhuckhoiviettahuukhoaquyenloc.concat(makinh).join(", "));

        }
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Thất Sát") && kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
            console.log(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${mvd[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
        }
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", mvd[i], "Thất Sát", "Thiên Hình")) {
            console.log(`Thất Sát đồng cung Thiên Hình tại cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Tử Tức ở ${mvd[i]}`);
        }
    }

    for (let i = 0; i < giapcanhdinhky.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[j], "Thất Sát") && lasoData.canNam === gcdk[i]) {
                console.log(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Tử Tức ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${giapcanhdinhky[i]} có Thất Sát tọa thủ cung Tử Tức ở ${danthan[j]}`);
            }

        }
    }

    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Thất Sát")) {
            console.log(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]}`);
            if (kiemTraCachCuc("Thất Sát", tahuulongphuongquangquy)) {
                console.log(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao cát tinh: `, tahuulongphuongquangquy.join(", "));
            }
            if (kiemTraCachCuc("Thất Sát", lucsattinh.concat(HoaLinh))) {
                console.log(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
                keyArr.push(`Thất Sát tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.concat(HoaLinh).join(", "));
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", ham[i], "Thất Sát", "Thiên Hình")) {
                console.log(`Thất Sát đồng cung Thiên Hình tại cung Tử Tức ở ${ham[i]}`);
                keyArr.push(`Thất Sát đồng cung Thiên Hình tại cung Tử Tức ở ${ham[i]}`);
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log(`Quý chị có Thất Sát tọa thủ cung Tử Tức ở ${ham[i]}`);
                keyArr.push(`Quý chị có Thất Sát tọa thủ cung Tử Tức ở ${ham[i]}`);
            }
        }
    }
    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[i], "Thất Sát") && lasoData.canNam === at[j]) {
                console.log(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Tử Tức ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attan[j]} có Thất Sát tọa thủ cung Tử Tức ở ${maodau[i]}`);
            }
        }
    }
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Tỵ", "Thất Sát", "Tử Vi")) {
        console.log("Thất Sát đồng cung Tử Vi tại cung Tử Tức ở Tỵ");
        keyArr.push("Thất Sát đồng cung Tử Vi tại cung Tử Tức ở Tỵ");
        if (kiemTraCachCuc("Thất Sát", batkhoamaanhong)) {
            console.log("Thất Sát đồng cung Tử Vi tại cung Tử Tức ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
            keyArr.push("Thất Sát đồng cung Tử Vi tại cung Tử Tức ở Tỵ gặp các sao cát tinh: ", batkhoamaanhong.join(", "));
        }
    }

    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", suumui[i], "Thất Sát", "Liêm Trinh")) {
            console.log(`Thất Sát đồng cung Liêm Trinh tại cung Tử Tức ở ${suumui[i]}`);
            keyArr.push(`Thất Sát đồng cung Liêm Trinh tại cung Tử Tức ở ${suumui[i]}`);
        }
        for (let j = 0; j < atky.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", suumui[i], "Thất Sát") && lasoData.canNam === ak[j]) {
                console.log(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Tử Tức ở ${suumui[i]}`);
                keyArr.push(`Người tuổi ${atky[j]} có Thất Sát tọa thủ cung Tử Tức ở ${suumui[i]}`);
            }
        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Phá Quân", "Tham Lang"])) {
        console.log(`Thất Sát tọa thủ cung Tử Tức gặp Phá Quân, Tham Lang`);
        keyArr.push(`Thất Sát tọa thủ cung Tử Tức gặp Phá Quân, Tham Lang`);
        for (let i = 0; i < td.length; i++) {
            if (lasoData.gioitinh === "Nữ" && lasoData.canNam === td[i]) {
                console.log(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Tử Tức gặp Phá Quân, Tham Lang`);
                keyArr.push(`Quý chị tuổi ${tandinh[i]} có Thất Sát tọa thủ cung Tử Tức gặp Phá Quân, Tham Lang`);
            }
        }

    }
    if (isSaoToaThuTaiCung("Tử Tức", "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
        console.log("Thất Sát tọa thủ cung Tử Tức gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
        keyArr.push("Thất Sát tọa thủ cung Tử Tức gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh");
    }

    for (let i = 0; i < binhmau.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Thất Sát", "Kình Dương") && lasoData.canNam === bm[i]) {
            console.log(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Tử Tức`);
            keyArr.push(`Người tuổi ${binhmau[i]} có Thất Sát đồng cung Kình Dương tại cung Tử Tức`);
        }
        if (isSaoToaThuTaiCung(lasoData.cungCu, "Thất Sát") && kiemTraCachCuc("Thất Sát", ["Kình Dương", "Đà La", "Hoả Tinh", "Linh Tinh"])) {
            console.log(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
            keyArr.push(`Thất Sát tọa thủ cung ${lasoData.cungCu} gặp Kình Dương, Đà La, Hoả Tinh, Linh Tinh`);
        }

    }
}
function LuanCachCucPhaQuanTuTuc(keyArr) {
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
        if (isSaoToaThuTaiCung("Tử Tức", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]}`);

        } if (kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc) && isSaoToaThuTaiCung("Tử Tức", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (kiemTraCachCuc("Phá Quân", hokyhinhsonghao) && isSaoToaThuTaiCung("Tử Tức", mvd[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${mvd[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
    }
    for (let i = 0; i < mieu.length; i++) {
        for (let j = 0; j < dinhkyquy.length; j++) {
            if (isSaoToaThuTaiCung("Tử Tức", mieu[i], "Phá Quân") && lasoData.canNam === dkq[j]) {
                console.log(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Tử Tức ở ${mieu[i]}`);
                keyArr.push(`Người tuổi ${dinhkyquy[j]} có Phá Quân tọa thủ cung Tử Tức ở ${mieu[i]}`);

            }

        }

    }
    for (let i = 0; i < ham.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", ham[i], "Phá Quân")) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", hokyhinhsonghao)) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} có cách cục: ${hokyhinhsonghao.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", tuphuxuongkhuckhoiviettahuukhoaquyenloc)) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} có cách cục: ${tuphuxuongkhuckhoiviettahuukhoaquyenloc.join(", ")}`);
        }
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", lucsattinh)) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${ham[i]} gặp các sao Sát tinh: `, lucsattinh.join(", "));

        }


    }

    for (let i = 0; i < maodau.length; i++) {
        for (let j = 0; j < attanquy.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[i], "Phá Quân") && lasoData.canNam === atq[j]) {
                console.log(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Tử Tức ở ${maodau[i]}`);
                keyArr.push(`Người tuổi ${attanquy[j]} có Phá Quân tọa thủ cung Tử Tức ở ${maodau[i]}`);
            }
        }
    }

    for (let i = 0; i < gcdk.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[j], "Phá Quân") && lasoData.canNam === gcdk[i]) {
                console.log(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Tử Tức ở ${danthan[j]}`);
                keyArr.push(`Người tuổi ${gcdk[i]} có Phá Quân tọa thủ cung Tử Tức ở ${danthan[j]}`);
            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyhoi[i], "Phá Quân") && lasoData.canNam === "Mậu") {
            console.log(`Người tuổi Mậu có Phá Quân tọa thủ cung Tử Tức ở ${tyhoi[i]}`);
            keyArr.push(`Người tuổi Mậu có Phá Quân tọa thủ cung Tử Tức ở ${tyhoi[i]}`);
        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Thiên Việt", "Đại Hao", "Tiểu Hao", "Hoả Tinh", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Tử Tức gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Tử Tức gặp Thiên Việt, Đại Hao, Tiểu Hao, Hoả Tinh, Thiên Hình");
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoả Tinh", "Linh Tinh", "Thiên Việt", "Thiên Hình"])) {
        console.log("Phá Quân tọa thủ cung Tử Tức gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
        keyArr.push("Phá Quân tọa thủ cung Tử Tức gặp Hoả Tinh, Linh Tinh, Thiên Việt, Thiên Hình");
    }

    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Ngọ", "Phá Quân") && isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Phá Quân", "Lộc Tồn") && kiemTraCachCuc("Phá Quân", ["Thiếu Dương"])) {
        console.log("Phá Quân đồng cung Lộc Tồn tại cung Tử Tức ở Ngọ và gặp Thiếu Dương");
        keyArr.push("Phá Quân đồng cung Lộc Tồn tại cung Tử Tức ở Ngọ và gặp Thiếu Dương");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], "Phá Quân") && kiemTraCachCuc("Phá Quân", ["Hoá Lộc", "Thiên Hình"])) {
            console.log(`Phá Quân tọa thủ cung Tử Tức ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
            keyArr.push(`Phá Quân tọa thủ cung Tử Tức ở ${tumo[i]} gặp Hoá Lộc, Thiên Hình`);
        }
    }
}
function LuanCachCucXuongKhucTuTuc(keyArr) {
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
            if (isSaoToaThuTaiCungVaChi("Tử Tức", dac_dia[i], XuongKhuc[j])) {
                console.log(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
                keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(XuongKhuc[j], tuphukhoiviettahuukhoaquyenloc)) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp`, tuphukhoiviettahuukhoaquyenloc.join(", "));
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Lương"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Thiên Lương`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Thiên Lương`);
                }
                if (kiemTraCachCuc(XuongKhuc[j], ["Thiên Cơ", "Hóa Lộc"])) {
                    console.log(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                    keyArr.push(`${XuongKhuc[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Thiên Cơ, Hoá Lộc`);
                }
                if (isHaiSaoDongCungTaiCung("Tử Tức", dac_dia[i], XuongKhuc[j], "Hóa Lộc")) {
                    console.log(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Tử Tức ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Hoá Lộc tại Tử Tức ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Tử Tức", dac_dia[i], XuongKhuc[j], "Vũ Khúc")) {
                    console.log(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Tử Tức ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Vũ Khúc tại cung Tử Tức ở ${dac_dia[i]}`);
                }
                if (isHaiSaoDongCungTaiCungChi("Tử Tức", dac_dia[i], XuongKhuc[j], "Tả Phù")) {
                    console.log(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Tử Tức ở ${dac_dia[i]}`);
                    keyArr.push(`${XuongKhuc[j]} đồng cung Tả Phù tại cung Tử Tức ở ${dac_dia[i]}`);

                }
            }
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Văn Xương") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Khúc") || isSaoToaThuTaiCung("Phụ Mẫu", "Văn Khúc") && isSaoToaThuTaiCung("Huynh Đệ", "Văn Xương")) {
        console.log(`Văn Xương Văn Khúc giáp Tử Tức`);
        keyArr.push(`Văn Xương Văn Khúc giáp Tử Tức`);
        if (isSaoToaThuTaiCung("Tử Tức", "Thái Dương")) {
            console.log("Tử Tức có Thái Dương giáp Văn Xương, Văn Khúc");
            keyArr.push("Tử Tức có Thái Dương giáp Văn Xương, Văn Khúc");
        }
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Văn Xương") && kiemTraCachCuc("Văn Xương", ["Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Tử Tức có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
        keyArr.push("Tử Tức có Văn Xương hội chiếu Văn Khúc, Thiên Khôi, Thiên Việt");
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Văn Khúc") && kiemTraCachCuc("Văn Khúc", ["Văn Xương", "Thiên Khôi", "Thiên Việt"])) {
        console.log("Tử Tức có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
        keyArr.push("Tử Tức có Văn Khúc hội chiếu Văn Xương, Thiên Khôi, Thiên Việt");
    }

    for (let i = 0; i < tyhoi.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", tyhoi[i], XuongKhuc[j]) && isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], XuongKhuc[j], "Liêm Trinh")) {
                console.log(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Tử Tức ở ${tyhoi[i]}`);
                keyArr.push(`${XuongKhuc[j]} đồng cung Liêm Trinh tại cung Tử Tức ở ${tyhoi[i]}`);
            }
        }
    }

    for (let i = 0; i < danmao.length; i++) {
        for (let j = 0; j < XuongKhuc.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", danmao[i], XuongKhuc[j], "Phá Quân") && kiemTraCachCuc(XuongKhuc[j], "Kình Dương")) {
                console.log(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Tử Tức ở ${danmao[i]} gặp Kình Dương`);
                keyArr.push(`${XuongKhuc[j]} đồng cung Phá Quân tại cung Tử Tức ở ${danmao[i]} gặp Kình Dương`);

            }
        }
    }
}
function LuanCachCucKhoiVietTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tuphuvutuongxuongkhuctahuukhoaquyenloc = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Tả Phù", "Hữu Bật", "Hoá Khoa", "Hoá Quyền", "Hoá Lộc"];
    const xuongkhuckhoatuetau = ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"];

    for (let i = 0; i < KhoiViet.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", KhoiViet[i])) {
            
            if (kiemTraCachCuc(KhoiViet[i], tuphuvutuongxuongkhuctahuukhoaquyenloc)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp`, tuphuvutuongxuongkhuctahuukhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], lucsattinh)) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Kỵ", "Thiên Hình"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Hóa Kỵ, Thiên Hình`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Hóa Kỵ, Thiên Hình`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Văn Xương", "Văn Khúc", "Thái Tuế", "Hóa Khoa", "Tấu Thư"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp các sao Văn Xương, Văn Khúc, Tấu Thư, Thái Tuế`);

            }
            if (kiemTraCachCuc(KhoiViet[i], ["Thiên Lương", "Thiên Cơ", "Hoá Lộc"])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Thiên Lương, Thiên Cơ, Hoá Lộc`);
            }
            if (kiemTraCachCuc(KhoiViet[i], ["Hóa Lộc"]) && kiemTraCachCuc(KhoiViet[i], lucsattinh) === false) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Hóa Lộc mà không gặp các sao Sát tinh`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức gặp Hóa Lộc mà không gặp các sao Sát tinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Tử Vi", KhoiViet[i])) {
                console.log(`${KhoiViet[i]} toạ thủ cung Tử Tức ở Ngọ đồng cung Tử Vi`);
                keyArr.push(`${KhoiViet[i]} toạ thủ cung Tử Tức ở Ngọ đồng cung Tử Vi`);
            }

        }

    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Khôi") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Việt") || isSaoToaThuTaiCung("Phụ Mẫu", "Thiên Việt") && isSaoToaThuTaiCung("Huynh Đệ", "Thiên Khôi")) {
        console.log(`Khôi Việt giáp Tử Tức`);
        keyArr.push(`Khôi Việt giáp Tử Tức`);
        if (isSaoToaThuTaiCung("Tử Tức", "Thái Dương")) {
            console.log("Tử Tức có Thái Dương giáp Khôi Việt");
            keyArr.push("Tử Tức có Thái Dương giáp Khôi Việt");
        }
        if (isSaoToaThuTaiCung("Tử Tức", "Hóa Lộc")) {
            console.log("Tử Tức có Hóa Lộc giáp Khôi Việt");
            keyArr.push("Tử Tức có Hóa Lộc giáp Khôi Việt");
        }
    }
}
function LuanCachCucLocTonTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const tyngo = ["Tý", "Ngọ"];
    const tuphuxuongkhuckhoivietma = ["Tử Vi", "Thiên Phủ", "Văn Xương", "Văn Khúc", "Thiên Khôi", "Thiên Việt", "Thiên Mã"];
    const quangquyquanrieuy = ["Ân Quang", "Thiên Quý", "Quan Phù", "Thiên Y", "Thiên Riêu"];
    const khongkiephaokypha = ["Địa Không", "Địa Kiếp", "Đại Hao", "Tiểu Hao", "Hóa Kỵ", "Tuế Phá"];

    if (isSaoToaThuTaiCung("Tử Tức", "Lộc Tồn")) {
      
        if (kiemTraCachCuc("Lộc Tồn", tuphuxuongkhuckhoivietma)) {
            console.log("Lộc Tồn toạ thủ cung Tử Tức gặp", tuphuxuongkhuckhoivietma.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tử Tức gặp", tuphuxuongkhuckhoivietma.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", quangquyquanrieuy)) {
            console.log("Lộc Tồn toạ thủ cung Tử Tức gặp", quangquyquanrieuy.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tử Tức gặp", quangquyquanrieuy.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", khongkiephaokypha)) {
            console.log("Lộc Tồn toạ thủ cung Tử Tức gặp", khongkiephaokypha.join(", "));
            keyArr.push("Lộc Tồn toạ thủ cung Tử Tức gặp", khongkiephaokypha.join(", "));
        }
        if (kiemTraCachCuc("Lộc Tồn", ["Phá Quân"])) {
            console.log("Lộc Tồn toạ thủ cung Tử Tức gặp Phá Quân");
            keyArr.push("Lộc Tồn toạ thủ cung Tử Tức gặp Phá Quân");

        }
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Lộc Tồn", "Hóa Lộc")) {
            console.log("Lộc Tồn đồng cung Hoá Lộc tại cung Tử Tức");
            keyArr.push("Lộc Tồn đồng cung Hoá Lộc tại cung Tử Tức");
        }
        if (isSaoToaThuTaiCung("Tử Tức", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", "Lộc Tồn") || isSaoToaThuTaiCung("Tử Tức", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Hóa Lộc")) {
            console.log("Song Lộc hội chiếu tại cung Tử Tức");
            keyArr.push("Song Lộc hội chiếu tại cung Tử Tức");

        }
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Lộc Tồn", "Thiên Mã")) {
            console.log("Lộc Tồn đồng cung Thiên Mã tại cung Tử Tức");
            keyArr.push("Lộc Tồn đồng cung Thiên Mã tại cung Tử Tức");
        }
        if (isSaoToaThuTaiCung("Tử Tức", "Thiên Mã") && kiemTraCachCuc("Thiên Mã", "Lộc Tồn") && kiemTraCachCuc("Thiên Mã", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false || isSaoToaThuTaiCung("Tử Tức", "Lộc Tồn") && kiemTraCachCuc("Lộc Tồn", "Thiên Mã") && kiemTraCachCuc("Lộc Tồn", ["Thiên Không", "Địa Kiếp", "Tuế Phá"]) === false) {
            console.log("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
            keyArr.push("Lộc Mã giao trì không gặp Tuế Phá, Địa Kiếp, Thiên Không");
        }
    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Tử Tức ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Tử Tức ở ${tyngo[i]}`);

        }
        if (isSaoToaThuTaiCungVaChi("Điền Trạch", tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung Điền Trạch ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung Điền Trạch ở ${tyngo[i]}`);
        }
        if (isSaoToaThuTaiCungVaChi(lasoData.cungCu, tyngo[i], "Lộc Tồn")) {
            console.log(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
            keyArr.push(`Lộc Tồn toạ thủ cung ${lasoData.cungCu} ở ${tyngo[i]}`);
        }
    }
}

function LuanCachCucTaHuuTuTuc(keyArr) {
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
        if (isSaoToaThuTaiCung("Tử Tức", TaHuu[i])) {
           
            if (kiemTraCachCuc(TaHuu[i], tuphuxuongkhuckhoivietkhoaquyenloc)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tử Tức gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tử Tức gặp`, tuphuxuongkhuckhoivietkhoaquyenloc.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], conguyetdongluonglongphuong)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tử Tức gặp`, conguyetdongluonglongphuong.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tử Tức gặp`, conguyetdongluonglongphuong.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], lucsattinh)) {
                console.log(`${TaHuu[i]} toạ thủ cung Tử Tức gặp các sao Sát tinh: `, lucsattinh.join(", "));
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tử Tức gặp các sao Sát tinh: `, lucsattinh.join(", "));
            }
            if (kiemTraCachCuc(TaHuu[i], ["Kình Dương"])) {
                console.log(`${TaHuu[i]} toạ thủ cung Tử Tức gặp Kình Dương`);
                keyArr.push(`${TaHuu[i]} toạ thủ cung Tử Tức gặp Kình Dương`);
            }
        }
    }
    for (let i = 0; i < suumui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", suumui[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc(KhoaLocQuyen)) {
            console.log(`Tả Phù, Hữu Bật đồng cung Tử Tức ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
            keyArr.push(`Tả Phù, Hữu Bật đồng cung Tử Tức ở ${suumui[i]} gặp các sao Khoa, Lộc, Quyền`);
        }
    }
    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], "Tả Phù") && isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], "Hữu Bật") && kiemTraCachCuc("Tả Phù", KhoaLocQuyen.concat("Tử Vi", "Thiên Phủ"))) {
            console.log(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp các sao Khoa, Lộc, Quyền, Tử Vi, Thiên Phủ`);
            if (kiemTraCachCuc("Tả Phù", ["Thiên Cơ", "Thiên Đồng", "Thiên Lương", "Long Trì", "Phượng Các"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp Thiên Cơ, Thiên Đồng, Thiên Lương, Long Trì, Phượng Các`);
            }
            if (kiemTraCachCuc("Tả Phù", ["Thất Sát", "Phá Quân", "Liêm Trinh"])) {
                console.log(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
                keyArr.push(`Tả Phù, Hữu Bật toạ thủ cung Tử Tức ở ${tumo[i]} gặp Thất Sát, Phá Quân, Liêm Trinh`);
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Tả Phù", "Hữu Bật") && kiemTraCachCuc("Tả Phù", ["Văn Xương ", "Văn Khúc", "Thiên Khôi", "Thiên Việt"])) {
                console.log(`Tả Phù, Hữu Bật đồng cung tại Tử Tức ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
                keyArr.push(`Tả Phù, Hữu Bật đồng cung tại Tử Tức ở ${tumo[i]} gặp Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt`);
            }

        }


    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Hữu Bật", "Thiên Tướng")) {
            console.log(`Hữu Bật, Thiên Tướng đồng cung tại Tử Tức ở ${tyhoi[i]}`);
            keyArr.push(`Hữu Bật, Thiên Tướng đồng cung tại Tử Tức ở ${tyhoi[i]}`);
        }
    }



    if (isSaoToaThuTaiCung("Phụ Mẫu", "Tả Phù") && isSaoToaThuTaiCung("Huynh Đệ", "Hữu Bật") || isSaoToaThuTaiCung("Phụ Mẫu", "Hữu Bật") && isSaoToaThuTaiCung("Huynh Đệ", "Tả Phù")) {
        console.log(`Tả Phù Hữu Bật giáp Tử Tức`);
        keyArr.push(`Tả Phù Hữu Bật giáp Tử Tức`);
        if (isSaoToaThuTaiCung("Tử Tức", "Tử Vi")) {
            console.log(`Tử Tức có Tử Vi giáp Tả Phù Hữu Bật`);
            keyArr.push(`Tử Tức có Tử Vi giáp Tả Phù Hữu Bật`);
        }
    }
}
function LuanCachCucKinhDuongDaLaTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }


    const dac_dia = ["Thìn", " Tuất", "Sửu", "Mùi"];
    const ham_dia = ["Tý", "Dần", "Mão", "Tỵ", "Ngọ", "Thân", "Dậu", "Hợi"];
    const tymui = ["Tỵ", "Mùi"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];

    if (isSaoToaThuTaiCung("Tử Tức", "Kình Dương")) {
       
        if (kiemTraCachCuc("Kình Dương", ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
            console.log("Kình Dương toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
            keyArr.push("Kình Dương toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Cự Môn");
        }
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Kình Dương", "Cự Môn") && isHaiSaoDongCungTaiCung("Tử Tức", "Kình Dương", "Liêm Trinh") && isHaiSaoDongCungTaiCung("Tử Tức", "Kình Dương", "Hóa Kỵ")) {
            console.log("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Tử Tức");
            keyArr.push("Kình Dương, Cự Môn, Liêm Trinh, Hóa Kỵ đồng cung tại Tử Tức");
        }

    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham_dia[i], "Kình Dương")) {
            console.log(`Kình Dương toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
            keyArr.push(`Kình Dương toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
        }
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Thái Dương", "Thái Âm") && kiemTraCachCuc("Kình Dương", ["Thái Dương", "Thái Âm"])) {
        console.log("Thái Dương, Thái Âm đồng cung tại Tử Tức gặp Kình Dương");
        keyArr.push("Thái Dương, Thái Âm đồng cung tại Tử Tức gặp Kình Dương");
    }

    for (let i = 0; i < tymui.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tymui[i], "Thiên Phủ", "Tử Vi") && kiemTraCachCuc("Kình Dương", ["Thiên Phủ", "Tử Vi"])) {
            console.log(`Thiên Phủ, Tử Vi đồng cung tại Tử Tức ở ${tymui[i]} gặp Kình Dương`);
            keyArr.push(`Thiên Phủ, Tử Vi đồng cung tại Tử Tức ở ${tymui[i]} gặp Kình Dương`);
        }
    }

    if (kiemTraCachCuc("Kình Dương", ["Thiên Khôi", "Hóa Quyền", "Hóa Lộc", "Thiên Mã"]) && isSaoToaThuTaiCung("Tử Tức", "Kình Dương")) {
        console.log("Kình Dương toạ thủ cung Tử Tức gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
        keyArr.push("Kình Dương toạ thủ cung Tử Tức gặp Thiên Khôi, Hóa Quyền, Hóa Lộc, Thiên Mã");
    }
    if (isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Kình Dương", "Thái Âm") && isHaiSaoDongCungTaiCungChi("Tử Tức", "Ngọ", "Kình Dương", "Thiên Đồng") && kiemTraCachCuc("Kình Dương", ["Địa Giải", "Phượng Các"])) {
        console.log("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Tử Tức ở Ngọ gặp Địa Giải, Phượng Các");
        keyArr.push("Kình Dương, Thái Âm, Thiên Đồng đồng cung tại Tử Tức ở Ngọ gặp Địa Giải, Phượng Các");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Tham Lang", "Vũ Khúc") && isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Kình Dương", "Tham Lang")) {
            console.log(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Tử Tức ở ${tumo[i]}`);
            keyArr.push(`Tham Lang, Vũ Khúc, Kình Dương đồng cung tại Tử Tức ở ${tumo[i]}`);

        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Hỏa Tinh", "Linh Tinh", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Đà La");
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Kình Dương") && kiemTraCachCuc("Kình Dương", ["Địa Không", "Địa Kiếp", "Đà La"])) {
        console.log("Kình Dương toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp, Đà La");
        keyArr.push("Kình Dương toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp, Đà La");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Kình Dương") && isSaoToaThuTaiCung("Huynh Đệ", "Đà La") || isSaoToaThuTaiCung("Phụ Mẫu", "Đà La") && isSaoToaThuTaiCung("Huynh Đệ", "Kình Dương")) {
        console.log(`Kình Dương, Đà La giáp Tử Tức`);
        keyArr.push(`Kình Dương, Đà La giáp Tử Tức`);
        if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ")) {
            console.log(`Tử Tức có Hóa Kỵ giáp Kình Dương, Đà La`);
            keyArr.push(`Tử Tức có Hóa Kỵ giáp Kình Dương, Đà La`);
        }

    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Kình Dương", "Lực Sỹ")) {
        console.log("Kình Dương, Lực Sỹ đồng cung tại Tử Tức");
        keyArr.push("Kình Dương, Lực Sỹ đồng cung tại Tử Tức");
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Đà La")) {
      
        if (kiemTraCachCuc("Đà La", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Địa Không", "Địa Kiếp"])) {
            console.log("Đà La toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");
            keyArr.push("Đà La toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Địa Không, Địa Kiếp");

        }
        if (kiemTraCachCuc("Đà La", ["Hóa Kỵ", "Liêm Trinh", "Thiên Hình"])) {
            console.log("Đà La toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
            keyArr.push("Đà La toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Thiên Hình");
        }
    }
    for (let i = 0; i < dac_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", dac_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", ham_dia[i], "Đà La")) {
            console.log(`Đà La toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
            keyArr.push(`Đà La toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
        }
    }
}

function LuanCachCucHoaLinhTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const dac_dia = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ"];
    const ham_dia = ["Tý", "Sửu", "Dậu", "Hợi", "Tuất", "Mùi", "Thân"];
    const tumo = ["Thìn", "Tuất", "Sửu", "Mùi"];
    const thamvu = ["Tham Lang", "Vũ Khúc"];

    for (let i = 0; i < HoaLinh.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", HoaLinh[i])) {
            
            if (kiemTraCachCuc(HoaLinh[i], ["Hóa Kỵ", "Liêm Trinh", "Cự Môn"])) {
                console.log(`${HoaLinh[i]} toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
                keyArr.push(`${HoaLinh[i]} toạ thủ cung Tử Tức gặp Hóa Kỵ, Liêm Trinh, Cự Môn`);
            }
        }
    }

    for (let i = 0; i < dac_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", dac_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", ham_dia[i], HoaLinh[j])) {
                console.log(`${HoaLinh[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
                keyArr.push(`${HoaLinh[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
            }
        }
    }

    for (let i = 0; i < tumo.length; i++) {
        for (let j = 0; j < HoaLinh.length; j++) {
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Tham Lang", "Vũ Khúc") && kiemTraCachCuc(HoaLinh[j], ["Tham Lang", "Vũ Khúc"])) {
                console.log(`Tham Lang, Vũ Khúc đồng cung Tử Tức ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                keyArr.push(`Tham Lang, Vũ Khúc đồng cung Tử Tức ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                if (isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Địa Kiếp", "Vũ Khúc")) {
                    console.log(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Tử Tức ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                    keyArr.push(`Địa Kiếp, Tham Lang, Vũ Khúc đồng cung Tử Tức ở ${tumo[i]} gặp ${HoaLinh[j]}`);
                }
            }
        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Hỏa Tinh") && isSaoToaThuTaiCung("Điền Trạch", "Linh Tinh")) {
        console.log("Hỏa Tinh toạ thủ cung Tử Tức gặp Linh Tinh ở Điền Trạch");
        keyArr.push("Hỏa Tinh toạ thủ cung Tử Tức gặp Linh Tinh ở Điền Trạch");
        if (kiemTraCachCuc("Hỏa Tinh", ["Kình Dương"])) {
            console.log("Hỏa Tinh toạ thủ cung Tử Tức đối xung Linh Tinh và gặp Kình Dương");
            keyArr.push("Hỏa Tinh toạ thủ cung Tử Tức đối xung Linh Tinh và gặp Kình Dương");
        }
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Linh Tinh") && isSaoToaThuTaiCung("Điền Trạch", "Hỏa Tinh")) {
        console.log("Linh Tinh toạ thủ cung Tử Tức gặp Hỏa Tinh ở Điền Trạch");
        keyArr.push("Linh Tinh toạ thủ cung Tử Tức gặp Hỏa Tinh ở Điền Trạch");
        if (kiemTraCachCuc("Linh Tinh", ["Kình Dương"])) {
            console.log("Linh Tinh toạ thủ cung Tử Tức đối xung Hỏa Tinh và gặp Kình Dương");
            keyArr.push("Linh Tinh toạ thủ cung Tử Tức đối xung Hỏa Tinh và gặp Kình Dương");
        }
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Hỏa Tinh", "Linh Tinh")) {
        console.log("Hỏa Tinh, Linh Tinh đồng cung tại Tử Tức");
        keyArr.push("Hỏa Tinh, Linh Tinh đồng cung tại Tử Tức");
    }

    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Hợi", "Hỏa Tinh") && kiemTraCachCuc("Hỏa Tinh", ["Thiên Hình", "Tham Lang"])) {
        console.log("Hỏa Tinh toạ thủ cung Tử Tức ở Hợi gặp Thiên Hình, Tham Lang");
        keyArr.push("Hỏa Tinh toạ thủ cung Tử Tức ở Hợi gặp Thiên Hình, Tham Lang");
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Linh Tinh", "Thiên Mã") && kiemTraCachCuc("Linh Tinh", ["Kình Dương", "Đà La"])) {
        console.log("Linh Tinh đồng cung với Thiên Mã tại Tử Tức gặp Kình Dương, Đà La");
        keyArr.push("Linh Tinh đồng cung với Thiên Mã tại Tử Tức gặp Kình Dương, Đà La");
    }
}

function LuanCachCucKhongKiepTuTuc(keyArr) {
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
            if (isSaoToaThuTaiCungVaChi("Tử Tức", dac_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${dac_dia[i]} gặp Đào Hoa, Hồng Loan`);

                }

            }
        }
    }
    for (let i = 0; i < ham_dia.length; i++) {
        for (let j = 0; j < khongkiep.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", ham_dia[i], khongkiep[j])) {
                console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
                keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]}`);
                if (kiemTraCachCuc(khongkiep[j], ["Tử Vi", "Thiên Phủ"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Tử Vi, Thiên Phủ`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La`);
                }
                if (kiemTraCachCuc(khongkiep[j], ["Đào Hoa", "Hồng Loan"])) {
                    console.log(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                    keyArr.push(`${khongkiep[j]} toạ thủ cung Tử Tức ở ${ham_dia[i]} gặp Đào Hoa, Hồng Loan`);
                }


            }
        }
    }

    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung tại Tử Tức ở ${tyhoi[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Tử Tức ở ${tyhoi[i]}`);
        }
    }
    for (let i = 0; i < tusinh.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tusinh[i], "Địa Không", "Địa Kiếp")) {
            console.log(`Địa Không, Địa Kiếp đồng cung tại Tử Tức ở ${tusinh[i]}`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung tại Tử Tức ở ${tusinh[i]}`);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", danthan[i], "Địa Không", "Địa Kiếp") && kiemTraCachCuc("Địa Không", ["Hoá Lộc", "Hoá Quyền", "Văn Xương"])) {
            console.log(`Địa Không, Địa Kiếp đồng cung Tử Tức ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
            keyArr.push(`Địa Không, Địa Kiếp đồng cung Tử Tức ở ${danthan[i]} gặp Hoá Lộc, Hoá Quyền, Văn Xương`);
        }
    }


    if (isSaoToaThuTaiCung("Phụ Mẫu", "Địa Không") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Kiếp") || isSaoToaThuTaiCung("Phụ Mẫu", "Địa Kiếp") && isSaoToaThuTaiCung("Huynh Đệ", "Địa Không")) {
        console.log(`Địa Không, Địa Kiếp giáp Tử Tức`);
        keyArr.push(`Địa Không, Địa Kiếp giáp Tử Tức`);
        if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ")) {
            console.log(`Tử Tức có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
            keyArr.push(`Tử Tức có Hóa Kỵ giáp Địa Không, Địa Kiếp`);
        }

    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Địa Kiếp", "Thiên Cơ") && kiemTraCachCuc("Địa Kiếp", ["Hoả Tinh"])) {
        console.log("Địa Kiếp, Thiên Cơ đồng cung tại Tử Tức gặp Hoả Tinh");
        keyArr.push("Địa Kiếp, Thiên Cơ đồng cung tại Tử Tức gặp Hoả Tinh");
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Địa Kiếp", "Tham Lang") && isHaiSaoDongCungTaiCung("Tử Tức", "Địa Kiếp", "Lưu Hà")) {
        console.log("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Tử Tức");
        keyArr.push("Địa Kiếp, Tham Lang Lưu Hà đồng cung tại Tử Tức");

    }
    for (let i = 0; i < tyhoi.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Địa Không", "Địa Kiếp") && isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Địa Không", "Thiên Tướng") && isHaiSaoDongCungTaiCungChi("Tử Tức", tyhoi[i], "Địa Không", "Thiên Mã")) {
            console.log("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Tử Tức ở " + tyhoi[i]);
            keyArr.push("Địa Không, Địa Kiếp, Thiên Tướng, Thiên Mã đồng cung tại Tử Tức ở " + tyhoi[i]);
        }
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Địa Kiếp") && kiemTraCachCuc("Địa Kiếp", cunhatphukhockhach)) {
        console.log("Địa Kiếp toạ thủ cung Tử Tức gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
        keyArr.push("Địa Kiếp toạ thủ cung Tử Tức gặp Cự Môn, Thái Dương, Thiên Phủ, Thiên Khốc, Thiên Hư");
    }
}
function LuanCachCucTuHoaTuTuc(keyArr) {
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

    if (isSaoToaThuTaiCung("Tử Tức", "Hoá Lộc")) {
       
        if (kiemTraCachCuc("Hoá Lộc", ["Hóa Quyền", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Thiên Mã"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức gặp Thiên Mã");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Lộc", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Hoá Quyền")) {
       
        if (kiemTraCachCuc("Hoá Quyền", ["Hóa Lộc", "Hóa Khoa", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Khoa, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Thiên Mã"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Thiên Mã");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hoá Quyền", ["Vũ Khúc", "Cự Môn"])) {
            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp Vũ Khúc, Cự Môn");
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp Vũ Khúc, Cự Môn");
        }
        if (kiemTraCachCuc("Hoá Quyền", lucsattinh)) {

            console.log("Hoá Quyền toạ thủ cung Tử Tức gặp " + lucsattinh.join(", "));
            keyArr.push("Hoá Quyền toạ thủ cung Tử Tức gặp " + lucsattinh.join(", "));
        }
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hoá Khoa")) {
        
        if (kiemTraCachCuc("Hoá Khoa", ["Hóa Lộc", "Hóa Quyền", "Văn Xương", "Văn Khúc"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Thiên Mã"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Thiên Mã");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
        }
        if (kiemTraCachCuc("Hoá Khoa", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
        }
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ")) {
        
        if (kiemTraCachCuc("Hóa Kỵ", ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Đào Hoa", "Hồng Loan"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Đào Hoa, Hồng Loan");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Mã"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Mã");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Mã");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
        }

        if (kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm", "Thiên Hình"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Thái Dương, Thái Âm, Thiên Hình");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Thái Dương, Thái Âm, Thiên Hình");
        }
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Hóa Kỵ", "Cự Môn")) {
            console.log("Hóa Kỵ, Cự Môn đồng cung tại Tử Tức");
            keyArr.push("Hóa Kỵ, Cự Môn đồng cung tại Tử Tức");
        }
        if (isHaiSaoDongCungTaiCung("Tử Tức", "Hóa Kỵ", "Tham Lang")) {
            console.log("Hóa Kỵ, Tham Lang đồng cung tại Tử Tức");
            keyArr.push("Hóa Kỵ, Tham Lang đồng cung tại Tử Tức");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Tử Vi", "Thiên Phủ"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Tử Vi, Thiên Phủ");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Khôi", "Thiên Việt", "Văn Xương", "Văn Khúc"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Khôi, Thiên Việt, Văn Xương, Văn Khúc");
        }
        if (kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
            console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Đồng, Thiên Lương");
            keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Thiên Đồng, Thiên Lương");
        }



    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thái Dương", "Thái Âm"])) {
        console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Thái Dương, Thái Âm");
        keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Thái Dương, Thái Âm");
    }

    for (let i = 0; i < tumo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tumo[i], "Hoá Lộc") && isHaiSaoDongCungTaiCungChi("Tử Tức", tumo[i], "Tham Lang", "Vũ Khúc")) {
            console.log("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Tử Tức ở " + tumo[i]);
            keyArr.push("Hoá Lộc, Tham Lang, Vũ Khúc đồng cung tại Tử Tức ở " + tumo[i]);
        }
    }

    for (let i = 0; i < dinhky.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", "Hoá Lộc") && isSaoToaThuTaiCung("Điền Trạch", "Lộc Tồn") && lasoData.canNam === dk[i]) {
            console.log("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Tử Tức gặp Lộc Tồn ở Điền Trạch");
            keyArr.push("Người tuổi " + dinhky[i] + " có Hoá Lộc toạ thủ cung Tử Tức gặp Lộc Tồn ở Điền Trạch");
        }
    }


    for (let i = 0; i < ngothintuat.length; i++) {
        if (isHaiSaoDongCungTaiCungChi("Tử Tức", ngothintuat[i], "Hoá Lộc", "Thiên Lương")) {
            console.log("Hoá Lộc, Thiên Lương đồng cung tại Tử Tức ở " + ngothintuat[i]);
            keyArr.push("Hoá Lộc, Thiên Lương đồng cung tại Tử Tức ở " + ngothintuat[i]);
        }
    }

    for (let i = 0; i < danthan.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[i], "Hoá Lộc") && kiemTraCachCuc("Hóa Lộc", ["Thiên Cơ", "Thiên Lương", "Lộc Tồn"])) {
            console.log("Hoá Lộc toạ thủ cung Tử Tức ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
            keyArr.push("Hoá Lộc toạ thủ cung Tử Tức ở " + danthan[i] + " gặp Thiên Cơ, Thiên Lương, Lộc Tồn");
        }
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Hóa Quyền", "Hóa Lộc") && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Quyền, Hóa Lộc đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Quyền, Hóa Lộc đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Quyền") && kiemTraCachCuc("Hóa Quyền", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Quyền", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Quyền toạ thủ cung Tử Tức gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Quyền toạ thủ cung Tử Tức gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");

    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền")) {
        console.log(`Hóa Quyền, Hóa Lộc giáp Tử Tức`);
        keyArr.push(`Hóa Quyền, Hóa Lộc giáp Tử Tức`);
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Lộc"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa toạ thủ cung Tử Tức gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa toạ thủ cung Tử Tức gặp Hóa Lộc, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Hóa Khoa", "Hóa Lộc") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa, Hóa Lộc đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa, Hóa Lộc đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Khoa"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Khoa, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Lộc") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Lộc") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        console.log(`Hóa Khoa, Hóa Lộc giáp Tử Tức`);
        keyArr.push(`Hóa Khoa, Hóa Lộc giáp Tử Tức`);
    }


    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Lộc") && kiemTraCachCuc("Hóa Lộc", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Lộc", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Lộc toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Hóa Khoa", "Hóa Quyền") && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa, Hóa Quyền đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa, Hóa Quyền đồng cung tại Tử Tức không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Hóa Quyền"]) && kiemTraCachCuc("Hóa Khoa", ["Địa Không", "Địa Kiếp"]) === false) {
        console.log("Hóa Khoa toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Khoa toạ thủ cung Tử Tức gặp Hóa Quyền, không gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Khoa") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Quyền") || isSaoToaThuTaiCung("Phụ Mẫu", "Hóa Quyền") && isSaoToaThuTaiCung("Huynh Đệ", "Hóa Khoa")) {
        console.log(`Hóa Khoa, Hóa Quyền giáp Tử Tức`);
        keyArr.push(`Hóa Khoa, Hóa Quyền giáp Tử Tức`);
    }

    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen) && kiemTraCachCuc("Hóa Kỵ", ["Địa Không", "Địa Kiếp"])) {
        console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
        keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, gặp Địa Không, Địa Kiếp");
    }
    if (isSaoToaThuTaiCung("Tử Tức", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", KhoaLocQuyen.concat(XuongKhuc).concat(KhoiViet))) {
        console.log("Hóa Kỵ toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");
        keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức gặp Hóa Lộc, Hóa Quyền, Văn Xương, Văn Khúc, Thiên Khôi, Thiên Việt");

    }
    for (let i = 0; i < tyngo.length; i++) {
        if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[i], "Hóa Khoa") && kiemTraCachCuc("Hóa Khoa", ["Thiên Đồng", "Thiên Lương"])) {
            console.log("Hoá Khoa toạ thủ cung Tử Tức ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
            keyArr.push("Hoá Khoa toạ thủ cung Tử Tức ở " + tyngo[i] + " gặp Thiên Đồng, Thiên Lương");
        }
    }

    if (isSaoToaThuTaiCungVaChi("Tử Tức", "Tý", "Hóa Kỵ") && kiemTraCachCuc("Hóa Kỵ", ["Thiên Đồng", "Thiên Lương"])) {
        console.log("Hóa Kỵ toạ thủ cung Tử Tức ở Tý gặp Thiên Đồng, Thiên Lương");
        keyArr.push("Hóa Kỵ toạ thủ cung Tử Tức ở Tý gặp Thiên Đồng, Thiên Lương");
    }

    if (isHaiSaoDongCungTaiCung("Tử Tức", "Hoá Quyền", "Thiên Khốc ")) {
        console.log("Hoá Quyền, Thiên Khốc đồng cung tại Tử Tức");
        keyArr.push("Hoá Quyền, Thiên Khốc đồng cung tại Tử Tức");
    }

}

function LuanCachCucLucBaiTinhTuTuc(keyArr) {
    const lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};

    const songhao_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const tangho_dac = ["Dần", "Thân", "Mão", "Dậu"];
    const danthan = ["Dần", "Thân"];
    const songhao = ["Đại Hao", "Tiểu Hao"];
    const tangho = ["Tang Môn", "Bạch Hổ"];

   


    for (let i = 0; i < songhao_dac.length; i++) {

        for (let j = 0; j < songhao.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", songhao_dac[i], songhao[j])) {
                console.log(songhao[j] + " toạ thủ tại cung Tử Tức ở " + songhao_dac[i]);
                keyArr.push(songhao[j] + " toạ thủ tại cung Tử Tức ở " + songhao_dac[i]);
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", songhao[i]) && kiemTraCachCuc("Vô Chính Diệu", songhao[i])) {
            console.log("Cung Tử Tức Vô Chính Diệu có " + songhao[i]);
            keyArr.push("Cung Tử Tức Vô Chính Diệu có " + songhao[i]);
        }
    }

    for (let i = 0; i < tangho.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", tangho[i])) {
           
            for (let j = 0; j < tangho_dac.log; j++) {
                if (isSaoToaThuTaiCungVaChi("Tử Tức", tangho_dac[j], tangho[i])) {
                    console.log(tangho[i] + " toạ thủ cung Tử Tức tại " + tangho_dac[j]);
                    keyArr.push(tangho[i] + " toạ thủ cung Tử Tức tại " + tangho_dac[j]);
                }
            }
            if (lasoData.gioitinh === "Nữ") {
                console.log("Quý Chị có " + tangho[i] + " toạ thủ cung Tử Tức");
                keyArr.push("Quý Chị có " + tangho[i] + " toạ thủ cung Tử Tức");
            }
        }
    }

    for (let i = 0; i < tangho.length; i++) {

        if (isSaoToaThuTaiCung("Tử Tức", tangho[i]) && kiemTraCachCuc(tangho[i], ["Hỏa Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log(tangho[i] + " toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push(tangho[i] + " toạ thủ cung Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }
        if (isSaoToaThuTaiCung("Tử Tức", tangho[i]) && kiemTraCachCuc(tangho[i], ["Địa Không", "Địa Kiếp"])) {
            console.log(tangho[i] + " toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
            keyArr.push(tangho[i] + " toạ thủ cung Tử Tức gặp Địa Không, Địa Kiếp");
        }
        if (isSaoToaThuTaiCung("Tử Tức", tangho[i]) && kiemTraCachCuc(tangho[i], ["Kình Dương ", "Thiên Hình"])) {

            console.log(tangho[i] + " toạ thủ cung Tử Tức gặp Kinh Dương, Thiên Hình");
            keyArr.push(tangho[i] + " toạ thủ cung Tử Tức gặp Kinh Dương, Thiên Hình");

        }

        if (isHaiSaoDongCungTaiCung("Tử Tức", tangho[i], "Tham Lang") && kiemTraCachCuc("Tham Lang", ["Hoả Tinh", "Linh Tinh", "Kình Dương", "Đà La"])) {
            console.log(tangho[i] + ", Tham Lang đồng cung tại Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
            keyArr.push(tangho[i] + ", Tham Lang đồng cung tại Tử Tức gặp Hỏa Tinh, Linh Tinh, Kình Dương, Đà La");
        }

    }
    
  
    if (isSaoToaThuTaiCung("Tử Tức", "Bạch Hổ") && kiemTraCachCuc("Bạch Hổ", ["Thiên Hình"])) {

        console.log("Bạch Hổ toạ thủ cung Tử Tức gặp Thiên Hình");
        keyArr.push("Bạch Hổ toạ thủ cung Tử Tức gặp Thiên Hình");
        

    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Thiên Hình")) {
        console.log("Bạch Hổ, Thiên Hình đồng cung tại Tử Tức");      
        keyArr.push("Bạch Hổ, Thiên Hình đồng cung tại Tử Tức");

    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Tấu Thư")) {
        console.log("Bạch Hổ, Tấu Thư đồng cung tại Tử Tức");
        keyArr.push("Bạch Hổ, Tấu Thư đồng cung tại Tử Tức");
    }
    if (isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Phi Liêm")) {
        console.log("Bạch Hổ, Phi Liêm đồng cung tại Tử Tức");
        keyArr.push("Bạch Hổ, Phi Liêm đồng cung tại Tử Tức");
    }



    const khochu = ["Thiên Khốc", "Thiên Hư"];
    const khochu_dac = ["Tý", "Ngọ", "Mão", "Dậu", "Sửu", "Mùi"];
    const khochu_ham = ["Dần", "Thân", "Tỵ", "Hợi", "Thìn", "Tuất"];
    const tyngo = ["Tý", "Ngọ"];
    const maodau = ["Mão", "Dậu"];

    for (let i = 0; i < khochu.length; i++) {
        if (isSaoToaThuTaiCung("Tử Tức", khochu[i])) {
            
            for (let j = 0; j < khochu_dac.length; j++) {
                if (isSaoToaThuTaiCungVaChi("Tử Tức", khochu_dac[j], khochu[i])) {
                    console.log((khochu[i] + " toạ thủ cung Tử Tức tại " + khochu_dac[j]));
                    keyArr.push((khochu[i] + " toạ thủ cung Tử Tức tại " + khochu_dac[j]));
                    if (kiemTraCachCuc(khochu[i], ["Hóa Lộc"])) {
                        console.log(khochu[i] + " toạ thủ cung Tử Tức tại " + khochu_dac[j] + " gặp Hóa Lộc");
                        keyArr.push(khochu[i] + " toạ thủ cung Tử Tức tại " + khochu_dac[j] + " gặp Hóa Lộc");
                    }
                }
            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < tyngo.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", tyngo[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La", "Hỏa Tinh", "Linh Tinh"])) {
                console.log(khochu[i] + " toạ thủ cung Tử Tức tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
                keyArr.push(khochu[i] + " toạ thủ cung Tử Tức tại " + tyngo[j] + " gặp Kình Dương, Đà La, Hỏa Tinh, Linh Tinh");
            }
            if (isHaiSaoDongCungTaiCungChi("Tử Tức", tyngo[j], khochu[i], "Phá Quân")) {
                console.log(khochu[i] + " đồng cung Phá Quân tại Tử Tức" + " ở " + tyngo[j]);
                keyArr.push(khochu[i] + " đồng cung Phá Quân tại Tử Tức" + " ở " + tyngo[j]);
            }
        }
    }
    for (let k = 0; k < khochu.length; k++) {
        for (let i = 0; i < khochu_ham.length; i++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", khochu_ham[i], khochu[k])) {
                console.log(khochu[k] + " toạ thủ cung Tử Tức tại " + khochu_ham[i]);
                keyArr.push(khochu[k] + " toạ thủ cung Tử Tức tại " + khochu_ham[i]);

            }
        }
    }
    for (let i = 0; i < khochu.length; i++) {
        for (let j = 0; j < danthan.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Kình Dương", "Đà La"])) {
                console.log(khochu[i] + " toạ thủ cung Tử Tức tại " + danthan[j] + " gặp Kình Dương, Đà La");
                keyArr.push(khochu[i] + " toạ thủ cung Tử Tức tại " + danthan[j] + " gặp Kình Dương, Đà La");
            }
            if (isSaoToaThuTaiCungVaChi("Tử Tức", danthan[j], khochu[i]) && kiemTraCachCuc(khochu[i], ["Thiên Hình", "Thiên Mã"])) {
                console.log(khochu[i] + " toạ thủ cung Tử Tức tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
                keyArr.push(khochu[i] + " toạ thủ cung Tử Tức tại " + danthan[j] + " gặp Thiên Hình, Thiên Mã");
            }
        }
    }

    for (let i = 0; i < songhao.length; i++) {
        for (let j = 0; j < maodau.length; j++) {
            if (isSaoToaThuTaiCungVaChi("Tử Tức", maodau[j], songhao[i]) && kiemTraCachCuc(songhao[i], ["Thiên Cơ", "Cự Môn"])) {
                console.log(songhao[i] + " toạ thủ cung Tử Tức tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
                keyArr.push(songhao[i] + " toạ thủ cung Tử Tức tại " + maodau[j] + " gặp Thiên Cơ, Cự Môn");
            }
        }
    }
}




function ThanMenhDongCungVoChinhDieu(keyArr) {
    if (idCungThan === idCungMenh && getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        keyArr.push("Thân và Tử Tức đồng cung Vô Chính Diệu");
        return true;
    }
}
function LuanCacCachCucKhacTuTuc(keyArr) {
    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }
    const lasoOb = lasoData.lasoOb || [];
    if (!Array.isArray(lasoOb)) return;
    const cungMenh = lasoOb.find(c => c.tenCung === 'Tử Tức');
    const chiCungMenh = lasoData.lasoOb[0].chi;

    // Nếu là đàn ông sinh năm Ngọ, Mùi, Tử Tức an tại Tý, Sửu thì cuộc đời vất vả lo toan

    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Ngọ, Tử Tức an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Ngọ') &&
        (chiCungMenh === 'Sửu')) {
        keyArr.push("Anh sinh năm Ngọ, Tử Tức an tại Sửu");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Tử Tức an tại Tý");
    }
    if (lasoData.gioitinh === 'Nam' &&
        (lasoData.chiNam === 'Mùi') &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Anh sinh năm Mùi, Tử Tức an tại Sửu");
    }

    // Nếu là đàn bà cung Tử Tức an tại Tứ Mộ khôn ngoan

    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Thìn' || chiCungMenh === 'Sửu' || chiCungMenh === 'Tuất' || chiCungMenh === 'Mùi')) {
        keyArr.push("Cung Tử Tức của chị được an tại ví trí Tứ Mộ");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Dậu')) {
        keyArr.push("Cung Tử Tức của chị được an tại ví trí cung Dậu");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Tý')) {
        keyArr.push("Cung Tử Tức của chị được an tại ví trí cung Tý");
    }
    if (lasoData.gioitinh === 'Nữ' &&
        (chiCungMenh === 'Ngọ')) {
        keyArr.push("Cung Tử Tức của chị được an tại ví trí cung Ngọ");
    }

    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Thìn") {
        keyArr.push("Thân và Tử Tức đồng cung Vô Chính Diệu tại Thìn");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Tuất") {
        keyArr.push("Thân và Tử Tức đồng cung Vô Chính Diệu tại Tuất");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Sửu") {
        keyArr.push("Thân và Tử Tức đồng cung Vô Chính Diệu tại Sửu");
    }
    if (ThanMenhDongCungVoChinhDieu(keyArr) && chiCungMenh === "Mùi") {
        keyArr.push("Thân và Tử Tức đồng cung Vô Chính Diệu tại Mùi");
    }

    //Tử Tức vô chính diệu gặp Song Hao
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Tử Tức Vô Chính Diệu gặp Song Hao");
    }
    // Tử Tức vô chính diệu gặp Song Hao có Thiên Đồng,hoặc Thiên Lương, hoặc Thiên Cơ
    if (isCungVoChinhDieu(idCungMenh) && kiemTraCachCuc('Vô Chính Diệu', ['Thiên Đồng', 'Thiên Lương', 'Thiên Cơ']) && kiemTraCachCuc('Vô Chính Diệu', ['Đại Hao', 'Tiểu Hao'])) {
        keyArr.push("Cung Tử Tức Vô Chính Diệu gặp Song Hao có Thiên Đồng, Thiên Lương, hoặc Thiên Cơ");
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

    if(isHaiSaoDongCungTaiCung("Tử Tức", "Quan Phù", "Phúc Đức")&& isHaiSaoDongCungTaiCung("Tử Tức","Ân Quang", "Tấu Thư")){
        keyArr.push("Quan Phù, Phúc Đức đồng cung tại Tử Tức, Ân Quang, Tấu Thư đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Đào Hoa","Hồng Loan")&& isHaiSaoDongCungTaiCung("Tử Tức", "Văn Xương", "Văn Khúc")){
        keyArr.push("Đào Hoa, Hồng Loan, Văn Xương, Văn Khúc đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Phủ", "Đào Hoa") && isSaoToaThuTaiCung("Tử Tức", "Tử Vi")){
        keyArr.push("Thiên Phủ, Đào Hoa Tử Vi đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Tướng","Phục Binh")){
        keyArr.push("Thiên Tướng, Phục Binh đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Thất Sát") && isSaoToaThuTaiCung("Tử Tức", "Kình Dương")){
        keyArr.push("Bạch Hổ, Thất Sát, Kình Dương đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Tang Môn","Địa Kiếp")){
        keyArr.push("Bạch Hổ, Tang Môn, Địa Kiếp đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Bạch Hổ", "Tang Môn")&& isHaiSaoDongCungTaiCung("Tử Tức", "Địa Kiếp", "Địa Không")){
        keyArr.push("Bạch Hổ, Tang Môn đồng cung tại Tử Tức, Địa Kiếp, Địa Không đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Khốc", "Thiên Hư")){
        keyArr.push("Thiên Khốc, Thiên Hư đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Tả Phù", "Hữu Bật")){
        keyArr.push("Tả Phù, Hữu Bật đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Thiên Lương", "Thiên Khốc") && isSaoToaThuTaiCung("Tử Tức", "Thái Tuế")){
        keyArr.push("Thiên Lương, Thiên Khốc, Thái Tuế đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Kình Dương", "Đà La") && isHaiSaoDongCungTaiCung("Tử Tức", "Địa Không", "Địa Kiếp")){
        keyArr.push("Kình Dương, Đà La, Địa Không, Địa Kiếp đồng cung tại Tử Tức");
    }
    if( isHaiSaoDongCungTaiCung("Tử Tức", "Thất Sát", "Thiên Hình") && isSaoToaThuTaiCung("Tử Tức", "Bach Hổ")){
        keyArr.push("Thất Sát, Thiên Hình, Bạch Hổ đồng cung tại Tử Tức");
    }
    if(isHaiSaoDongCungTaiCung("Tử Tức", "Hỏa Tinh", "Thái Âm")) {
        keyArr.push("Hỏa Tinh, Thái Âm đồng cung tại Tử Tức");

    }
    if(isHaiSaoDongCungTaiCungChi("Tử Tức", "Tý", "Thái Tuế","Thái Âm") && isSaoToaThuTaiCung("Tử Tức", "Thiên Đồng")){
        keyArr.push("Thái Tuế, Thái Âm, Thiên Đồng toạ thủ cung Tử Tức tại Tý");
    }

}
function MenhVoChinhDieu() {
    if (getDanhSachChinhTinhTungCung()[idCungMenh].chinhTinh.length === 0) {
        console.log("Cung Tử Tức Vô Chính Diệu");
        keyArr.push("Cung Tử Tức Vô Chính Diệu");

    }

}
function MenhKhongThanKiep(idxCungMenh, idxCungThan, dsChinh, dsPhu, keyArr) {

    // Lấy các sao của cung Tử Tức và cung Thân
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
        keyArr.push("Tử Tức Không Thân Kiếp");
        return true;
    } else if (menhKiep && thanKhong) {
        keyArr.push("Tử Tức Kiếp Thân Không");
        return true;

    }
    return false;
}



