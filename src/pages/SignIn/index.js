import React from 'react'
import * as PropTypes from "prop-types";
import {Button} from "@mui/material";

function BootstrapInput(props) {
  return null;
}

BootstrapInput.propTypes = {
  defaultValue: PropTypes.string,
  id: PropTypes.string
};

function SignIn() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row form" style={{backgroundColor: "#fff"}}>
          <div className="img-form d-none d-lg-block col-lg-6 p-0">
            <img src="/Uploads/announce/1.png"/>
          </div>
          <form className={"p-5 col-12 col-lg-6 form-body"} >
            <div className="logo">
              <img src="/Uploads/img/logo/2.png" alt=""/>
            </div>
            <h1 className={"title font-weight-bold"}>Đăng nhập</h1>
            <div className="form-group text-left">
              <label htmlFor="account" className={"font-weight-bold"}>Tài khoản</label>
              <input type="text" className={"form-control"} id={"account"}/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="password" className={"font-weight-bold"}>Mật khẩu</label>
              <input type="text" className={"form-control"} id={"password"}/>
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
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;