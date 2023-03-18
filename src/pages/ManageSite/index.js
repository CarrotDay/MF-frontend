import React, { useEffect, useState } from 'react';

import { MyTable } from '~/components';
import { getCatalogAPI } from '~/api/site.api';

import { catalogData } from './data';

function ManageSite() {
  const [catalog, setCatalog] = useState({ head: catalogData.head, body: catalogData.body.map(e => ({...e, active: e.active ? 1 : 0     })) });

  const getCatalogHandle = async () => {
    const data = await getCatalogAPI();
    
    console.log(data);

    setCatalog({ head: catalogData.head, body: data.map(e => ({...e, active: e.active ? 1 : 0     })) });
  };

  useEffect(() => {
    // getCatalogHandle();
  }, []);

  return (
    <div>
      <div>
        <h2>Info</h2>
        
        <div className="container d-flex my-3 ">
          <div>
            <div>
              <img src="/Uploads/img/logo/1.png" style={{ width: '200px' }} />
            </div>

            <button type="button" className="MyBtn MyBtn-primary">Change</button>
          </div>

          <div className="px-5 text-left w-100">
            <label for="twitter">Description: </label>
            
            <div>
              <textarea style={{ border: 'none', resize: 'none' }} value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis" className="w-100"></textarea>
            </div>

            <button className="MyBtn MyBtn-primary">Update</button>
          </div>
        </div>
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
          <label for="twitter" style={{ width: '100px'}}>Twitter: </label>
          <input value="https://twitter.com/ManagaFigure" className="w-100 my-input" type="text" id="twitter" placeholder="Twitter..." />
        </div>
        
        <div className="d-flex py-1">
          <label for="facebook" style={{ width: '100px'}}>Facebook: </label>
          <input value="https://www.facebook.com/ManagaFigure" className="w-100 my-input" type="text" id="facebook" placeholder="Facebook..." />
        </div>
        
        <div className="d-flex py-1">
          <label for="instagram" style={{ width: '100px'}}>Instagram: </label>
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