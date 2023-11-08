"use client"
import Image from 'next/image';
import React from 'react';

const Cart = (data) => {
    const {img,title, discription,tech, code, live ,isOdd} = data
    return (
        isOdd?
        <div className='flex border my-20 px-20 py-10 rounded-3xl gap-10'>
            
            <div className='w-1/2 h-80 overflow-hidden rounded-2xl shadow-lg'>
            <Image src={img} alt='project image'width={700} height={700} />
            </div>
            <div className='w-1/2'>
                <p>{title}</p>
                    <br/>
                <p>{discription}</p>

            </div>
            
        </div>:
                <div className='flex border my-20 px-20 py-10 rounded-3xl gap-10'>
            
                <div className='w-1/2'>
                    <p>{title}</p>
                        <br/>
                    <p>{discription}</p>
    
                </div>
                <div className='w-1/2 h-80 overflow-hidden rounded-2xl shadow-lg'>
                <Image src={img} alt='project image'width={700} height={700} />
                </div>
                
            </div>
    );
};

export default Cart;