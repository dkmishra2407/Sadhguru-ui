import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MachinerySpecificationM1TR = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8   mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">MACHINERY SPECIFICATION M1TR (CAPACITY)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">MACHINE SPECIFICATIONS</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right">Bed Size: 1390 X 250mm</li>
            <li data-aos="fade-right" data-aos-delay="100">X–1390mm</li>
            <li data-aos="fade-right" data-aos-delay="200">Y–450mm</li>
            <li data-aos="fade-right" data-aos-delay="300">Z –400mm</li>
            <li data-aos="fade-right" data-aos-delay="400">With Esson DRO</li>
            <li data-aos="fade-right" data-aos-delay="500">Machine Accuracy: 0.02mm</li>
          </ul>
        </div>
        <div>
          {/* <h2 className="text-xl font-semibold mb-2">OPERATIONS TO BE PERFORMED</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right">Drilling</li>
            <li data-aos="fade-right" data-aos-delay="100">Reaming</li>
            <li data-aos="fade-right" data-aos-delay="200">Boring</li>
            <li data-aos="fade-right" data-aos-delay="300">Tapping</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default MachinerySpecificationM1TR;
