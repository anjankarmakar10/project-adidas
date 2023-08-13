import { BiMenu } from "react-icons/bi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <BiMenu className="mt-3" size={30} />{" "}
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Adidas</SheetTitle>
          </SheetHeader>
          <SheetDescription className="flex flex-col py-10">
            <MobileNavItem href="/">Home</MobileNavItem>
            <MobileNavItem href="/">Collactions</MobileNavItem>
            <MobileNavItem href="/">Contact</MobileNavItem>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileNav;
