type Currency = "EUR" | "USD";
type Price = {
  amount: number;
  currency: Currency;
};

export interface ProductsProps {
  id: number;
  title: string;
  price: Price;
  desc: string;
  image?: string;
  catagories: string;
}
