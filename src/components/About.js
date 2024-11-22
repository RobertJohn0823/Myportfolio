import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Robert John.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
           I speciaize in crafting sleek websites and scalable applications,
           turning yours ideas into reality with precision, creativity, and passion.
           Together, we can design a solution perfectly aligned with your unique need
           and vision, creating something truly extraordinary.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-violet-700 hover:text-white rounded text-lg"
            >
              See My achievements
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-middle rounded-full"
            alt="hero"
            src="https://i.postimg.cc/KvBj8LWH/my-image.jpg"
          />
        </div>
      </div>
    </section>
  );
}