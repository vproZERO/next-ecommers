interface SingleCatalog {
    id: number;
    title: string;
    brand: string;
    type: string;
    price: number;
    img: string;
    discount: string;
    color: string;
    description: string;
  }
  
  export const getSingleCatalog = async ({
    params: { slug },
  }: {
    params: { slug: string };
  }): Promise<SingleCatalog[]> => {
    try {
      const res = await fetch(`https://next-ecommers-backend-6m5t.vercel.app//${slug}`); // Fix params to slug
      const data = await res.json();
  
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  