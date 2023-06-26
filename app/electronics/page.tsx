import ProductCard from "../components/product/product-card";
import posts from "../data";

function Electronics() {
  const electronics = posts.filter((post) => post.catagories === "electronics");
  return (
    <div className="container mx-auto py-32 px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {electronics.map((electronic) => (
        <div key={electronic.id}>
          <ProductCard
            title={electronic.title}
            image={electronic.image}
            price={electronic.price}
            description={electronic.desc}
          />
        </div>
      ))}
    </div>
  );
}

export default Electronics;
