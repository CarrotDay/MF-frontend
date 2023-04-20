import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import AccountPopover from "~/components/AccountPopover";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dataUser = {
    username: 'Thuy',
    email: '52000720@student.tdtu.edu.vn'
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
            <AccountPopover isLogin={isLogin} data={dataUser} />
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
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={"p-0 m-0"}>
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
          >
            <span className="fa fa-bars"></span> Menu
          </Navbar.Toggle>
          <Navbar.Brand href="#" className={"navbar-brand-mobile"}>
            <img src="/Uploads/img/logo/2.png" alt="" />
          </Navbar.Brand>
          <div className="menu-action d-flex">
            <div className="action-account">
              <AccountPopover isLogin={isLogin} data={dataUser} />
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
            <Nav className="me-auto text-left pl-md-3 pl-lg-0" defaultActiveKey="#index" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#index">TRANG CHỦ</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#manga">MANGA</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#figure">FIGURE</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#contact">LIÊN HỆ</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#announce">THÔNG BÁO</Nav.Link>
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

export default Header
