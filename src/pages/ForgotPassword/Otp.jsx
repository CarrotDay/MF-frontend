import React from 'react';
import {Button} from "@mui/material";

const Otp = () => {
  return (
    <div className={"container py-5 h-100"}>
      <div className="row form">
        <div className="title-list col-12">
          <h1 className={"font-weight-bold"}>Xin hãy nhập mã OTP của bạn</h1>
        </div>
        <div className="col-12 mb-3" style={{backgroundColor: "#fff"}}>
          <h5>Mã OTP đã được gửi đến số điện thoại 093xxxxx02</h5>
          <div className="contain-otp d-flex flex-wrap justify-content-center pb-5 pt-4">
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
            <div className="square mx-2">
              <input type={"text"} ></input>
            </div>
          </div>
        </div>
        <Button sx={{
          width: "100%",
          backgroundColor: "rgb(255,145,77)",
          border: "1px solid rgb(255,145,77)",
          ":hover": {
            backgroundColor: "transparent",
            color: "rgb(255,145,77)",
            border: 1,
            borderColor: "rgb(255,145,77)"
          }
        }} className={"btn-check-out"}  variant="contained" >
          Xác nhận
        </Button>
      </div>
    </div>
  );
};

export default Otp;