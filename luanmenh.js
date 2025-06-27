function danhGiaViTriCungMenh(hanh, chi) {
    const quyTac = HANH_DIA_VI[hanh];
    if (!quyTac) return "Không xác định hành";
    if (quyTac.sinh === chi) return "Sinh địa";
    if (quyTac.vuong === chi) return "Vượng địa";
    if (quyTac.bai === chi) return "Bại địa";
    if (quyTac.tuyet === chi) return "Tuyệt địa";
    return "Bình thường";
}