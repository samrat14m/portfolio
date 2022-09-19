import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="section__headers">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className=" container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>A Simple Website Layout (HTML/CSS)</h3>
          <a
            href="https://github.com/samrat14m/css6"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://samrat14m.github.io/css6/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Functional Calculator</h3>
          <a
            href="https://github.com/samrat14m/calculator"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://samrat14m.github.io/calculator/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>World Clock (24hr/12hr adjustable)</h3>
          <a
            href="https://github.com/samrat14m/world_clock"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://samrat14m.github.io/world_clock/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Blog Webiste (React/NodeJS/ExpressJS)</h3>
          <a
            href="https://github.com/samrat14m/blogAppNode"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://peppy-concha-81dfef.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Simple 2D Animation</h3>
          <a
            href="https://github.com/samrat14m/css5"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://samrat14m.github.io/css5/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Alarm Clock</h3>
          <a
            href="https://github.com/samrat14m/digital-clock"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://samrat14m.github.io/digital-clock/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
