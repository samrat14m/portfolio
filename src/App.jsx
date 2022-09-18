import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
