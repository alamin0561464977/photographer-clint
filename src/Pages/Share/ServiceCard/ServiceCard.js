import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ service }) => {
    console.log(service)
    const { img, title, description, price, _id, reding } = service;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={img}
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">28 Dec 2020</span>
                </p>
                <h2
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {title}
                </h2><br />
                <h4
                    className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    Price: ${price}
                </h4><br />
                <h4
                    className="inline-block mb-3 text-lg font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    Reding: {reding}
                </h4>
                <p className="mb-2 text-gray-700">
                    {
                        description.length >= 100 ? `${description.slice(0, 100)}...` : description
                    }
                </p>
                <Link
                    to={`/service-details/${_id}`}
                    className="inline-flex font-bold btn btn-wide bg-rose-700 mx-auto items-center transition-colors duration-200  hover:bg-rose-600"
                >
                    details
                </Link>
            </div>
        </div>
    );
};

export default HomeServiceCard;