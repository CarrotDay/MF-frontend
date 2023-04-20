import React from "react";
import ProductCart from "~/components/ProductCart";
import {Button} from "@mui/material";
export default function Cart() {
  return (
    <section className="cart container center">
      <div className="row my-3">
        <div className="content-list col-12 col-lg-8 text-left ">
          <div className="title-list px-3">
            <h1 className="font-weight-bold">Giỏ hàng</h1>
          </div>
          <div className="list-product container" style={{backgroundColor: "#fff"}}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div className="check-out col-12 col-lg-4 text-left">
          <div className="title-list px-3 col-12">
            <h1 className="font-weight-bold">Thành tiền</h1>
          </div>
          <div className="money"style={{backgroundColor: "#fff"}}>
            <table className={"table"}>
              <tr>
                <th className={"text-left"}>Tên</th>
                <th>Số lượng</th>
                <th className={"text-right"}>Giá tiền</th>
              </tr>
              <tr>
                <td className={"text-left"}>Boku girl</td>
                <td>4</td>
                <td className={"text-right"}>20000</td>
              </tr>
            </table>
            <table className={"table"}>
              <tr>
                <th className={"text-left"}>Tổng tiền:</th>
                <td className={"text-right"}>80000</td>
              </tr>
            </table>
          </div>
          <div className="">
            <Button sx={{
              width: "100%",
              backgroundColor: "rgb(255,145,77)",
              border: "1px solid rgb(255,145,77)",
              ":hover": {
                backgroundColor: "transparent",
                color: "rgb(255,145,77)",
                border: 1,
                borderColor: "rgb(255,145,77)"
              }
            }} className={"btn-check-out"}  variant="contained" >
              Đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}