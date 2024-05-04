import { getSingleCatalog } from "@/service/getSingleCategory";
import ProductCard from "@/components/ProductCard";

import React from "react";

const SingleCategorypage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSingleCatalog({ params });
  return (
    <div className="md:px-[50px] px-4">
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-[10px] md:py-20 pt-4 pb-10 ">
        {data.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      ;
    </div>
  );
};

export default SingleCategorypage;
