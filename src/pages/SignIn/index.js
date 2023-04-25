import React, { useState } from 'react'
import jwtDecode from 'jwt-decode';

import {Button} from "@mui/material";

import { signInAPI } from '~/api/account.api';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [signInForm, setSignInForm] = useState({ username: '', password: '' });

  async function signInHandler() {
    try {
      const { data } = await signInAPI(signInForm);

      window.localStorage.setItem('token', data);

      const role = jwtDecode(data).role;

      console.log(role);
  
      if (role === "0") {
        navigate('/manage/dashboard');
      }
      else if (role === "1") {
        navigate('/manage/product');
      }
      else {
        navigate('/');
      }
    }
    catch (e) {
      alert('Dang nhap that bai');
    }
  }

  return (
    <section className="container py-5 h-100">
      <div className="row form" style={{backgroundColor: "#fff"}}>
        <div className="img-form d-none d-lg-block col-lg-6 p-0">
          <img src="/Uploads/announce/1.png" className={"h-100"}/>
        </div>
        <form className={"p-5 col-12 col-lg-6 form-body"} >
          <div className="logo">
            <img src="/Uploads/img/logo/2.png" alt=""/>
          </div>
          <h1 className={"title font-weight-bold"}>Đăng nhập</h1>
          <div className="form-group text-left">
            <label htmlFor="account" className={"font-weight-bold"}>Tài khoản</label>
            <input type="text" value={signInForm.username} onChange={e => setSignInForm({ ...signInForm, username: e.target.value })} className={"form-control"} id={"account"}/>
          </div>
          <div className="form-group text-left">
            <label htmlFor="password" className={"font-weight-bold"}>Mật khẩu</label>
            <input type="text" value={signInForm.password} onChange={e => setSignInForm({ ...signInForm, password: e.target.value })} className={"form-control"} id={"password"}/>
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
            }} onClick={signInHandler} className={"btn-check-out"} variant="contained" >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;