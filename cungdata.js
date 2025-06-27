function getCungData() {

    let lasoData = {};
    try {
        lasoData = JSON.parse(localStorage.getItem('laso_data')) || {};
    } catch (e) { lasoData = {}; }

    return [
        { tenCung: 'Mệnh', luandai: '' ,chi: lasoData.lasoOb[0].chi},

        { tenCung: 'Phụ Mẫu', luandai: '',chi: lasoData.lasoOb[1].chi },
        { tenCung: 'Phúc Đức', luandai: '',chi: lasoData.lasoOb[2].chi },
        { tenCung: 'Điền Trạch', luandai: '',chi: lasoData.lasoOb[3].chi },
        { tenCung: 'Quan Lộc', luandai: '' ,chi: lasoData.lasoOb[4].chi},
        { tenCung: 'Nô Bộc', luandai: '' ,chi: lasoData.lasoOb[5].chi},
        { tenCung: 'Thiên Di', luandai: '',chi: lasoData.lasoOb[6].chi },
        { tenCung: 'Tật Ách', luandai: '' ,chi: lasoData.lasoOb[7].chi},
        { tenCung: 'Tài Bạch', luandai: '',chi: lasoData.lasoOb[8].chi },
        { tenCung: 'Tử Tức', luandai: '' ,chi: lasoData.lasoOb[9].chi},
        { tenCung: 'Phu Thê', luandai: '' ,chi: lasoData.lasoOb[10].chi},
        { tenCung: 'Huynh Đệ', luandai: '',chi: lasoData.lasoOb[11].chi }
    ];
}