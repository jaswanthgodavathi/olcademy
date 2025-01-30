import React, { useEffect, useState } from "react";
import videoSrc from "../images/videos/HighTech.mp4";
// Import the images for the boxes
import image1 from "../images/hightechbox1.jpg";
import image2 from "../images/hightechbox2.jpg";
import image3 from "../images/hightechbox3.jpg";
import image4 from "../images/hightechbox4.jpg";
// Import the Footer component
import Footer from "./Footer";

const HighTech = () => {
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
      title: "AI-Powered Innovation",
      info: "Accelerate product development and research with AI-driven tools and agile methodologies.",
    },
    {
      image: image2,
      title: "Enhanced Customer Experience",
      info: "Create personalized and data-driven customer journeys to improve satisfaction and retention.",
    },
    {
      image: image3,
      title: "Cybersecurity Excellence",
      info: "Ensure data protection and secure infrastructure with cutting-edge threat detection systems.",
    },
    {
      image: image4,
      title: "Optimized Supply Chains",
      info: "Leverage predictive analytics and AI to streamline logistics and improve supply chain efficiency.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Accelerating Innovation",
      info: "Leverage AI and machine learning to speed up research and development, automate testing, and bring products to market faster.",
    },
    {
      title: "Improving Customer Experience",
      info: "Deliver highly personalized experiences across all touchpoints, from sales to support, with intelligent solutions.",
    },
    {
      title: "Enhancing Cybersecurity",
      info: "Mitigate risks and protect your business from cyber threats with next-gen security protocols and threat intelligence.",
    },
    {
      title: "Optimizing Operations",
      info: "Improve operational efficiency and reduce costs with AI-driven supply chain optimization and predictive analytics.",
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text drop-shadow-lg">
            High-Tech Innovation
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-100">
            Powering the future of technology with cutting-edge solutions for a rapidly evolving market.
          </p>
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="mx-auto max-w-screen-md">
          <blockquote className="text-green-600 italic text-3xl md:text-4xl font-serif mt-6 max-w-3xl mx-auto">
            "Olcademy is at the forefront of high-tech innovation, helping businesses harness the power of AI, enhance customer experience, and stay ahead of the competition."
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
              className="relative w-72 h-80 perspective group" // No change to box size, just wrapping div size increased
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
              <h3 className="text-xl font-medium text-black group-hover:font-bold group-hover:border-b-2 group-hover:border-green-500 transition-all duration-300">
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

export default HighTech;
