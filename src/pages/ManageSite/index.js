import React, { useEffect, useState } from 'react';

import { MyTable } from '~/components';
import { getCatalogAPI } from '~/api/site.api';

import { catalogData } from './data';

function ManageSite() {
  const [catalog, setCatalog] = useState(catalogData);

  const getCatalogHandle = async () => {
    const data = await getCatalogAPI();
    
    console.log(data);

    setCatalog({ head: catalogData.head, body: data.map(e => ({...e, active: e.active ? 1 : 0 })) });
  };

  useEffect(() => {
    getCatalogHandle();
  }, []);

  return (
    <div>
      <MyTable head={catalog.head} body={catalog.body} />
    </div>
  );
}

export default ManageSite;