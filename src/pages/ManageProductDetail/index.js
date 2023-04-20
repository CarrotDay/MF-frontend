import React, { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Input, Radio, Select } from 'antd';

import { MyInput, MyTextarea, MyCheckbox } from '~/components';
import { getProductWithMeta } from '~/api/product.api';

function ManageProductDetail() {
  const { meta } = useParams();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();

  const [product, setProduct] = useState(null);

  useQuery({
    queryKey: ['product', meta],
    queryFn: () => getProductWithMeta(meta),
    onSuccess: data => {
      console.log(data.data);
      setProduct(data.data);
    }
  });

  function changeThumbnailHandle() {
    if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
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

  return (
    <div className="container text-left">
      <Form
        className="mb-3"
        layout="vertical"
      >
        <div className="mb-3 text-center">
          Thumbnail

          <div className="mb-3">
            <img ref={thumbnailReviewRef} className="img-thumbnail" width="200px" src={product?.srcImg || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'} alt="thumbnail..." />
          </div>

          <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
          
          <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">{product?.srcImg ? 'CHANGE' : 'UPLOAD THUMBNAIL'}</button>
        </div>

        <Form.Item label="Name">
          <Input 
            value={product?.name} 
            onChange={e => setProduct({ ...product, 'name': e.target.value })} 
            placeholder="Name..." 
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input 
            value={product?.description} 
            onChange={e => setProduct({ ...product, 'description': e.target.value })} 
            placeholder="Description..." 
          />
        </Form.Item>

        {/* <Form.Item label="Image">
          
        </Form.Item> */}

        <Form.Item label="Type">
          <Select
            defaultValue={product?.type || 0}
            onChange={v => setProduct({ ...product, 'type': v})}
            options={[
              { value: 0, label: 'Figure' },
              { value: 1, label: 'Manga' }
            ]}
          />
        </Form.Item>

        <Form.Item label="Price">
          <Input 
            type="number"
            value={product?.price} 
            onChange={e => setProduct({ ...product, 'price': e.target.value })} 
            placeholder="Price..." 
          />
        </Form.Item>

        <Form.Item label="Discount">
          <Input 
            type="number"
            value={product?.discount} 
            onChange={e => setProduct({ ...product, 'discount': e.target.value })} 
            placeholder="Discount..." 
          />
        </Form.Item>

        <Form.Item label="Amount">
          <Input 
            type="number"
            value={product?.amount} 
            onChange={e => setProduct({ ...product, 'amount': e.target.value })} 
            placeholder="Amount..." 
          />
        </Form.Item>

        <Form.Item label="Sale">
          <Input 
            type="number"
            value={product?.sale} 
            onChange={e => setProduct({ ...product, 'sale': e.target.value })} 
            placeholder="Sale..." 
          />
        </Form.Item>

        <Form.Item label="Active">
          <Select
            defaultValue={product?.active || 0}
            onChange={v => setProduct({ ...product, 'active': v})}
            options={[
              { value: 0, label: 'False' },
              { value: 1, label: 'True' }
            ]}
          />
        </Form.Item>

        <Button>DONE</Button>
      </Form>
    </div>
  );
}

export default ManageProductDetail;