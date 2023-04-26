import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => a.username > b.username ? 1 : -1
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address > b.address ? 1 : -1,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email > b.email ? 1 : -1,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a, b) => a.phone > b.phone ? 1 : -1
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
    sorter: (a, b) => a.birthday > b.birthday ? 1 : -1,
    render: value => value.substring(0, 10)
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
      detailLink={`/manage/employee/${value}`} 
      editLink={`/manage/employee/update/${value}`}
      delLink={`/manage/employee/${value}`}
    />
  }
];