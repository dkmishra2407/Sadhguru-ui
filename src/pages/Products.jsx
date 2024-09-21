import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import image1 from '../assets/Images/image1.jpg'; 
import image2 from '../assets/Images/image2.jpg';
import image3 from '../assets/Images/image3.jpg';
import image5 from '../assets/Images/image5.png';
import image6 from '../assets/Images/image6.png';
import image7 from '../assets/Images/image7.png';
import image8 from '../assets/Images/image8.png';
import image4 from '../assets/Images/image4.png';
import image9 from '../assets/Images/image9.jpg';
import image10 from '../assets/Images/image10.png';
import image101 from '../assets/newadd1.jpg';
const productData = [
  { id: 1, name: 'DISTRUBUTER CASING / DISCHAGE HEAD', material: 'SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.', image: image1 },
  { id: 2, name: 'BAREL / CAN', size: '12” TO 48”', material: 'SA 516 GR 70, A106 GR B, A333 GR 6, SS316L, DUPLEX, SUPER DUPLEX', image: image101 },
  { id: 3, name: 'MOUNTING PLATE', thickness: '56MM TO 110MM', material: 'SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.', image: image3 },
  { id: 5, name: 'MOTOR STOOL.', material: 'SA516 GR 70, IS 2062 E 250', image: image5 },
  { id: 6, name: 'MOTOR STOOL.', material: 'SA516 GR 70, IS 2062 E 250', image: image6 },
  { id: 7, name: 'MOUNTING PLATE', thickness: '56MM TO 110MM', material: 'SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.', image: image7 },
  { id: 8, name: 'MOUNTING PLATE', thickness: '56MM TO 110MM', material: 'SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.', image: image8 },
  { id: 4, name: 'DELIVERY PIPE', size: '2” TO 8”', material: 'A106 GR.B, A 333 GR.6, SS316L, DUPLEX, SUPER DUPLEX, INCOLLOY ALLOY.', image: image4 },
  { id: 10, name: 'COLUMN PIPE', size: '3” TO 14”', material: 'A106 GR.B, A 333 GR.6, SS316L, DUPLEX, SUPER DUPLEX, INCOLLOY ALLOY.', image: image10 },
  { id: 9, name: 'ECCENTRIC MOUNTING PLATE', thickness: '56MM TO 110MM', material: 'SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.', image: image9 },
];
// Aluminium fabrication and machining
import image11 from '../assets/Aluminium fabrication and machining/91e4c91e-c117-4e2d-934e-c9b3f3be8393.jpeg';
import image12 from '../assets/Aluminium fabrication and machining/702474a0-479b-4f57-8ddd-a84a20b2f863.jpeg';
import image13 from '../assets/Aluminium fabrication and machining/b0da1143-6938-4486-88f9-2ef2ed4f951d.jpeg';
import image14 from '../assets/Aluminium fabrication and machining/ca8015df-3f64-4f68-a509-ac8dbffcff38.jpeg';

const productData1 = [
  { id: 1, image: image11 },
  { id: 2, image: image12 },
  { id: 3, image: image13 },
  { id: 4, image: image14 }
];

// CAN, BARREL, MOUNTING PLATE, COLUMN PIPE
import image15 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/5a623b95-cf5d-4ed6-bd88-77da73056fbb.jpeg';
import image16 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/8eeb6c18-9b69-483c-8a05-edd44ee19de6.jpeg';
import image17 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/newadded2.jpg';
import image18 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/90c0772f-a192-415a-8662-d40918f8f961.jpeg';
import image19 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/693b0d8b-3689-4c70-ab41-c4f03f57988a.jpeg';
import image20 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/newadd15.jpg';
import image21 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/b7dd9cde-2dc2-4de0-8592-cc2d7915f9b1.jpeg';
import image22 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/c5c1946a-5c54-4830-ac86-43dfd336ea60.jpeg';
import image23 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/dadd9450-16fe-4f03-984d-4a2d5b56a55f.jpeg';
import image24 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/bef07e4b-17eb-4f14-9e04-ec6592f3f81f.jpeg';
import image105 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/newadd16.jpg';
import image106 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/newadd17.jpg';
import image107 from '../assets/CAN, BARREL, MOUNTING PLATE, COLUMN PIPE/newadd18.jpg';
const productData2 = [
  { id: 1, image: image15 },
  { id: 2, image: image16 },
  { id: 3, image: image17 },
  { id: 4, image: image18 },
  { id: 5, image: image19 },
  { id: 6, image: image20 },
  { id: 7, image: image21 },
  { id: 8, image: image22 },
  { id: 9, image: image23 },
  { id: 10, image: image24 },
  { id: 11, image: image105 },
  { id: 12, image: image106 },
  { id: 12, image: image107 },
];

