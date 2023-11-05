import React from 'react';
import Cart from './Cart';
import data from "@/app/JSON/data.json"

const Project = () => {

    return (
        <div className=' w-[1000px] m-auto'>
            <p>Projects</p>
             <h3>Each project is a unique piece of development 🧩</h3>
              <Cart {...data}/>
        </div>
    );
};

export default Project;

// {data.map((e)=>{
    // return (
    // <Cart key={e.id} {...i}/>
//   );})}