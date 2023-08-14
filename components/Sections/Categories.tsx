import Accessories from "@/assets/bag.webp";
import Choths from "@/assets/shirt.webp";
import Shoes from "@/assets/shoes.avif";
import Headphone from "@/assets/headphone.avif";

import CategotyCard from "../Cards/CategotyCard";

const Categories = () => {
  return (
    <section className="pt-12 container mx-auto px-4">
      <header className="text-center mb-4">
        <h2 className="font-bold text-4xl md:text-5xl">Cetagories</h2>
        <h4 className="text-lg mt-4 text-[#5A5959]">
          Explore our categories and find the best products for you
        </h4>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CategotyCard bg={Shoes} title="Shoes" />
        <CategotyCard bg={Choths} title="Clothing" />
        <CategotyCard bg={Accessories} title="Accessories" />
        <CategotyCard bg={Headphone} title="Gadgets" />
      </div>
    </section>
  );
};
export default Categories;
