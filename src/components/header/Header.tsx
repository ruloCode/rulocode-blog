"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
              {" "}
              <button
                className="block lg:hidden focus:outline-none"
                onClick={toggleMenu}
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
                <DrawerDescription>
                  <NavBar isMobile />
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/* Mobile Menu Button */}

    

        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
