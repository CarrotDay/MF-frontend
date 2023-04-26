import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import AccountPopover from "~/components/AccountPopover";
import jwtDecode from 'jwt-decode';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [list, setList] = useState([
    {path: '', text: 'TRANG CHỦ', isActive: true},
    {path: '', text: 'MANGA', isActive: false},
    {path: '', text: 'FIGURE', isActive: false},
    {path: '', text: 'LIÊN HỆ', isActive: false},
    {path: '', text: 'THÔNG BÁO', isActive: false},
  ]);



  const token = window.localStorage.getItem('token');
  const data = token ? jwtDecode(window.localStorage.getItem('token')) : '';

  // const dataUser = {
  //   username: 'Thuy',
  //   email: '52000720@student.tdtu.edu.vn'
  // };

  const dataUser = {
    username: 'Thuy Nguyen',
    phone: '0356625002'
  };
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
            <AccountPopover isLogin={Boolean(data)} data={data} />
            <div className="action-cart">
              {Boolean(data) ?
                <Link to="/cart">
                  <span>
                      <i className="fa fa-shopping-cart"></i>
                  </span>
                </Link>:
                <Link to="/sign-in">
                  <span>
                      <i className="fa fa-shopping-cart"></i>
                  </span>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={"p-0 m-0"}>
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
          >
            <span className="fa fa-bars"></span> Menu
          </Navbar.Toggle>
          <Navbar.Brand href="/" className={"navbar-brand-mobile"}>
            <img src="/Uploads/img/logo/2.png" alt="" />
          </Navbar.Brand>
          <div className="menu-action d-flex">
            <div className="action-account">
              <AccountPopover isLogin={Boolean(data)} data={data} />
              {/* <AccountPopover isLogin={isLogin} data={dataUser} /> */}
            </div>
            <div className="action-cart">
              {isLogin?
                <Link to="/cart">
                  <span>
                      <i className="fa fa-shopping-cart"></i>
                  </span>
                </Link>:
                <Link to="/sign-in">
                  <span>
                      <i className="fa fa-shopping-cart"></i>
                  </span>
                </Link>
              }

            </div>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-left pl-md-3 pl-lg-0"  as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/">TRANG CHỦ</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/side-product/manga">MANGA</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/side-product/figure">FIGURE</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#contact">LIÊN HỆ</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/announce-list">THÔNG BÁO</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
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

export default Header;