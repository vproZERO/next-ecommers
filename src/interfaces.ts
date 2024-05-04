export interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    discount: string;
  }
  
  export interface CartItem {
    product: Product;
    qty: number;
  }
  