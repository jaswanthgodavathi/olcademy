// export default Footer
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const socialMediaLinks = [
        { icon: <FaFacebookF className='text-white text-4xl' />, name: "FACEBOOK", link: "https://www.facebook.com/Olcademy" },
        { icon: <FaXTwitter className='text-white text-4xl' />, name: "X", link: "https://www.twitter.com/Olcademy" },
        { icon: <GrInstagram className='text-white text-4xl' />, name: "Instagram", link: "https://www.instagram.com/olcademyglobal" },
        { icon: <ImLinkedin className='text-white text-4xl' />, name: "LinkedIn", link: "https://www.linkedin.com/company/the-olcademy/posts/?feedView=all" },
    ];

    let productsAndPlatforms = [
        { name: "Olcademy Launchpad", link: "/launchpad" },
        { name: "Olcademy CloudSync", link: "/cloudsync" },
        { name: "Olcademy MarketSense", link: "/marketsense" },
        { name: "Olcademy Innovate", link: "/innovate" },
        { name: "Olcademy ScaleUp", link: "/scaleup" },
        { name: "Olcademy Connect", link: "/connect" },
        { name: "Olcademy Fundraise", link: "/fundraise" },
        { name: "Olcademy Agile", link: "/agile" },
        { name: "Olcademy BrandLift", link: "/brandlift" },
        { name: "Olcademy Talent Hub", link: "/talenthub" }
    ];

    let insights = [
        { name: "Customer Stories", link: "/customer-stories" },
        { name: "Cloud", link: "/cloud" },
        { name: "Blockchain", link: "/blockchain" },
        { name: "IoT", link: "/iot" },
        { name: "Metaverse", link: "/metaverse" },
        { name: "Future of Work", link: "/future-of-work" },
        { name: "Health and Wellness", link: "/health-and-wellness" },
        { name: "Sustainability", link: "/sustainability" },
        { name: "Olcademy.AI", link: "/olcademy-ai" },
        { name: "Cybersecurity", link: "/cybersecurity" },
        { name: "Perspectives", link: "/perspectives" }
    ];

    let industries = [
        { name: "Banking", link: "/banking" },
        { name: "Capital Markets", link: "/capital-markets" },
        { name: "Consumer Goods and Distribution", link: "/consumer-goods" },
        { name: "Communications, Media, and Information Services", link: "/communications" },
        { name: "Education", link: "/education" },
        { name: "Healthcare", link: "/healthcare" },
        { name: "High Tech", link: "/high-tech" },
        { name: "Insurance", link: "/insurance" },
        { name: "Life Sciences", link: "/life-sciences" },
        { name: "Manufacturing", link: "/manufacturing" },
        { name: "Public Services", link: "/public-services" },
        { name: "Retail", link: "/retail" },
    ];

    let services = [
        { name: "Artificial Intelligence", link: "/ai" },
        { name: "Cloud", link: "/cloud" },
        { name: "Cognitive Business Operations", link: "/cognitive-operations" },
        { name: "Consulting", link: "/consulting" },
        { name: "Cybersecurity", link: "/cybersecurity" },
        { name: "Data and Analytics", link: "/data-analytics" },
        { name: "Enterprise Solutions", link: "/enterprise-solutions" },
        { name: "IoT and Digital Engineering", link: "/iot" },
        { name: "Sustainability Services", link: "/sustainability" },
        { name: "Network Solutions and Services", link: "/network-solutions" },
        { name: "Olcademy Enterprise Cloud", link: "/enterprise-cloud" },
    ];

    return (
        <>
            <div className='bg-[#1E2222] px-10 w-[100dvw] py-20 border-b-[1px] border-b-gray-600'>
                <div className='mt-10'>
                    <p className='text-white text-[10px] tracking-[0.20em]'>SOCIAL</p>
                    <h3 className='text-3xl text-white'>Follow us for the latest updates</h3>
                </div>

                <div className='flex justify-between mt-10'>
                    {socialMediaLinks.map((item, index) => (
                        <div key={index} className='flex mt-5 items-center cursor-pointer' onClick={() => window.open(item.link, '_blank')}>
                            {item.icon}
                            <div className='xl:inline-block hidden text-white ml-2'>
                                <p className='text-[10px] tracking-[0.15em] uppercase hover:underline'>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='xl:block hidden bg-[#1E2222] px-10 pt-20 pb-10'>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-gray-300 text-md'>Industries</p>
                        {industries.map((item, index) => (
                            <p key={index} className='text-gray-300 text-[10px] my-4 cursor-pointer hover:underline' onClick={() => navigate(item.link)}>{item.name}</p>
                        ))}
                    </div>
                    <div>
                        <p className='text-gray-300 text-md'>Services</p>
                        {services.map((item, index) => (
                            <p key={index} className='text-gray-300 text-[10px] my-4 cursor-pointer hover:underline' onClick={() => navigate(item.link)}>{item.name}</p>
                        ))}
                    </div>
                    <div>
                        <p className='text-gray-300 text-md'>Products & Platforms</p>
                        {productsAndPlatforms.map((item, index) => (
                            <p key={index} className='text-gray-300 text-[10px] my-4 cursor-pointer hover:underline' onClick={() => navigate(item.link)}>{item.name}</p>
                        ))}
                    </div>
                    <div>
                        <p className='text-gray-300 text-md'>Insights</p>
                        {insights.map((item, index) => (
                            <p key={index} className='text-gray-300 text-[10px] my-4 cursor-pointer hover:underline' onClick={() => navigate(item.link)}>{item.name}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-black text-white xl:h-28 px-10 flex xl:flex-row flex-col justify-between xl:items-center items-start'>
                <div className='xl:block hidden'>
                    <img src={logo} alt="TCS Logo" />
                </div>
                <div className='xl:hidden flex justify-between w-full my-5'>
                    <FaFacebookF onClick={() => window.open("https://www.facebook.com/olcademy/", '_blank')} />
                    <FaYoutube onClick={() => window.open("https://www.youtube.com/channel/UCmBCUfKrfkZuzQ2U6UuAljg", '_blank')} />
                    <FaXTwitter onClick={() => window.open("https://x.com/olcademy", '_blank')} />
                    <GrInstagram onClick={() => window.open("https://www.instagram.com/olcademy/?hl=en", '_blank')} />
                    <ImLinkedin onClick={() => window.open("https://www.linkedin.com/company/the-olcademy/", '_blank')} />
                </div>
                <ul className='xl:hidden flex xl:flex-row flex-col gap-4 text-[12px]'>
                    <li>Privacy Notice</li>
                    <li>Disclaimer</li>
                    <li>Security Policy</li>
                </ul>

                <p className='xl:hidden text-[12px] mt-5'>©2024 Olcademy</p>
                <div className='xl:block hidden'>
                    <p className='text-[9px]'>©2024 Olcademy</p>
                    <ul className='flex gap-4 text-[9px]'>
                        <li>Privacy Notice</li>
                        <li>Cookie Policy</li>
                        <li>Disclaimer</li>
                        <li>Security Policy</li>
                        <li>California Notice at Collection</li>
                    </ul>
                </div>
                
            </div>
        </>
    );
};

export default Footer;