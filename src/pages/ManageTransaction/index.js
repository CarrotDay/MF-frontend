import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';

import { getTransactions } from '~/api/transaction.api';
import { columns } from './data';

function ManageTransaction() {
  const [transactions, setTransactions] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    onSuccess: data => setTransactions(data.data['$values'].map(e => ({
      ...e,
      key: e.id,
      customer: e.customerName,
      employee: e.employeeName,
      status: e.statusName
    })))
  });

  return (
    <div className="w-100 container my-5">
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