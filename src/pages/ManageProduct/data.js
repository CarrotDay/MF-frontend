import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    sorter: (a, b) => a.thumbnail > b.thumbnail ? 1 : -1,
    render: value => <img width="100px" height="100px" src={value} alt="thumbnail" />
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Sale',
    dataIndex: 'sale',
    key: 'sale',
    sorter: (a, b) => a.sale - b.sale,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
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