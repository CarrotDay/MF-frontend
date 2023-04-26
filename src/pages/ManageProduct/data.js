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
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    align: 'center',
    sorter: (a, b) => a.thumbnail > b.thumbnail ? 1 : -1,
    render: value => <img width="100px" height="100px" src={value} alt="thumbnail" />
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'center',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Sale',
    dataIndex: 'sale',
    key: 'sale',
    align: 'center',
    sorter: (a, b) => a.sale - b.sale,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    filters: [
      {
        text: 'Anime',
        value: false
      },
      {
        text: 'Figure',
        value: true
      }
    ],
    onFilter: (v, e) => e.type === v,
    sorter: (a, b) => a.type > b.type ? 1 : -1,
    render: value => value ? 'Figure' : 'Anime'
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
    align: 'center',
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