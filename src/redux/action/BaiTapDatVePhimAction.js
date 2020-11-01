import { DAT_GHE, XOA_GHE } from "../constant/BaiTapDatVePhim";

export const datGhe = (ghe) => ({
  type: DAT_GHE,
  ghe,
});

export const xoaGhe = (soGhe) => ({
  type: XOA_GHE,
  soGhe,
});
