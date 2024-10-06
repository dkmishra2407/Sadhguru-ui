import React from 'react';

const TileComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 space-y-4 lg:space-y-0 lg:space-x-8">
      
      <div className="lg:w-2/3 flex-col justify-center items-center">
      {/* Left Side - Image Banner */}
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Explore Our Tiles
        </h2>
        {/* <p className="text-gray-600">
          Kajaria's range of luxurious floor tiles integrates technological
          expertise with exquisite designs. Each tile is crafted using
          ultra-modern technology to ensure high quality.
        </p>  */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYD4am559JTnJWoWR4Ja9hrv3oWtG8QBrQqbOd14PTTA7DAHWAS2fHaooGw&s' // replace with actual image path
            alt="Wall Tile 1"
            className="w-full h-48 object-cover"
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vmkQrR2CjqF5Vb77t4dEcFtJXsee06b1QhoyB4I8kfkXU9PQ372DEx_fWQ&s'
            alt="Wall Tile 2"
            className="w-full h-48 object-cover"
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXr8DZrSftUim_R12HaUl_p7vEoJ0YzFYEpgp485pD_5NpyenPMzcOTAPsg&s'
            alt="Wall Tile 3"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>

      {/* Right Side - Tile Categories */}
      <div className="lg:w-1/3 flex flex-col space-y-4">
        {/* Bathroom Wall Tiles */}
        <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
          <div className="text-3xl">🛁</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Bathroom Wall Tiles</h3>
            <a href="#" className="text-blue-500">Explore Now</a>
          </div>
        </div>

        {/* Kitchen Wall Tiles */}
        <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
          <div className="text-3xl">🍳</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Kitchen Wall Tiles</h3>
            <a href="#" className="text-blue-500">Explore Now</a>
          </div>
        </div>

        {/* Living Room Wall Tiles */}
        <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
          <div className="text-3xl">🛋️</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Living Room Wall Tiles</h3>
            <a href="#" className="text-blue-500">Explore Now</a>
          </div>
        </div>

        {/* Outdoor Wall Tiles */}
        <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
          <div className="text-3xl">🏡</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Outdoor Wall Tiles</h3>
            <a href="#" className="text-blue-500">Explore Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileComponent;
