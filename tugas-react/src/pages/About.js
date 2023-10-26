import React from 'react'
import Footer from '../components/Footer';
import HeroAbout from '../components/Hero/HeroAbout';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <main>
      <div className="wrapper">
        <HeroAbout />
      </div>
    </main>
  );
}


const About = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default About