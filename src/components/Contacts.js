import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      value: "GITHUB",
      github: "https://github.com/gozica",
    },
    {
      value: "LINKEDIN",
      github: "https://www.linkedin.com/in/gzca/",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contacts
      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <div><h4>{value.value}</h4></div>
            <div className="link">
              <a href={value.github} target="_blank" rel="noopener noreferrer">
                <h3>Link</h3>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
