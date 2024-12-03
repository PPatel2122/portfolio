import React from "react";
import blog from "../assets/my/blog.png";
import portfolio from "../assets/my/portfolio.png";
import stu from "../assets/my/stu.png";
import weather from "../assets/my/weather.png";
import emi from "../assets/my/emi.png";
import hexa from "../assets/my/hexa.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      name:"Blog-project",
      link: 'https://blogprojectfirst.netlify.app/',
      repo: 'https://github.com/PPatel2122/Blog.git'
    },
    {
      id: 2,
      src: hexa,
      name:"Hexa-Shop",
      link: 'https://ppatel2122.github.io/hexashop-demo/',
      repo: 'https://github.com/PPatel2122/hexashop-demo.git'
    },
    {
      id: 3,
      src: portfolio,
      name:"My-Portfolio",
      link: 'https://my-portfolio-2122.netlify.app/',
      repo: 'https://github.com/PPatel2122/portfolio'
    },
    {
      id: 4,
      src: weather,
      name:"Fatch-Weather-API",
      link: 'https://weatherapiminiproject.netlify.app/',
      repo: 'https://github.com/PPatel2122/Weather.git'
    },
    {
      id: 5,
      src: emi,
      name:"EMI-Calculater",
      link: 'https://emi-calculater.netlify.app/',
      repo: 'https://github.com/PPatel2122/EMICalculater.git'
    },
    {
      id: 6,
      src: stu,
      name:"Student-table",
      link: 'https://redux-first-project.netlify.app/',
      repo: 'https://github.com/PPatel2122/Routing-studentlist.git'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
              
                src={src}
                alt="projects"
                className="rounded-md  "
              />
              <h2 className="w-1/1 px-6 py-3 m+15 ">{name}</h2>

              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
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
