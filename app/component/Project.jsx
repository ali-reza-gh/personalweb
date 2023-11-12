import React from 'react';
import Cart from './Cart';
import data from "@/app/JSON/data.json"

const Project = () => {
    

    return (
        <section id='Projects' className=' w-3/5 m-auto'>
            <p className="text-blue-700 text-xl font-bold mb-3 uppercase">Projects</p>
             <h3 className='text-2xl font-extrabold leading-snug'>Each project is a unique piece of development 🧩</h3>
             {data.map((i)=>{
                return (
             <Cart key={i.id} {...i}/>
            );})}
        </section>
    );
};

export default Project;

