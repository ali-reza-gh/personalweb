"use client";
//IMG
import Image from "next/image";
import waving from "@/public/image/waving.1.png";
//style
import "@/app/myimage.css"

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="Home" className="bg-[#f9f9f9] h-[91vh]">
        <div className="w-[950px] justify-center m-auto">
            <div className="flex gap-20 pt-52">
              <div className="hero-text w-3/5 space-y-6 ">
                <h1 className="relative text-6xl font-black leading-tight text-zinc-700">
                  Front-End React Developer
                <Image className="flex absolute left-80 bottom-1" src={waving} width={80} height={80} alt="waveHand" />
                </h1>
                <p className="text-[#555] text-lg font-medium leading-loose tracking-wide">
                  Hi, I'm Alireza Ghaffar. A passionate Front-end React
                  Developer based in Qazvin, Iran. 📍
                </p>
                <div className="flex gap-5">
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
              <div className="flex w-2/5 justify-center "> 
                   <div className="box">
                     <div className="spin-container">
                       <div className="shape">
                         <div className="bd"></div>
                       </div>
                      </div>
                   </div>
              </div>
              

            </div>
            <div className="flex items-center gap-16 mt-40">
              <p className="text-lg font-medium border-r-2 border-gray-500 pr-6">Tech Stack</p>
              <div>
                <ul className="flex gap-10">
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
    </>
  );
}