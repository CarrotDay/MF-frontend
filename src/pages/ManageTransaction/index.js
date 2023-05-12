import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'antd';

import { getTransactions } from '~/api/transaction.api';
import { columns } from './data';

function ManageTransaction() {
  const navigate = useNavigate()

  const [transactions, setTransactions] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    onSuccess: data => {
      console.log(data?.data);
      setTransactions(data?.data?.map(e => ({
        ...e,
        key: e.id,
        customer: e.customerNavigation?.name,
        employee: e.employeeNavigation?.name,
        status: e.statusNavigation?.content
      })));
    }
  });

  return (
    <div className="w-100 container my-5">
      <div className="my-3 text-left">
        <Button type="primary" onClick={() => navigate('/manage/transaction/create')}>CREATE</Button>
      </div>

      {!isLoading && (<> 
        <Table
          columns={columns}
          dataSource={transactions}
        />
      </>)}
    </div>
  );
}

export default ManageTransaction;