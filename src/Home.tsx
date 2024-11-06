import React from 'react';
import Header from './Header';
import Hero from './components/Hero';
import Features from './Features';
import Footer from './Footer';
import './css/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-content mt-5">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
