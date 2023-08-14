import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import MobileNav from "./MobileNav";

export const Navbar = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-white z-50">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="md:hidden cursor-pointer">
            <MobileNav />
          </div>

          <Link href={"/"}>
            <Image src={Logo} width={60} height={60} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap- font-medium">
            <Button className="text-base" variant={"ghost"} size={"lg"}>
              <Link href={"/"}>Home</Link>
            </Button>
            <Button className="text-base" variant={"ghost"} size={"lg"}>
              <Link href={"/"}>Collections</Link>
            </Button>
            <Button className="text-base" variant={"ghost"} size={"lg"}>
              <Link href={"/"}>Contact</Link>
            </Button>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button size={"icon"} variant={"outline"}>
            <AiOutlineShoppingCart size={24} />
          </Button>
          <Button>Sign in</Button>
        </div>
      </nav>
    </header>
  );
};
