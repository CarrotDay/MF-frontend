import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';

import { getCustomers } from '~/api/customer.api';
import { columns } from './data';

function ManageCustomer() {
  const [customers, setCustomers] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    onSuccess: data => setCustomers(data.data.map(e => ({
      ...e,
      key: e.id
    })))
  });

  return (
    <div className="w-100 container my-5">
      {!isLoading && (<> 
        <Table
          columns={columns}
          dataSource={customers}
        />
      </>)}
    </div>
  );
}

export default ManageCustomer;