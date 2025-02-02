import React from 'react';
import './Css/Hero.css';
import Typewriter from 'typewriter-effect';
import Intro from './Intro';

const Hero = () => {
  return (
    <div className="w-full  px-4 sm:px-6 lg:px-12">
      <div className=" flex flex-col justify-center items-center sm:items-start sm:flex-row-reverse justify-center min-h-screen gap-8 sm:gap-12">
        
        {/* Right Image (Pushes Text Down) */}
        <div className="w-full sm:w-[450px] flex justify-center">
          <img
            src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
            alt="coding"
            className="max-w-full h-auto sm:mt-10"
          />
        </div>

        {/* Left Content */}
        <div className="text-center sm:text-left mt-5 sm:mt-0 md:mt-[10rem]">
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Hi There 👋</h1>
          <h1 className="text-white text-3xl sm:text-4xl font-bold flex items-center justify-center sm:justify-start gap-2">
            I'm <span className="text-purple-500">Himanshu Sagar</span>
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl font-bold ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Student')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('UI/UX Designer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('MERN Developer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('JAVA Programmer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Open Source Contributor')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Freelancer')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Tech Enthusiast')
                  .start();
              }}
            />
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <Intro />
    </div>
  );
};

export default Hero;
