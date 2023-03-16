import React from 'react';
import {Link} from "react-router-dom";
const MangaItem = ({meta, srcImg, name, price}) => {
  return (
    <Link to={meta}
      className="card h-100 d-flex flex-column"
    >
      <div className="img-manga h-100">
        <img className="card-img-top" src={srcImg} alt=""/>
      </div>
      <div className="card-body item-content">
        <h5 className="card-text title-manga mt-2">{name}</h5>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
};

export default MangaItem;