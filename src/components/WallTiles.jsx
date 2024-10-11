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
//Floor Tiles -- > Floor
// import image9 from '../assets/Tiles Picture/Floor Tiles/Floor/FloorTile_1.jpg'


// import image10 from '../assets/Tiles Picture/Floor Tiles/Full Body Tiles/FullBody_01.jpg'

// import image11 from '../assets/Tiles Picture/Floor Tiles/Greselin/Gres01.jpg'
// import image12 from '../assets/Tiles Picture/Floor Tiles/Planks/Plank_01.jpg'

// // wall tiles
// import image13 from '../assets/Tiles Picture/Wall Tiles/Bathroom/Bath01.jpg'
// import image14 from '../assets/Tiles Picture/Wall Tiles/Exterior Wall Cladding/ExWallCladding01.jpg'
// import image15 from '../assets/Tiles Picture/Wall Tiles/GVT Cladding/GVT02.jpg'
// import image16 from '../assets/Tiles Picture/Wall Tiles/Kitchen/Kitchen01.jpg'
// import image17 from '../assets/Tiles Picture/Wall Tiles/Stone Cladding/Stone02.png'
// import image18 from '../assets/Tiles Picture/Wall Tiles/Wall Ceramic/WallCera01.jpg'
const imageArray = [
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
  { 
  id:5,
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
      image: image7
    }
  },
  {
    id: 8,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image8,
    }
  },
  {
    id: 9,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image9
    }
  },
  {
    id: 10,
    data: {
      name: "Double Charge Floor Tile",
      size: "138*22",
      image: image10
    }
  },

 //Floor Tile --> Exterior & Parking
  {
    id: 11,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image11
    }
  },
  {
    id: 12,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image12
    }
  },
  {
    id: 13,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image1
    }
  },
  {
    id: 14,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image14
    }
  },
  {
    id: 15,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image15
    }
  },
  {
    id: 16,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image16
    }
  },
  {
    id: 17,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image17
    }
  },
  {
    id: 18,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image18
    }
  },
  {
    id: 19,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image19
    }
  },
  {
    id: 20,
    data: {
      name: "Exterior/Parking Tiles",
      size: "138*22",
      image: image20
    }
  },

  //Floor Tile --> Exterior & Parking

  {
    id: 21,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image21
    }
  },
  {
    id: 22,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image22
    }
  },
  {
    id: 23,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image23
    }
  },
  {
    id: 24,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image24
    }
  },
  {
    id: 25,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image25
    }
  },
  {
    id: 26,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image26
    }
  },
  {
    id: 27,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image27
    }
  },
  {
    id: 28,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image28
    }
  },
  {
    id: 29,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image29
    }
  },
  {
    id: 30,
    data: {
      name: "Floor Tiles",
      size: "138*22",
      image: image30
    }
  },

  //Floor Tile --> Full Body Tiles
  {
    id: 31,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image31
    }
  },
  {
    id: 32,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image32
    }
  },
  {
    id: 33,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image33
    }
  },
  {
    id: 34,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image34
    }
  },
  {
    id: 35,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image35
    }
  },
  {
    id: 36,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image36
    }
  },
  {
    id: 37,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image1
    }
  },
  {
    id: 38,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image38
    }
  },
  {
    id: 39,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image39
    }
  },
  {
    id: 40,
    data: {
      name: "Full Body Tiles",
      size: "138*22",
      image: image40
    }
  },

];

const WallTiles = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 mx-auto my-10 grid grid-cols-1 md:grid-cols-4 gap-4" data-aos="fade-up">
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
