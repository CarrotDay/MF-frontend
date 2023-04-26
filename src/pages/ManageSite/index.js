import React, { useEffect, useRef, useState } from 'react';

import { MyInput, MyTable } from '~/components';
import { getCatalogAPI } from '~/api/site.api';
import { uploadFile } from '~/api/uploadFile.api';

import { catalogData, addHeader } from './data';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function ManageSite() {
  const queryClient = useQueryClient();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();
  const headerDesRef = useRef();
  const [header, setHeader] = useState();

  async function changeThumbnailHandle() {
    try {
      if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
        const logo = thumbnailRef.current.files[0].name;
        const description = headerDesRef.current.value;
        
        let data = new FormData();
        data.append('file',  thumbnailRef.current.files[0]);
    
        await uploadFile('Header', data); 

        await axios.post('https://localhost:7114/api/site/header/create', { logo });

        await axios.post('https://localhost:7114/api/site/header/description', { description });

        alert("Đã cập nhật");
  
        queryClient.invalidateQueries({ queryKey: ['logo'] });
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  function clickThumbnail() {
    thumbnailRef.current.click();
  }

  const changeDescription = async () => {
    await axios.post('https://localhost:7114/api/site/header/description', { description: headerDesRef.current.value });

    alert("Đã cập nhật");
  
    queryClient.invalidateQueries({ queryKey: ['logo'] });
  }

  useQuery({
    queryKey: ['logo'],
    queryFn: () => axios.get('https://localhost:7114/api/site/logo'),
    onSuccess: data => {
      setHeader(data?.data?.result);
    }
  });

  return (
    <div>
      <div>
        <h2>Info</h2>
        
        <div className="container d-flex my-3 ">
          <div className="mb-3 text-center">
            Logo

            <div className="mb-3">
              <img ref={thumbnailReviewRef} className="img-thumbnail" width="200px" src={header?.logo || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'} alt="thumbnail..." />
            </div>

            <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
            
            <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">Change</button>
          </div>

          <div className="px-5 text-left w-100 d-flex flex-column">
            <label htmlFor="twitter">Description: </label>
            
            <div className="h-100">
              <textarea ref={headerDesRef} style={{ border: 'none', resize: 'none' }} onChange={e => setHeader({ ...header, description: e.target.value })} value={header?.description || ''} className="w-100 h-100"></textarea>
            </div>
          </div>
        </div>

        <button onClick={changeDescription} className="MyBtn MyBtn-primary">Update</button>
      </div>

      <div className="my-5 container w-100 text-left">
        <div className="text-center">
          <h2>Contact</h2>
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="twitter" style={{ width: '100px'}}>Twitter: </label>
          <input value="https://twitter.com/ManagaFigure" className="w-100 my-input" type="text" id="twitter" placeholder="Twitter..." />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="facebook" style={{ width: '100px'}}>Facebook: </label>
          <input value="https://www.facebook.com/ManagaFigure" className="w-100 my-input" type="text" id="facebook" placeholder="Facebook..." />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="instagram" style={{ width: '100px'}}>Instagram: </label>
          <input value="https://www.instagram.com/ManagaFigure" className="w-100 my-input" type="text" id="instagram" placeholder="Instagram..." />
        </div>

        <div className="py-1">
          <button className="MyBtn MyBtn-primary">Update</button>
        </div>
      </div>
    </div>
  );
}

export default ManageSite;