// Challenging work
import image25 from '../assets/Challenging work/newadd3.jpg';
import image26 from '../assets/Challenging work/newadd4.jpg';
import image27 from '../assets/Challenging work/newadd5.jpg';
import image28 from '../assets/Challenging work/newadd7.jpg';

const productData3 = [
  { id: 1, image: image25 },
  { id: 2, image: image26 },
  { id: 3, image: image27 },
  { id: 4, image: image28 }
];

// Column Pipes
import image29 from '../assets/Column Pipes/0c392753-2d65-42c8-8ae4-655a39940ffd.jpeg';
import image30 from '../assets/Column Pipes/4acb5716-1093-4ec6-916f-f01b21b0564a.jpeg';
import image31 from '../assets/Column Pipes/0454e145-00e6-419a-899c-86d28c9e24ec.jpeg';
import image32 from '../assets/Column Pipes/746ce6af-a12a-4a4e-a0a0-c3066abc8a81.jpeg';
import image33 from '../assets/Column Pipes/c0c3efb5-0d78-41ff-9e90-9d7ceb69b972.jpeg';
import image34 from '../assets/Column Pipes/c74b81a5-9ca0-4381-8997-f15baee94cd4.jpeg';
import image35 from '../assets/Column Pipes/cb2ba632-081f-4011-8ca0-207d6b9ca1e8.jpeg';
import image36 from '../assets/Column Pipes/c74b81a5-9ca0-4381-8997-f15baee94cd4.jpeg';

const productData4 = [
  { id: 1, image: image29 },
  { id: 2, image: image30 },
  { id: 3, image: image31 },
  { id: 4, image: image32 },
  { id: 5, image: image33 },
  { id: 6, image: image34 },
  { id: 7, image: image35 },
  { id: 8, image: image36 }
];

// D Casing_Discharge Head
import image37 from '../assets/D casing_Discharge Head/8cbcd6b1-4244-4f15-822f-43b1d99f4c06.jpeg';
import image38 from '../assets/D casing_Discharge Head/465d75ea-5f17-40d4-9024-d2167f06ec58.jpeg';
import image39 from '../assets/D casing_Discharge Head/f2df57fa-e086-44fe-9f09-9516cbf0ed20.jpeg';

const productData5 = [
  { id: 1, image: image37 },
  { id: 2, image: image38 },
  { id: 3, image: image39 }
];

// Distance Piece
import image40 from '../assets/DISTANC PEICE/7cfd30f0-e462-439f-a4e6-011387200405.jpeg';

const productData6 = [
  { id: 1, image: image40 }
];

// Driver Stand
import image41 from '../assets/DRIVER STAND/newadd8.jpg';
import image42 from '../assets/DRIVER STAND/9323b2a0-604e-4b1f-b9ac-4fb3936b733c.jpeg';

const productData7 = [
  { id: 1, image: image41 },
  { id: 2, image: image42 }
];

// Fabrication
import image43 from '../assets/Fabrication/6c72d7bd-1fc7-4ce5-9a39-440584cec6ea.jpeg';
import image44 from '../assets/Fabrication/6ddc9915-d1e4-495b-8c5d-ee8beb621260.jpeg';
import image45 from '../assets/Fabrication/abe9ab22-1895-4a21-aa00-7ade324d5a64.jpeg';
import image46 from '../assets/Fabrication/b6748c5c-eed0-4fd4-b946-fbe39f442257.jpeg';
import image47 from '../assets/Fabrication/c026ea23-a9f2-4394-8bd4-d03704312fcb.jpeg';
import image48 from '../assets/Fabrication/cb83cff1-c661-48a9-b6b7-6fdfd1ae2e38.jpeg';
import image49 from '../assets/Fabrication/f692c55c-3bfc-4955-a23c-23dde584f480.jpeg';

