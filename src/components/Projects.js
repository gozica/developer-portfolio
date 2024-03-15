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
      name: "Netflix",
      des: "Small description",
      mission: "Front-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS,...",
      images: "/netflix.png",
      proj: "https://65f456d18d739204525ed391--thunderous-halva-93922b.netlify.app/",
    },
    {
      name: "Weather App",
      des: "Small description",
      mission: "Back-end Developer, Front-end Developer and design",
      language: "HTML5, CSS3, JS, GIT,...",
      images: "/weather.PNG",
      proj: "https://quiet-boba-558a12.netlify.app/",
    },
    {
      name: "Portfolio ",
      des: "Small description.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS,...",
      images: "/portfolio.PNG",
    },

    {
      name: "Video Game",
      des: "Small description.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS,...",
      images: "/Rock.PNG",
      proj: "https://cheerful-crepe-1253af.netlify.app/",
    },

    {
      name: "Product Landing Page",
      des: "Small description.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS,...",
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
