import Image from "next/image";
import React from "react";

type Currency = "EUR" | "USD";
type Price = {
  amount: number;
  currency: Currency;
};

export interface ProductCardProps {
  title: string;
  image?: string | any;
  price: Price;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  description,
}) => {
  return (
    <div>
      <Image
        className="rounded-t-lg h-300"
        src={image}
        alt="image"
        width={600}
        height={300}
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-700 mb-3">{title}</h3>
        <p> {`${price.amount} ${price.currency}`}</p>
        <p className="text-md font-normal text-gray-600">{description}</p>
        <button className="bg-teal-400 py-2 px-3 rounded-md shadow-sm cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
