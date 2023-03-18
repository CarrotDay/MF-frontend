import React, {useState} from 'react';
import MangaItem from "~/components/MangaItem";
import {Link} from "react-router-dom";
import FigureItem from "~/components/FigureItem";
const ProductGrid = ({isHome, type, data}) => {
  const getData = () => {
    return data;
  };

  return (
    <section className='manga my-3 container'>
      <div className="row container">
        <div className="col text-left title-list d-flex justify-content-between">
          <h1 className="font-weight-bold">Manga</h1>
          {isHome?
              <Link to={"/"} className={"more d-flex justify-content-center align-items-center"}>
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
                      <MangaItem meta={data.meta} srcImg={data.srcImg} name={data.name} price={data.price} />
                      :
                      <FigureItem meta={""} srcImg={"./Uploads/figure/1.png"} price={20000} />
                    }
                  </div>
                )
              })
            }

            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl Boku girl Boku girl Boku girl Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
            {/*<div className="item col-6 col-md-4 col-lg-3 mb-3">*/}
            {/*  <MangaItem meta={""} srcImg={"./Uploads/manga/1.png"} name={"Boku girl"} price={10000} />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
