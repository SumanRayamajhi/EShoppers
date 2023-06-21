import Link from "next/link";
import React from "react";
import { links } from "./Nav-links";

interface NavCatagoriesProps {
  onClickMenuButton: () => void;
}

const NavbarCatagories: React.FC<NavCatagoriesProps> = ({
  onClickMenuButton,
}) => {
  return (
    <div>
      <ul className="md:flex flex-row md:text-2xl text-4xl text-white ">
        {links.map((link) => (
          <li
            key={link.name}
            className="p-6 font-bold md:py-2 md:px-4 hover:bg-teal-600 hover:text-gray-800 hover:rounded-md hover:ease-out hover:duration-300"
          >
            <Link href={link.to} onClick={onClickMenuButton}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarCatagories;
