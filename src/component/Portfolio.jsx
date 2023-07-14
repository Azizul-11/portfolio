import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import api from "../assets/portfolio/Api.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import foodproject from "../assets/portfolio/foodproject.png";
import navbar from "../assets/portfolio/navbar.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,

      src: ecommerce,
      href: "https://giant-galoshes-pike.cyclic.app/",
    },
    {
      id: 2,
      src: api,
      href: "https://github.com/Azizul-11/weather-app",
    },
    {
      id: 3,

      src: foodproject,
      href: "https://github.com/Azizul-11/frontend-project/tree/main/food%20project2",
    },
    {
      id: 4,
      src: arrayDestruct,
    },
    {
      id: 5,
      src: navbar,
    },
    {
      id: 6,
      src: usestate,
    },
  ];

  const handleLinkClick = (href) => {
    window.open(href, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="ecommerce"
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                onClick={() => handleLinkClick(href)}
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleLinkClick(href)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
