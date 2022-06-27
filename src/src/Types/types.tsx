export type Product = {
  name: string;
  id: number;
  description: string;
  pic: string;
  price: string;
  weight: string;
  quantaty: number;
}[];

export interface Props {
  data?: Product;
  cartItems?: Product;
  openLogin?: boolean;
  openSignup?: boolean;
  openCart?: boolean;
  updateState?: React.Dispatch<React.SetStateAction<Product>>;
  setOpenLogin?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSignup?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCart?: React.Dispatch<React.SetStateAction<boolean>>;
}