"use client";
import Link from "next/link";
import { DrawerClose, Drawer } from "@/components/ui/drawer";
type NavBarProps = {
  isMobile?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ isMobile }) => {
  const links = [
    { id: 1, name: "Portfolio", to: "/portfolio" },
    { id: 2, name: "Blog", to: "/blog" },
    { id: 3, name: "Contact", to: "/Contact" },
  ];
  return (
    <div className="flex-shrink-0">
      <Drawer>
        <ul
          className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-4"}`}
        >
          {links.map((link) => (
            <li key={link.id} className={`${isMobile ? "mb-2" : "ml-4"}`}>
              <DrawerClose>
                <Link href={link.to} className="text-gray-700 font-bold">
                  {link.name}
                </Link>
              </DrawerClose>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default NavBar;
