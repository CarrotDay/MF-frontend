import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Slide from "~/components/Slide";
import Category from "~/components/Category";
import ProductGrid from "~/components/ProductGrid";
import { useParams } from "react-router-dom";
import { getProductWithPagination } from '~/api/product.api';

const SideProduct = () => {
  const [type, setType] = useState(false);
  const [data, setData] = useState([]);
  const { meta } = useParams();
  const [pagination, setPagination] = useState({ page: 1, pageSize: 30, total: 0 });

  useQuery({
    queryKey: ['products', pagination?.page],
    queryFn: () => {
      if (meta === 'manga') {
        return getProductWithPagination({ type: false, ...pagination });
      }
      else if (meta === 'figure') {
        return getProductWithPagination({ type: true, ...pagination });
      }
      else {
        return getProductWithPagination({ catalogMeta: meta, ...pagination });
      }
    },
    onSuccess: data => {
      setPagination({ ...pagination, total: data?.data?.total });
      setData(data?.data?.products?.filter(e => e.active != false).map(e => ({
        ...e,
        srcImg: e.imageNavigation.link
      })));
    }
  });

  const onChange = (page) => {
    setPagination({ ...pagination, page: page });
  };

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
              onChange={onChange}
              pagination={pagination}
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
