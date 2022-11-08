import React from 'react';

const ServiceDetailsCard = ({ serviceDetail }) => {
    console.log(serviceDetail);
    const { img, price, reding, title, description } = serviceDetail;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='w-full h-96' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <h2 className="card-title font-bold text-xl">Price: ${price}</h2>
                <h2 className="card-title font-bold text-lg">Reding: {reding}</h2>
                <p className=' font-bold'>{description}</p>
                <div className="card-actions mt-5 justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;