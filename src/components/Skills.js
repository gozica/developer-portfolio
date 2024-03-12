import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGit,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "HTML serves as the backbone of web development, enabling me to structure and organize content effectively. Whether I'm creating user interfaces, designing web pages, or implementing responsive layouts, HTML remains an indispensable tool in my daily workflow, facilitating seamless communication between design and functionality",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "CSS empowers me as a software engineer to breathe life into HTML structures, allowing me to craft visually captivating and user-friendly interfaces. From defining styles, layouts, and animations to ensuring cross-browser compatibility, CSS plays a pivotal role in enhancing the user experience and bringing designs to fruition in my daily development endeavors.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "JavaScript is the dynamic force behind my daily work as a software engineer, enabling me to add interactivity, functionality, and dynamic behavior to web applications. With its versatility, I leverage JavaScript to handle user input, manipulate the DOM, fetch data asynchronously, and implement complex logic, empowering me to create engaging and responsive experiences for users across various platforms and devices.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "React simplifies my daily tasks by offering a component-based approach and declarative syntax, enhancing code organization and scalability. With its virtual DOM and extensive ecosystem, I efficiently create dynamic and responsive web applications, ensuring faster development cycles and enhanced user experiences.",
      icon: faReact,
    },
    {
      name: "NodeJs",
      des: "Node.js empowers me as a software engineer by enabling server-side JavaScript execution, allowing for seamless development of scalable and efficient web applications. Leveraging its non-blocking I/O model and vast ecosystem of packages, I efficiently build real-time applications, APIs, and microservices, streamlining my daily workflow and ensuring high performance and reliability.",
      icon: faNode,
    },
    {
      name: "Git",
      des: "Git serves as an indispensable tool for me as a software engineer, facilitating version control and collaboration throughout my daily workflow. With its branching, merging, and distributed nature, I efficiently manage code changes, track history, and coordinate with team members, ensuring project integrity and smooth development iterations.",
      icon: faGit,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Skills
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
