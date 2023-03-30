import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { MyPagination, MyTable } from '~/components';

import { productHead } from './data';

function ManageProduct() {
  const { page } = useParams();

  const products = useQuery({
    queryKey: ['productsPage', page],
    queryFn: () => axios.post(process.env.REACT_APP_SERVER + 'api/product/page', { Page: page })
  });

  return (
    <div className="w-100 container my-5">
      {!products.isLoading ? <MyTable head={productHead} body={products.data.data.products['$values']} /> : <div>Loading...</div>}
      
      {!products.isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MyPagination page={page} pages={products.data.data.pages} />
        </div>
      )}
    </div>
  );
}

export default ManageProduct;