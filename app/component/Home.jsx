import React from 'react';
//IMG
import Image from "next/image";
import waving from "@/public/image/waving.1.png";
//STYLE
import "@/app/styles/myimage.css"
//LINK
import Link from "next/link";

const Home = () => {
    return (
        <section id="Home" className="bg-[#f9f9f9] dark:bg-black h-auto w-full">
        <div className="lg:max-w-5xl px-7 justify-center m-auto">
            <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-20 pt-20  lg:pt-52">
              <div className="w-3/5 space-y-6 ">
                <div className='lg:relative flex max-sm:justify-center'>
                <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-black leading-tight text-zinc-700 dark:text-white">
                  Front-End React Developer
                </h1>
                <Image className="max-sm:hidden flex w-16 h-16 lg:absolute lg:left-80 lg:bottom-0" src={waving} width={200} height={200} alt="waveHand" />
                </div>
                <p className="text-[#555] text-center lg:text-left dark:text-gray-400  text-lg font-medium leading-loose tracking-wide">
                  Hi, I&apos;m Alireza Ghaffar. A passionate Front-end React
                  Developer based in Qazvin, Iran. 📍
                </p>
                <div className="flex gap-5 max-lg:justify-center">
                <Link href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </Link>
                <Link
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ali-reza-gh"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                </div>
              </div>
              <div className="flex lg:w-2/5 justify-center "> 
                   <div className="box">
                     <div className="spin-container">
                       <div className="shape">
                         <div className="bd"></div>
                       </div>
                      </div>
                   </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-32 pb-20">
              <p className="text-lg font-medium  max-lg:border-b-2 lg:border-r-2 border-gray-500 sm:max-lg:pb-7 lg:pr-6">Tech Stack</p>
              <div>
                <ul className="flex flex-wrap gap-10 justify-center">
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=html,css"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=js,ts"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=react,next"
                      alt="skill-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=tailwind,scss"
                      alt="skill-icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    );
};

export default Home;