import { combineReducers } from "redux";
import BaiTapDatVePhimReducer from "./BaiTapDatVePhimReducer";

export const rootReducer = combineReducers({
  DatVeXemPhimReducer: BaiTapDatVePhimReducer,
});
