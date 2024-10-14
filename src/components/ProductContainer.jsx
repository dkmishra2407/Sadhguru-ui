import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useLocation } from 'react-router-dom';
// Double Charge Floor Tiles
import image1 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl01.jpg';
import image2 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl02.jpg';
import image3 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl03.jpg';
import image4 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl04.jpg';
import image5 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl05.jpg';
import image6 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl06.jpg';
import image7 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl07.jpg';
import image8 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl08.jpg';
import image9 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl09.jpg';
import image10 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl10.jpg';

// Exterior/Parking Tiles
import image11 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext01.jpg';
import image12 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext02.jpg';
import image13 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext03.jpg';
import image14 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext04.jpg';
import image15 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext05.jpg';
import image16 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext06.jpg';
import image17 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext07.jpg';
import image18 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext08.jpg';
import image19 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext09.jpg';
import image20 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext10.jpg';

// Floor Tiles
import image21 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_1.jpg';
import image22 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_2.jpg';
import image23 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_3.jpg';
import image24 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_4.jpg';
import image25 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_5.jpg';
import image26 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_6.jpg';
import image27 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_7.jpg';
import image28 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_8.jpg';
import image29 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_9.jpg';
import image30 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_10.jpg';

// Full Body Tiles
import image31 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_01.jpg';
import image32 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_02.jpg';
import image33 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_03.jpg';
import image34 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_04.jpg';
import image35 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_05.jpg';
import image36 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_06.jpg';
import image37 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_07.jpg';
import image38 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_08.jpg';
import image39 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_09.jpg';
import image40 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_10.jpg';

// Greselin Tiles
import image41 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres01.jpg';
import image42 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres02.jpg';
import image43 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres03.jpg';
import image44 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres04.jpg';
import image45 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres05.jpg';
import image46 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres06.jpg';
import image47 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres07.jpg';
import image48 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres08.jpg';
import image49 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres09.jpg';
import image50 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres10.jpg';

// Plank Tiles
import image51 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_01.jpg';
import image52 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_02.jpg';
import image53 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_03.jpg';
import image54 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_04.jpg';
import image55 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_05.jpg';
import image56 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_06.jpg';
import image57 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_07.jpg';
import image58 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_08.jpg';
import image59 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_09.jpg';
import image60 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_10.jpg';

// Now let's correctly assign these imported images to the arrays:

// Double Charge Floor Tiles
const doubleChargeTiles = [
  { id: 1, name: "Double Charge Floor Tile", size: "138*22", image: image1 },
  { id: 2, name: "Double Charge Floor Tile", size: "138*22", image: image2 },
  { id: 3, name: "Double Charge Floor Tile", size: "138*22", image: image3 },
  { id: 4, name: "Double Charge Floor Tile", size: "138*22", image: image4 },
  { id: 5, name: "Double Charge Floor Tile", size: "138*22", image: image5 },
  { id: 6, name: "Double Charge Floor Tile", size: "138*22", image: image6 },
  { id: 7, name: "Double Charge Floor Tile", size: "138*22", image: image7 },
  { id: 8, name: "Double Charge Floor Tile", size: "138*22", image: image8 },
  { id: 9, name: "Double Charge Floor Tile", size: "138*22", image: image9 },
  { id: 10, name: "Double Charge Floor Tile", size: "138*22", image: image10 },
];

// Exterior/Parking Tiles
const exteriorParkingTiles = [
  { id: 11, name: "Exterior Parking Tile", size: "138*22", image: image11 },
  { id: 12, name: "Exterior Parking Tile", size: "138*22", image: image12 },
  { id: 13, name: "Exterior Parking Tile", size: "138*22", image: image13 },
  { id: 14, name: "Exterior Parking Tile", size: "138*22", image: image14 },
  { id: 15, name: "Exterior Parking Tile", size: "138*22", image: image15 },
  { id: 16, name: "Exterior Parking Tile", size: "138*22", image: image16 },
  { id: 17, name: "Exterior Parking Tile", size: "138*22", image: image17 },
  { id: 18, name: "Exterior Parking Tile", size: "138*22", image: image18 },
  { id: 19, name: "Exterior Parking Tile", size: "138*22", image: image19 },
  { id: 20, name: "Exterior Parking Tile", size: "138*22", image: image20 },
];

