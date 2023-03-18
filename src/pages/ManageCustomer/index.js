import React from 'react';

import { MyTable } from '~/components';

const head = [
  {
    key: 'id',
    title: 'ID'
  },
  {
    key: 'name',
    title: 'Name'
  },
  {
    key: 'age',
    title: 'Age'
  }
];

const body = [...Array(32).keys()].map(id => ({
  id: id + 1,
  name: 'Name',
  age: 12
}));

function ManageCustomer() {
  return (
    <div>
      <MyTable head={head} body={body} />
    </div>
  );
}

export default ManageCustomer;