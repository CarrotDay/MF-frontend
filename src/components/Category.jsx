import React from 'react';

const Category = () => {
  return (
    <section className='category my-3 container'>
      <div className="col text-left title-list">
        <h1 className="font-weight-bold">Thể loại</h1>
      </div>
      <ul className="category-content text-left">
        <li className="item-category">
          <a href="#" > <h5>Học đường</h5> </a>
        </li>
        <li className="item-category">
          <a href="#"> <h5>Học đường</h5> </a>
        </li>
        <li className="item-category">
          <a href="#"> <h5>Học đường</h5> </a>
        </li>
      </ul>
    </section>

  );
};

export default Category;