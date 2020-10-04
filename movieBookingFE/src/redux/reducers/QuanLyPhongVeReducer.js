const { LAY_DANH_SACH_GHE } = require("../constants/QuanLyPhongVeConstant");

const initialState = {
    danhSachGhe: [],
}

const QuanLyPhongVeReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case LAY_DANH_SACH_GHE:
            state.danhSachGhe = actions.danhSachGhe;
            return { ...state };

        case "TOOGLE_GHE": {
            const danhSachGhe = [...state.danhSachGhe];
            const index = danhSachGhe.findIndex((ghe) => ghe.maGhe === actions.ghe.maGhe);
            // console.log('index', index)

            danhSachGhe[index] = { ...danhSachGhe[index], dangChon: !danhSachGhe[index].dangChon }

            return { ...state, danhSachGhe };
        }
        default:
            return state;

    }
};

export default QuanLyPhongVeReducer;