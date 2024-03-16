import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";


function Projects() {
  const [listProjects] = useState([
    {
      name: "Netflix Clone",
      des: " Created a Netflix clone using React.js to replicate the platform's interface and functionality, providing users with a familiar and immersive streaming experience.  ",
      mission: "Front-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, GIT",
      images: "/netflix.png",
      proj: "https://65f456d18d739204525ed391--thunderous-halva-93922b.netlify.app/",
    },
    {
      name: "Weather App",
      des: "Created a resilient full-stack weather forecasting application using JavaScript, HTML, and CSS, seamlessly integrating Open Weather's REST API to efficiently retrieve data and enhance functionality.",
      mission: "Back-end Developer, Front-end Developer and design",
      language: "HTML5, CSS3, JS, API, GIT, InVision",
      images: "/weather.PNG",
      proj: "https://quiet-boba-558a12.netlify.app/",
    },
    {
      name: "Portfolio ",
      des: "Developed a sleek personal portfolio website using React.js, CSS, and HTML to showcase skills, projects, and experiences with a modern and dynamic design.",
      mission: "Front-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, GIT",
      images: "https://agzc.netlify.app/",
    },

    {
      name: "Video Game",
      des: "Created a rock-paper-scissors video game using JavaScript to provide an interactive and enjoyable gaming experience with user-friendly controls and dynamic gameplay.",
      mission: "Front-end Developer, testing and design",
      language: "HTML5, CSS3, JS, GIT",
      images: "/Rock.PNG",
      proj: "https://cheerful-crepe-1253af.netlify.app/",
    },

    {
      name: "Product Landing Page",
      des: "Developed a product lending page using HTML, CSS, and JavaScript to facilitate easy navigation, showcase available items, and streamline the borrowing process for users.",
      mission: "Front-end Developer, system analysis and design",
      language: "HTML5, CSS3, Javascript",
      images: "/fishing.PNG",
      proj: "https://fabulous-florentine-5cfffd.netlify.app/",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>

            <div className="content">
              <h3>{value.name}</h3>
              <div className="proj">
                <a href={value.proj} target="_blank" rel="noopener noreferrer">
                Project</a>
              </div>

              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>

                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
