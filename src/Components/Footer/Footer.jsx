import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-[100px]">
      <div className="Wrapper ">
        <div className="flex justify-between flex-wrap gap-6 items-start">
          <div>
            <div className="logo">
              <Link
                to="/"
                className="text-[20px] flex items-center secondary-clr uppercase font-medium"
              >
                arapahoe <span>&reg;</span>
              </Link>
              <p className="max-w-[700px] pt-2 font-medium secondary-clr">
                Design by Daywork, Ibnoukhalkane 2023 checkout the repository{" "}
                <a href="" className="text-[#299644]">
                  here
                </a>
              </p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a href="" className="secondary-clr text-[20px] font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="" className="secondary-clr text-[20px] font-medium">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
