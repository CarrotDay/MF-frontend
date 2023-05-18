import React, { useState } from 'react';
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import moment from "moment";

import { getAnnounces } from '~/api/announce.api';

const AnnounceList = () => {
  const [announces, setAnnounces] = useState(null);
  
  useQuery({
    queryKey: ['announces'],
    queryFn: getAnnounces,
    onSuccess: data => {
      if (data?.data) {
        setAnnounces(data?.data?.map(e => ({
          ...e,
          content: e?.content?.substring(0, 60) + '...',
          createAt: moment(e?.createAt).format('YYYY/MM/DD HH:mm')
        })));
      }
    }
  });

  return (
    <section className={"announce container"}>
      <div className="content row my-3 center">
        <div className="new-announces col-12 col-lg-8 row text-left mb-3 p-0">
          <div className="title-list col-12 px-3">
            <h1 className="title-announce font-weight-bold">Tin tức</h1>
          </div>
          {announces ? (
            announces?.map(e => (
              <div className="items-announces col-12" key={e.id}>
                <Link to={`/announce/${e.meta}`} className="item-announce row my-2 py-3">
                  <div className="img-announce col-4">
                    <img src={e.image} alt=""/>
                  </div>

                  <div className="content-announce col-8">
                    <h4 className="title-item-announce">{e.title}</h4>
                    <div className="content-announce" dangerouslySetInnerHTML={{__html: e.content}} />
                    <p className="create_date_announce">{e.createAt}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : "Chưa có thông báo nào"}
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