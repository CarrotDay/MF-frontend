import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';

import { getEmployees } from '~/api/employee.api';
import { columns } from './data';

function ManageEmployee() {
  const [employees, setEmployees] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    onSuccess: data => {
      setEmployees(data.data['$values']);
    }
  });

  return (
    <div className="w-100 container my-5">
      {!isLoading && (<> 
        <Table
          columns={columns}
          dataSource={employees}
        />
      </>)}
    </div>
  );
}

export default ManageEmployee;