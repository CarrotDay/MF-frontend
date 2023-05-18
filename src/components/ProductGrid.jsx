import React, {useState} from 'react';
import { Pagination } from 'antd';
import {Link} from "react-router-dom";

import MangaItem from "~/components/MangaItem";
import FigureItem from "~/components/FigureItem";

const ProductGrid = ({ isHome, type, data, category, onChange, pagination }) => {
  const getData = () => {
    return data;
  };

  const getTitle = () => {
    let title = "";
    if (isHome) {
      title = type?"Manga":"Figure";
    } else {
      title = category?(category.charAt(0).toUpperCase() + category.slice(1)):"Tất cả"
    }
    return title;
  }
  return (
    <section className='product my-3 container'>
      <div className="row">
        <div className="col text-left title-list d-flex justify-content-between">
          <h1 className="font-weight-bold">
            {getTitle()}
          </h1>
          {isHome?
              <Link to={type?'/side-product/manga':'/side-product/figure'} className={"more d-flex justify-content-center align-items-center"}>
                  <span className="font-weight-bold">Xem thêm
                  <i className="fa fa-long-arrow-right ml-3" aria-hidden="true"></i>
                </span>
              </Link>
            :""
          }
        </div>
        <div className="col-12 container list ">
          <div className="row py-3 col-12">
            {
              getData().map((data, index) => {
                return (
                  <div className="item col-6 col-md-4 col-lg-3 mb-3" key={index}>
                    {type?
                      <MangaItem key={index} meta={data.meta} srcImg={data.srcImg} name={data.name} price={data.price} />
                      :
                      <FigureItem key={index} meta={data.meta} srcImg={data.srcImg} name={data.name} price={data.price} />
                    }

                  </div>
                )
              })
            }
          </div>

          {isHome?'':
            <Pagination
              showSizeChanger
              onChange={onChange}
              defaultCurrent={pagination?.page}
              total={pagination?.total}
              defaultPageSize={pagination?.pageSize}
            />}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
