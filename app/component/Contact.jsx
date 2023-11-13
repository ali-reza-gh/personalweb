import React from 'react';

const Contact = () => {
    return (
      <section id='Contact' className='w-full'>
        <div className='lg:max-w-5xl m-auto py-32 px-7'>
        <h3 className="text-blue-700 text-xl font-bold mb-2 uppercase lg:text-left max-lg:text-center" >contact</h3>
        <p className="text-2xl font-extrabold leading-snug lg:text-left max-lg:text-center">Don't be shy! Hit me up! 👇</p>
        <div className='flex lg:flex-row max-lg:flex-col px-7 max-lg:gap-16 lg:gap-32 mt-20'>
        <div className='flex gap-7 items-center'>
        <div className='shadow-lg p-2 rounded-full'>
        <svg
            width="30" height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path className="text-blue-600" d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
            <path className="text-blue-600" d="M9 4v13"></path>
            <path className="text-blue-600" d="M15 7v5"></path>
            <path className="text-blue-600" d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path className="text-blue-600" d="M20.2 20.2l1.8 1.8"></path>
        </svg>
        </div><div>
         <p className="text-lg font-extrabold leading-snug">location</p>
         <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-snug">Qazvin,Iran</p>
         </div>
         </div>
         <a href='mailto:alirezaghaffar.dev@gmail.com' className='flex gap-7 items-center'>
            <div className='shadow-lg p-2 rounded-full'>
            <svg className='text-blue-600'
             width="30" height="30" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="text-blue-600" d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path className="text-blue-600" d="M3 7l9 6l9 -6"></path>
                </svg>
        </div>
        <div>
         <p className="text-lg font-extrabold leading-snug">Mail</p>
         <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-snug" >alirezaghaffar.dev@gmail.com</p>
         </div>
         </a>
        </div>
        </div>
      </section>
    );
};

export default Contact;