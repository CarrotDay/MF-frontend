import React, { useEffect, useState } from 'react';

import { MyTable } from '~/components';
import { getCatalogAPI, getHeaderWithBody } from '~/api/site.api';

import { catalogData } from './data';

function ManageSite() {
  const [catalog, setCatalog] = useState({ head: catalogData.head, body: catalogData.body.map(e => ({...e, active: e.active ? 1 : 0 })) });
  const [header, setHeader] = useState();

  const getCatalogHandle = async () => {
    const data = await getCatalogAPI();

    setCatalog({ head: catalogData.head, body: data.map(e => ({ ...e, active: e.active ? 1 : 0 })) });
  };

  const getHeaderHandle = async () => {
    const data = await getHeaderWithBody({ Newest: true });

    setHeader(data?.[0]);
  }

  useEffect(() => {
    getCatalogHandle();
    getHeaderHandle();
  }, []);

  return (
    <div>
      <div>
        <h2>Info</h2>
        
        <div className="container d-flex my-3 ">
          <div>
            <div>
              <img src={header?.logo} style={{ width: '200px' }} />
            </div>

            <button type="button" className="MyBtn MyBtn-primary">Change</button>
          </div>

          <div className="px-5 text-left w-100 d-flex flex-column">
            <label htmlFor="twitter">Description: </label>
            
            <div className="h-100">
              <textarea style={{ border: 'none', resize: 'none' }} value={header?.description} className="w-100 h-100"></textarea>
            </div>
          </div>
        </div>

        <button className="MyBtn MyBtn-primary">Update</button>
      </div>

      <div className="my-5">
        <h2>Catalog</h2>

        <MyTable head={catalog.head} body={catalog.body} />
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