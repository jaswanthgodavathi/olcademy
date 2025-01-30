import React, { useEffect, useState } from "react";
// Import the video for Life Sciences (Replace with your own video file)
import videoSrc from "../images/videos//LifeScience.mp4";
// Import the images for the boxes
import image1 from "../images/lifesciencesbox1.jpg";
import image2 from "../images/lifesciencesbox2.jpg";
import image3 from "../images/lifesciencesbox3.jpg";
import image4 from "../images/lifesciencesbox4.jpg";
// Import the Footer component
import Footer from "./Footer";

const LifeSciences = () => {
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
      title: "Personalized Medical Services",
      info: "Deliver tailored healthcare solutions driven by cutting-edge technologies.",
    },
    {
      image: image2,
      title: "Virtual Clinical Trials",
      info: "Revolutionize clinical trials with virtual and remote monitoring.",
    },
    {
      image: image3,
      title: "Digital Surgeries",
      info: "Transform surgery techniques with advanced digital and robotic systems.",
    },
    {
      image: image4,
      title: "Accelerating Medical Innovation",
      info: "Integrate AI and quantum computing to fast-track healthcare breakthroughs.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Rising Healthcare Costs",
      info: "By leveraging 3D printing and blockchain, we streamline processes and reduce waste to provide cost-effective healthcare.",
    },
    {
      title: "Lack of Personalized Care",
      info: "Our AI-driven insights and quantum computing enable precision care for individualized treatment plans.",
    },
    {
      title: "Slow Adoption of Innovation",
      info: "We create interconnected, patient-centric ecosystems that integrate new technologies quickly and effectively.",
    },
    {
      title: "Fragmented Healthcare Systems",
      info: "Olcademy builds unified, seamless ecosystems that promote collaboration and patient-focused care.",
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
            Life Sciences
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-100">
            Redefining Patient-Centric Healthcare Ecosystems
          </p>
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="mx-auto max-w-screen-md">
          <blockquote className="text-blue-600 italic text-3xl md:text-4xl font-serif mt-6 max-w-3xl mx-auto">
            "Olcademy is shaping the future of healthcare by integrating cutting-edge technologies and creating patient-centric ecosystems."
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LifeSciences;
