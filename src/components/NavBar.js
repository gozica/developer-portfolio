import React, { useState } from "react";

const NavBar = () => {
  const [listNav] = useState(["home", "skills", "projects"]);
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>

      <nav>
        {listNav.map((value, key) => (
          <span key={key} className="">
            {value}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
