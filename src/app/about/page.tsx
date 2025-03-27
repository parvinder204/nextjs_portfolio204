import React from "react";
import Image from "next/image";
import "@/assets/css/about.css"; // Import About Page CSS

const About = () => {
  return (
    <main className="main-container">
      <section className="about-container">
        <div className="row">
          {/* Left Column - Profile Info */}
          <div className="column about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              I'm <span className="highlight">Parvinder Singh</span>, a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating user-friendly, high-performance applications that deliver exceptional user experiences.
            </p>
            <p className="about-description">
              My journey in web development has been driven by a deep curiosity for solving complex problems and building scalable solutions that enhance the digital experience.
            </p>
          </div>

          {/* Right Column - Profile Image */}
          <div className="column about-image">
            <Image
              src="/profile.jpg"
              alt="Parvinder Singh"
              width={400}
              height={400}  // Maintain a square aspect ratio
              className="profile-img"
            />
          </div>
        </div>
      </section>

      {/* New Section: Personal Information */}
      <section className="info-container">
        <h2 className="section-title">Personal Information</h2>
        <table className="education-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Parvinder Singh</td>
            </tr>
            <tr>
              <td>D.O.B</td>
              <td>Nov 30, 2001</td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>Unmarried</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>Indian</td>
            </tr>
            <tr>
              <td>City</td>
              <td>Nalagarh</td>
            </tr>
            <tr>
              <td>State</td>
              <td>Himachal Pradesh</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* New Section: Education Table */}
      <section className="education-container">
        <h2 className="section-title">Education</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Year</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PG - MCA in Cloud Computing & DevOps</td>
              <td>2022-2024</td>
              <td>Chandigarh University</td>
            </tr>
            <tr>
              <td>UG - BSC in Computer Science</td>
              <td>2019-2022</td>
              <td>Chandigarh University</td>
            </tr>
            <tr>
              <td>Intermediate in Science</td>
              <td>2018-2019</td>
              <td>Sri Dasmesh Academy</td>
            </tr>
            <tr>
              <td>Matriculation</td>
              <td>2016-2017</td>
              <td>Guru Nanak Public School</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default About;
