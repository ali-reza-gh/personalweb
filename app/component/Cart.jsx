import Image from 'next/image';
import React from 'react';
//IMG
import car from "@/public/image/car.webp"
const Cart = () => {
    return (
        <div className='flex border my-20 px-20 py-10 rounded-3xl gap-10'>
            <div className='w-1/2 h-80 overflow-hidden rounded-2xl shadow-lg'>
            <Image src={car} alt='project image' />
            </div>
            <div className='w-1/2'>
                <p>CAR RENTAL(FEBRUARY 2023)🚗</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas exercitationem in, praesentium possimus dolorem aut labore! Dolorum corrupti quis obcaecati explicabo, unde recusandae culpa quisquam. Tempora reiciendis quidem, hic excepturi tenetur quod unde! Facere, ipsam voluptatibus beatae dicta pariatur dolore aspernatur praesentium cumque. A quae obcaecati temporibus pariatur qui.
                </p>
            </div>
            
        </div>
    );
};

export default Cart;