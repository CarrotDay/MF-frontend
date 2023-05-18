import Money from "~/components/Money";

export const columns = [
  {
    title: 'Sản phẩm',
    align: 'center',
    dataIndex: 'nameProduct',
    key: 'nameProduct',
    sorter: (a, b) => a.name > b.name ? 1 : -1,
  },
  {
    title: 'Số lượng',
    align: 'center',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.employee > b.employee ? 1 : -1
  },
  {
    title: 'Giá tiền',
    align: 'center',
    dataIndex: 'price',
    key: 'price',
    render: (price) => <Money money={price}/>,
    sorter: (a, b) => a.price > b.price ? 1 : -1,
  },
  {
    title: 'Thành tiền',
    align: 'center',
    dataIndex: 'cost',
    key: 'cost',
    sorter: (a, b) => a.cost - b.cost,
    render: (cost) => <Money money={cost}/>
  },
];