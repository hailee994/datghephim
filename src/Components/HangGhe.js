import React, { Component } from "react";
import { connect } from "react-redux";
import { DAT_GHE } from "../redux/constant/BaiTapDatVePhim";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, i) => {
      let cssGheDaDat = "";
      let disabled = false;

      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDat.findIndex(
        (item) => item.soGhe === ghe.soGhe
      );

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={i}
          disabled={disabled}
          onClick={() => {
            let action = {
              type: DAT_GHE,
              ghe,
            };
            this.props.dispatch(action);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHangGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((item, i) => {
      return (
        <span className="rowNumber" key={i}>
          {item.soGhe}
        </span>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHang === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHangGhe()}
        </div>
      );
    } else {
      return (
        <>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </>
      );
    }
  };

  render() {
    return (
      <div
        className="text-left mt-3"
        style={{ fontSize: "1rem", marginLeft: "13%" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    danhSachGheDat: state.DatVeXemPhimReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(HangGhe);
