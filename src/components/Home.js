import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <div className="name">
          My name is <span>Nellie</span>
        </div>
        <div className="description">
          I'm your coding whiz by day, diving into true crime and books by
          night, and always up for some outdoor adventure.
        </div>
        < a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> 
        Download My CV </a>

        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt=""/>
                <div className="info">
                    <div>Software</div>
                    <div>Engineer</div>
                    <div>Front End</div>
                    <div>Focus</div>
                  
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
