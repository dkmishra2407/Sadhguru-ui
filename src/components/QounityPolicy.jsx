import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const QualityPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8   mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">QUALITY POLICY</h1>
      <p className="mb-4 text-lg">
        We <span className="font-semibold">SWARAJ ENGINEERING</span> are committed to:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li data-aos="fade-right">Quality Products & Services.</li>
        <li data-aos="fade-right" data-aos-delay="100">Cost effective Solutions.</li>
        <li data-aos="fade-right" data-aos-delay="200">Timely Delivery.</li>
        <li data-aos="fade-right" data-aos-delay="300">Adoption of New Technologies.</li>
        <li data-aos="fade-right" data-aos-delay="400">Skill/ Competence improvement of Employees.</li>
      </ul>
      <p className="mt-6 text-lg">
        We assure to meet all statutory & regulatory requirements relating to Safety, Health & Eco-friendly environment with high standard of Corporate Governance.
      </p>
    </div>
  );
}

export default QualityPolicy;
