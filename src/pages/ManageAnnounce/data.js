import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title > b.title ? 1 : -1,
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    sorter: (a, b) => a.image > b.image ? 1 : -1,
    render: value => <img width="100px" height="100px" src={value} alt="image" />
  },
  {
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
    filters: [
      {
        text: 'False',
        value: false
      },
      {
        text: 'True',
        value: true
      }
    ],
    onFilter: (v, e) => e.active === v,
    sorter: (a, b) => a.active > b.active ? 1 : -1,
    render: value => value ? 'True' : 'False'
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
      detailLink={`/manage/product/${value}`} 
      editLink={`/manage/product/update/${value}`}
      delLink={`/manage/product/${value}`}
    />
  }
];