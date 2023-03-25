export const productData = {
  head: [
    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'price',
      title: 'Price'
    },
    {
      key: 'amount',
      title: 'Amount'
    },
    {
      key: 'sale',
      title: 'Sale'
    },
    {
      key: 'type',
      title: 'Type',
      format: value => value ? 'Figure' : 'Anime'
    }
  ],
  body: [...Array(32).keys()].map(id => ({
    id: id + 1,
    name: 'Name',
    age: 12
  }))
};