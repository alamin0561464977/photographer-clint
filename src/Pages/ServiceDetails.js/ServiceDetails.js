import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';
import UserInfo from './UserInfo';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();

    return (
        <div class="grid grid-cols-9 gap-4">
            {/* Review section */}
            <div className="col-span-9 lg:col-span-4  p-8 bg-zinc-100">
                <UserInfo serviceDetail={serviceDetail}></UserInfo>
            </div>
            <div className="col-span-9 lg:col-span-5 px-10 mb-16 pt-3">
                <ServiceDetailsCard serviceDetail={serviceDetail}></ServiceDetailsCard>
            </div>
        </div>
    );
};

export default ServiceDetails;