import heroImage from "@/assets/hero-image.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 flex items-center  flex-col md:flex-row pt-8 md:pt-16 pb-8 gap-8 md:gap-4">
      <div className="flex-1 self-center text-center md:text-start">
        <h1 className=" text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-normal lg:leading-[108px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="mx-auto md:mx-0 py-5 font-semibold leading-6 max-w-md text-[#5A5959]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <Button size={"lg"} className="px-8">
          Shop now
        </Button>
      </div>
      <div className="flex-1 self-center flex justify-end ">
        <Image className="animate-bounce " src={heroImage} alt="banner" />
      </div>
    </section>
  );
};
export default Hero;
