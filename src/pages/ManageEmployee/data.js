import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
    sorter: (a, b) => a.email > b.email ? 1 : -1,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
    sorter: (a, b) => a.phone > b.phone ? 1 : -1
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
    align: 'center',
    sorter: (a, b) => a.birthday > b.birthday ? 1 : -1,
    render: value => value.substring(0, 10)
  },
  {
    title: 'Create At',
    dataIndex: 'createAt',
    key: 'createAt',
    align: 'center',
    sorter: (a, b) => a.createAt > b.createAt ? 1 : -1,
    render: value => value.substring(0, 10)
  },
  {
    title: 'Action',
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