const productData8 = [
  { id: 1, image: image43 },
  { id: 2, image: image44 },
  { id: 3, image: image45 },
  { id: 4, image: image46 },
  { id: 5, image: image47 },
  { id: 6, image: image48 },
  { id: 7, image: image49 }
];
//MOTOR STOOL
import image50 from '../assets/MOTOR STOOL/8a56ddb0-83bf-4d0f-b2a2-a18645883246.jpeg';
import image51 from '../assets/MOTOR STOOL/9953a87c-8ac2-4b81-82db-442ccfcd018c.jpeg';

// PIPING
import image52 from '../assets/PIPING/010cdc94-02e5-46e1-bf47-aefae5dc993e.jpeg';
import image53 from '../assets/PIPING/newadd9.jpg';
import image54 from '../assets/PIPING/562d8310-44bd-4ed9-8f0a-4b160a540140.jpeg';
import image55 from '../assets/PIPING/802e44c0-20ad-46d3-a75b-3f2fb4e6e043.jpeg';
import image56 from '../assets/PIPING/87491884-8343-4b24-8b7b-06c9c747e052.jpeg';
import image57 from '../assets/PIPING/b9bd6f3f-dd23-4f91-82f3-921a8e49e1fe.jpeg';
import image58 from '../assets/PIPING/cd01685e-ca14-40c0-8535-0e2932327fac.jpeg';
import image59 from '../assets/PIPING/b20af178-4cb0-47be-8fd3-031eb9e48d2f.jpeg';
import image60 from '../assets/PIPING/eee71236-8e07-48d7-88ca-c7210a4678a2.jpeg';

// Piping Fabrication
import image61 from '../assets/Piping Facbrication/2d9045ad-c606-421c-8328-409a346cc8e4.jpeg';
import image62 from '../assets/Piping Facbrication/5b2b8e14-ff0a-495d-9633-42c4bb015673.jpeg';
import image63 from '../assets/Piping Facbrication/593302bb-a69a-4222-bcdf-fbe662ae3e45.jpeg';
import image64 from '../assets/Piping Facbrication/cff45e2b-e638-40b9-995e-e6f43a319655.jpeg';
import image65 from '../assets/Piping Facbrication/f1f859ba-aaec-4cc2-96d6-7990350adb8e.jpeg';
import image66 from '../assets/Piping Facbrication/e082fceb-eb79-49a2-bbee-62b917624e15.jpeg';

// Slider
import image67 from '../assets/Slider/banner_img1.jpg';
import image68 from '../assets/Slider/banner_img2.jpg';
import image69 from '../assets/Slider/banner_img3.jpg';

// SHAFT STORAGE CONTAINER
import image70 from '../assets/SHAFT STORAGE CONTAINER/newadd11.jpg';
import image102 from '../assets/SHAFT STORAGE CONTAINER/newadd12.jpg'
import image103 from '../assets/SHAFT STORAGE CONTAINER/newadd13.jpg' 
// Vessel
import image71 from '../assets/Vessel/cec295ab-cc43-4ffe-ab69-1d7ad66be55d.jpeg';
import image72 from '../assets/Vessel/cb9afa28-cf9a-4223-abd6-b8f2ab277e77.jpeg';
import image73 from '../assets/Vessel/920d2876-04a1-4937-990c-4180eaddac3b.jpeg';
import image74 from '../assets/Vessel/1a861e32-46ef-4088-a1c8-b3e43b64fe3c.jpeg';

// Venturi
import image75 from '../assets/Venturi/7c83e994-2374-4201-8049-73c982936d6f.jpeg';
import image76 from '../assets/Venturi/09ddc2a9-807b-4362-a7a3-da47ecbadbca.jpeg';
import image77 from '../assets/Venturi/17ee7571-0431-4e06-ace8-e77fbed5ed8e.jpeg';
import image78 from '../assets/Venturi/d3a03026-b540-4377-ba30-5ef59fb76709.jpeg';
import image79 from '../assets/Venturi/ff724d01-6326-4a38-8853-c94d0b423191.jpeg';
import image80 from '../assets/Venturi/d03dcd0b-c3b3-4399-9873-6eca7bc54417.jpeg';
import image81 from '../assets/Venturi/e927563e-37e0-4f89-b655-79ca453dda35.jpeg';

