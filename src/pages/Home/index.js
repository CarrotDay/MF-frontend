import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';

import Slide from "~/components/Slide";
import ProductGrid from "~/components/ProductGrid";
import { getProducts } from '~/api/product.api';

const Home = () => {
  const [manga, setManga] = useState([]);
  const [figure, setFigure] = useState([]);

  useQuery({
    queryKey: ['manga'],
    queryFn: () => getProducts({ Type: false, Take: 12 }),
    onSuccess: data => {
      setManga(data?.data?.filter(e => e.active != false));
    }
  });
  
  useQuery({
    queryKey: ['figure'],
    queryFn: () => getProducts({ Type: true, Take: 12 }),
    onSuccess: data => {
      setFigure(data?.data?.filter(e => e.active != false));
    }
  });

  return (
    <div>
      <Slide />
      <ProductGrid isHome={true} type={true} data={manga} />
      <ProductGrid isHome={true} type={false} data={figure} />
    </div>
  );
};

export default Home;
