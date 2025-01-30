    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import { LuCircleDollarSign } from "react-icons/lu";
    import { FaArrowRight } from "react-icons/fa";
    import { PiChartLineUpBold } from "react-icons/pi";
    import { RiRadarFill } from "react-icons/ri";
    import { BsCart3 } from "react-icons/bs";
    import { FaChalkboardTeacher } from "react-icons/fa";
    import { MdOutlineHealthAndSafety } from "react-icons/md";
    import { GiRobotGrab } from "react-icons/gi";
    import { GiDna2 } from "react-icons/gi";
    import { FaHandHoldingHeart } from "react-icons/fa";

    const Discover = () => {
        const navigate = useNavigate();

        const data = [
            { id: 1, icon: <LuCircleDollarSign className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Banking', link: '/banking' },
            { id: 2, icon: <PiChartLineUpBold className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Capital Markets', link: '/capital-markets' },
            { id: 3, icon: <RiRadarFill className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Communicationsmedia', link: '/communicationsmedia' }, 
            { id: 4, icon: <BsCart3 className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Consumer Goods and Distribution', link: '/consumer-goods' },
            { id: 5, icon: <FaChalkboardTeacher className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Education', link: '/education' },
            { id: 7, icon: <MdOutlineHealthAndSafety className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Healthcare', link: '/healthcare' },
            { id: 8, icon: <GiRobotGrab className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'High Tech', link: '/hightech' },
            { id: 9, icon: <LuCircleDollarSign className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Insurance', link: '/insurance' },
            { id: 10, icon: <GiDna2 className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Life Sciences', link: '/lifesciences' },
            { id: 11, icon: <GiRobotGrab className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Manufacturing', link: '/manufacturing' },
            { id: 12, icon: <FaHandHoldingHeart className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Public Services', link: '/public-services' },
            { id: 13, icon: <BsCart3 className='text-3xl text-[#15a7e7] font-extrabold' />, title: 'Retail', link: '/retail' },
        ];

        const handleNavigation = (link) => {
            navigate(link);
        };

        return (
            <div className='xl:w-full w-full px-10 bg-white'>
                <h2 className='text-3xl font-bold text-black uppercase tracking-wide pt-5'>Discover Our Services</h2>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 pt-8'>
                    {data.map((item) => (
                        <div className='group' key={item.id}>
                            <div
                                className='flex gap-3 items-center xl:w-full relative py-3 border-b-2 border-b-transparent group-hover:border-b-black group-hover:cursor-pointer transition-all duration-300'
                            >
                                {item.icon}
                                <p
                                    className='font-[500] text-black cursor-pointer'
                                    onClick={() => handleNavigation(item.link)}
                                >
                                    {item.title}
                                </p>
                                <div 
                                    className='absolute right-5 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 cursor-pointer'
                                    onClick={() => handleNavigation(item.link)}
                                >
                                    <FaArrowRight className='text-[#15a7e7]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default Discover;
