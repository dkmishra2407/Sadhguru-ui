import React from 'react';

const DownloadCatalogue = () => {
  return (
    <section className="bg-black text-white pt-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div>
          <p className="text-sm tracking-wide">EXPLORE OUR WIDE RANGE OF CATALOGUE</p>
          <h2 className="text-5xl font-bold mt-2">Download Catalogue</h2>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0">
          <p className="mb-4">If you'd like to view our latest product catalogue you can download it here.</p>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-300 transition">
            DOWNLOAD CATALOGUE
          </button>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="bg-gray-100 text-gray-600 py-16 mt-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold">Designer Wall Tiles India for Bathroom & Kitchen</h3>
          <p className="mt-4 text-lg leading-relaxed">
            Our mesmerizing range of designer bathroom & kitchen floor and wall tiles have a luxurious appeal and seem to have been struck with afflatus. The premier collection is a showstopper and has the ability to make any dimension look grand. Every single piece of tile from our range of designer bathroom & kitchen floor and wall tiles has a compelling aura. The matt finish tiles for kitchen from our collection fit perfectly with modern day designs while our rustic kitchen wall tiles blend easily with every surrounding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCatalogue;
