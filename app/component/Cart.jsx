"use client"
import Image from 'next/image';
import React from 'react';

const Cart = (data) => {
    const {img,title, discription,tech, code, live ,isOdd} = data
    return (
        isOdd?
        <div className='flex text-center border my-20 px-20 py-10 rounded-3xl gap-20'>
            
            <div className='w-3/5 h-80 overflow-hidden rounded-2xl shadow-lg transition ease-in-out hover:-translate-y-1'>
            <Image src={img} alt='project image'width={900} height={700} />
            </div>
            <div className='w-2/5 '>
                <p className="text-lg font-extrabold leading-snug">{title}</p>
                    <br/>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-snug">{discription}</p>
                <div className='flex gap-10 justify-center mt-4'>
                    <span className='shadow-lg px-5 py-3 rounded text-lg font-semibold leading-snug'>
                        {tech.frame}</span>
                        <span className='shadow-lg px-5 py-3 rounded text-lg font-semibold leading-snug'>
                            {tech.ui}
                        </span>
                </div>
                <div className='flex mt-8 gap-12 justify-center'>
                <a className='flex' target="_blank" href="#" rel="noreferrer">Live Demo<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
                <a className='flex' target="_blank" href="#" rel="noreferrer">Code <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                </div>

            </div>
            
        </div>:
                <div className='flex text-center border my-20 px-20 py-10 rounded-3xl gap-20'>
            
                <div className='w-2/5 '>
                    <p className="text-lg font-extrabold leading-snug">{title}</p>
                        <br/>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-snug">{discription}</p>
                    <div className='flex gap-10 justify-center mt-4'>
                        <span className='shadow-lg px-5 py-3 rounded text-lg font-semibold leading-snug'>
                            {tech.frame}</span>
                            <span className='shadow-lg px-5 py-3 rounded text-lg font-semibold leading-snug'>
                                {tech.ui}
                            </span>
                    </div>
                    <div className='flex mt-8 gap-12 justify-center'>
                    <a className='flex' target="_blank" href="#" rel="noreferrer">Live Demo<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
                    <a className='flex' target="_blank" href="#" rel="noreferrer">Code <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    </div>
    
                </div>
                <div className='w-3/5 h-80 overflow-hidden rounded-2xl shadow-lg'>
                <Image src={img} alt='project image'width={900} height={700} />
                </div>
            </div>
    );
};

export default Cart;