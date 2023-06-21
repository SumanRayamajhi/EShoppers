import React from "react";
import posts from "../data";
import ProductCard from "../components/product/product-card";
function Fitness() {
  const fitness = posts.filter((post) => post.catagories === "fitness");
  return (
    <div className="container mx-auto py-32 px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {fitness.map((fitness) => (
        <div key={fitness.id}>
          <ProductCard
            title={fitness.title}
            image={fitness.image}
            price={fitness.price}
            description={fitness.desc}
          />
        </div>
      ))}
    </div>
  );
}

export default Fitness;
