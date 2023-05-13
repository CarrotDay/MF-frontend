import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getAnnounce, getAnnounces } from '~/api/announce.api';

const Announce = () => {
  const { id } = useParams();
  const [announce, setAnnounce] = useState(null);
  const [announces, setAnnounces] = useState(null);

  useQuery({
    queryKey: ['announces'],
    queryFn: getAnnounces,
    onSuccess: data => {
      setAnnounces(data?.data?.filter(e => Number(e.id) !== Number(id))?.map(e => ({
        ...e,
        content: e?.content?.substring(0, 45) + '...',
        createAt: moment(e?.createAt).format('YYYY/MM/DD HH:mm')
      })));
    }
  });

  useQuery({
    queryKey: ['announce', id],
    queryFn: () => getAnnounce(id),
    onSuccess: data => {
      setAnnounce(data?.data)
    }
  });

  return (
    <section className={"container center"}>
      <div className="row  my-3">
        <div className="announce-detail col-12 col-lg-8 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Thông báo</h1>
          </div>
          <div className="announce container pt-3 pb-5" style={{backgroundColor: "#fff"}}>
            <div className="title-announce">
              <h1 className={"font-weight-bold"}>{announce?.title}</h1>
            </div>
            <div className="thumbnail-announce">
              <img src={announce?.image} alt=""/>
            </div>
            <div className="content-announce">
              <div dangerouslySetInnerHTML={{__html: announce?.content}} />
            </div>
            <div className="create-at">
              <em>Đăng ngày: {moment(announce?.createAt)?.format('YYYY/MM/DD HH:mm')}</em>
            </div>
          </div>
        </div>
        <div className="list-announce col-12 col-lg-4 text-left">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Khác</h1>
          </div>
          <div className="announce-list" style={{backgroundColor: "#fff"}}>
            {announces?.map(e => (
              <div className="announce-item container py-3" key={e.id}>
                <Link to={`/announce/${e?.meta}`}>
                  <div className="title-announce-item-list">
                    <h4 className={"font-weight-bold"}>{e?.title}</h4>
                  </div>
                </Link>
                <div className="content-announce">
                  <div dangerouslySetInnerHTML={{__html: e?.content}} />
                  <em>Ngày đăng: {moment(e?.createAt)?.format('YYYY/MM/DD HH:mm')}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announce;