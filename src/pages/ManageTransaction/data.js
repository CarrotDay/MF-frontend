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
    filters: [
      {
        text: 'Chưa thanh toán',
        value: 'Chưa thanh toán'
      },
      {
        text: 'Đã thanh toán',
        value: 'Đã thanh toán'
      },
      {
        text: 'Đang vận chuyển',
        value: 'Đang vận chuyển'
      },
      {
        text: 'Đã xác nhận',
        value: 'Đã xác nhận'
      },
      {
        text: 'Hủy',
        value: 'Hủy'
      }
    ],
    onFilter: (v, e) => e.status === v,
    sorter: (a, b) => a.status > b.status ? 1 : -1,
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
    filters: [
      {
        text: '1',
        value: 1
      },
      {
        text: '2',
        value: 2
      },
      {
        text: '3',
        value: 3
      },
      {
        text: '4',
        value: 4
      },
      {
        text: '5',
        value: 5
      }
    ],
    onFilter: (v, e) => e.rate === v,
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
      detailLink={`/manage/transaction/${value}`} 
      editLink={`/manage/transaction/update/${value}`}
      delLink={`/manage/transaction/${value}`}
    />
  }
];