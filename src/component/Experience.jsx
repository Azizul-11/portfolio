import React from "react";
import C from "../assets/c++.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import htm from "../assets/html.png";
import java from "../assets/javascript.png";
import mon from "../assets/mongodb.png";
import nod from "../assets/node.png";
import rea from "../assets/react.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: htm,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 4,
      src: java,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: mon,
      title: "Mongo-DB",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: nod,
      title: "NODE.JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: rea,
      title: "React-js",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: C,
      title: "C++",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
