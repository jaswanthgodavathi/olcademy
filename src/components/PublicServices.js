import React, { useEffect, useState } from "react";
// Import the video for the background
import videoSrc from "../images/videos/publicservices.mp4";
// Import the images for the boxes
import image1 from "../images/publicservicebox1.jpg";
import image2 from "../images/publicservicebox2.jpg";
import image3 from "../images/publicservicebox3.jpg";
import image4 from "../images/publicservicebox4.jpg";
// Import the Footer component
import Footer from "./Footer";

const PublicServices = () => {
  const [scrollBlur, setScrollBlur] = useState(0);

  // Calculate blur based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoHeight = window.innerHeight;
      const blurFactor = Math.min(100, (scrollPosition / videoHeight) * 100);
      setScrollBlur(blurFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const boxes = [
    {
      image: image1,
      title: "Climate Change Solutions",
      info: "Innovative approaches to tackle climate change and environmental challenges.",
    },
    {
      image: image2,
      title: "Public Health Advancements",
      info: "Improving public health through AI-driven strategies and effective interventions.",
    },
    {
      image: image3,
      title: "National Security",
      info: "Enhancing security measures through smart technology and strategic partnerships.",
    },
    {
      image: image4,
      title: "Cybersecurity",
      info: "Securing public service infrastructure with advanced cybersecurity measures.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Direct and Action-Oriented Solutions",
      info: "Developing impactful solutions through strategic guidance and technology.",
    },
    {
      title: "Focus on Needs and Empowerment",
      info: "Empowering your organization to address complex issues with confidence.",
    },
    {
      title: "Goal-Oriented with Support",
      info: "Dedicated support and expert guidance as your strategic technology partner.",
    },
    {
      title: "Building Stronger Communities",
      info: "Leveraging technology and innovation to create positive change in communities.",
    },
  ];

  return (
    <div>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden">
        {/* Fullscreen Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Transparent Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

        {/* Text Content */}
        <div
          className={`absolute left-8 top-[15%] transform -translate-y-[20%] z-20 transition-all duration-1000`}
          style={{
            transform: `translateX(${scrollBlur > 0 ? 0 : "100%"}) translateY(-20%)`,
            filter: `blur(${scrollBlur / 2}px)`,
            opacity: 1 - scrollBlur / 100,
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text drop-shadow-lg">
            Public Services
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-100">
            Building a Better Future, Together.
          </p>
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="mx-auto max-w-screen-md">
          <blockquote className="text-blue-600 italic text-3xl md:text-4xl font-serif mt-6 max-w-3xl mx-auto">
            "Olcademy helps public service organizations tackle climate change, public health challenges, and national security threats by blending smart technology and strategic thinking."
          </blockquote>
        </div>
      </div>

      {/* Why Partner with Olcademy Section */}
      <div className="w-full bg-black text-white py-24 md:py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-normal text-gray-100 mb-12">
          Why Partner with Olcademy?
        </h2>

        {/* Flip Boxes Wrapper - Increased size here */}
        <div className="flex flex-wrap justify-center gap-12 px-8 py-6"> 
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative w-72 h-80 perspective group"  // No change to box size, just wrapping div size increased
            >
              <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                {/* Front Face */}
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-lg flex flex-col justify-between items-center"
                  style={{
                    backgroundImage: `url(${box.image})`,
                    opacity: 0.85, // Added opacity for better transparency effect
                  }}
                >
                  <div className="absolute top-0 left-0 w-full bg-black bg-opacity-40 text-white text-xl font-bold text-center py-2 rounded-t-lg">
                    {box.title}
                  </div>
                  {/* Space to separate the title from the rest of the box */}
                  <div className="flex-grow"></div>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full bg-gray-300 text-black flex justify-center items-center rounded-lg transform rotate-y-180 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">{box.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges and Solutions Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-black mb-10">Your Challenges. Our Solutions.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {challengesSolutions.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <h3 className="text-xl font-medium text-black group-hover:font-bold group-hover:border-b-2 group-hover:border-blue-500 transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Impact and Benefits Section */}
<div className="w-full bg-blue-50 py-24 md:py-32 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
    The Impact and Benefits of Partnering with Olcademy
  </h2>
  <div className="max-w-3xl mx-auto text-left">
    <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Scalable Solutions:</strong> 
        Our solutions are designed to scale with your organization's growth, ensuring long-term success and adaptability to evolving challenges.
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Cutting-edge Technology:</strong> 
        We leverage the latest in AI, machine learning, and blockchain technology to provide innovative solutions that keep you ahead of the curve.
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Cost Efficiency:</strong> 
        Our solutions are designed to optimize processes and reduce costs, driving higher profitability while maintaining the highest standards of quality.
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Data-Driven Insights:</strong> 
        Our data analytics tools provide actionable insights that allow you to make informed decisions and improve performance.
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Security and Compliance:</strong> 
        We ensure your solutions meet the highest standards of security and compliance, safeguarding your organization and its stakeholders.
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-blue-700 hover:underline hover:underline-offset-4">
        <strong className="font-semibold text-blue-600">Sustainable Growth:</strong> 
        Partnering with us means a commitment to sustainable, eco-friendly practices, ensuring your organization’s growth aligns with environmental stewardship.
      </li>
    </ul>
  </div>
</div>


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PublicServices;
