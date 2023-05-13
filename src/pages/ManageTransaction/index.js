import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Modal } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

import { getTransactions, updateTransaction } from '~/api/transaction.api';
import { columns } from './data';

function ManageTransaction() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const [transactions, setTransactions] = useState([]);
  const [updateTransactionModel, setUpdateTransactionModel] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    onSuccess: data => {
      setTransactions(data?.data?.map(e => ({
        ...e,
        key: e.id,
        customer: e.customerNavigation?.name,
        employee: e.employeeNavigation?.name,
        status: e.statusNavigation?.content
      })));
    }
  });
  
  const updateTransactionHandle = async (id, status) => {
    try {
      await updateTransaction(id, { status });
      alert('Cập nhật hóa đơn thành công');
      if (updateTransactionModel !== null) setUpdateTransactionModel(null);
      queryClient.invalidateQueries(['transactions']);
    }
    catch (err) {
      alert('Cập nhật hóa đơn thất bại');
    }
  }

  return (
    <div className="w-100 container my-5">
      {/* <div className="my-3 text-left">
        <Button type="primary" onClick={() => navigate('/manage/transaction/create')}>CREATE</Button>
      </div> */}

      {!isLoading && (<> 
        <Table
          columns={[ 
            ...columns,
            {
              title: 'Action',
              key: 'id',
              fixed: 'right',
              align: 'center',
              width: 160,
              render: v => (
                <>
                  <Link to={`/manage/transaction/${v.id}`}>
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  </Link>
                  {(v?.statusNavigation?.id > 3) || (
                    <IconButton color="success" 
                      onClick={() => setUpdateTransactionModel({ status: v?.statusNavigation?.id, id: v.id })}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(v?.statusNavigation?.id > 2) || (
                    <IconButton color="error" onClick={() => updateTransactionHandle(v.id, 5)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  )}
                </>
              )
            }
          ]}
          dataSource={transactions}
        />
      </>)}
      
      <Modal
        open={updateTransactionModel !== null}
        title="Cập nhật hóa đơn"
        onCancel={() => setUpdateTransactionModel(null)}
        footer={[]}
      >
        <div style={{ padding: '12px' }}>
          {(updateTransactionModel?.status < 2) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(updateTransactionModel.id, 2)}
            >Xác nhận thanh toán đơn hàng</Button>
          )}

          {(updateTransactionModel?.status < 3) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(updateTransactionModel.id, 3)}
            >Đang vận chuyển đơn hàng</Button>
          )}

          {(updateTransactionModel?.status < 4) && (
            <Button 
              type="primary"
              style={{ width: '100%', margin: '8px 0px' }}
              onClick={() => updateTransactionHandle(updateTransactionModel.id, 4)}
            >Xác nhận đơn hàng</Button>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ManageTransaction;