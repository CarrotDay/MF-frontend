import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';

import { getProducts } from '~/api/product.api';
import { columns } from './data';

function ManageProduct() {
  const [products, setProducts] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    onSuccess: data => setProducts(data.data['$values'].map(e => ({
      ...e,
      key: e.id,
      thumbnail: e.srcImg
    })))
  });

  return (
    <div className="w-100 container my-5">
      {!isLoading && (<> 
        <Table
          columns={columns}
          dataSource={products}
        />
      </>)}
    </div>
  );
}

export default ManageProduct;