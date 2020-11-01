import { DAT_GHE, XOA_GHE } from "../constant/BaiTapDatVePhim";

const stateChoNgoi = {
  danhSachGheDangDat: [],
};

const BaiTapDatVePhimReducer = (state = stateChoNgoi, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (item) => item.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    case XOA_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      danhSachGheDangDatUpdate = danhSachGheDangDatUpdate.filter(
        (ghe) => ghe.soGhe !== action.soGhe
      );

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};

export default BaiTapDatVePhimReducer;
