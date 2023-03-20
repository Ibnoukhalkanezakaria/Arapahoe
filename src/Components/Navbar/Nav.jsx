import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Nav = () => {
  let Links = [
    { name: "WORK", link: "/" },
    { name: "ABOUT", link: "/about" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="shadow-md Wrapper relative z-[10] top-0 left-0">
        <div className="md:flex items-center justify-between md:px-10 px-7 bg-white py-4">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Designer
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <HiBars3 className="text-2xl" />
          </div>
          <ul
            className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={Link.link} className="text-gray-800">
                  {Link.name}
                </a>
              </li>
            ))}
            <button>Get Started</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
