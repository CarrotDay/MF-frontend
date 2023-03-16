import React from 'react';
import {Link} from "react-router-dom";

const FigureItem = ({meta, srcImg, price}) => {
  return (
    <div
      className="card h-100"
    >
      <Link to={meta} className={"d-flex flex-column h-100"}>
        <div className="img-figure h-100">
          <img className="card-img-top" src={srcImg} alt=""/>
        </div>
        <div className="card-body item-content">
          <p className="price mt-2">{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default FigureItem;