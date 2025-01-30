import React, { useState } from "react";
import "./Careers.css";
const jobList = [
  {
    id: 1,
    title: "Web Developer",
    company: "Olcademy",
    location: "Remote",
    description:
      "We are looking for a passionate Web Developer to join our team to build scalable, secure, and high-performing websites.",
  },
  {
    id: 2,
    title: "Business Analyst Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "We are looking for an enthusiastic Business Analyst Intern to help analyze and interpret data to aid in decision-making.",
  },
  {
    id: 3,
    title: "HR Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "As an HR Intern, you'll assist with recruiting, employee engagement, and administrative HR tasks.",
  },
  {
    id: 4,
    title: "Business Developer Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "We need a Business Developer Intern to help generate new business opportunities and client relationships.",
  },
  {
    id: 5,
    title: "Sales Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "Looking for a motivated Sales Intern to assist in lead generation, follow-ups, and sales strategy development.",
  },
  {
    id: 6,
    title: "Product Manager Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "We are seeking a Product Manager Intern to support product development efforts and help drive product strategy.",
  },
  {
    id: 7,
    title: "Marketing Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "As a Marketing Intern, you’ll help with content creation, digital marketing campaigns, and market research.",
  },
  {
    id: 8,
    title: "Data Analyst Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "Looking for a Data Analyst Intern to assist in gathering and analyzing data to support business insights.",
  },
  {
    id: 9,
    title: "Graphic Designer Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "We need a creative Graphic Designer Intern to assist with visual content creation and branding for the company.",
  },
  {
    id: 10,
    title: "Customer Support Intern",
    company: "Olcademy",
    location: "Remote",
    description:
      "Join our Customer Support team and assist with resolving customer inquiries and ensuring customer satisfaction.",
  },
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.searchQuery.value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocation("");
    setCompany("");
  };

  const filteredJobs = jobList.filter((job) => {
    return (
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (location ? job.location === location : true) &&
      (company ? job.company === company : true)
    );
  });

  return (
    <div className="careers-container">
      <h1 className="careers-title">Careers at Olcademy</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="searchQuery"
          placeholder="Search Jobs by Title..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="filters">
        <select
          className="filter-select"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Filter by Location</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          className="filter-select"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="">Filter by Company</option>
          <option value="Olcademy">Olcademy</option>
        </select>

        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <div className="no-jobs">No Jobs Found 😢</div>
        ) : (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h2 className="job-title">{job.title}</h2>
              <div className="job-details">
                <span className="company">{job.company}</span>
                <span className="location">{job.location}</span>
              </div>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Careers;
