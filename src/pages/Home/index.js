import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';

import Slide from "~/components/Slide";
import ProductGrid from "~/components/ProductGrid";
import FigureGrid from '~/components/FigureGrid';
import { getProducts } from '~/api/product.api';

const Home = () => {
  const [manga, setManga] = useState([]);
  const [figure, setFigure] = useState([]);

  const isLoadingManga = useQuery({
    queryKey: ['manga'],
    queryFn: () => getProducts({ Type: false, Take: 12 }),
    onSuccess: data => {
      console.log(data);
      setManga(data.data)
    }
  }).isLoading;
  
  const isLoadingFigure = useQuery({
    queryKey: ['figure'],
    queryFn: () => getProducts({ Type: true, Take: 12 }),
    onSuccess: data => setFigure(data.data)
  }).isLoading;

  return (
    <div>
      <Slide />
      <ProductGrid isHome={true} type={true} data={manga} />
      <ProductGrid isHome={true} type={false} data={figure} />
    </div>
  );
};

export default Home;
