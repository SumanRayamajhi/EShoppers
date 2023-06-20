"use client";
import React, { useState } from "react";
import NavbarCatagories from "./NavbarCatagories";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onClickMenuButton = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="shadow-m fixed text-teal-100 min-w-full">
      <nav className="flex md:sticky items-center justify-between py-4 md:px-10 px-7 bg-teal-600">
        <div
          onClick={onClickMenuButton}
          className="text-3xl right-8 top-6 cursor-pointer md:hidden "
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
        <Link
          href="/"
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] px-1 duration-500 rounded-md"
        >
          LOGO
        </Link>

        <NavbarCatagories open={open} onClickMenuButton={onClickMenuButton} />
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
