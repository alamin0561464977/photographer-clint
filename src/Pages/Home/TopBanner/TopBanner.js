import React from 'react';
import img from '../../../images/top-banner.png'

const TopBanner = () => {
    return (
        <div className="card w-full rounded-none h-96 bg-base-100 shadow-xl image-full">
            <figure><img className=' w-full ' src={img} alt="Shoes" /></figure>
            <div className="card-body pl-24 pt-40">
                <h2 className="card-title text-3xl font-bold border-l-8 pl-2 text-pink-600">The Magic Hour  <br /> Photographer </h2>
                <p className=' font-bold'>Prague based pre-wedding, surprise marriage proposal, <br /> maternity, event and vacation photographer. For couple, <br /> family and solo lifestyle photos in Prague!</p>
            </div>
        </div>
    );
};

export default TopBanner;