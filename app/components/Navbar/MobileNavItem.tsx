import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <SheetTrigger>
        <Button className="text-lg" variant={"ghost"} size={"lg"}>
          {children}
        </Button>
      </SheetTrigger>
    </Link>
  );
};

export default MobileNavItem;
