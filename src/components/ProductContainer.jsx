import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useLocation } from 'react-router-dom';
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
//Floor Tiles --> Exterior/Parkinng Tiles
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
//Floor Tile --> Floor Tiles
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
//Floor Tile --> Full Body Tiles
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
//Floor Tiles -- > Greselin
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
//Floor Tiles -- > Planks
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

//Wall Tiles -- > Bathroom
import image61 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath01.jpg';
import image62 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath02.jpg';
import image63 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath03.jpg';
import image64 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath04.jpg';
import image65 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath05.jpg';
import image66 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath06.jpg';
import image67 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath07.jpg';
import image68 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath08.jpg';
import image69 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath09.jpg';
import image70 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath10.jpg';
//Wall Tiles -- > Exterior Wall Cladding
import image71 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding01.jpg';
import image72 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding02.jpg';
import image73 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding03.jpg';
import image74 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding04.jpg';
import image75 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding05.jpg';
import image76 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding06.jpg';
import image77 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding07.jpg';
import image78 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding08.jpg';
import image79 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding09.jpg';
import image80 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding10.jpg';
//Wall Tiles -- > GVT Cladding
import image81 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT01.jpg';
import image82 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT02.jpg';
import image83 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT03.jpg';
import image84 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT04.jpg';
import image85 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT05.jpg';
import image86 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT06.jpg';
import image87 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT07.jpg';
import image88 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT08.jpg';
import image89 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT09.jpg';
import image90 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT10.jpg';
//Wall Tiles -- > Kitchen
import image91 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen01.jpg';
import image92 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen02.jpg';
import image93 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen03.jpg';
import image94 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen04.jpg';
import image95 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen05.jpg';
import image96 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen06.jpg';
import image97 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen07.jpg';
import image98 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen08.jpg';
import image99 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen09.jpg';
import image100 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen10.jpg';
//Wall Tiles -- > Stone Cladding
import image101 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone01.png';
import image102 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone02.png';
import image103 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone03.png';
import image104 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone04.png';
import image105 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone05.png';
import image106 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone06.png';
import image107 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone07.png';
import image108 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone08.png';
import image109 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone09.png';
import image110 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone10.png';
//Wall Tiles -- > Wall ceramic
import image111 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera01.jpg';
import image112 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera02.jpg';
import image113 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera03.jpg';
import image114 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera04.jpg';
import image115 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera05.jpg';
import image116 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera06.jpg';
import image117 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera07.jpg';
import image118 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera08.jpg';
import image119 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera09.jpg';
import image120 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera10.jpg';

const imageExample1 = [
      {
        id: 1,
        data: {
          name: "Double Charge Floor Tile",
          size: "138*22",
          image: image1
        }
      },
      {
        id: 2,
        data: {
          name: "Double Charge Floor Tile",
          size: "138*22",
          image: image2
        }
      },
      {
        id: 3,
        data: {
          name: "Double Charge Floor Tile",
          size: "138*22",
          image: image3
        }
      },
      { 
        id:4,
          data: {
            name: "Double Charge Floor Tile",
            size: "138*22",
            image: image3
          }
        },
]
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

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

        <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Full Body Vitrified Tiles Section */}
      <h3 id="floor-full-body-vitrified" className="text-xl font-semibold mb-2">
        2. Full Body Vitrified Tiles
      </h3>
      <p className="text-lg mb-4">
        Full body vitrified tiles are a top choice for high-traffic areas due to their uniform structure and composition.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

        <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>



      {/* Planks Section */}
      <h3 id="floor-plank" className="text-xl font-semibold mb-2">
        3. Planks
      </h3>
      <p className="text-lg mb-4">
        Plank tiles replicate the natural beauty of wooden floors while offering the durability and low maintenance of tile.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

        <button className="mx-auto block bg-blue-600 text-white py-2 px-4 rounded-md">Explore More</button>

      {/* Double Charge Tiles Section */}
      <h3 id="floor-Double-Charge-Tiles" className="text-xl font-semibold mb-2">
        4. Double Charge Tiles
      </h3>
      <p className="text-lg mb-4">
        Double charge tiles are created using a two-layer production process, making them thicker and more durable.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Exterior Parking Tiles Section */}
      <h3 id="exterior-parking-tiles" className="text-xl font-semibold mb-2">
        5. Exterior Parking Tiles
      </h3>
      <p className="text-lg mb-4">
        Designed for outdoor use, exterior parking tiles are built to withstand harsh weather conditions and heavy vehicle loads.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
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

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* GVT Cladding Section */}
      <h3 id="wall-greselon" className="text-xl font-semibold mb-2">
        2. GVT Cladding
      </h3>
      <p className="text-lg mb-4">
        GVT (Glazed Vitrified Tiles) cladding adds a modern touch with stain resistance and durability for both interior and exterior walls.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Stone Cladding Section */}
      <h3 id="wall-stone" className="text-xl font-semibold mb-2">
        3. Stone Cladding
      </h3>
      <p className="text-lg mb-4">
        Stone cladding offers a rustic charm and enhances the ambiance of any space, making it ideal for feature walls and facades.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
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

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* GVT Platform Tiles Section */}
      <h3 id="gvt-platform-tiles" className="text-xl font-semibold mb-2">
        2. GVT Platform Tiles
      </h3>
      <p className="text-lg mb-4">
        GVT platform tiles combine modern appearance with durability, perfect for high-traffic public spaces and industrial facilities.
      </p>

      <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
          {imageExample1.slice(0, 4).map(tile => (
            <div
              key={tile.id}
              className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-600"
            >
              <img
                src={tile.data.image}
                alt={tile.data.name}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-all duration-500"></div>
              <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{tile.data.name}</h2>
                <p className="flex items-center text-sm text-gray-300">
                  <StraightenIcon className="mr-1" />
                  {tile.data.size}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductContainer;