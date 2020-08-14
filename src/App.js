import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
