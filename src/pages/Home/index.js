import React, { useState, useEffect } from "react";

import Slide from "~/components/Slide";
import ProductGrid from "~/components/ProductGrid";
import { getProductAPI } from "~/api/product.api";

const Home = () => {
  const [manga, setManga] = useState([]);
  const [figure, setFigure] = useState([]);

  async function getProductsHandler() {
    const data = await getProductAPI();

    // setManga(
    //   data.filter((e) => !e.type).map((e) => ({ ...e, srcImg: e.image }))
    // );
    // setFigure(
    //   data.filter((e) => e.type).map((e) => ({ ...e, srcImg: e.image }))
    // );

    // setManga(Array(12).fill({
    //   "meta": "",
    //   "name": "Boku girl",
    //   "srcImg": "./Uploads/manga/1.png",
    //   "price": 20000
    // }));
    // setManga(data.filter(e => !e.type).map(e => ({ ...e, srcImg: e.image })));
    // setFigure(data.filter(e => e.type).map(e => ({ ...e, srcImg: e.image })));

    setManga(
      Array(12).fill({
        meta: "",
        name: "Boku girl",
        srcImg: "./Uploads/manga/1.png",
        price: 20000,
      })
    );

    setFigure(
      Array(12).fill({
        meta: "",
        srcImg: "/Uploads/figure/1.png",
        price: 20000,
      })
    );
  }

  useEffect(() => {
    getProductsHandler();
  }, []);

  return (
    <div>
      <Slide />
      <ProductGrid isHome={true} type={true} data={manga} />
      <ProductGrid isHome={true} type={false} data={figure} />
    </div>
  );
};

export default Home;
