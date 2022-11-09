import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner'
import ServiceCard from './ServiceCard/ServiceCard';

import statLogo from '../../Assets/banner/tobi.jpeg';
import useTtile from '../../Components/Hooks/Title';
import About from './About/About';

const Home = () => {
    useTtile('Home');
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

            <About></About>

            <div className='mx-auto text-center my-6 border-2'>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">2.6K</div>
                        <div className="stat-desc">15% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">20.5K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={statLogo} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">98%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">2 tasks remaining</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;