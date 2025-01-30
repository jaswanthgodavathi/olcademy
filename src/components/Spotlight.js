import React from 'react';
import spotlight1 from "../images/innovation.png";
import spotlight2 from "../images/networking.png";
import spotlight3 from "../images/funding.png";
import { useNavigate } from 'react-router-dom';

const Spotlight = () => {
    const navigate = useNavigate();

    const data = [
        {
            title: "Olcademy Launchpad: Empowering Startups for Success",
            tag: "Innovation",
            image: spotlight1,
            link: '/launchpad'
        },
        {
            title: "Olcademy Connect: Building Networks for Growth",
            tag: "Networking",
            image: spotlight2,
            link: '/connect'
        },
        {
            title: "Olcademy Fundraise: Helping Startups Secure Funding",
            tag: "Funding",
            image: spotlight3,
            link: '/fundraise'
        }
    ];

    const handleNavigation = (link) => {
        navigate(link);
    };

    return (
        <div className='bg-black xl:px-10 px-5 pt-5 pb-5 w-[100dvw]'>
            <h2 className='text-3xl font-bold text-white uppercase tracking-wide pt-5'>spotlight on olcademy</h2>

            <div className='grid xl:grid-cols-3 grid-cols-1 gap-3'>
                {data.map((item, index) => {
                    return (
                        <div className='group' key={index}>
                            <div 
                                className='relative xl:w-[350px] w-[280px] h-72 my-5 overflow-hidden cursor-pointer' // Adjusted width
                                onClick={() => handleNavigation(item.link)} 
                            >
                                <img 
                                    src={item.image} 
                                    className='w-full h-full object-cover object-center brightness-75 group-hover:scale-110 transition-all duration-300' 
                                    alt={item.title} 
                                />
                                <div className='bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)] hover:to-[rgba(0,0,0,1)] transition-all duration-300 absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4'>
                                    <p className='text-white text-sm font-bold'>{item.tag}</p>
                                    <p className='text-white text-lg font-bold mt-2'>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Spotlight;
