import React from 'react';
import {Button} from "@mui/material";

const ForgotPassword = () => {
  return (
    <section className="container py-5 h-100">
      <div className="row form" style={{backgroundColor: "#fff"}}>
        <div className="img-form d-none d-lg-block col-lg-6 p-0">
          <img src="/Uploads/figure/2.png" className={"h-100"}/>
        </div>
        <form className={"p-5 col-12 col-lg-6 form-body"} >
          <div className="logo">
            <img src="/Uploads/img/logo/2.png" alt=""/>
          </div>
          <h1 className={"title font-weight-bold"}>Quên mật khẩu</h1>
          <div className="form-group text-left">
            <label htmlFor="account" className={"font-weight-bold"}>Tài khoản</label>
            <input type="text" className={"form-control"} id={"account"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="phone" className={"font-weight-bold"}>Số điện thoại</label>
            <input type="text" className={"form-control"} id={"phone"}/>
          </div>
          <div className="">
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
              Tiếp tục
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;