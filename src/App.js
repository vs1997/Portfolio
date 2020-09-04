import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurProjects from './components/OurProjects';

import { BrowserRouter, Route } from 'react-router-dom';
import { StoreProvider } from './context/store';
// import OurServices from './components/OurServices';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Carousel}></Route>
          {/* <Carousel url={carouselactive[0].url} />
          {carouselnonactive.map((url) => (
            <Carousel key={url.id} url={url.url} />
          ))} */}
          <Route path='/' exact component={About}></Route>

          <Route path='/ourprojects' exact component={OurProjects}></Route>
          {/* <OurServices /> */}
          <Route path='' exact component={Contact}></Route>
          <Footer />

          {/*<About />
        <OurProjects />
        
        <Contact />
        <Footer />*/}
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
