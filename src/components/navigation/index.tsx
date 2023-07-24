import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "../footer";

const NavigationData = [
  {
    name: "About",
    url: "/about",
  },
  // {
  //   name: "Write",
  //   url: "/write",
  // },
  // {
  //   name: "Categories",
  //   url: "/categories",
  // },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-white top-0 left-0 right-0 shadow-lg z-[999999] ${
        isFixed ? "sticky " : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            {/* Tombol untuk membuka/tutup navigasi pada layar mobile */}
            <div className="-mr-2 flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                {isOpen ? (
                  <IoClose className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="flex-shrink-0 ml-4 md:ml-0">
              <Link href="/" className="font-bold text-xl">
                Adams Article
              </Link>
            </div>
            <div className="hidden md:block">
              {/* Navigasi menu */}
              <div className="ml-10 flex items-baseline space-x-4">
                {NavigationData.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.url}
                      className="text-gray-600 hover:text-black px-3 py-2 rounded-md  font-light"
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <input
                  type="text"
                  className=" border border-solid rounded-full text-sm px-3 py-0.5"
                  placeholder="Search on adams.."
                />
              </div>
            </div>
          </div>
          <Image
            src={
              "https://raw.githubusercontent.com/Damskuuii/image/main/esteh.jpeg"
            }
            alt={"tst"}
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Tampilan menu navigasi pada layar mobile */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          {/* Navigasi menu */}
          <div className="px-2 pt-2 pb-3 sm:px-3 bg-white ">
            <input
              type="text"
              className=" border border-solid rounded-full text-sm px-3 py-2 w-full"
              placeholder="Search on adams.."
            />
            {NavigationData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.url}
                  className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div
            className={` w-full left-0 fixed h-screen z-[999999] bg-black opacity-50 `}
          ></div>
        </div>
      </Transition>
    </nav>
  );
}
