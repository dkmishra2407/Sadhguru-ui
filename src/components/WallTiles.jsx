import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import StraightenIcon from '@mui/icons-material/Straighten';
//Floor Tiles -- > Double Charge
import image1 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl01.jpg';
import image2 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl02.jpg';
import image3 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl03.jpg';
import image4 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl04.jpg';
import image5 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl05.jpg';
import image6 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl06.jpg';
import image7 from '../assets/Tiles Picture/Floor Tiles/Double Charge/Dbl07.jpg';
//Floor Tiles -- > Floor
import image8 from '../assets/Tiles Picture/Floor Tiles/Exterior_Parking/Ext01.jpg'
import image9 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_1.jpg'

import image10 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_01.jpg'

import image11 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres01.jpg'
import image12 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_01.jpg'

// wall tiles
import image13 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath01.jpg'
import image14 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding01.jpg'
import image15 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT02.jpg'
import image16 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen01.jpg'
import image17 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone02.png'
import image18 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera01.jpg'
const imageArray = [
  {
    id: 1,
    data: {
      name: "Wall Tile",
      size: "Double Charge 138*22",
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
    id: 4,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image4
    }
  },
  {
    id: 5,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image5
    }
  },
  {
    id: 6,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image6
    }
  },
  {
    id: 7,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image8
    }
  },
  {
    id: 8,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image9
    }
  },
];

const WallTiles = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
      {imageArray.map(tile => (
        <div key={tile.id} className="relative min-h-[280px] w-80 bg-gray-800 overflow-hidden rounded-lg shadow-lg">
          <img
          src={tile.data.image}
            alt={tile.data.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-0 p-4 text-white">
            <h2 className="text-xl font-bold">{tile.data.name}</h2>
            <p className="flex items-center text-sm text-gray-300">
              <StraightenIcon className="mr-1" />
              {tile.data.size}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WallTiles;
