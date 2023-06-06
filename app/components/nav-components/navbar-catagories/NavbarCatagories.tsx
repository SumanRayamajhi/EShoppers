import React from "react";

const NavbarCatagories = ({ open }: any) => {
  const links = [
    {
      to: "/",
      name: "All",
    },
    {
      to: "/",
      name: "Books",
    },
    {
      to: "/",
      name: "Electronics",
    },
    {
      to: "/",
      name: "Fitness",
    },
  ];
  return (
    <ul
      className={`md:flex md:items-center md:pb-0 absolute md:static bg-teal-600 md:z-auto z-[-1] left-0 wifull md:w-auto md:pl-0 pl-9 transition-all duration-400 ease-in ${
        open ? "top-12 p-5" : "top-[-490px]"
      }`}
    >
      {links.map((link) => (
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
          <a
            href={link.to}
            className="text-teal-100 hover:bg-teal-400 px-1 duration-300 rounded-md"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCatagories;
