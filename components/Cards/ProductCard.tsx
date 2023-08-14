import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import heroImage from "@/assets/hero-image.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Card className="w-full h-full overflow-hidden rounded-sm">
      <CardHeader className="p-0 border-b">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={heroImage}
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
            loading="lazy"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-4 gap-2.5">
        <CardTitle className="line-clamp-1">Hello</CardTitle>
        <CardDescription className="line-clamp-2s">Hello</CardDescription>
      </CardContent>

      <CardFooter className="flex  p-4  w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Button variant={"outline"} className="w-full">
          Preview
        </Button>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
