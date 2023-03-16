import React from 'react';

const Category = () => {
  return (
    <section className='category my-3 container'>
      <div className="col text-left title-list">
        <h5 className="font-weight-bold">Danh mục thể loại</h5>
      </div>
      <ul className="category-content">
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