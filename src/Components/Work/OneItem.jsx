import React from "react";
import { useParams } from "react-router-dom";
import items from "../../Data/items";

const OneItem = () => {
  const { oneItem } = useParams();
  const item = items.find((e) => e.id === oneItem);
  const { name, date, images, scope } = item;
  return (
    <div className="py-[50px]">
      <div className="Wrapper">
        <h1 className="secondary-clr sm:text-[8vw] text-4xl font-bold leading-3">
          {name}
        </h1>
        <div className="flex flex-wrap gap-4 justify-between max-w-[400px]">
          <div className="py-2 px-4 border-l-[1px] border-[var(--color3)]">
            <span className="color3">Date</span>
            <h4 className="secondary-clr pt-2 font-medium">{date}</h4>
          </div>
          <div className="py-2 px-4 border-l-[1px] border-[var(--color3)]">
            <span className="color3">scope</span>
            <h4 className="secondary-clr pt-2 font-medium">{scope}</h4>
          </div>
        </div>
        <div className="pt-20">
          {images.map((item, i) => {
            const { image } = item;
            return (
              <div key={i}>
                <img src={image} alt="image" className="pb-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OneItem;
