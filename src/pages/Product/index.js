import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import ProductDetail from "~/components/ProductDetail";
import { getProductWithMeta } from '~/api/product.api';

const Product = () => {
  const { meta } = useParams();

  const [product, setProduct] = useState(null);

  console.log(product);

  useQuery({
    queryKey: ['product', meta],
    queryFn: () => getProductWithMeta(meta),
    onSuccess: data => {
      console.log(data.data);
      setProduct(data.data);
    }
  });

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default Product;