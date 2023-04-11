import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    sorter: (a, b) => a.customer > b.customer ? 1 : -1,
  },
  {
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
    sorter: (a, b) => a.employee > b.employee ? 1 : -1
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status > b.status ? 1 : -1,
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
    sorter: (a, b) => a.rate - b.rate,
  },
  {
    title: 'Create At',
    dataIndex: 'createAt',
    key: 'createAt',
    sorter: (a, b) => a.createAt > b.createAt ? 1 : -1,
    render: value => value.substring(0, 10)
  },
  {
    title: '',
    key: 'meta',
    dataIndex: 'meta',
    fixed: 'right',
    width: 160,
    render: value => <TableControl 
      detailLink={`/manage/customer/${value}`} 
      editLink={`/manage/customer/update/${value}`}
      delLink={`/manage/customer/${value}`}
    />
  }
];