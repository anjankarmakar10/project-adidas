import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Sections/Categories";
import CreateStore from "@/components/Sections/CreateStore";
import HotDeals from "@/components/Sections/HotDeals";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <CreateStore />
      <HotDeals />
    </main>
  );
}
