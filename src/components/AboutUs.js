import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Fullscreen Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Who We Are</h1>
          <p className="hero-description">
            We transform potential into progress, delivering innovative solutions to help businesses thrive in a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="scrollable-content">
        <section className="about-section mission-bg">
          <div className="section-box">
            <h2 className="section-header">Our Journey & Mission</h2>
            <div className="section-content">
              <p>
                At Olcademy, we believe in creating scalable, sustainable, and innovative results that empower organizations to thrive in a rapidly evolving world.
              </p>
              <p>
                Our journey from education technology to becoming a global consulting leader has been driven by a passion for progress and a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section values-bg">
          <div className="section-box">
            <h2 className="section-header">Our Core Values</h2>
            <div className="section-content">
              <ul>
                <li><strong>Innovation:</strong> Leading with creative, forward-thinking solutions.</li>
                <li><strong>Adaptability:</strong> Responding to evolving business and technological landscapes.</li>
                <li><strong>Collaboration:</strong> Building trust and long-term partnerships with clients.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section team-bg">
          <div className="section-box">
            <h2 className="section-header">Our Team</h2>
            <div className="section-content">
              <p>
                Our diverse team of seasoned consultants and professionals brings expertise from various industries, delivering solutions that align with the unique objectives of each client.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Olcademy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
