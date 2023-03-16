import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <section className="header-section">
      <div className="container">
        <div className="row justify-content-between header-section-content">
          <div className="col-2">
          <Link to="/" className="navbar-brand" to="/">
              <img className="logo" src="/Uploads/img/logo/1.png" alt="" />
          </Link>
          </div>
          <div className="col-6 header-action">
          <form action="#" className="searchform order-lg-last">
              <div className="form-group d-flex">
              <input
                  type="text"
                  className="form-control pl-3"
                  placeholder="Search"
              />
              <button
                  type="submit"
                  placeholder=""
                  className="form-control search"
              >
                  <span className="fa fa-search"></span>
              </button>
              </div>
          </form>
          </div>
          <div className="col-4 header-action">
            {isLogin ?
             <div className="action-account-login">
                <Link to="/">
                  <span>
                      <i className="fa fa-user-circle-o"></i>
                  </span>
                  <span className="title-icon">User</span>
                </Link>
              </div>
            :
            <div className="action-account d-flex">
              <Link to="/">
              <span>
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>
              </Link>
              <span className="d-flex flex-column">
                <Link to="/" className="title-icon">
                    {" "}
                    Đăng nhập{" "}
                </Link>
                <Link to="/" className="title-icon">
                    {" "}
                    Đăng ký{" "}
                </Link>
              </span>
            </div>
            }


            <div className="action-cart">
              <Link to="/">
              <span>
                  <i className="fa fa-shopping-cart"></i>
              </span>
              <span className="title-icon">Giỏ hàng</span>
              </Link>
            </div>
            </div>
        </div>
        </div>
        <nav
        className="navbar navbar-expand-lg navbar-dark header_navbar bg-dark header-navbar-light"
        id="header-navbar"
        >
        <div className="container">
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header-nav"
          aria-controls="header-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="fa fa-bars"></span> Menu
          </button>
          <Link className="navbar-brand-mobile" to="/">
          <img src="/Uploads/img/logo/2.png" alt="" />
          </Link>

            <div className="menu-action d-flex">
            <div className="action-account">
              <Link to="/">
              <span>
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>
              </Link>
              <span className="d-flex flex-column">
              <Link to="/" className="title-icon">
                  {" "}
                  Đăng nhập{" "}
              </Link>
              <Link to="/" className="title-icon">
                  {" "}
                  Đăng ký{" "}
              </Link>
              </span>
            </div>
            <div className="action-cart">
              <Link to="/">
              <span>
                  <i className="fa fa-shopping-cart"></i>
              </span>
              <span className="title-icon">Giỏ hàng</span>
              </Link>
            </div>
            </div>
            <div className="collapse navbar-collapse text-left" id="header-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/" className="nav-link">
                  Trang chủ
              </Link>
              </li>
              <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Thể loại
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <Link className="dropdown-item" to="/">
                Page 1
                </Link>
                <Link className="dropdown-item" to="/">
                Page 2
                </Link>
                <Link className="dropdown-item" to="/">
                Page 3
                </Link>
                <Link className="dropdown-item" to="/">
                Page 4
                </Link>
              </div>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">
                  Manga
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">
                  Figure
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">
                  Liên hệ
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">
                  Thông báo
              </Link>
              </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="under-nav">
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button type="submit" placeholder="" className="form-control search">
                  <span className="fa fa-search"></span>
              </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Header
