import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ProductDetail from "~/components/ProductDetail";
import { getProductWithMeta } from '~/api/product.api';

const Product = () => {
  const { meta } = useParams();

  const [product, setProduct] = useState(null);

  useQuery({
    queryKey: ['product', meta],
    queryFn: () => getProductWithMeta(meta),
    onSuccess: data => {
      console.log(data);
      setProduct(data.data);
    }
  });

  return (
    <div>
      <ProductDetail product={product} isLogin={false} />
    </div>
  );
};

export default Product;