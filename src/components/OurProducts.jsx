import { useEffect, useRef } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import right from '../assets/right.png';
import left from '../assets/left.png';
import image1 from '../assets/Images/image1.jpg'; 
import image2 from '../assets/newaddedimage.jpg'
const imageArray = [
  {
    title: "BAREL / CAN MANUFACTURING SIZE : 12 TO 48 MATERIAL : SA 516 GR 70, A106 GR B, A333 GR 6, SS316L, DUPLEX, SUPER DUPLEX",
    img: 'https://ibb.co/3vnjyK4.png'
  },
  {
    title: 'DISTRUBUTER CASING / DISCHAGE HEAD MATERIAL : SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.',
    img: 'https://i.ibb.co/fkR4yYg/SWARAJ3.png'
  },
  {
    title: 'MOTOR STOOL.MATERIAL : SA516 GR 70, IS 2062 E 250',
    img: 'https://i.ibb.co/10bD6Tn/SWARAJ5.jpg'
  },
  {
    title: 'MOTOR STOOL. MATERIAL : SA516 GR 70, IS 2062 E 250',
    img: 'https://i.ibb.co/KrrCkW8/SWARAJ6.jpg'
  },
  {
    title: 'ECCENTIRC MUNTING PLATETHICKNESS RANGE : 56MM TO 110MM MATERIAL : SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.',
    img: 'https://i.ibb.co/h1JMZxW/SWARAJ4.jpg'
  },
  {
    title: ' • MOUNTING PLATE• THICKNESS RANGE : 56MM TO 110MM• MATERIAL : SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.',
    img: 'https://i.ibb.co/djvLZtr/SWARAJ8.jpg'
  },
  {
    title: 'MOUNTING PLATE THICKNESS RANGE : 56MM TO 110MM MATERIAL : SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.',
    img: 'https://i.ibb.co/1d7pFkq/SWARAJ7.png'
  },
  {
    title: 'MOUNTING PLATE THICKNESS RANGE : 56MM TO 110MM MATERIAL : SA 516 GR 70, SS 316L, DUPLEX, SUPER DUPLEX.',
    img: image1
  }
];

const OurProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="our-products w-full px-4 py-8">
      <div className="bg-gray-800 p-8 mb-2">
        <p
          className="text-white font-bold text-2xl font-sans"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Products                                                                                          
        </p>
        <p
          className="text-gray-300 mt-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Designed for tough industrial environments, our components are made from high-quality SA 516 GR 70 and IS 2062 E 250A steel. They offer exceptional durability, corrosion resistance, and the ability to withstand extreme pressures and temperatures. Rigorous quality checks, including heat treatment and advanced welding, ensure reliable and long-lasting performance. Ideal for critical applications, our products deliver industry-leading efficiency and reliability.
        </p>

        <div className="flex justify-end gap-2 mt-4">
          <img
            src={left}
            className="border border-gray-400 w-10 h-10 p-3 hover:border-white cursor-pointer"
            onClick={handlePrev}
          />
          <img
            src={right}
            className="border border-gray-400 w-10 h-10 p-3 hover:border-white cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="slider-container" data-aos="fade-down" data-aos-delay="300">
        <Slider ref={sliderRef} {...settings}>
          {imageArray.map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.img} alt={item.title} className="w-full h-72 object-absolute" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
                {/* <p className="text-white text-sm text-center">{item.title}</p> */}
              </div>
            </div>
          ))}
        </Slider>
        <a href="/products" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
         View More</a>
      </div>
    </div>
  );
}

export default OurProducts;
