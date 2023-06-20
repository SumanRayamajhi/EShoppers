import Navbar from "./components/navbar/Navbar";
import Products from "./components/product/products";

export default function Home() {
  return (
    <div className="container mx-auto py-32 px-8">
      <Products
        id={0}
        title={""}
        price={{
          amount: 0,
          currency: "EUR",
        }}
        desc={""}
        catagories={""}
      />
    </div>
  );
}
