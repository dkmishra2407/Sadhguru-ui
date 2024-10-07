import React, { useEffect } from 'react';
import Responsive from '../components/Slider';
import AboutKajaria from '../components/Aboutus';
import TileComponent from '../components/tiles';
import FloorTileComponent from '../components/FloorTile';
import FinishesComponent from '../components/Finishes';
import MapComponent from "../components/MapComponent";
import TrendingProducts from '../components/Trainding';
import DownloadCatalogue from '../components/DownloadCatelog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{
      width: '100%',
      margin: 'auto',
      padding: 0,
    }}>
      <div data-aos="fade-up">
        <Responsive />
      </div>
      
      <div data-aos="fade-right">
        <TileComponent />
      </div>
      
      <div data-aos="fade-left">
        <FloorTileComponent />
      </div>
      
      <div data-aos="zoom-in">
        <TrendingProducts />
      </div>
      
      <div data-aos="slide-up">
        <FinishesComponent />
      </div>
      
      <div data-aos="flip-up">
        <MapComponent />
      </div>
      
      {/* <div data-aos="fade-down">
        <NewsUpdates />
      </div> */}
      
      <div data-aos="fade-up" data-aos-delay="200">
        <DownloadCatalogue />
      </div>
      

      
      <div data-aos="fade-in">
        <AboutKajaria />
      </div>
    </div>
  );
}

export default Home;