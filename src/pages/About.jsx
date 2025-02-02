import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      {/* Container with Flexbox for Layout */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-7 mb-[13rem] gap-8 sm:gap-16">
        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h1 className="text-white font-medium text-3xl mb-6">
            Know who <span className="text-purple-700">I'm</span>
          </h1>
          <p className="text-white text-xl mb-4 font-medium">
            Hi Everyone, I am <span className="text-purple-700">Himanshu Sagar</span> from <span className="text-purple-700">Delhi, India</span>.
          </p>
          <p className="text-white text-xl mb-4 font-medium">
            I am currently pursuing Bachelor of computer application from Amity universi
          </p>
          <p className="text-white text-xl mb-4 font-medium">
            Free to work
          </p>
        </div>

        {/* Image */}
        <div className="w-full sm:w-[25rem]">
          <img
            src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
            alt="About"
            width={"25rem"}
            className="w-full h-auto  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
