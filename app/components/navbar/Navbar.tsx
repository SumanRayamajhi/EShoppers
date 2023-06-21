"use client";
import React, { useEffect, useState } from "react";
import NavbarCatagories from "./NavbarCatagories";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const onClickMenuButton = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#000");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-out duration-300 px-5"
    >
      <nav className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <div onClick={onClickMenuButton} className="block sm:hidden z-10">
          {open ? (
            <HiX size={30} style={{ color: `${textColor}` }} />
          ) : (
            <HiMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>

        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            LOGO
          </h1>
        </Link>
        <div
          className="hidden sm:flex font-bold"
          style={{ color: `${textColor}` }}
        >
          <NavbarCatagories open={open} onClickMenuButton={onClickMenuButton} />
        </div>
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <NavbarCatagories open={open} onClickMenuButton={onClickMenuButton} />
        </div>
        <div className="relative items-center ">
          <span className="absolute flex justify-center items-center text-center bg-amber-600 bottom-4 left-5 h-5 w-5  rounded-full font-semibold">
            0
          </span>
          <HiShoppingCart style={{ color: `${textColor}` }} size={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
