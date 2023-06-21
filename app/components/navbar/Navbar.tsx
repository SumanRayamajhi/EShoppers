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
    <header className="fixed bg-teal-700 left-0 top-0 w-full z-10 px-5">
      <nav className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black">
        <div onClick={onClickMenuButton} className="block sm:hidden z-10">
          {open ? (
            <HiX size={30} className="text-white" />
          ) : (
            <HiMenu size={30} className="text-white" />
          )}
        </div>

        <Link href="/">
          <h1 className="font-bold text-white text-4xl">LOGO</h1>
        </Link>
        <div className="hidden sm:flex font-bold text-white">
          <NavbarCatagories onClickMenuButton={onClickMenuButton} />
        </div>
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-teal-700 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-teal-700 text-center ease-in duration-300"
          }
        >
          <NavbarCatagories onClickMenuButton={onClickMenuButton} />
        </div>
        <div className="relative items-center ">
          <span className="absolute flex justify-center items-center text-center bg-amber-600 bottom-4 left-5 h-5 w-5  rounded-full font-semibold">
            0
          </span>
          <HiShoppingCart className="text-white" size={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
