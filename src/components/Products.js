import React from 'react';




import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            title: "Olcademy Launchpad",
            description: "Empowering startups to innovate and scale with tailored solutions.",
            link: "/launchpad"
        },
        {
            id: 2,
            title: "Olcademy CloudSync",
            description: "Seamlessly connect your business operations in the cloud.",
            link: "/cloudsync"
        },
        {
            id: 3,
            title: "Olcademy MarketSense",
            description: "Insightful analytics to navigate market trends and consumer behavior.",
            link: "/marketsense"
        },
        {
            id: 4,
            title: "Olcademy Innovate",
            description: "Catalyzing innovation through technology and strategic partnerships.",
            link: "/innovate"
        },
        {
            id: 5,
            title: "Olcademy ScaleUp",
            description: "Solutions designed to help startups scale their operations efficiently.",
            link: "/scaleup"
        },
        {
            id: 6,
            title: "Olcademy Connect",
            description: "Building networks for collaboration and growth within startups.",
            link: "/connect"
        },
        {
            id: 7,
            title: "Olcademy Fundraise",
            description: "Tools and resources to help startups secure funding.",
            link: "/fundraise"
        },
        {
            id: 8,
            title: "Olcademy Agile",
            description: "Agile frameworks for startups to enhance productivity and adaptability.",
            link: "/agile"
        },
        {
            id: 9,
            title: "Olcademy BrandLift",
            description: "Helping startups establish and elevate their brand presence.",
            link: "/brandlift"
        },
        {
            id: 10,
            title: "Olcademy Talent Hub",
            description: "Connecting startups with top talent to drive innovation.",
            link: "/talenthub"
        }
    ];

    const handleNavigation = (link) => {
        navigate(link);
    };

    return (
 <div className='xl:w-full w-[100dvw] px-10 pt-10 bg-white pb-8'>
    <h2 className='text-3xl font-bold text-black uppercase tracking-wide pt-5'>Products and Platforms</h2>
    <h4 className='text-xl text-gray-700 mt-2 italic'>Cutting-edge solutions to power up your business.</h4>
    <div className='grid xl:grid-cols-2 grid-cols-1 gap-5 mt-8'>
        {data.map((item) => (
            <div className='group border-b-2 border-b-gray-400 hover:border-b-black transition-all duration-300' key={item.id}>
                <div className='flex flex-col h-36 justify-center gap-3 relative py-3'>
                    <h5 
                        className='text-2xl text-black cursor-pointer' 
                        onClick={() => handleNavigation(item.link)} // Make title clickable
                    >
                        {item.title}
                    </h5>
                    <div className='flex items-center gap-5'>
                        <p className='text-gray-600 font-[500]'>{item.description}</p>
                        <span onClick={() => handleNavigation(item.link)} className="cursor-pointer">
                            <FaArrowRight className='text-[#15a7e7] transition-all duration-300 hover:text-black' />
                        </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


    )
}


export default Products;
