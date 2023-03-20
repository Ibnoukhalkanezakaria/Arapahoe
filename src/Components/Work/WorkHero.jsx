import React from "react";
import { Link } from "react-router-dom";
import items from "../../Data/items";

const WorkHero = () => {
  return (
    <div className="md:py-[50px] py-0">
      <div className="Wrapper">
        {items.map((item) => {
          const { name } = item;
          return (
            <div key={item.id}>
              <Link to={`${item.id}`}>
                <h1 className="lg:text-[8vw] secondary-clr font-bold lg:leading-[55px] hover:opacity-50 cursor-pointer">
                  {name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHero;
