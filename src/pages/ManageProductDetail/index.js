import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { MyInput, MyTextarea } from '~/components';
import { getProductWithMetaAPI } from '~/api/product.api';

function ManageProductDetail() {
  const { meta } = useParams();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();

  const [product, setProduct] = useState(null);

  async function getProductWithMetaAPIHandle() {
    if ( !meta ) {
      setProduct('create');
      return;
    }
    
    try {
      setProduct(await getProductWithMetaAPI(meta));
    }
    catch (err) {
      console.log(err);
      setProduct("error");
    }
  };

  function changeThumbnailHandle() {
    if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
      console.log('Hello');
      var reader = new FileReader();
      reader.onload = e => {
        thumbnailReviewRef.current.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(thumbnailRef.current.files[0]);
    }
  };

  function clickThumbnail() {
    thumbnailRef.current.click();
  }

  useEffect(() => {
    getProductWithMetaAPIHandle();
  }, []);

  return (
    <div className="container text-left">
      {product ? (
        <>
          <div className="mb-3 text-center">
            Thumbnail
            <div className="mb-3">
              <img ref={thumbnailReviewRef} className="img-thumbnail" width="200px" src={product.srcImg} alt="thumbnail..." />
            </div>
            <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
            <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">CHANGE</button>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <MyInput id="name" value={product.name} className="form-control" placeholder="Name..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <MyTextarea id="description" value={product.discription} style={{ resize: 'none' }} className="form-control" placeholder="Description..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <MyInput id="image" type="file" className="form-control-file" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="type">Type</label>
            <select defaultValue={product.type ? '1' : '0'} className="custom-select" id="type">
              <option value="0">Anime</option>
              <option value="1">Figure</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <MyInput id="price" value={product.price} type="number" className="form-control" placeholder="Price..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="discount" className="form-label">Discount</label>
            <MyInput id="discount" value={product.discount} type="number" className="form-control" placeholder="Discount..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <MyInput id="amount" value={product.amount} type="number" className="form-control" placeholder="Amount..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="sale" className="form-label">Sale</label>
            <MyInput id="sale" value={product.sale} type="number" className="form-control" placeholder="Sale..." />
          </div>
          
          <div className="mb-3">
            <label htmlFor="meta" className="form-label">Meta</label>
            <MyInput id="meta" value={product.meta} className="form-control" placeholder="Meta..." />
          </div>
          
          <div className="mb-3 form-check">
            <MyInput id="active" type="checkbox" className="form-check-input" /> 
            <label htmlFor="active" className="form-label">Active</label>
          </div>
          
          <div className="mb-3">
            <label htmlFor="order" className="form-label">Order</label>
            <select defaultValue={product.order || '0'} className="custom-select" id="order">
              <option value="0">null</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </>
      ) : <div>Loading...</div>}
    </div>
  );
}

export default ManageProductDetail;