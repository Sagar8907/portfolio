import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Intro = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 mt-0">
      {/* Introduction Heading */}
      <h1 className="text-white text-2xl sm:text-3xl text-center font-bold mb-6">
        Let me <span className="text-purple-600">Introduce Myself</span>
      </h1>

      {/* Main Content Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 sm:px-[6rem] lg:px-[11rem]">
        
        {/* Left Text Content */}
        <div className="text-white text-lg sm:text-xl text-center sm:text-left font-semibold max-w-[792px]">
          <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
          <p>
            I am fluent in classics like <span className="text-purple-600">Java, JavaScript, and Python.</span>
          </p>
          <p>
            My field of interest includes building new <span className="text-purple-600">Web Technologies</span> and
            exploring areas related to <span className="text-purple-600">Blockchain.</span>
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products with Node.js and modern JavaScript
            libraries and frameworks like React.js and Next.js.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt="Avatar"
            className="max-w-[200px] sm:max-w-[300px] h-auto"
          />
        </div>
      </section>

      {/* Social Media Section */}
      <h1 className="text-center text-white text-2xl sm:text-3xl font-semibold mt-10">FIND ME ON</h1>

      <ul className="flex justify-center items-center gap-6 mt-6">
        <li>
          <a href="https://x.com/sagar_99168" className="text-[2rem] text-white font-[900] hover:text-purple-500 transition duration-300" target='blank'><FaSquareXTwitter /></a>
        </li>
        <li>
          <a href="https://github.com/https://www.linkedin.com/in/himanshu-sagar-83750a28a/" className="text-[2rem] text-white font-[900] hover:text-purple-500 transition duration-300" target='blank'><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/Sagar8907" className="text-[2rem] text-white font-[900] hover:text-purple-500 transition duration-300" target='blank'><FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
