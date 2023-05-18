import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Table, Button } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import Money from "~/components/Money";

import { getProducts, deleteProduct } from '~/api/product.api';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    align: 'center',
    sorter: (a, b) => a.thumbnail > b.thumbnail ? 1 : -1,
    render: value => <img width="100px" height="100px" src={value} alt="thumbnail" />
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    filters: [
      {
        text: 'Manga',
        value: false
      },
      {
        text: 'Figure',
        value: true
      }
    ],
    onFilter: (v, e) => e.type === v,
    sorter: (a, b) => a.type > b.type ? 1 : -1,
    render: value => value ? 'Figure' : 'Manga'
  },
  {
    title: 'Create At',
    dataIndex: 'createAt',
    key: 'createAt',
    align: 'center',
    sorter: (a, b) => a.createAt > b.createAt ? 1 : -1,
    render: value => value.substring(0, 10)
  }
];

function ManageProduct() {
  const token = window.localStorage.getItem("token");
  const account = token ? jwtDecode(token) : null;

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    onSuccess: data => setProducts(data.data.map(e => ({
      ...e,
      key: e.id,
      thumbnail: e.srcImg,
      price: <Money money={e.price} />
    })))
  });

  const deleteProductHandle = async (id) => {
    try {
      await deleteProduct(id);
      alert('Xóa sản phẩm thành công');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
    catch (err) {
      alert('Xóa sản phẩm không thành công');
    }
  }

  return (
    <div className="w-100 container my-5 text-left">
      <div className="my-3">
        <Button type="primary" onClick={() => navigate('/manage/product/create')}>CREATE</Button>
      </div>

      <Table
        columns={[
          ...columns,
          {
            title: 'Action',
            key: 'meta',
            fixed: 'right',
            width: 160,
            render: values => (
              <>
                <Link to={`/manage/product/${values.meta}`}>
                  <IconButton color="primary">
                    <SearchIcon />
                  </IconButton>
                </Link>
                <Link to={`/manage/product/update/${values.meta}`}>
                  <IconButton color="success">
                    <EditIcon />
                  </IconButton>
                </Link>
                {Number(account?.id) === 0 && (
                  <IconButton onClick={() => deleteProductHandle(values.id)} color="error">
                    <DeleteOutlineIcon />
                  </IconButton>
                )}
              </>
            )
          }
        ]}
        dataSource={products}
      />
    </div>
  );
}

export default ManageProduct;