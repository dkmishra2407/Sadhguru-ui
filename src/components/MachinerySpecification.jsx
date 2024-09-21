import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MachinerySpecification = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8   mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">MACHINERY SPECIFICATION (CAPACITY)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">LATHE SPECIFICATIONS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">1)</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li data-aos="fade-right">Bed Size: 12 Feet</li>
                <li data-aos="fade-right" data-aos-delay="100">Spindle Bore: 125</li>
                <li data-aos="fade-right" data-aos-delay="200">Centre Height: 22”</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">2)</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li data-aos="fade-right" data-aos-delay="300">Bed Size: 9 Feet</li>
                <li data-aos="fade-right" data-aos-delay="400">Spindle Bore: 100</li>
                <li data-aos="fade-right" data-aos-delay="500">Centre Height: 12”</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">3)</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li data-aos="fade-right" data-aos-delay="300">Bed Size: 12 Feet</li>
                <li data-aos="fade-right" data-aos-delay="400">Spindle Bore: 105</li>
                <li data-aos="fade-right" data-aos-delay="500">Centre Height: 18”</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* <h2 className="text-xl font-semibold mb-2">OPERATIONS TO BE PERFORMED</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right">Facing</li>
            <li data-aos="fade-right" data-aos-delay="100">Turning</li>
            <li data-aos="fade-right" data-aos-delay="200">Step Turning</li>
            <li data-aos="fade-right" data-aos-delay="300">Chamfering/Beveling</li>
            <li data-aos="fade-right" data-aos-delay="400">Grooving</li>
            <li data-aos="fade-right" data-aos-delay="500">Knurling</li>
            <li data-aos="fade-right" data-aos-delay="600">Taper Turning</li>
            <li data-aos="fade-right" data-aos-delay="700">Thread Cutting</li>
            <li data-aos="fade-right" data-aos-delay="800">Drilling</li>
            <li data-aos="fade-right" data-aos-delay="900">Boring</li>
            <li data-aos="fade-right" data-aos-delay="1000">Tapping</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default MachinerySpecification;
