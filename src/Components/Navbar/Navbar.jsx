import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="Wrapper relative z-[40]">
        <div className=" nav bg-primary-clr lg:flex items-center justify-between py-10 ">
          <div className="logo">
            <Link
              to="/"
              className="text-[20px] flex secondary-clr uppercase font-medium"
            >
              arapahoe <span>&reg;</span>
            </Link>
          </div>
          <div>
            <ul
              className={`absolute lg:static lg:w-auto lg:h-auto  ${
                open ? "top-[120px]" : "top-[-420px]"
              } w-full h-[300px] z-[-1] bg-primary-clr duration-500`}
            >
              <Link
                to="/"
                className="font-medium pr-4 text-[20px] uppercase secondary-clr"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="font-medium text-[20px] uppercase secondary-clr"
              >
                About
              </Link>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="lg:hidden block cursor-pointer absolute right-[20px] top-[38px]"
        >
          <HiBars3 className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
