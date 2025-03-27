"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import "@/assets/css/home.css";

const HomePage = () => {
  return (
    <main className="home-container">
      {/* First Section - Intro */}
      <section className="intro-section">
        {/* Left Side - Name & Summary */}
        <div className="intro-text">
          <h1 className="intro-title">
            Hi, I'm <span className="highlight">Parvinder Singh</span>
            <br />
            <span className="typewriter">
              <Typewriter
                words={["Full Stack Developer", "Data Scientist", "Tech Enthusiast"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="intro-summary">
            Passionate about crafting modern, interactive, and high-performance web applications using the latest technologies.
          </p>
          <button className="btn-custom">Resume</button>
        </div>

        {/* Right Side - Profile Image */}
        <div className="intro-image">
          {/* <Image src="/profile.jpg" alt="Profile Picture" width={370} height={400} className="profile-img" /> */}
        </div>
      </section>

      {/* Second Section - Area of Expertise */}
      <section className="expertise-section">
      <h2 className="expertise-title">Area of Expertise</h2>
      <p className="expertise-subtitle">
        True intuitive expertise is learned from prolonged experience with good feedback on mistakes.
      </p>
      
      <div className="expertise-container">
        <div className="expertise-item">
          <div className="expertise-number">1</div>
          <h3 className="expertise-item-title">Python Programming</h3>
          <p className="expertise-item-description">
            With Python's simplicity and versatility, experts adeptly frameworks to develop robust applications, automate tasks, or conduct advanced data analysis.
          </p>
        </div>
        <div className="expertise-item">
          <div className="expertise-number">2</div>
          <h3 className="expertise-item-title">Data Analysis</h3>
          <p className="expertise-item-description">
            Proficient in statistical analysis, data visualization, and various analytical tools and programming languages such as Python, SQL, PowerBI, Tableau, and Excel.
          </p>
        </div>
        <div className="expertise-item">
          <div className="expertise-number">3</div>
          <h3 className="expertise-item-title">DevOps</h3>
          <p className="expertise-item-description">
            Proficient in implementing (CI/CD) pipelines and optimizing workflows to enhance collaboration between development and operations teams.
          </p>
        </div>
        <div className="expertise-item">
          <div className="expertise-number">4</div>
          <h3 className="expertise-item-title">Web Development</h3>
          <p className="expertise-item-description">
            With expertise in frontend technologies such as HTML, CSS, as well as backend frameworks Django, I adeptly bring user interfaces to life while ensuring functionality.
          </p>
        </div>
        <div className="expertise-item">
          <div className="expertise-number">5</div>
          <h3 className="expertise-item-title">Data Science</h3>
          <p className="expertise-item-description">
            With expertise in statistical analysis, machine learning, and data visualization, I utilize advanced algorithms and techniques to extract meaningful patterns and trends.
          </p>
        </div>
        <div className="expertise-item">
          <div className="expertise-number">6</div>
          <h3 className="expertise-item-title">Excellent Communication</h3>
          <p className="expertise-item-description">
            I excel in conveying ideas clearly and effectively. Additionally, I possess strong listening skills, allowing me to understand others' perspectives.
          </p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default HomePage;
