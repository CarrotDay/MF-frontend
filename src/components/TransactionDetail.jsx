import React, {useState} from 'react';
import {Button, ConfigProvider, Input, Space, Table} from "antd";
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import { getTransactions, updateTransaction } from "~/api/transaction.api";
import jwtDecode from "jwt-decode";
import filter from "lodash/filter";
import moment from 'moment';

export const columns = [
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'createAt',
    key: 'createAt',
    align: 'center',
    sorter: (a, b) => a.createAt > b.createAt ? 1 : -1,
    render: value => value ? moment(value).format('YYYY/MM/DD HH:mm') : ''
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
  }
];

const token = window.localStorage.getItem("token");
const account = token ? jwtDecode(token) : null;

const TransactionDetail = () => {
  const queryClient = useQueryClient();

  const [transactions, setTransactions] = useState([]);
  const { isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => getTransactions({ customer: account.id }),
    onSuccess: data => {
      setTransactions(data?.data?.map(e => ({
        ...e,
        key: e.id,
        customer: e.customerName,
        employee: e.employeeName,
        status: e.statusNavigation.content,
        action: e.status
      })));
    }
  });

  const updateTransactionHandle = async (id) => {
    try {
      await updateTransaction(id, { status: 5 });
      alert('Hủy đơn hàng thành công');
      queryClient.invalidateQueries(['transactions']);
    }
    catch (err) {
      console.log('Hủy đơn hàng thất bại');
    }
  }

  return (
    <section className={"container"}>
      <div className="row  my-3">
        <div className="transaction-detail col-12 text-left mb-3">
          <div className="title-list px-3">
            <h1 className={"font-weight-bold"}>Đơn hàng của bạn</h1>
          </div>
          <Space direction="vertical" className="transaction-infor container pt-3 pb-5 px-5" style={{backgroundColor: "#fff"}}>
            <Table 
              columns={[...columns,
                {
                  title: 'Hàng động',
                  key: 'action',
                  fixed: 'right',
                  align: 'center',
                  width: 160,
                  render: (v) => {
                    return (
                      <>
                        <Link to={`/transaction/${v.id}`}>
                          <IconButton color="primary">
                            <SearchIcon />
                          </IconButton>
                        </Link>
                        {(v.action==3)?
                          <IconButton color="success" title={'Xác nhận đơn hàng'}>
                            <CheckIcon />
                          </IconButton>
                          :''
                        }
                        {
                          (v.action==1)?
                          <IconButton onClick={() => updateTransactionHandle(v.id)} color="error" title={'Huỷ đơn hàng'}>
                            <DeleteOutlineIcon />
                          </IconButton>
                          :''
                        }
                      </>
                    )
                  }
                }]} 
              dataSource={transactions}
            />
          </Space>
        </div>
      </div>
    </section>
  );
};

export default TransactionDetail;