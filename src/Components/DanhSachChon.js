import React, { Component } from "react";
import { connect } from "react-redux";
import { XOA_GHE } from "../redux/constant/BaiTapDatVePhim";

class DanhSachChon extends Component {
  renderGheDat = () => {
    return this.props.gheDat.map((ghe, i) => {
      return (
        <tr key={i}>
          <th>{ghe.soGhe}</th>
          <th>{ghe.gia}</th>
          <th>
            <button
              style={{
                color: "red",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "1.5rem",
              }}
              onClick={() => {
                let action = {
                  type: XOA_GHE,
                  soGhe: ghe.soGhe,
                };
                this.props.dispatch(action);
              }}
            >
              X
            </button>
          </th>
        </tr>
      );
    });
  };

  render() {
    let tongTien = this.props.gheDat.reduce((tong, ghe, i) => {
      return (tong += ghe.gia);
    }, 0);
    return (
      <div className="text-light mt-5">
        <h1 className="text-center">DANH SÁCH GHẾ BẠN CHỌN</h1>

        <div className="content mt-5">
          <div
            className="dsGheDuocChon mr-3"
            style={{ display: "inline-block" }}
          />{" "}
          Ghế đã đặt
          <br />
          <div
            className="dsGheDangChon mr-3"
            style={{ display: "inline-block" }}
          />{" "}
          Ghế đang chọn
          <br />
          <div
            className="dsGheChuaChon mr-3"
            style={{ display: "inline-block" }}
          />{" "}
          Ghế trống
        </div>

        <table className="table text-light text-center table_listSeat">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Bảng giá</th>
              <th>Hủy</th>
            </tr>
          </thead>

          <tbody style={{ color: "orange" }}>
            {this.renderGheDat()}
            <tr>
              <th style={{ color: "#fff" }}>Tổng tiền</th>
              <th>{tongTien}</th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gheDat: state.DatVeXemPhimReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(DanhSachChon);
