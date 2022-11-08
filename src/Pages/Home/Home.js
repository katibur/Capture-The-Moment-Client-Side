import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner'
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mx-auto w-auto'>
            <Banner></Banner>

            <div className='my-6'>
                <div className='text-center mb-4'>
                    <h2 className="text-4xl font-bold text-white my-4">My Services</h2>
                    <p>Many will offer you a very low price photography session but i will give make you feel better after having the best photographs of your best moments</p>
                </div>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center pl-4'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/services'><button className='btn btn-outline'>See All Services</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;