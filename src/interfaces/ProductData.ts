export default interface ProductData {
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

export default interface RootState {
  cart: CartState;
}
