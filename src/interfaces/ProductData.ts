export default interface ProductData {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  images: {
    src: string;
  }[];
  variants: {
    price: string;
    title: string;
  }[];
}

export interface CartState {
  items: ProductData[];
  itemCount: number;
  totalCost: number;
}

export interface ProductsState {
  data: ProductData[];
}

export default interface RootState {
  cart: CartState;
  products: ProductsState;
}