// Floor Tiles
const floorTiles = [
  { id: 21, name: "Floor Tile", size: "138*22", image: image21 },
  { id: 22, name: "Floor Tile", size: "138*22", image: image22 },
  { id: 23, name: "Floor Tile", size: "138*22", image: image23 },
  { id: 24, name: "Floor Tile", size: "138*22", image: image24 },
  { id: 25, name: "Floor Tile", size: "138*22", image: image25 },
  { id: 26, name: "Floor Tile", size: "138*22", image: image26 },
  { id: 27, name: "Floor Tile", size: "138*22", image: image27 },
  { id: 28, name: "Floor Tile", size: "138*22", image: image28 },
  { id: 29, name: "Floor Tile", size: "138*22", image: image29 },
  { id: 30, name: "Floor Tile", size: "138*22", image: image30 },
];

// Full Body Tiles
const fullBodyTiles = [
  { id: 31, name: "Full Body Tile", size: "138*22", image: image31 },
  { id: 32, name: "Full Body Tile", size: "138*22", image: image32 },
  { id: 33, name: "Full Body Tile", size: "138*22", image: image33 },
  { id: 34, name: "Full Body Tile", size: "138*22", image: image34 },
  { id: 35, name: "Full Body Tile", size: "138*22", image: image35 },
  { id: 36, name: "Full Body Tile", size: "138*22", image: image36 },
  { id: 37, name: "Full Body Tile", size: "138*22", image: image37 },
  { id: 38, name: "Full Body Tile", size: "138*22", image: image38 },
  { id: 39, name: "Full Body Tile", size: "138*22", image: image39 },
  { id: 40, name: "Full Body Tile", size: "138*22", image: image40 },
];

// Greselin Tiles
const greselinTiles = [
  { id: 41, name: "Greselin Tile", size: "138*22", image: image41 },
  { id: 42, name: "Greselin Tile", size: "138*22", image: image42 },
  { id: 43, name: "Greselin Tile", size: "138*22", image: image43 },
  { id: 44, name: "Greselin Tile", size: "138*22", image: image44 },
  { id: 45, name: "Greselin Tile", size: "138*22", image: image45 },
  { id: 46, name: "Greselin Tile", size: "138*22", image: image46 },
  { id: 47, name: "Greselin Tile", size: "138*22", image: image47 },
  { id: 48, name: "Greselin Tile", size: "138*22", image: image48 },
  { id: 49, name: "Greselin Tile", size: "138*22", image: image49 },
  { id: 50, name: "Greselin Tile", size: "138*22", image: image50 },
];

// Plank Tiles
const plankTiles = [
  { id: 51, name: "Plank Tile", size: "138*22", image: image51 },
  { id: 52, name: "Plank Tile", size: "138*22", image: image52 },
  { id: 53, name: "Plank Tile", size: "138*22", image: image53 },
  { id: 54, name: "Plank Tile", size: "138*22", image: image54 },
  { id: 55, name: "Plank Tile", size: "138*22", image: image55 },
  { id: 56, name: "Plank Tile", size: "138*22", image: image56 },
  { id: 57, name: "Plank Tile", size: "138*22", image: image57 },
  { id: 58, name: "Plank Tile", size: "138*22", image: image58 },
  { id: 59, name: "Plank Tile", size: "138*22", image: image59 },
  { id: 60, name: "Plank Tile", size: "138*22", image: image60 },
];



// TileCard component to reuse
const TileCard = ({ tile }) => (
  <div className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600">
    <img src={tile.image} alt={tile.name} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
    <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h2 className="text-xl font-bold">{tile.name}</h2>
      <p className="flex items-center text-sm text-gray-300">
        <StraightenIcon className="mr-1" />
        {tile.size}
      </p>
    </div>
  </div>
);

