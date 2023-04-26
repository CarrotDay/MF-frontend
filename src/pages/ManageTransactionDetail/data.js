import { TableControl } from '~/components';

export const columns = [
  {
    title: 'Sản phẩm',
    dataIndex: 'nameProduct',
    key: 'productId',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Số lượng',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.employee > b.employee ? 1 : -1
  },
  {
    title: 'Giá tiền',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price > b.price ? 1 : -1,
  },
  {
    title: 'Thành tiền',
    dataIndex: 'cost',
    key: 'cost',
    sorter: (a, b) => a.cost - b.cost,
  },
];