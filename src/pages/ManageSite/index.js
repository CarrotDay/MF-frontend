import React, { useEffect, useRef, useState } from 'react';

import { MyInput, MyTable } from '~/components';
import { getCatalogAPI, addHeader } from '~/api/site.api';
import { uploadFile } from '~/api/uploadFile.api';
import { getContact, updateContact } from '~/api/contact.api';

import { catalogData } from './data';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function ManageSite() {
  const queryClient = useQueryClient();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();
  const headerDesRef = useRef();

  const [header, setHeader] = useState();
  const [contacts, setContacts] = useState({});

  useQuery({
    queryKey: ['contacts'],
    queryFn: getContact,
    onSuccess: data => {
      setContacts(data?.data?.reduce((pre, curr) => {
        return {...pre, [curr?.name]: curr}
      }, {}));
    }
  });

  useQuery({
    queryKey: ['logo'],
    queryFn: () => axios.get('https://localhost:7114/api/site/logo'),
    onSuccess: data => {
      setHeader(data?.data?.result);
    }
  });

  async function changeThumbnailHandle() {
    try {
      if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
        const logo = thumbnailRef.current.files[0].name;
        const description = headerDesRef.current.value;
        
        let data = new FormData();
        data.append('file',  thumbnailRef.current.files[0]);
    
        await uploadFile('Header', data); 

        // await axios.post('https://localhost:7114/api/site/header/create', { logo });
        await addHeader({ logo });

        await axios.post('https://localhost:7114/api/site/header/description', { description }, { 
          headers: {
            "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
          } 
        });

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
    await axios.post('https://localhost:7114/api/site/header/description', { description: headerDesRef.current.value }, { 
      headers: {
        "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
      } 
    });

    alert("Đã cập nhật");
  
    queryClient.invalidateQueries({ queryKey: ['logo'] });
  }
  
  const changeContactHandle = e => {
    setContacts({
      ...contacts,
      [e?.target?.name]: {
        ...contacts[e?.target?.name],
        link: e?.target?.value,
      },
    });
  };

  const contactSubmitHandle = async () => {
    try {
      const contactsTmp = Object.values(contacts);
  
      for (const e of contactsTmp) {
        await updateContact(e.id, e);
      }
  
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      alert('Chỉnh sửa thành công');
    }
    catch (err) {
      alert('Sửa contact thất bại!');
    }
  };

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
            <label htmlFor="twitter">Description Footer: </label>
            
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
          <input 
            name="Twitter" 
            value={contacts?.Twitter?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="twitter" 
            placeholder="Twitter..." 
            onChange={changeContactHandle}
          />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="facebook" style={{ width: '100px'}}>Facebook: </label>
          <input 
            name="Facebook" 
            value={contacts?.Facebook?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="facebook" 
            placeholder="Facebook..." 
            onChange={changeContactHandle}
          />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="instagram" style={{ width: '100px'}}>Instagram: </label>
          <input 
            name="Instagram" 
            value={contacts?.Instagram?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="instagram" 
            placeholder="Instagram..." 
            onChange={changeContactHandle}
          />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="email" style={{ width: '100px'}}>Email: </label>
          <input 
            name="Email" 
            value={contacts?.Email?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="email" 
            placeholder="Address..." 
            onChange={changeContactHandle}
          />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="phone" style={{ width: '100px'}}>Số điện thoại: </label>
          <input 
            name="Phone" 
            value={contacts?.Phone?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="phone" 
            placeholder="Phone..." 
            onChange={changeContactHandle}
          />
        </div>
        
        <div className="d-flex py-1">
          <label htmlFor="address" style={{ width: '100px'}}>Địa chỉ: </label>
          <input 
            name="Address" 
            value={contacts?.Address?.link || ''} 
            className="w-100 my-input" 
            type="text" 
            id="address" 
            placeholder="Address..." 
            onChange={changeContactHandle}
          />
        </div>

        <div className="py-1">
          <button onClick={contactSubmitHandle} className="MyBtn MyBtn-primary">Update</button>
        </div>
      </div>
    </div>
  );
}

export default ManageSite;