import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../Footer"; // Importing your existing NavBar component
import aiBanner from "../../images/Artificialintelligence.jpg";
import mlImage from "../../images/Services/ArtificialIntelligence/machinelearning.jpg";
import bigDataImage from "../../images/Services/ArtificialIntelligence/bigdata.jpg";
import automationImage from "../../images/Services/ArtificialIntelligence/airivenautomation.jpg";

const Button = ({ children, onClick, className }) => (
    <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`px-6 py-3 text-lg rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out ${className}`}
    >
        {children}
    </motion.button>
);

const AnimatedSection = ({ children }) => (
    <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        className="p-8 sm:p-16 transition-all duration-500 ease-in-out relative"
    >
        {children}
    </motion.section>
);

const ExpandableFeature = ({ title, desc }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            <div className="flex items-center text-xl font-semibold">
                <motion.span animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    ➕
                </motion.span>{" "}
                {title}
            </div>
            {expanded && <p className="ml-6 mt-2 text-lg">{desc}</p>}
        </div>
    );
};

export default function AIShowcase() {
    return (
        <div className="bg-black text-white min-h-screen font-sans relative">
            {/* AI Banner Section */}
            <div
                className="relative w-full h-screen bg-cover bg-center flex justify-center items-center transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${aiBanner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl font-light text-center uppercase tracking-wide"
                    >
                        The Future of AI
                    </motion.h1>
                </div>
            </div>

            {/* AI Description Section */}
            <AnimatedSection>
                <section className="text-center bg-white text-black p-8 sm:p-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl sm:text-3xl max-w-5xl mx-auto leading-relaxed"
                    >
                        AI is revolutionizing industries, automating workflows, and enhancing decision-making capabilities. Discover its transformative potential and stay ahead of the future.
                    </motion.p>
                </section>
            </AnimatedSection>

            {/* AI Offerings Section */}
            <AnimatedSection>
                <section className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-3xl sm:text-5xl font-light mb-10"
                    >
                        AI Innovations & Offerings
                    </motion.h2>
                    <div className="text-left mx-auto max-w-3xl">
                        {[
                            { title: "AI Education & Training", desc: "Gain expertise from leading AI professionals through immersive learning experiences." },
                            { title: "Custom AI Solutions", desc: "Develop AI-powered solutions tailored to your business needs." },
                            { title: "AI Consultancy & Strategy", desc: "Implement AI-driven strategies to maintain a competitive edge." },
                        ].map(({ title, desc }) => (
                            <ExpandableFeature key={title} title={title} desc={desc} />
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* AI Solutions Grid */}
            <AnimatedSection>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { image: mlImage, title: "Machine Learning", desc: "Empower your business with self-learning algorithms that continuously evolve." },
                        { image: bigDataImage, title: "Big Data Analytics", desc: "Derive powerful insights from massive datasets for strategic decision-making." },
                        { image: automationImage, title: "AI-Driven Automation", desc: "Automate repetitive tasks and enhance efficiency using AI solutions." },
                    ].map(({ image, title, desc }) => (
                        <div key={title} className="flex bg-gray-800 rounded-lg overflow-hidden">
                            <div className="w-1/2">
                                <img src={image} alt={title} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center p-4">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="mt-2 text-lg">{desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection>
                <section className="text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white py-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl font-light mb-6"
                    >
                        Ready to Unlock AI's Full Potential?
                    </motion.h2>
                    <Button className="px-8 py-4 text-xl" onClick={() => window.open("https://forms.gle/wGjVCvU4nXHMWQmKA", "_blank", "noopener,noreferrer")}>
                        Get Started
                    </Button>
                </section>
            </AnimatedSection>

            {/* Bottom Navbar */}
            <NavBar />
        </div>
    );
}
