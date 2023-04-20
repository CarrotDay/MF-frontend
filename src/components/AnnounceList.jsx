import React from 'react';
import Calendar from "react-calendar";
import {Link} from "react-router-dom";

const AnnounceList = () => {
  return (
    <section className={"announce container"}>
      <div className="content row my-3 center">
        <div className="new-announces col-12 col-lg-8 row text-left mb-3 p-0">
          <div className="title-list col-12 px-3">
            <h1 className="title-announce font-weight-bold">Tin tức</h1>
          </div>
          <div className="items-announces col-12">
            <Link to={"/"} className="item-announce row my-2 py-3">
              <div className="img-announce col-4">
                <img src="./Uploads/announce/1.png" alt=""/>
              </div>
              <div className="content-announce col-8">
                <h4 className="title-item-announce">[Title, maxLength=20]</h4>
                <p className="content-announce">[Content, maxLength=60]</p>
                <p className="create_date_announce">[create_date]</p>
              </div>
            </Link>
          </div>
          <div className="items-announces col-12">
            <Link to={"/"} className="item-announce row my-2 py-3">
              <div className="img-announce col-4">
                <img src="./Uploads/announce/1.png" alt=""/>
              </div>
              <div className="content-announce col-8">
                <h4 className="title-item-announce">[Title, maxLength=20]</h4>
                <p className="content-announce">[Content, maxLength=60]</p>
                <p className="create_date_announce">[create_date]</p>
              </div>
            </Link>
          </div>
          <div className="items-announces col-12">
            <Link to={"/"} className="item-announce row my-2 py-3">
              <div className="img-announce col-4">
                <img src="./Uploads/announce/1.png" alt=""/>
              </div>
              <div className="content-announce col-8">
                <h4 className="title-item-announce">[Title, maxLength=20]</h4>
                <p className="content-announce">[Content, maxLength=60]</p>
                <p className="create_date_announce">[create_date]</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="calendar-announce col-lg-4 ml-lg-3 d-md-block d-none p-0">
          <div className="title-list">
            <h1 className={"font-weight-bold"}>Lịch</h1>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnounceList;