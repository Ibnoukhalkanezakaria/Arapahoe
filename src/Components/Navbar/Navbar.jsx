import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="Wrapper">
        <div className="nav flex items-center bg-primary-clr justify-between py-10 ">
          <div className="logo relative z-[10]">
            <Link
              to="/"
              className="text-[20px] flex secondary-clr uppercase font-medium"
            >
              arapahoe <span>&reg;</span>
            </Link>
          </div>
          <div>
            <ul
              className={`py-6 lg:flex bg-primary-clr lg:flex-row lg:pl-0 duration-500 z-[1] pl-[6.6%] lg:bg-transparent absolute lg:static lg:w-auto lg:h-auto w-full left-0 ${
                open ? "top-[100px]" : "top-[-400px]"
              } h-[300px]`}
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
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden block cursor-pointer"
          >
            <HiBars3 className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
