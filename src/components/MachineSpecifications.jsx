import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MachineSpecifications = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">SPECIFICATION & CAPACITY OF M/C</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">SPECIFICATIONS:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right">600 AMP TIG MACHINE</li>
            <li data-aos="fade-right" data-aos-delay="100">PROCESS: GTAW</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">WELDER QUALIFICATIONS AVAILABLE FOR:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li data-aos="fade-right" data-aos-delay="200">PNO1-PNO1</li>
            <li data-aos="fade-right" data-aos-delay="300">PNO8-PNO8</li>
            <li data-aos="fade-right" data-aos-delay="400">P NO 10H – P NO 10H</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">SPECIALITY:</h2>
          <p className="text-lg" data-aos="fade-right" data-aos-delay="500">
            IN PIPING & HEAVY FABRICATION( FOR RT, UT,PT JOINTS)
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Working area</h2>
          <p className="text-lg" data-aos="fade-right" data-aos-delay="600">7000 sq.ft</p>
        </div>
      </div>
    </div>
  );
}

export default MachineSpecifications;