//TURNINIG AND DRILLING
import image82 from '../assets/TURNINIG AND DRILLING/0be9e4cd-3c6c-4ce2-9d27-113f7a54fb52.jpeg';
import image83 from '../assets/TURNINIG AND DRILLING/0f9a8a8a-5339-4f31-9581-4f4194f4edf5.jpeg';
import image84 from '../assets/TURNINIG AND DRILLING/4ac1df29-043f-4bf0-8cc7-52ca98bf2386.jpeg';
import image85 from '../assets/TURNINIG AND DRILLING/8d87ad57-9595-4ad3-b25a-3cb2508d517e.jpeg';
import image86 from '../assets/TURNINIG AND DRILLING/52ffd635-b20b-41dd-8055-1b26d283c88f.jpeg';
import image87 from '../assets/TURNINIG AND DRILLING/b0bc33c7-3f5d-465d-805f-2edd654c238b.jpeg';
import image88 from '../assets/TURNINIG AND DRILLING/9581a9d0-bf5c-4e43-9c11-e0d07ac63a42.jpeg';
import image89 from '../assets/TURNINIG AND DRILLING/9147f190-31cb-4426-b8f1-597804d95a2e.jpeg';
import image90 from '../assets/TURNINIG AND DRILLING/5547f1fe-5c86-4f06-9568-28060b26c9d8.jpeg';
import image91 from '../assets/TURNINIG AND DRILLING/12b38ee9-094e-48d7-b641-fba5e9684ff6.jpeg';

import image92 from '../assets/SS MIXING VESSEL/3cbf26f9-971b-4aca-8f1c-898b9f0d1c7c.jpeg';
import image111 from '../assets/PMI/newimage1.jpg';
import image112 from '../assets/PMI/newimage2.jpg';
import image113 from '../assets/PMI/newimage3.jpg';
import image121 from '../assets/lpi/img1.jpg'

import image131 from '../assets/HYDROPNEUMATIC INHOUSE FACILITY/i1.jpg'
import image132 from '../assets/HYDROPNEUMATIC INHOUSE FACILITY/i1.jpg'

import image141 from '../assets/MPI TESTING/IMG-20240920-WA0032.jpg'
import image142 from '../assets/MPI TESTING/IMG-20240920-WA0033.jpg'
import image143 from '../assets/MPI TESTING/IMG-20240920-WA0034.jpg'
import image144 from '../assets/MPI TESTING/IMG-20240920-WA0035.jpg'

