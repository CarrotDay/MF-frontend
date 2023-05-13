import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Table, Button } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

import { getAnnounces, removeAnnounce } from '~/api/announce.api';

import { columns } from './data';

function ManageAnnounce() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [announces, setAnnounces] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['announces'],
    queryFn: getAnnounces,
    onSuccess: data => {
      setAnnounces(data?.data?.map(e => ({
        ...e,
        key: e.id,
        thumbnail: e.srcImg
      })));
    }
  });

  const removeAnnounceHandle = async (id) => {
    try {
      await removeAnnounce(id);
      alert('Xóa thông báo thành công');
      queryClient.invalidateQueries(['announces']);
    }
    catch (err) {
      alert('Xóa thông báo thất bại');
    }
  }

  return (
    <div className="w-100 container my-5">
      <div className="my-3 text-left">
        <Button type="primary" onClick={() => navigate('/manage/announce/create')}>CREATE</Button>
      </div>

      {!isLoading && (<> 
        <Table
          columns={[
            ...columns,
            {
              title: 'Action',
              key: 'meta',
              align: 'center',
              fixed: 'right',
              width: 160,
              render: v => (
                <>
                  <Link to={`/announce/${v?.meta}`}>
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  </Link>
                  <Link to={`/manage/announce/update/${v?.meta}`}>
                    <IconButton color="success">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => removeAnnounceHandle(v.id)} color="error">
                    <DeleteOutlineIcon />
                  </IconButton>
                </>
              )
            }
          ]}
          dataSource={announces}
        />
      </>)}
    </div>
  );
}

export default ManageAnnounce;