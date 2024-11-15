import React from 'react';
import NavBar from './components/Nav/NavBar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photo" />
        <Campus />
        <Title subTitle="contact us" title="Get in Touch" />

        <Contact />
      </div>
    </div>
  );
};

export default App;
