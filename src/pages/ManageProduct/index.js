import React, { useState } from 'react';
import { useEffect } from 'react';

import { MyTable } from '~/components';
import { getProductsWithBody } from '~/api/product.api';

import { productData } from './data';

function ManageProduct() {
  const [products, setProducts] = useState(null);

  const getProductHandle = async () => {
    try {
      setProducts(await getProductsWithBody({}));
    }
    catch (err) {
      console.log(err);

      setProducts(productData);
    }
  };

  useEffect(() => {
    getProductHandle();
  }, []);

  return (
    <div>
      {products ? <MyTable head={productData.head} body={products} /> : <div>Loading...</div>}
    </div>
  );
}

export default ManageProduct;