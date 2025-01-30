import React, { useEffect, useState } from "react";
import videoSrc from "../images/videos/consumergoods.mp4";
// Import the images for the boxes
import image1 from "../images/consumerGoodsBox1.jpg";
import image2 from "../images/consumerGoodsBox2.jpg";
import image3 from "../images/consumerGoodsBox3.jpg";
import image4 from "../images/consumerGoodsBox4.jpg";
// Import the Footer component
import Footer from "./Footer";

const ConsumerGoods = () => {
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
      title: "Sustainable Products",
      info: "Drive sustainable growth through ethically sourced and eco-friendly products.",
    },
    {
      image: image2,
      title: "Generative AI Solutions",
      info: "Leverage AI to optimize operations and stay ahead of uncertainty.",
    },
    {
      image: image3,
      title: "Enhanced Customer Experience",
      info: "Build loyalty and enhance customer experiences through tailored solutions.",
    },
    {
      image: image4,
      title: "Efficient Supply Chains",
      info: "Streamline and optimize supply chains for reliability and resilience.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Sustainability Pressures",
      info: "Integrate sustainability into every step, from sourcing to distribution, ensuring eco-friendly and responsible operations.",
    },
    {
      title: "Supply Chain Inefficiencies",
      info: "Optimize supply chains with data-driven strategies and advanced technologies for greater efficiency and reliability.",
    },
    {
      title: "Evolving Consumer Expectations",
      info: "Enhance marketing and customer engagement by leveraging generative AI and customer insights to build loyalty and create tailored experiences.",
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
            Consumer Goods and Distribution
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-100">
            Shaping the Future of Consumer Goods through sustainable, data-driven solutions.
          </p>
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="mx-auto max-w-screen-md">
          <blockquote className="text-green-600 italic text-3xl md:text-4xl font-serif mt-6 max-w-3xl mx-auto">
            "Olcademy drives sustainable innovation in consumer goods and distribution with generative AI, net-zero strategies, and a focus on ethical, eco-friendly practices."
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

export default ConsumerGoods;