const ProductContainer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.replace('#', '');
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="p-8 mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Floor Tiles: Durable & Elegant Flooring Solutions
      </h1>
      <p className="text-lg mb-4">
        Transform Your Space with High-Quality Floor Tiles. At Sadhguru Tiles & Marbles, we specialize in providing premium-quality floor tiles that blend durability, style, and functionality.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-blue-600">Types of Floor Tiles:</h2>

      {/* Floor Ceramic Tiles Section */}
      <h3 id="floor-ceramic" className="text-xl font-semibold mb-2">
        1. Floor Ceramic Tiles
      </h3>
      <p className="text-lg mb-4">
        Ceramic floor tiles are known for their versatility, affordability, and ease of maintenance.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {floorTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Full Body Vitrified Tiles Section */}
      <h3 id="floor-full-body-vitrified" className="text-xl font-semibold mb-2">
        2. Full Body Vitrified Tiles
      </h3>
      <p className="text-lg mb-4">
        Full body vitrified tiles are a top choice for high-traffic areas due to their uniform structure and composition.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {fullBodyTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Planks Section */}
      <h3 id="floor-plank" className="text-xl font-semibold mb-2">
        3. Planks
      </h3>
      <p className="text-lg mb-4">
        Plank tiles replicate the natural beauty of wooden floors while offering the durability and low maintenance of tile.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {plankTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Double Charge Tiles Section */}
      <h3 id="floor-Double-Charge-Tiles" className="text-xl font-semibold mb-2">
        4. Double Charge Tiles
      </h3>
      <p className="text-lg mb-4">
        Double charge tiles are created using a two-layer production process, making them thicker and more durable.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {doubleChargeTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Exterior Parking Tiles Section */}
      <h3 id="exterior-parking-tiles" className="text-xl font-semibold mb-2">
        5. Exterior Parking Tiles
      </h3>
      <p className="text-lg mb-4">
        Designed for outdoor use, exterior parking tiles are built to withstand harsh weather conditions and heavy vehicle loads.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {exteriorParkingTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      {/* Wall Tiles Section */}
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Wall Tiles: Elevate Your Interiors with Stylish Wall Tiles
      </h1>
      <p className="text-lg mb-4">
        At Sadhguru Tiles & Marbles, we offer a variety of stylish wall tiles perfect for enhancing the beauty of your interiors.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-blue-600">Types of Wall Tiles:</h2>

      {/* Wall Ceramic Tiles Section */}
      <h3 id="wall-ceramic-tiles" className="text-xl font-semibold mb-2">
        1. Wall Ceramic Tiles
      </h3>
      <p className="text-lg mb-4">
        Wall ceramic tiles are perfect for bathrooms, kitchens, and living spaces due to their moisture resistance.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {greselinTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* GVT Cladding Section */}
      <h3 id="wall-greselon" className="text-xl font-semibold mb-2">
        2. GVT Cladding
      </h3>
      <p className="text-lg mb-4">
        GVT (Glazed Vitrified Tiles) cladding adds a modern touch with stain resistance and durability for both interior and exterior walls.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {greselinTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Stone Cladding Section */}
      <h3 id="wall-stone" className="text-xl font-semibold mb-2">
        3. Stone Cladding
      </h3>
      <p className="text-lg mb-4">
        Stone cladding offers a rustic charm and enhances the ambiance of any space, making it ideal for feature walls and facades.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {greselinTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Platform Tiles: Heavy-Duty Solutions for High-Traffic Areas
      </h1>
      <p className="text-lg mb-4">
        Platform tiles are engineered for strength and durability in high-traffic environments like public transport hubs.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-blue-600">Types of Platform Tiles:</h2>

      {/* Full Body Tiles Section */}
      <h3 id="platform-full-body-tiles" className="text-xl font-semibold mb-2">
        1. Full Body Tiles
      </h3>
      <p className="text-lg mb-4">
        Full body tiles are highly resistant to scratches and impacts, making them ideal for train stations and public areas.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {fullBodyTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

      <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* GVT Platform Tiles Section */}
      <h3 id="gvt-platform-tiles" className="text-xl font-semibold mb-2">
        2. GVT Platform Tiles
      </h3>
      <p className="text-lg mb-4">
        GVT platform tiles combine modern appearance with durability, perfect for high-traffic public spaces and industrial facilities.
      </p>
      <div className="p-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
        {greselinTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile} />)}
      </div>

    </div>
  );
};

export default ProductContainer;
