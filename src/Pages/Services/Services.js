import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';
import HomeServiceCard from '../Share/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useSetTitle('Services')
    useEffect(() => {
        setLoading(true);
        fetch('https://photographer-server-xi.vercel.app/services-all')
            .then(res => res.json())
            .then(data => setServices(data))
        setLoading(false);
    }, []);
    if (loading) {
        return <div className='text-center my-56'><button className="btn loading">loading</button></div>

    }
    console.log(loading)
    return (
        <div>
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h1 className="text-5xl font-bold text-rose-700 mb-8">Services</h1>
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        services.map(service => <HomeServiceCard
                            service={service}
                            key={service._id}
                        ></HomeServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;