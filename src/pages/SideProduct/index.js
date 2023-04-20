import React, { useState } from "react";
import Slide from "~/components/Slide";
import Category from "~/components/Category";
import ProductGrid from "~/components/ProductGrid";

const SideProduct = () => {
  const [type, setType] = useState(false);
  const data = [
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/2.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/2.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
    {
      meta: "",
      srcImg: "/Uploads/figure/1.png",
      price: 20000,
    },
  ];
  return (
    <div>
      <Slide />
      <div className="container center">
        <div className="row">
          <div className="col-12 col-md-8">
            <ProductGrid
              isHome={false}
              type={!type}
              data={data}
              category={""}
            />
          </div>
          <div className="col-12 col-md-4 p-0">
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProduct;
