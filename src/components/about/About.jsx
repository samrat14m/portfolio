import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="section__headers">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"></article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor
            odit accusantium placeat ratione cum reprehenderit, harum a voluptas
            quos, eveniet quibusdam alias asperiores quod eos repellendus quae
            sapiente veritatis. Magni vitae saepe doloremque similique nemo
            debitis ipsam ducimus adipisci animi itaque quas delectus, aliquam
            illo blanditiis. Officia quas error delectus quasi nisi obcaecati
            quod pariatur quam distinctio, eligendi incidunt.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
