import React, {useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from 'antd';

const ProductCart = ({ product, removeCartHandle, changeNumberHandle }) => {
  const removeAmount = () => {
    changeNumberHandle(product?.number-1);
  };

  const addAmount = () => {
    changeNumberHandle(product?.number+1);
  };

  return (
    <div className="item-product row py-3 mb-3">
      <div className="img-product-container col-4">
        <img src={`https://localhost:7114/Uploads/Products/${product?.imageNavigation?.link}`} className={"card-img-top img-product"}/>
      </div>
      <div className="detail-product col-8 d-flex flex-column justify-content- between">
        <div className="title-product">
          <h2 className={"font-weight-bold"}>{product?.name}</h2>
        </div>
        
        <div className="description-product">
          <p>{product?.description}</p>
        </div>
        
        <div className="amount-product">
          <p>Hiện còn: {product?.amount}</p>
        </div>

        <div className="action-product d-flex my-4">
          <IconButton sx={{
            width: 20,
            height: 40,
          }} color="error" className="plus-btn" onClick={removeAmount}>
            <RemoveIcon aria-hidden="minus"></RemoveIcon>
          </IconButton>
          <TextField value={product?.number} sx={{
            padding: 0,
            width: 50,
            "& .MuiInputBase-root": {
              height: 40,
            },
          }} className={"mx-2"}></TextField>
          <IconButton sx={{
            width: 20,
            height: 40,
          }} color="primary" className="plus-btn" onClick={addAmount}>
            <AddIcon aria-hidden="add" />
          </IconButton>
        </div>
      
        <Button onClick={removeCartHandle} type="primary" danger>
          Bỏ khỏi giỏ
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;