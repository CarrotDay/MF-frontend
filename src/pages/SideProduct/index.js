import React, {useState} from 'react';
import Slide from "~/components/Slide";
import Category from "~/components/Category";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ProductGrid from "~/components/ProductGrid";

const SideProduct = () => {
  const [type, setType] = useState(false);
  const data = [
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/2.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/2.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "srcImg": "/Uploads/figure/1.png",
      "price": 20000
    },
  ]
  return (
    <div>
      <Header />
      <Slide />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-10">
            <ProductGrid isHome={false} type={!type} data={data} category={""}/>
          </div>
          <div className="col-12 col-md-4 col-lg-2 p-0">
            <Category />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideProduct;