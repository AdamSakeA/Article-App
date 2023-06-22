import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Navigation() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="container mx-auto py-[20px] px-[20px] flex justify-between items-center lg:px-0 ">
      {/* Mobile */}
      <div className="block md:hidden">
        {isToggle ? (
          <IoClose className=" text-2xl" onClick={handleToggle} />
        ) : (
          <FaBars className=" text-lg" onClick={handleToggle} />
        )}
        <div
          className={`${
            isToggle ? "block" : "hidden"
          } absolute top-[60px] w-full left-0 h-full`}
        >
          <div className={` bg-white p-[20px]`}>
            <h1>Berita</h1>
            <h1>our story</h1>
            <h1>Kategori</h1>
          </div>
          <div className={` w-full left-0 h-full bg-black opacity-50 `}></div>
        </div>
      </div>
      <h1 className="font-bold text-lg">Adam Articles</h1>

      {/* Desktop */}
      <div className=" hidden md:flex gap-5">
        <h1>Berita</h1>
        <h1>our story</h1>
        <h1>Kategori</h1>
      </div>

      <div>
        <h1>Profile</h1>
      </div>
    </div>
  );
}
