import React from 'react';
import aboutPhoto from '../../../Assets/banner/tobi.jpeg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='w-1/2 relative'>
                        <img src={aboutPhoto} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    </div>

                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold text-center">CEO & Photographer</h1>
                        <p className="py-6 text-center">S M Tobibur Rahman.<br />CEO & Photographer,<br />Capture The Moment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;