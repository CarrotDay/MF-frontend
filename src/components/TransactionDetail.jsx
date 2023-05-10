import React, {useState} from 'react';
import {Button, ConfigProvider, Input, Space, Table} from "antd";
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useQuery} from "@tanstack/react-query";
import {getTransactions} from "~/api/transaction.api";
import jwtDecode from "jwt-decode";
import filter from "lodash/filter";
export const columns = [
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'createAt',
    key: 'createAt',
    align: 'center',
    sorter: (a, b) => a.createAt > b.createAt ? 1 : -1,
    render: value => value.substring(0, 10)
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    filters: [
      {
        text: 'Chưa thanh toán',
        value: 'Chưa thanh toán'
      },
      {
        text: 'Đã thanh toán',
        value: 'Đã thanh toán'
      },
      {
        text: 'Đang vận chuyển',
        value: 'Đang vận chuyển'
      },
      {
        text: 'Đã xác nhận',
        value: 'Đã xác nhận'
      },
      {
        text: 'Hủy',
        value: 'Hủy'
      }
    ],
    onFilter: (v, e) => e.status === v,
    sorter: (a, b) => a.status > b.status ? 1 : -1,
  },
  {
    title: 'Hàng động',
    key: 'action',
    dataIndex: 'action',
    fixed: 'right',
    align: 'center',
    width: 160,
    render: (action) => {
      return (
        <>
          <Link to={`/`}>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </Link>
          {(action==3)?
            <IconButton color="success" title={'Xác nhận đơn hàng'}>
              <CheckIcon />
            </IconButton>
            :''
          }
          {
            (action==1)?
            <IconButton color="error" title={'Huỷ đơn hàng'}>
              <DeleteOutlineIcon />
            </IconButton>
            :''
          }
        </>
      )
    }
  }
];
const TransactionDetail = () => {
  const [transactions, setTransactions] = useState([]);
  const token = window.localStorage.getItem("token");
  const id = token?jwtDecode(token).id:null;
  const { isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    onSuccess: data => {
      const customerTransaction = filter(data.data, (e) => {
        return e.customer == id;
      });
      setTransactions(customerTransaction.map(e => ({
        ...e,
        key: e.id,
        customer: e.customerName,
        employee: e.employeeName,
        status: e.statusName,
        action: e.status
      })))
    }
  });
  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="transaction-detail col-12 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Đơn hàng của bạn</h1>
          </div>
          <Space direction="vertical" className="transaction-infor container pt-3 pb-5 px-5" style={{backgroundColor: "#fff"}}>
            <Table columns={columns} dataSource={transactions}
            />
          </Space>
        </div>
      </div>
    </section>
  );
};

export default TransactionDetail;