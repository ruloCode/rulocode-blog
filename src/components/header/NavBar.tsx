import Link from "next/link";

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "Portfolio", to: "/portfolio" },
    { id: 2, name: "Blog", to: "/blog" },
    { id: 3, name: "Contact", to: "/Contact" },
  ];
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row gap-4">
        {links.map((link) => (
          <li key={link.id} className="ml-4">
            <Link href={link.to} className="text-gray-700 font-bold">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
