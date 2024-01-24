import React from 'react';
import { useState, useEffect } from 'react';
import useMenu from '../../hooks/useMenu';

const Recommends = () => {
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category==='offered')

    return (
        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center mx-auto gap-5 my-20'>
            {
                offered.map(salad =>
                    <div key={salad._id} className="card w-72 h-[450px] bg-base-100 shadow-xl">
                        <figure><img src={salad.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{salad.name}</h2>
                            <p>{salad.recipe}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary uppercase">Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default Recommends;