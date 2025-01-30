import React, { useEffect, useState } from "react";
import videoSrc from "../images/videos/communicationmedia1.mp4"; // Replace with your new video
import image1 from "../images/communicationbox1.jpg"; // Update with your image paths
import image2 from "../images/communicationbox2.jpg";
import image3 from "../images/communicationbox3.jpg";
import image4 from "../images/communicationbox4.jpg";
import Footer from "./Footer";

const CommunicationMedia = () => {
  const [scrollBlur, setScrollBlur] = useState(0);

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
      title: "Redefining Communication Experience",
      info: "Build engaging, personalized, and multi-channel communication experiences using AI-driven insights.",
    },
    {
      image: image2,
      title: "Future-proofing Media Strategies",
      info: "Embrace next-generation technologies to deliver content seamlessly to a global audience.",
    },
    {
      image: image3,
      title: "Enhancing Information Accessibility",
      info: "Leverage cloud technologies to ensure customers receive the right information at the right time.",
    },
    {
      image: image4,
      title: "Combatting Disinformation",
      info: "Utilize AI and ML to identify and mitigate the spread of misinformation, enhancing trust.",
    },
  ];

  const challengesSolutions = [
    {
      title: "Redefining Communication Experience",
      info: "Build engaging, personalized, and multi-channel communication experiences that resonate with modern audiences, using AI-driven insights to refine strategies.",
    },
    {
      title: "Future-proofing Media Strategies",
      info: "Embrace next-generation technologies to deliver content seamlessly to a global audience. Improve efficiency, audience targeting, and monetization potential.",
    },
    {
      title: "Enhancing Information Accessibility",
      info: "Leverage cloud-based solutions to ensure that information is accessible anywhere, anytime, empowering customers to make informed decisions.",
    },
    {
      title: "Combatting Disinformation",
      info: "Use AI and machine learning to identify and mitigate misinformation, protecting your audience and enhancing brand trust.",
    },
  ];

  return (
    <div>
      {/* Fullscreen Video Section */}
      <div className="relative w-full h-screen bg-black text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div
          className="absolute left-8 top-[15%] transform -translate-y-[20%] z-20 transition-all duration-1000"
          style={{
            filter: `blur(${scrollBlur / 2}px)`,
            opacity: 1 - scrollBlur / 100,
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text drop-shadow-lg">
            Communication, Media, and Information Services
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-100">
            Revolutionize audience engagement with innovative solutions.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full bg-white py-16 text-center">
        <blockquote className="italic text-2xl text-blue-600 mx-auto max-w-4xl px-6">
          "At Olcademy, we believe in transforming the way communication, media, and information services engage with audiences. By integrating cutting-edge technologies like AI and machine learning, we empower businesses to enhance their reach, combat disinformation, and deliver tailored experiences that speak to the heart of their target audience. With a focus on accessibility and future-proofing strategies, we create lasting impact that shapes the future of communication across the globe."
        </blockquote>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-black py-24 md:py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-normal text-white mb-12">
          Why Partner with Olcademy?
        </h2>
        <div className="flex flex-wrap justify-center gap-12 px-8 py-6">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative w-72 h-80 perspective group"
            >
              <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                <div
                  className="absolute w-full h-full bg-cover bg-center rounded-lg flex flex-col justify-between items-center"
                  style={{
                    backgroundImage: `url(${box.image})`,
                    opacity: 0.85,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full bg-black bg-opacity-40 text-white text-xl font-bold text-center py-2 rounded-t-lg">
                    {box.title}
                  </div>
                </div>
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

      <Footer />
    </div>
  );
};

export default CommunicationMedia;
