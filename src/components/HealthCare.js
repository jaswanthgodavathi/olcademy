// import React, { useEffect, useState } from "react";
import videoSrc from "../images/videos/healthcare.mp4";
// Import the images for the boxes
import image1 from "../images/healthcareBox1.jpg";
import image2 from "../images/healthcareBox2.jpg";
import image3 from "../images/healthcareBox3.jpg";
import image4 from "../images/healthcareBox4.jpg";
// Import the Footer component
import Footer from "./Footer";

const Healthcare = () => {
  const boxes = [
    {
      image: image1,
      title: "Patient-Centric Care",
      info: "Delivering secure, connected, and personalized care models to improve patient outcomes.",
    },
    {
      image: image2,
      title: "Innovative Solutions",
      info: "Expertise in digital health ecosystems and healthcare analytics to drive smarter healthcare systems.",
    },
    {
      image: image3,
      title: "Operational Excellence",
      info: "Tackling workforce shortages and rising costs with advanced technology to optimize healthcare operations.",
    },
    {
      image: image4,
      title: "Reliable Partnership",
      info: "Committed to transforming healthcare operations and enhancing patient outcomes through collaboration.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Rising Operational Costs",
      info: "We streamline workflows and integrate smart technology to reduce costs while maintaining high-quality care.",
    },
    {
      title: "Staffing Shortages",
      info: "Our tools enhance staff productivity and optimize workloads, allowing healthcare teams to focus more on patient care.",
    },
    {
      title: "Data Security Concerns",
      info: "We offer robust security solutions to ensure patient information is protected and fully compliant with regulations.",
    },
    {
      title: "Limited Accessibility",
      info: "We provide telehealth and remote care solutions, making healthcare more accessible to patients in underserved areas.",
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
        <div className="absolute left-8 top-[15%] transform -translate-y-[20%] z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text drop-shadow-lg">
            Healthcare
          </h1>
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="mx-auto max-w-screen-md">
          <blockquote className="text-blue-600 italic text-3xl md:text-4xl font-serif mt-6 max-w-3xl mx-auto">
            "Olcademy transforms healthcare by combining innovative technology with operational excellence for better patient outcomes."
          </blockquote>
        </div>
      </div>

      {/* Why Partner with Olcademy Section */}
      <div className="w-full bg-black text-white py-24 md:py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-normal text-gray-100 mb-12">
          Why Partner with Olcademy?
        </h2>

        {/* Flip Boxes Wrapper */}
        <div className="flex flex-wrap justify-center gap-12 px-8 py-6"> 
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative w-72 h-80 perspective group"
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Healthcare;
