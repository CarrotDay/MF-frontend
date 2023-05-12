import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function ManageCatalog() {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [catalogId, setCatalogId] = useState(-1);
  const [catalogs, setCatalogs] = useState([]);

  useQuery({
    queryKey: ['catalogs'],
    queryFn: () => axios.get(`${process.env.REACT_APP_SERVER}api/catalog`),
    onSuccess: data => {
      setCatalogs(data?.data);
    }
  })

  useQuery({
    queryKey: ['catalog', catalogId],
    queryFn: () => axios.get(`${process.env.REACT_APP_SERVER}api/catalog/${catalogId}`),
    onSuccess: data => {
      form.setFieldsValue(data?.data);
    },
    enabled: catalogId > 0
  })

  const submitHandle = async () => {
    if (catalogId === 0) {
      await axios.post(`${process.env.REACT_APP_SERVER}api/catalog`, form.getFieldsValue());
    }
    else {
      await axios.post(`${process.env.REACT_APP_SERVER}api/catalog/${catalogId}`, form.getFieldsValue());
    }

    queryClient.invalidateQueries(['catalogs']);
    setCatalogId(-1);
  };

  return (
    <div>
      <div className="my-3 text-left">
        <Button onClick={() => setCatalogId(0)} type="primary">CREATE</Button>
      </div>

      <Table 
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name > b.name ? 1 : -1,
          },
          {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: v => v ? 'Figure' : 'Manga',
            sorter: (a, b) => a.name > b.name ? 1 : -1,
          },
          {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: v => v ? 'Active' : 'Disable',
            sorter: (a, b) => a.name > b.name ? 1 : -1,
          },
          {
            title: '',
            dataIndex: 'id',
            key: 'id',
            render: v => (
              <EditOutlined onClick={() => setCatalogId(v)} style={{ fontSize: '24px' }} />
            )
          },
        ]}
        dataSource={catalogs}
      />

      <Modal
        open={catalogId != -1}
        title="Catalog"
        onCancel={() => setCatalogId(-1)}
        footer={[
          <Button type="primary" onClick={submitHandle}>Done</Button>
        ]}
      >
        <Form form={form} initialValues={{ type: true }}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          
          <Form.Item label="Type" name="type">
            <Select 
              options={[
                { value: true, label: 'Figure' },
                { value: false, label: 'Manga' }
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
