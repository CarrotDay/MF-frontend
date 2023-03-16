import React from "react";
import Header from "~/components/Header";
import Slide from "~/components/Slide";
import Footer from "~/components/Footer";
import ProductGrid from "~/components/ProductGrid";

const Home = () => {
  const data1 = [
    {
      "meta": "",
      "name": "Boku girl 1",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 2",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 3",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 4",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 5",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 6",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 7",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 8",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 9",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 10",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 11",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 12",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 13",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 7",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
    {
      "meta": "",
      "name": "Boku girl 7",
      "srcImg": "./Uploads/manga/1.png",
      "price": 20000
    },
  ]

  const data2 = [
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
      <ProductGrid isHome={true} type={true} data={data1} />
      <ProductGrid isHome={true} type={false} data={data2} />
      <Footer />
    </div>
  );
};

export default Home;
