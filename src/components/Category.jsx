import React from 'react';

const Category = () => {
  return (
    <section className='category my-3 container'>
      <div className="col text-left title-list">
        <h2 className="font-weight-bold">Thể loại</h2>
      </div>
      <ul className="category-content text-left px-3">
        <li className="item-category">
          <a href="#"> Học đường </a>
        </li>
        <li className="item-category">
          <a href="#"> Học đường </a>
        </li>
        <li className="item-category">
          <a href="#"> Học đường </a>
        </li>
      </ul>
    </section>

  );
};

export default Category;