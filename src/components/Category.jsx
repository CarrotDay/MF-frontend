import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getCatalogAPI } from '~/api/site.api';

const Category = () => {
  const [data, setData] = useState([]);

  useQuery({
    queryKey: ['category'],
    queryFn: () => getCatalogAPI(),
    onSuccess: data => {
      setData(data.filter(e => !e.type));
    }
  });
  return (
    <section className='category my-3 container'>
      <div className="col text-left title-list">
        <h1 className="font-weight-bold">Thể loại</h1>
      </div>
      <ul className="category-content text-left">
        {data?.map(e => (
          <li className="item-category" key={e.meta}>
            <a href={`/side-product/${e.meta}`} > <h5>{e.name}</h5> </a>
          </li>
        ))}
      </ul>
    </section>

  );
};

export default Category;