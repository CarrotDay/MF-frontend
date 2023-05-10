import React, { useState } from "react";
import Slide from "~/components/Slide";
import Category from "~/components/Category";
import ProductGrid from "~/components/ProductGrid";
import { useParams } from "react-router-dom";
import { getProducts } from '~/api/product.api';
import { useQuery } from "@tanstack/react-query";

const SideProduct = () => {
  const [type, setType] = useState(false);
  const [data, setData] = useState([]);
  const { meta } = useParams();

  useQuery({
    queryKey: ['products'],
    queryFn: () => {
      if (meta === 'manga') {
        return getProducts({ type: false });
      }
      else if (meta === 'figure') {
        return getProducts({ type: true });
      }
      else {
        return getProducts({ catalogMeta: meta });
      }
    },
    onSuccess: data => {
      setData(data.data);
    }
  });

  return (
    <div>
      <Slide />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <ProductGrid
              isHome={false}
              type={!type}
              data={data}
              category={meta}
            />
          </div>
          <div className="col-12 col-md-4 p-0">
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProduct;
