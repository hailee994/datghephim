import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import DanhSachChon from "./DanhSachChon";
import DanhSachGhe from "./DanhSachGhe";

export default class BaiTapDatVe extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          backgroundImage: "url(./img/bgmovie.jpg)",
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="row"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.658)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="col-7 text-light">
            <DanhSachGhe />
          </div>

          <div className="col-5 text-light">
            <DanhSachChon />
          </div>
        </div>
      </div>
    );
  }
}
