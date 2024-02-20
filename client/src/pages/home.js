// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
// import { useApi } from "../hooks/use-api";
import Header from "../components/Navbar";
import "./Home.css";
import Aline from "./aline.png";
import Andrew from "./andrew.png";
import Camille from "./camille.png";
import Alberto from "./alberto.png";
import Ayman from "./ayman.png";
import Zach from "./zach.png";

const Home = () => {
  const scrollToMeetUs = (event) => {
    event.preventDefault();

    const aboutUsSection = document.getElementById("meet-us");

    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Header />
      <body></body>
      <div className="home">
        <div class="background-image">
          <div class="background-content">
            <h1>Deliver an unparalleled standard of care for patients</h1>
            <p>
              like never before with Health Pulse. From age and BMI to Brixia
              scores and beyond, effortlessly capture crucial patient data and
              enhance records with relevant pictures. Elevate your practice with
              streamlined note-taking and unlock a new level of precision in
              patient care.
            </p>
            <br></br>
            <a href="#meet-us" onClick={scrollToMeetUs}>
              Meet the Team
            </a>
          </div>
        </div>

        <br></br>

        <div class="divider"></div>

        <div className="about">
          <div className="main-about">
            <h1>About Us</h1>
            <p>
              Introducing Health Pulse, the cutting-edge platform
              revolutionizing the way doctors engage with patient information!
              Our user-friendly interface empowers healthcare professionals to
              seamlessly take detailed notes on their patients, capturing
              essential data points like age, sex, BMI, Brixia scores, and more.
              With our innovative system, documenting key findings has never
              been easier – physicians can effortlessly track and analyze
              patient progress over time.
            </p>
            <p>
              What sets us apart? We go beyond the basics, allowing doctors to
              enhance their records with relevant pictures for a comprehensive
              and visual representation of each patient's journey. Our platform
              is designed to streamline the note-taking process, enabling
              healthcare providers to focus on what matters most – delivering
              exceptional care.
            </p>
            <p>
              Join the ranks of forward-thinking medical professionals who trust
              Health Pulse to elevate their patient management. Embrace
              efficiency, precision, and a new era of healthcare documentation.
              Sign up today and experience the future of patient notes!
            </p>
          </div>
          <div class="image-container"></div>
        </div>

        <div class="divider"></div>
        <br></br>

        <div>
          <h1>Testimonials</h1>
          <div class="testimonial-container">
            <div class="testimonial-box">
              <p>
                "Health Pulse is a fantastic tool for doctors who value
                efficiency and thoroughness. It simplifies note-taking with
                intuitive features, and the option to include images has
                revolutionized my patient records. This platform has truly
                elevated the standard of care in my practice."
              </p>
              <div class="testimonial-author">Dr. Rodriguez</div>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div class="testimonial-box">
              <p>
                "As a busy physician, Health Pulse has been a game-changer in my
                practice. It seamlessly organizes patient data, from
                demographics to Brixia scores, allowing me to provide more
                personalized care. The ability to attach pictures has enhanced
                my diagnostic accuracy and communication with colleagues. Highly
                recommended!"
              </p>
              <div class="testimonial-author">Dr. Lewis</div>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>

            <div class="testimonial-box">
              <p>
                "Health Pulse is a must-have for doctors who prioritize
                comprehensive patient care. I appreciate its versatility in
                capturing diverse data points, allowing for a holistic view of
                each patient's health. The image feature is a brilliant touch,
                enhancing my ability to document and communicate findings. A
                five-star solution!"
              </p>
              <div class="testimonial-author">Dr. Patel</div>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <br></br>

        <div class="team">
          <h1>Meet the Team</h1>
        </div>
        <div class="team-container" id="meet-us">
          <div class="team-member">
            <img src={Aline} alt="Team Member 1" />
            <h3>Aline Moreau</h3>
            <p>Developer</p>
          </div>
          <div class="team-member">
            <img src={Andrew} alt="Team Member 2" />
            <h3>Andrew De Asevedo</h3>
            <p>Developer</p>
          </div>
          <div class="team-member">
            <img src={Camille} alt="Team Member 3" />
            <h3>Camille Baptiste</h3>
            <p>Developer</p>
          </div>
          <div class="team-member">
            <img src={Alberto} alt="Team Member 4" />
            <h3>Alberto Chavez</h3>
            <p>Developer</p>
          </div>
          <div class="team-member">
            <img src={Ayman} alt="Team Member 5" />
            <h3>Ayman Alabbasi</h3>
            <p>Developer</p>
          </div>
          <div class="team-member">
            <img src={Zach} alt="Team Member 6" />
            <h3>Zacharie Verdieu</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
