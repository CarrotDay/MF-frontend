import React, {useEffect, useState} from 'react';
import {getContactApi} from "~/api/site.api";
import {useQuery} from "@tanstack/react-query";
import {Typography} from "antd";
import { Link } from "react-router-dom";
import filter from "lodash/filter";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  useQuery({
    queryKey: ['contacts'],
    queryFn: getContactApi,
    onSuccess: data => setContacts(data.map(e => ({
      key: e.id,
      name: e.name,
      link: e.link,
      active: e.active
    })))
  });
  const twitter = filter(contacts,{'name': 'Twitter'})[0]?.link;
  const facebook = filter(contacts,{'name': 'Facebook'})[0]?.link;
  const instagram = filter(contacts,{'name': 'Instagram'})[0]?.link;
  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="contact-detail col-12 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Chi tiết liên hệ</h1>
          </div>
          <div className="container pt-3 pb-5" style={{backgroundColor: "#fff"}}>
            <h3>Giới thiệu</h3>
            <p>
              Manga&Figure thành lập vào tháng 04 năm 2020. Ngày 01/08/2020, website của Manga&Figure chính thức vận hành và phục vụ cộng đồng fan khắp cả nước.
            </p>
            <p>
              Chúng tôi đã có 100.000+ đơn hàng, phục vụ 5000+ lượt khách trên lãnh thổ Việt Nam và trở thành đơn vị uy tín nhất trong cộng đồng wibu.
            </p>
            <div className="row">
              <h3 className={'mb-3 mt-4'}>Phương thức liên lạc:</h3>
              <div className="col-12 col-md-6">
                <div className="d-flex mb-2">
                  <span className={'contact-icon'}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Số điện thoại</Typography.Title>
                    <Typography.Text>{ filter(contacts,{'name': 'Phone'})[0]?.link}</Typography.Text>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <span className={'contact-icon'}>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Email</Typography.Title>
                    <Typography.Text>{ filter(contacts,{'name': 'Email'})[0]?.link}</Typography.Text>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <span className={'contact-icon'}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Địa chỉ</Typography.Title>
                    <Typography.Text>{ filter(contacts,{'name': 'Address'})[0]?.link}</Typography.Text>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex mb-2">
                  <a href={twitter} style={{textDecoration: 'none'}} title={'Twitter'}>
                    <span className={'contact-icon'}>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Twitter</Typography.Title>
                    <a href={twitter} style={{textDecoration: 'none'}} title={'Twitter'}>
                      <Typography.Text>{ twitter }</Typography.Text>
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <a href={facebook} style={{textDecoration: 'none'}} title={'Facebook'}>
                    <span className={'contact-icon'}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  </a>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Facebook</Typography.Title>
                    <a href={facebook} style={{textDecoration: 'none'}} title={'Facebook'}>
                      <Typography.Text>{ facebook }</Typography.Text>
                    </a>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <a href={instagram} style={{textDecoration: 'none'}} title={'Instagram'}>
                    <span className={'contact-icon'}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  </a>
                  <div className="contact-content d-flex flex-column">
                    <Typography.Title level={4}>Instagram</Typography.Title>
                    <a href={instagram} style={{textDecoration: 'none'}} title={'Instagram'}>
                      <Typography.Text>{ instagram }</Typography.Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;