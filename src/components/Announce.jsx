import React from 'react';
import {Link} from "react-router-dom";

const Announce = () => {
  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="announce-detail col-12 col-lg-8 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Thông báo</h1>
          </div>
          <div className="announce container pt-3 pb-5" style={{backgroundColor: "#fff"}}>
            <div className="title-announce">
              <h1 className={"font-weight-bold"}>Giảm giá 20% cho toàn bộ manga</h1>
            </div>
            <div className="thumbnail-announce">
              <img src="/Uploads/slide/2.png" alt=""/>
            </div>
            <div className="content-announce">
              <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum
                Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum
                Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum v
                Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum
                Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum
                Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
            </div>
            <div className="create-at">
              <em>Đăng ngày: 20/02/2002</em>
            </div>
          </div>
        </div>
        <div className="list-announce col-12 col-lg-4 text-left">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Khác</h1>
          </div>
          <div className="announce-list my-3" style={{backgroundColor: "#fff"}}>
            <div className="announce-item container py-3">
              <Link to={"/"}>
                <div className="title-announce-item-list">
                  <h4 className={"font-weight-bold"}>Thông báo bán figure</h4>
                </div>
              </Link>
              <div className="content-announce">
                <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
                <em>Ngày đăng: 30/03/2002</em>
              </div>
            </div>
            <div className="announce-item container py-3">
              <Link to={"/"}>
                <div className="title-announce-item-list">
                  <h4 className={"font-weight-bold"}>Thông báo bán figure</h4>
                </div>
              </Link>
              <div className="content-announce">
                <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
                <em>Ngày đăng: 30/03/2002</em>
              </div>
            </div>
            <div className="announce-item container py-3">
              <Link to={"/"}>
                <div className="title-announce-item-list">
                  <h4 className={"font-weight-bold"}>Thông báo bán figure</h4>
                </div>
              </Link>
              <div className="content-announce">
                <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
                <em>Ngày đăng: 30/03/2002</em>
              </div>
            </div>
            <div className="announce-item container py-3">
              <Link to={"/"}>
                <div className="title-announce-item-list">
                  <h4 className={"font-weight-bold"}>Thông báo bán figure</h4>
                </div>
              </Link>
              <div className="content-announce">
                <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
                <em>Ngày đăng: 30/03/2002</em>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Announce;