import React from "react";
import posts from "../data";
import ProductCard from "../components/product/product-card";

function Books() {
  const books = posts.filter((post) => post.catagories === "books");
  return (
    <div className="container mx-auto py-32 px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {books.map((book) => (
        <div key={book.id}>
          <ProductCard
            title={book.title}
            image={book.image}
            price={book.price}
            description={book.desc}
          />
        </div>
      ))}
    </div>
  );
}

export default Books;
