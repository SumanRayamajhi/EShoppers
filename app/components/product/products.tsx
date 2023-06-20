import posts from "@/app/data";
import React from "react";
import ProductCard from "./product-card";

type Currency = "EUR" | "USD";
type Price = {
  amount: number;
  currency: Currency;
};

type ProductsProps = {
  id: number;
  title: string;
  price: Price;
  desc: string;
  image?: string;
  catagories: string;
};

const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="shadow-lg rounded-lg">
          <ProductCard
            title={post.title}
            image={post.image}
            price={post.price}
            description={post.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
