import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { Table, Button } from 'antd';

import { getEmployees } from '~/api/employee.api';
import { columns } from './data';

function ManageEmployee() {
  const navigate = useNavigate();

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
      <div className="my-3 text-left">
        <Button type="primary" onClick={() => navigate('/manage/employee/create')}>CREATE</Button>
      </div>

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