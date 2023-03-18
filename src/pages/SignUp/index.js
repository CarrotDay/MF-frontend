import React from 'react'
import {Button} from "@mui/material";

function SignUp() {
  return (
    <section className="container py-5 h-100">
      <div className="row form" style={{backgroundColor: "#fff"}}>
        <div className="img-form d-none d-lg-block col-lg-6 p-0">
          <img src="/Uploads/figure/1.png" className={"h-100"}/>
        </div>
        <form className={"p-5 col-12 col-lg-6 form-body"} >
          <div className="logo">
            <img src="/Uploads/img/logo/2.png" alt=""/>
          </div>
          <h1 className={"title font-weight-bold"}>Đăng ký</h1>
          <div className="form-group text-left">
            <label htmlFor="name" className={"font-weight-bold"}>Họ & Tên</label>
            <input type="text" className={"form-control"} id={"name"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="account" className={"font-weight-bold"}>Tên tài khoản</label>
            <input type="text" className={"form-control"} id={"account"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="phone" className={"font-weight-bold"}>Số điện thoại</label>
            <input type="text" className={"form-control"} id={"phone"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="address" className={"font-weight-bold"}>Địa chỉ</label>
            <input type="text" className={"form-control"} id={"address"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="email" className={"font-weight-bold"}>Email</label>
            <input type="text" className={"form-control"} id={"email"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="birthday" className={"font-weight-bold"}>Ngày sinh</label>
            <input type="date" className={"form-control"} id={"birthday"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="password" className={"font-weight-bold"}>Mật khẩu</label>
            <input type="text" className={"form-control"} id={"password"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="verify-password" className={"font-weight-bold"}>Xác thực mật khẩu</label>
            <input type="text" className={"form-control"} id={"verify-password"}/>
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
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </section>

  );
}

export default SignUp;