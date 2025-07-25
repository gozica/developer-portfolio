import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGit,
  faNode,
  faJenkins,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "Javascript",

      icon: faJs,
    },
    {
      name: "ReactJs",

      icon: faReact,
    },
    {
      name: "NodeJs",

      icon: faNode,
    },
    {
      name: "HTML",

      icon: faHtml5,
    },
    {
      name: "CSS",

      icon: faCss3,
    },
    {
      name: "Git",

      icon: faGit,
    },
    {
      name: "Artificial Intelligence",

      icon: faBrain,
    },
    {
      name: "Python",

      icon: faPython,
    },
    {
      name: "Angular",

      icon: faAngular,
    },
    {
      name: "CICD",

      icon: faJenkins,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
      </div>

      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
