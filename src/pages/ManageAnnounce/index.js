import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Table, Button } from 'antd';

import { getAnnounces } from '~/api/announce.api';

import { columns } from './data';

function ManageAnnounce() {
  const navigate = useNavigate();

  const [announces, setAnnounces] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['announces'],
    queryFn: getAnnounces,
    onSuccess: data => setAnnounces(data.data.map(e => ({
      ...e,
      key: e.id,
      thumbnail: e.srcImg
    })))
  });

  return (
    <div className="w-100 container my-5">
      <div className="my-3 text-left">
        <Button type="primary" onClick={() => navigate('/manage/announce/create')}>CREATE</Button>
      </div>

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