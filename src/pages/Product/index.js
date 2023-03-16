import React from 'react';
import ProductDetail from "~/components/ProductDetail";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Product = () => {
  return (
    <div>
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default Product;