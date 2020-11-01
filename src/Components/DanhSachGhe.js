import React, { Component } from "react";
import danhSachGheData from "./danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class DanhSachGhe extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((item, i) => {
      return (
        <div key={i}>
          <HangGhe hangGhe={item} soHang={i} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="text-center">
        <h1 style={{ color: "orange" }}>ĐẶT VÉ XEM PHIM TẠI CYBERLEAR.VN</h1>

        <p className="text-light mt-3">Màn hình</p>

        <div className="screen mb-5"></div>

        {this.renderHangGhe()}
      </div>
    );
  }
}
