import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductContainer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 mx-auto " data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600"> Wall Tiles: Elevate Your Interiors with Stylish Wall Tiles</h1>
            <p className="text-lg mb-4">
                Transform Your Space with High-Quality Floor Tiles. At Sadhguru Tiles & Marbles, we specialize in providing premium-quality floor tiles that blend durability, style, and functionality. Whether you’re looking to create a modern living room, a sophisticated office space, or a durable kitchen floor, our diverse range of floor tiles caters to all needs.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-blue-600">Types of Floor Tiles:</h2>
            
            <h3 className="text-xl font-semibold mb-2">1. Floor Ceramic Tiles</h3>
            <p className="text-lg mb-4">
                Ceramic floor tiles are known for their versatility, affordability, and ease of maintenance. Available in numerous designs, colors, and finishes, they offer a stylish yet cost-effective solution for flooring in residential and commercial spaces. Their low water absorption and resistance to stains make them a popular choice for kitchens and hallways.
            </p>

            <h3 className="text-xl font-semibold mb-2">2. Full Body Vitrified Tiles</h3>
            <p className="text-lg mb-4">
                Full body vitrified tiles are a top choice for high-traffic areas due to their uniform structure and composition. These tiles are resistant to scratches, heavy impact, and wear, making them suitable for spaces like shopping malls, industrial zones, and commercial lobbies. Their consistent color throughout ensures they retain their appearance even after years of use.
            </p>

            <h3 className="text-xl font-semibold mb-2">3. Greselon Tiles</h3>
            <p className="text-lg mb-4">
                Greselon tiles are specifically designed for modern interiors, offering a sophisticated look and high resistance to moisture and stains. These tiles provide a polished, elegant finish that suits upscale residential and corporate environments.
            </p>

            <h3 className="text-xl font-semibold mb-2">4. Planks</h3>
            <p className="text-lg mb-4">
                Plank tiles replicate the natural beauty of wooden floors while offering the durability and low maintenance of tile. Perfect for living rooms, bedrooms, and even office spaces, plank tiles create a warm, inviting atmosphere. Their water-resistant properties make them an ideal choice for areas prone to moisture, such as basements and laundry rooms.
            </p>

            <h3 className="text-xl font-semibold mb-2">5. Double Charge Tiles</h3>
            <p className="text-lg mb-4">
                Double charge tiles are created using a two-layer production process, making them thicker and more durable. They offer enhanced longevity and can withstand heavy foot traffic. This makes them an excellent option for places like airports, hotels, and busy public spaces.
            </p>

            <h3 className="text-xl font-semibold mb-2">6. Exterior Parking Tiles</h3>
            <p className="text-lg mb-4">
                Designed for outdoor use, exterior parking tiles are built to withstand harsh weather conditions and the heavy loads of vehicles. Their slip-resistant surface and robustness make them ideal for driveways, parking lots, and patios.
            </p>

            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Floor Tiles: Durable & Elegant Flooring Solutions</h1>
            <p className="text-lg mb-4">
                Transform Your Space with High-Quality Floor Tiles. At Sadhguru Tiles & Marbles, we specialize in providing premium-quality floor tiles that blend durability, style, and functionality. Whether you’re looking to create a modern living room, a sophisticated office space, or a durable kitchen floor, our diverse range of floor tiles caters to all needs.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-blue-600">Types of Floor Tiles:</h2>
            
            <h3 className="text-xl font-semibold mb-2">1. Floor Ceramic Tiles</h3>
            <p className="text-lg mb-4">
                Ceramic floor tiles are known for their versatility, affordability, and ease of maintenance. Available in numerous designs, colors, and finishes, they offer a stylish yet cost-effective solution for flooring in residential and commercial spaces. Their low water absorption and resistance to stains make them a popular choice for kitchens and hallways.
            </p>

            <h3 className="text-xl font-semibold mb-2">2. Full Body Vitrified Tiles</h3>
            <p className="text-lg mb-4">
                Full body vitrified tiles are a top choice for high-traffic areas due to their uniform structure and composition. These tiles are resistant to scratches, heavy impact, and wear, making them suitable for spaces like shopping malls, industrial zones, and commercial lobbies. Their consistent color throughout ensures they retain their appearance even after years of use.
            </p>

            <h3 className="text-xl font-semibold mb-2">3. Greselon Tiles</h3>
            <p className="text-lg mb-4">
                Greselon tiles are specifically designed for modern interiors, offering a sophisticated look and high resistance to moisture and stains. These tiles provide a polished, elegant finish that suits upscale residential and corporate environments.
            </p>

            <h3 className="text-xl font-semibold mb-2">4. Planks</h3>
            <p className="text-lg mb-4">
                Plank tiles replicate the natural beauty of wooden floors while offering the durability and low maintenance of tile. Perfect for living rooms, bedrooms, and even office spaces, plank tiles create a warm, inviting atmosphere. Their water-resistant properties make them an ideal choice for areas prone to moisture, such as basements and laundry rooms.
            </p>

            <h3 className="text-xl font-semibold mb-2">5. Double Charge Tiles</h3>
            <p className="text-lg mb-4">
                Double charge tiles are created using a two-layer production process, making them thicker and more durable. They offer enhanced longevity and can withstand heavy foot traffic. This makes them an excellent option for places like airports, hotels, and busy public spaces.
            </p>

            <h3 className="text-xl font-semibold mb-2">6. Exterior Parking Tiles</h3>
            <p className="text-lg mb-4">
                Designed for outdoor use, exterior parking tiles are built to withstand harsh weather conditions and the heavy loads of vehicles. Their slip-resistant surface and robustness make them ideal for driveways, parking lots, and patios.
            </p> 
    </div>
  );
};

export default ProductContainer;