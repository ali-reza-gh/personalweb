import React from 'react';
import Cart from './Cart';
import data from "@/app/JSON/data.json"

const Project = () => {
    

    return (
        <section id='Projects' className=' w-auto'>
            <div className='lg:max-w-5xl m-auto px-7'>

            <p className="text-blue-700 text-xl font-bold mb-3 uppercase lg:text-left max-lg:text-center">Projects</p>
             <h3 className='text-2xl font-extrabold leading-snug lg:text-left max-lg:text-center'>Each project is a unique piece of development 🧩</h3>
             {data.map((i)=>{
                 return (
                     <Cart key={i.id} {...i}/>
                     );})}
             </div>
        </section>
    );
};

export default Project;

