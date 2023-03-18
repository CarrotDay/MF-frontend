import React from 'react';
import {IconButton, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ProductCart = () => {
  return (
    <div className="item-product row py-3 mb-3">
      <div className="img-product-container col-4">
        <img src={"/Uploads/manga/1.png"} className={"card-img-top img-product"}/>
      </div>
      <div className="detail-product col-8 d-flex flex-column justify-content-between">
        <div className="title-product">
          <h2 className={"font-weight-bold"}>Boku girl</h2>
        </div>
        <div className="description-product">
          <p>Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum </p>
        </div>
        <div className="action-product d-flex my-4">
          <IconButton sx={{
            width: 20,
            height: 40,
          }} color="error" className="plus-btn">
            <RemoveIcon aria-hidden="minus"></RemoveIcon>
          </IconButton>
          <TextField value={"2"} sx={{
            padding: 0,
            width: 50,
            "& .MuiInputBase-root": {
              height: 40,
            },
          }} className={"mx-2"}></TextField>
          <IconButton sx={{
            width: 20,
            height: 40,
          }} color="primary" className="plus-btn">
            <AddIcon aria-hidden="add" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;