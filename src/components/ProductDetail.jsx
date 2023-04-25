import React from 'react';
import {Link} from "react-router-dom";

const ProductDetail = ({ product, isLogin }) => {
  return (
      <div className="container center">
        <div className="row container my-3" >
          <div className="title-list col-12 p-0 text-md-left px-3 text-sm-center">
            <h1 className={"font-weight-bold"}>Chi tiết sản phẩm</h1>
          </div>
          <div className="container col-12">
            <div className="row product-detail py-3 text-left"  style={{backgroundColor:"#fff"}}>
              <div className="img-product-container col-12 col-md-4">
                <img src={product?.srcImg} className={"img-product card-img-top"}/>
              </div>
              <div className="product-info col-12 col-md-8">
                <div className="title-product">
                  <h1 className="font-weight-bold">{product?.name}</h1>
                </div>
                <div className="rate-product">
                  <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
                  <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
                  <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
                  <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
                  <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
                </div>
                <div className="amount">
                  Số lượng: {product?.amount}
                </div>
                <div className="price-product">
                  Giá tiền: {product?.price}
                </div>
                <div className="catalog">
                  <div className="tagcloud">
                    <Link to={"/"} className={"tag-cloud-link"}>
                       {product?.catalog}
                      Học đường
                    </Link>
                  </div>
                </div>
                <div className="description">
                  <p>
                    {product?.description || 'Chưa có mô tả'}
                    {/* Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum */}
                  </p>
                </div>
                <div className="btn-group">
                  <Link to={isLogin?'#':'/sign-in'}>
                    <button className="add-product">
                      <span>Thêm sản phẩm</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

// const ProductDetail = () => {
//   return (
//       <div className="container">
//         <div className="row container my-3" >
//           <div className="title-list col-12 p-0 text-md-left px-3 text-sm-center">
//             <h1 className={"font-weight-bold"}>Chi tiết sản phẩm</h1>
//           </div>
//           <div className="container col-12">
//             <div className="row product-detail py-3 text-left"  style={{backgroundColor:"#fff"}}>
//               <div className="img-product-container col-12 col-md-4">
//                 <img src={"/Uploads/manga/1.png"} className={"img-product card-img-top"}/>
//               </div>
//               <div className="product-info col-12 col-md-8">
//                 <div className="title-product">
//                   <h1 className="font-weight-bold">Boku girl</h1>
//                 </div>
//                 <div className="rate-product">
//                   <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
//                   <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
//                   <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
//                   <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
//                   <span className={"pr-2"}><i className="fa fa-star" style={{color:"#fec20c"}} aria-hidden="true"></i></span>
//                 </div>
//                 <div className="amount">
//                   Số lượng: 23
//                 </div>
//                 <div className="price-product">
//                   Giá tiền: 25000
//                 </div>
//                 <div className="catalog">
//                   <div className="tagcloud">
//                     <Link to={"/"} className={"tag-cloud-link"}>
//                       Học đường
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="description">
//                   <p>
//                     Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum Lorem ibsum
//                   </p>
//                 </div>
//                 <div className="btn-group">
//                   <button className="add-product">
//                     <span>Thêm sản phẩm</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//   );
// };

export default ProductDetail;