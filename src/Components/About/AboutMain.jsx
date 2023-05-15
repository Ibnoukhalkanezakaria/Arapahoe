import React from "react";
import Arapahoe1 from "../../assets/About/arapahoe-1.jpg";
import Arapahoe2 from "../../assets/About/arapahoe-2.jpg";

const AboutMain = () => {
  return (
    <div className="md:py-[100px]">
      <div className="Wrapper">
        <h1 className="md:text-7xl text-4xl secondary-clr font-bold max-w-[1500px]">
          ARAPAHOE is an American creative studio. We design world-class brands
          & digital experiences.
        </h1>
        <img src={Arapahoe1} alt="Arapahoe1" className="py-14" />
        <div>
          <h1 className="md:text-7xl text-4xl font-bold secondary-clr ">
            Services
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <h3 className="text-xl pb-4 font-semibold secondary-clr">
                Branding
              </h3>
              <p className="text-xl secondary-clr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                id sagittis eros, nec tempus tortor. Nulla tincidunt libero
                erat, in viverra turpis fringilla in. Phasellus sed gravida
                nulla, eget scelerisque turpis. Curabitur ut velit dapibus,
                aliquam nibh eget, aliquet est.
              </p>
            </div>
            <div>
              <h3 className="text-xl pb-4 font-semibold secondary-clr">
                Digital
              </h3>
              <p className="text-xl secondary-clr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                id sagittis eros, nec tempus tortor. Nulla tincidunt libero
                erat, in viverra turpis fringilla in. Phasellus sed gravida
                nulla, eget scelerisque turpis. Curabitur ut velit dapibus,
                aliquam nibh eget, aliquet est.
              </p>
            </div>
          </div>
          <img src={Arapahoe2} alt="Arapahoe1" className="py-14" />
          <div>
            <h1 className="md:text-7xl text-4xl font-bold secondary-clr">
              Wanna join forces?
            </h1>
            <a
              target="_blank"
              href="https://calendly.com/"
              className=" text-xl font-semibold primary-clr"
            >
              <button className="hover:opacity-50 bg-secondary-clr py-6 px-10 rounded-lg primary-clr">
                Schedule a call
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
