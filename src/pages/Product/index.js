import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ProductDetail from "~/components/ProductDetail";
import { getProductWithMeta } from '~/api/product.api';
import {getCatalogAPI} from "~/api/site.api";
import find from 'lodash/find';
import get from 'lodash/get';


const Product = () => {
  const { meta } = useParams();

  const [product, setProduct] = useState(null);
  const [catalogs, setCatalogs] = useState(null);

  useQuery({
    queryKey: ['product', meta],
    queryFn: () => getProductWithMeta(meta),
    onSuccess: data => {
      console.log(data);
      setProduct(data.data);
    }
  });

  useQuery({
    queryKey: ['catalog'],
    queryFn: () => getCatalogAPI(),
    onSuccess: data => {
      setCatalogs(data);
    }
  });

  return (
    <div>
      <ProductDetail product={product} catalog={get(find(catalogs, {'id': get(product, 'catalog')}), 'name')} />
    </div>
  );
};

export default Product;