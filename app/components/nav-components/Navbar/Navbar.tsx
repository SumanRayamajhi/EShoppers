"use client";
import { NavbarProps } from "@/app/interfaces/interface";
import React, { useState } from "react";
import NavbarCatagories from "../navbar-catagories/NavbarCatagories";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 text-teal-100">
      <nav className="flex md:flex items-center justify-between bg-teal-600 py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl right-8 top-6 cursor-pointer md:hidden "
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] px-1 duration-500 rounded-md">
          LOGO
        </div>

        <NavbarCatagories open={open} />
        <div className="relative items-center ">
          <span className="absolute flex justify-center items-center text-center bg-amber-600 bottom-4 left-5 h-5 w-5  rounded-full font-semibold">
            0
          </span>
          <HiShoppingCart size={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
