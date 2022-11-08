import React, { useEffect, useState } from 'react';
import HomeServiceCard from '../../Share/ServiceCard/ServiceCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        services.map(service => <HomeServiceCard
                            service={service}
                            key={service._id}
                        ></HomeServiceCard>)
                    }
                </div>
                <div className=' text-right font-bold cursor-pointer text-green-600 mr-14 mt-10'>
                    <ul>
                        <Link to='/services'>See All </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;