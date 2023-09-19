"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  const navLinks = [
    {
      name: "Timeline",
      link: "/",
    },
    {
      name: "Overview",
      link: "overview",
    },
    {
      name: "FAQs",
      link: "faq",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <div className="md:flex md:p-5 md:px-24 md:justify-between items-center shadow bg-custom-color">
      <div className="flex justify-between md:justify-normal items-center p-4">
        <div>
          <Link
            href="/"
            onClick={() => {
              open ? setOpen(!open) : !open;
            }}
          >
            <div>
              <span className="text-white font-bold text-3xl">get</span>
              <span className="text-color-2 font-bold text-3xl">linked</span>
            </div>
          </Link>
        </div>
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <RiMenu4Line className="w-6 h-6" />
          ) : (
            <RiCloseLine className="w-6 h-6" />
          )}
        </div>
      </div>

      <div
        ref={navbarRef}
        className="hidden md:flex md:items-center pb-5 md:pb-0  md:z-auto left-0 w-full md:w-auto md:pl-40 pl-9 transition-all duration-500 ease-in text-white"
      >
        <div className="flex items-center">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="md:flex"
          >
            {navLinks.map(({ link, name }) => (
              <Link href={link} key={name} className="mx-2 text-center">
                <div
                  className={`md:px-4 my-5 md:my-0 ${
                    pathname.startsWith(link) ? "" : ""
                  }`}
                >
                  {name}
                </div>
              </Link>
            ))}
          </div>
          <div className="ml-24">
            <Link
              href="/register"
              className="text-white bg-gradient-to-r from-pink-500 via-purple-500 py-3 px-10 text-center rounded-sm hover:bg-pink-500 transition-all duration-500 "
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      {/* mobile screen navbar  */}
      <div
        className={` ${
          !open ? "hidden" : "absolute top-[4.5rem] md:static w-full text-xl"
        }`}
      >
        <div className="flex h-[40rem] w-full bg-custom-color">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="w-full my-5 py-24 space-y-5 transition-all duration-500 text-white"
          >
            {navLinks.map(({ link, name }) => (
              <Link
                href={link}
                key={name}
                className="justify-center items-center flex"
              >
                <div
                  className={`hover:bg-pink-600 px-6 py-3 rounded-sm w-full transition-all duration-500 ${
                    pathname.startsWith(link) ? "" : ""
                  }`}
                >
                  {name}
                </div>
              </Link>
            ))}
            <div className="px-6 pt-5">
              <Link
                href="/register"
                className="text-white bg-gradient-to-r from-pink-500 via-purple-500 py-3 px-10 text-center rounded-sm hover:bg-pink-500 transition-all duration-500 "
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-20" />
    </div>
  );
};

export default NavBar;