const FinalData = [
  { id: 2, Heading: "Can, Barrel, Mounting Plate, Column Pipe", data: productData2 },
  { id: 3, Heading: "Challenging work", data: productData3 },
  { id: 4, Heading: "Column Pipes", data: productData4 },
  { id: 5, Heading: "Distributer Casing & Discharge Head", data: productData5 },
  { id: 6, Heading: "Distance Piece", data: productData6 },
  { id: 7, Heading: "Driver Stand", data: productData7 },
  // { id: 8, Heading: "Fabrication", data: productData8 },
  // {
  //   id: 9,
  //   Heading: "Motor Stool",
  //   data: [
  //     { id: 1, image: image50 },
  //     { id: 2, image: image51 },
  //   ],
  // },
  {
    id: 10,
    Heading: "Piping",
    data: [
      { id: 1, image: image52 },
      { id: 2, image: image53 },
      { id: 3, image: image54 },
      { id: 4, image: image55 },
      { id: 5, image: image56 },
      { id: 6, image: image57 },
      { id: 7, image: image58 },
      { id: 8, image: image59 },
      { id: 9, image: image60 },
    ],
  },
  // {
  //   id: 11,
  //   Heading: "Piping Fabrication",
  //   data: [
  //     { id: 1, image: image61 },
  //     { id: 2, image: image62 },
  //     { id: 3, image: image63 },
  //     { id: 4, image: image64 },
  //     { id: 5, image: image65 },
  //     { id: 6, image: image66 },
  //   ],
  // },
  {
    id: 12,
    Heading: "SS Mixing Vessle",
    data: [
      { id: 1, image: image92 },
    ],
  },
  {
    id: 13,
    Heading: "Shaft Storage Container",
    data: [
      { id: 1, image: image70 },
      { id: 2, image: image102 },
      { id: 3, image: image103 },
    ],
  },
  // {
  //   id: 16,
  //   Heading: "Turning And Drilling",
  //   data: [
  //     { id: 1, image: image82 },
  //     { id: 2, image: image83 },
  //     { id: 3, image: image84 },
  //     { id: 4, image: image85 },
  //     { id: 5, image: image86 },
  //     { id: 6, image: image87 },
  //     { id: 7, image: image88 },
  //     { id: 7, image: image89 },
  //     { id: 7, image: image90 },
  //     { id: 7, image: image91 },
  //   ],
  // },
  {
    id: 14,
    Heading: "Vessel",
    data: [
      { id: 1, image: image71 },
      { id: 2, image: image72 },
      { id: 3, image: image73 },
      { id: 4, image: image74 },
    ],
  },
  {
    id: 15,
    Heading: "Venturi",
    data: [
      { id: 1, image: image75 },
      { id: 2, image: image76 },
      { id: 3, image: image77 },
      { id: 4, image: image78 },
      { id: 5, image: image79 },
      { id: 6, image: image80 },
      { id: 7, image: image81 },
    ],
  },
  {
    id: 16,
    Heading: "PMI INSPECTION",
    data: [
      { id: 1, image: image111 },
      { id: 2, image: image112 },
      { id: 3, image: image113 },
      // { id: 4, image: image78 },
      // { id: 5, image: image79 },
      // { id: 6, image: image80 },
      // { id: 7, image: image81 },
    ],
  },
  {
    id: 16,
    Heading: "HYDRO/PNEUMATIC INHOUSE FACILITY",
    data: [
      { id: 1, image: image131 },
      { id: 2, image: image132 },
      // { id: 3, image: image113 },
      // { id: 4, image: image78 },
      // { id: 5, image: image79 },
      // { id: 6, image: image80 },
      // { id: 7, image: image81 },
    ],
  },
  {
    id: 17,
    Heading: "MPI TESTING",
    data: [
      { id: 1, image: image141 },
      { id: 2, image: image142 },
      { id: 3, image: image143 },
      { id: 4, image: image144 },
      // { id: 5, image: image79 },
      // { id: 6, image: image80 },
      // { id: 7, image: image81 },
    ],
  },
  {
    id: 18,
    Heading: "LPT INSPECTION",
    data: [
      { id: 1, image: image121 },
      // { id: 2, image: image112 },
      // { id: 3, image: image113 },
      // { id: 4, image: image78 },
      // { id: 5, image: image79 },
      // { id: 6, image: image80 },
      // { id: 7, image: image81 },
    ],
  },
];


const Products = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
      {productData.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={product.id * 100} 
        >
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{objectFit:'contain'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-sm font-bold bg-black bg-opacity-50 rounded-lg px-2 py-1">
                {product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}
              </p>
            </div>
          </div>
          <div className="p-4">
            {product.size && (
              <p className="text-sm mt-2 text-gray-700">
                <span className="font-semibold">MANUFACTURING SIZE:</span> {product.size}
              </p>
            )}
            {product.thickness && (
              <p className="text-sm mt-2 text-gray-700">
                <span className="font-semibold">THICKNESS RANGE:</span> {product.thickness}
              </p>
            )}
            {product.material && (
              <p className="text-sm mt-2 text-gray-700">
                <span className="font-semibold">MATERIAL:</span> {product.material}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

    <h1 className="text-3xl font-bold mb-8 mt-8 text-center text-blue-600">SEE OUR MORE PRODUCTS...</h1>

    {/* Looping through FinalData */}
    {FinalData.map((product) => (
      <div key={product.id}>
        <h2 className="text-3xl font-bold mb-8 mt-6 text-center text-blue-1000 mb-4 text-4xl tracking-tight font-extrabold text-center">{product.Heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.data.map((product1) => (
            <div
              key={product1.id} // Use product1.id to avoid key duplication
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={product1.id * 100} 
            >
              <div className="relative group">
                <img
                  src={product1.image}
                  alt="Product"
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  {/* Uncomment this section if you want to display product names */}
                  {/* <p className="text-white text-sm font-bold bg-black bg-opacity-50 rounded-lg px-2 py-1">
                    {product1.name ? (product1.name.length > 20 ? product1.name.slice(0, 20) + '...' : product1.name) : ''}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};

export default Products;
