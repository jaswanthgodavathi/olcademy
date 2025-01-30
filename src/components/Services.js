import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import services1 from "../images/services1.jpg";
import services2 from "../images/services2.jpg";
import services3 from "../images/services3.jpg";
import services4 from "../images/services4.jpg";
import services5 from "../images/services5.jpg";
import services6 from "../images/services6.jpg";    
import services7 from "../images/services7.jpg";
import services8 from "../images/services8.jpg";
import services9 from "../images/services9.jpg";
import services10 from "../images/services10.jpg";
import services11 from "../images/services11.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Services = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const navigate = useNavigate(); // Initialize useNavigate
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track which image is hovered

    const data = [
        {
            title: "Artificial Intelligence",
            subtitle: "Transforming industries with intelligent automation and data-driven insights.",
            image: services1,
            link: "/artificial-intelligence", // Add your routes here
        },
        {
            title: "Cloud",
            subtitle: "Enabling scalable solutions and seamless collaboration through cloud technology.",
            image: services2,
            link: "/cloud", // Add your routes here
        },
        {
            title: "Cognitive Business Operations",
            subtitle: "Harnessing AI to enhance operational efficiency and decision-making.",
            image: services3,
            link: "/cognitive-business-operations", // Add your routes here
        },
        {
            title: "Consulting",
            subtitle: "Expert guidance to navigate challenges and drive strategic growth.",
            image: services4,
            link: "/consulting", // Add your routes here
        },
        {
            title: "Cybersecurity",
            subtitle: "Protecting organizations from evolving cyber threats and ensuring data integrity.",
            image: services5,
            link: "/cybersecurity", // Add your routes here
        },
        {
            title: "Data & Analytics",
            subtitle: "Turning data into actionable insights to inform business strategies.",
            image: services6,
            link: "/data-analytics", // Add your routes here
        },
        {
            title: "Enterprise Solutions",
            subtitle: "Integrated solutions tailored to optimize business processes and enhance productivity.",
            image: services7,
            link: "/enterprise-solutions", // Add your routes here
        },
        {
            title: "IoT Digital Engineering",
            subtitle: "Creating interconnected solutions that enhance operational capabilities.",
            image: services8,
            link: "/iot-digital-engineering", // Add your routes here
        },
        {
            title: "Network Solution and Service",
            subtitle: "Reliable networking solutions to ensure seamless connectivity and communication.",
            image: services9,
            link: "/network-solutions", // Add your routes here
        },
        {
            title: "Sustainability Service",
            subtitle: "Promoting eco-friendly practices and sustainable business models.",
            image: services10,
            link: "/sustainability-service", // Add your routes here
        },
        {
            title: "Management Consulting",
            subtitle: "Advising organizations on improving performance and implementing change.",
            image: services11,
            link: "/management-consulting", // Add your routes here
        },
    ];

    const handleImageClick = (link) => {
        navigate(link); // Navigate to the corresponding page on click
    };

    return (
        <div id="services-section" className='pt-16 pb-4 w-[100dvw] px-10 bg-[#1E2222]'>
            <h2 className='text-3xl font-bold text-white uppercase tracking-wide pt-5'>services</h2>
            <div className='mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4'>
                {data.slice(0, visibleItems).map((item, index) => (
                    <div 
                        className='group mt-2' 
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                    >
                        <div 
                            className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-transparent group-hover:border-white transform ${
                                hoveredIndex === index ? 'translate-y-[-10px]' : 'translate-y-0'
                            }`} 
                            onClick={() => handleImageClick(item.link)}
                        >
                            <img
                                src={item.image}
                                className={`w-full h-[350px] object-cover rounded-2xl transition-all duration-300 ${hoveredIndex === index ? 'filter blur-sm' : ''}`} // Apply blur based on hovered index
                                alt={item.title}
                            />
                            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70 flex flex-col justify-end p-4'>
                                <h2 className='text-white text-2xl'>{item.title}</h2>
                                {hoveredIndex === index && ( // Show subtitle only when hovered
                                    <p className='text-gray-300 text-lg transition-opacity duration-300'>
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {visibleItems === 4 ? (
                    <button onClick={() => setVisibleItems(12)} className='mx-auto w-40 h-14 rounded-xl my-5 text-white flex justify-center items-center gap-3 border-2 border-white'>
                        View all topics <FaArrowDown />
                    </button>
                ) : (
                    <button onClick={() => setVisibleItems(4)} className='mx-auto w-40 h-14 rounded-xl my-5 text-white flex justify-center items-center gap-3 border-2 border-white'>
                        View less <FaArrowUp />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Services;
