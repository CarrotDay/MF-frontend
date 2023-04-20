import React, { useState } from 'react';
import { Table } from 'antd';
import { useQuery } from '@tanstack/react-query';

import { getAnnounces } from '~/api/announce.api';

import { columns } from './data';

function ManageAnnounce() {
  const [announces, setAnnounces] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['announces'],
    queryFn: getAnnounces,
    onSuccess: data => setAnnounces(data.data['$values'].map(e => ({
      ...e,
      key: e.id,
      thumbnail: e.srcImg
    })))
  });

  return (
    <div className="w-100 container my-5">
      {!isLoading && (<> 
        <Table
          columns={columns}
          dataSource={announces}
        />
      </>)}
    </div>
  );
}

export default ManageAnnounce;