import React, { useEffect, useState } from 'react';
import HomeServiceCard from '../../Share/ServiceCard/ServiceCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://photographer-server-xi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className=' pt-8'>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 mt-8">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        services.map(service => <HomeServiceCard
                            service={service}
                            key={service._id}
                        ></HomeServiceCard>)
                    }
                </div>
                <div className='font-bold cursor-pointer text-green-600 mr-14 mt-10 flex items-center content-center'>
                    <Link to='/services' className=' mx-2'>See All </Link>
                    <FaArrowRight></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;