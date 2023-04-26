import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Input, Radio, Select } from 'antd';

import { MyInput, MyTextarea, MyCheckbox } from '~/components';
import { getProductWithMeta, createProduct } from '~/api/product.api';
import { uploadFile } from '~/api/uploadFile.api';
import { getCatalogWithBodys } from '~/api/catalog.api';
import { updateProductImage } from '~/api/productImage.api';

let file;
// const initForm = {
//   type: true,
// };

const initForm = {
  amount: 8,
  catalog: 3,
  description: "day la mot tran dau khoc liet",
  discount: 0,
  meta: "bleach-vs-naruto-65575",
  name: "bleach vs naruto",
  price: 23000,
  type: false
};

function ManageProductDetail() {
  const [ form ] = Form.useForm();
  const { meta } = useParams();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();

  const [product, setProduct] = useState(null);
  const [type, setType] = useState(initForm.type);
  const [catalogs, setCatalogs] = useState([]);
  
  useQuery({
    queryKey: ['catalogs', type],
    queryFn: () => getCatalogWithBodys({ type }),
    onSuccess: data => {
      setCatalogs(data.data['$values'].map(e => ({ value: e.id, label: e.name })));
    }
  });

  useQuery({
    queryKey: ['product', meta],
    queryFn: () => getProductWithMeta(meta),
    onSuccess: data => {
      form.setFieldsValue(data.data);
      setProduct(data.data);
    },
    enabled: Boolean(meta)
  });

  async function changeThumbnailHandle() {
    if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
      file = thumbnailRef.current.files[0];
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

  const submitHandle = async () => {
    let image;
    let product;
    if (file) {
      let data = new FormData();
      data.append('file', file);
  
      image = (await uploadFile('ProductImage', data))?.data?.id;
      console.log(image);
    }
    

    if (!meta) {
      const data = form.getFieldsValue();
      const name = data.name;

      product = await createProduct({
        ...data,
        meta: `${data.name.replace(/ /g, '-')}-${Math.floor(Math.random() * 100000)}`,
        image
      });

      console.log(product);
    }
  }

  return (
    <div className="container text-left">
      <div className="mb-3 text-center">
        Thumbnail

        <div className="mb-3">
          <img ref={thumbnailReviewRef} className="img-thumbnail" width="200px" src={product?.srcImg || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'} alt="thumbnail..." />
        </div>

        <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
        
        <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">{product?.srcImg ? 'CHANGE' : 'UPLOAD THUMBNAIL'}</button>
      </div>
      
      <Form form={form} initialValues={initForm} layout="vertical" hideRequiredMark>
        <Form.Item name="name" label="Name" >
          <Input placeholder="Name..." />
        </Form.Item>

        <Form.Item name="description" label="Description" >
          <Input.TextArea placeholder="Description..." />
        </Form.Item>

        <Form.Item name="type" label="Type">
          <Select 
            options={[
              { value: true, label: 'Figure' },
              { value: false, label: 'Manga' },
            ]} 
            onChange={v => setType(v)}
          />
        </Form.Item>

        <Form.Item name="catalog" label="Catalog" >
          <Select 
            options={catalogs} 
          />
        </Form.Item>

        <Form.Item name="price" label="Price" >
          <Input type="number" placeholder="Price..." />
        </Form.Item>

        <Form.Item name="discount" label="Discount" >
          <Input type="number" placeholder="Price..." />
        </Form.Item>

        <Form.Item name="amount" label="Amount" >
          <Input type="number" placeholder="Price..." />
        </Form.Item>
      </Form>

      <div className="my-3">
        <Button onClick={submitHandle} type="primary">DONE</Button>
      </div>
    </div>
  );
}

export default ManageProductDetail;