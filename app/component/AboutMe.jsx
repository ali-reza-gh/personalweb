import Image from 'next/image';
import React from 'react';
import AboutMeIMG from '@/public/image/aboutme.jpg'
import AboutMeSVG from '@/public/image/aboutsvg.svg'
import programmer from '@/public/image/programmer.svg'
import "@/app/styles/animation.css"

const AboutMe = () => {
    return (
        <section id="About" className='w-full'>
        <div className="lg:max-w-5xl px-7 justify-center m-auto py-40">
            <div className="flex lg:flex-row items-center max-lg:flex-col">
                <div className="lg:w-1/2 flex relative max-lg:mb-10">
                    <Image className='rounded-2xl object-cover' src={AboutMeIMG} alt='About me' width={400} height={300}/>

                    <span className='absolute lg:bottom-[-3rem] max-lg:-bottom-14 max-lg:-right-14 lg:right-10 bg-white rounded-full '>
                        <Image id='svg' className="transform: rotate(3.142rad);" src={AboutMeSVG} alt='text' width={200} height={200}/>
                        <Image className='absolute bottom-14 right-14' src={programmer} alt='svg' width={90} height={90} />
                    </span>
                </div>
                <div className="lg:w-1/2 max-lg:max-w-sm">
                    <h3 className="text-blue-600 text-xl font-bold mb-2 uppercase lg:text-left max-lg:text-center">About Me</h3>
                    <h4 className="text-2xl text-[#2d2e32] dark:text-white mb-4 font-extrabold leading-snug lg:text-left max-lg:text-center">A dedicated Front-end Developer<br/> based in Qazvin, IRAN 📍</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-snug lg:text-left max-lg:text-center">
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>

                </div>

            </div>
        </div>
        </section>
    );
};

export default AboutMe;