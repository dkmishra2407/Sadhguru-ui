import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const WorkingExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8   mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">WORKING EXPERIENCE & MATERIAL GRADES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Working Experience In:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right">COLUMN PIPES FABRICATION</li>
            <li data-aos="fade-right" data-aos-delay="100">BARRELS, DISTRIBUTOR CASINGS</li>
            <li data-aos="fade-right" data-aos-delay="200">VESSELS, REACTORS & STORAGE TANKS</li>
            <li data-aos="fade-right" data-aos-delay="300">PIPING FABRICATION</li>
            <li data-aos="fade-right" data-aos-delay="400">MOUNTING PLATES MACHINING</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Material Grades:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right" data-aos-delay="500">IS2062/SA516GR70</li>
            <li data-aos="fade-right" data-aos-delay="600">A105/A350GRLF2</li>
            <li data-aos="fade-right" data-aos-delay="700">A106GRB/A333GR6</li>
            <li data-aos="fade-right" data-aos-delay="800">SS304L/316L</li>
            <li data-aos="fade-right" data-aos-delay="900">DUPLEX2205</li>
            <li data-aos="fade-right" data-aos-delay="1000">SUPERDUPLEX32760</li>
            <li data-aos="fade-right" data-aos-delay="1100">INCONEL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkingExperience;
