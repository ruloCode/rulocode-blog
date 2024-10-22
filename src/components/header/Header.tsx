"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NavBar from "./NavBar";
import Logo from "./Logo";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 h-[78px] flex items-center w-full">
      <MaxWidthWrapper className="w-full flex justify-between items-center px-4 lg:px-8">
        <Logo />
        <div className="flex items-center relative">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center">
            <NavBar />
          </nav>
          <Drawer>
            <DrawerTrigger>
              <button
                className="block lg:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerDescription className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <DrawerClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-700 font-bold"
                      >
                        {link.name}
                      </Link>
                    </DrawerClose>
                  ))}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
