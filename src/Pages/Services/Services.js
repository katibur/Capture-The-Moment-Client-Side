import React, { useEffect, useState } from 'react';
import useTtile from '../../Components/Hooks/Title';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const Services = () => {
    useTtile('Services');

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://capture-the-moment-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center pl-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;