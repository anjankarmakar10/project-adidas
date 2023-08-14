import { Button } from "@/components/ui/button";
import ProductCard from "../Cards/ProductCard";

const HotDeals = () => {
  return (
    <section className="container px-4 mx-auto ">
      <header className="font-bold text-2xl md:text-3xl mb-6 flex items-center justify-between">
        Featured products
        <Button>View all</Button>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
export default HotDeals;
