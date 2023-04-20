import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Table, Button } from 'antd';

import { getProducts } from '~/api/product.api';
import { columns } from './data';

function ManageProduct() {
  const navigate = useNavigate();

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
    <div className="w-100 container my-5 text-left">
      <div className="my-3">
        <Button type="primary" onClick={() => navigate('/manage/product/create')}>CREATE</Button>
      </div>

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