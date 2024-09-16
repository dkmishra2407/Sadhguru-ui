import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MeasuringInstruments = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8   mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">MEASURING INSTRUMENTS FACILITY</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">SR NO</th>
              <th className="px-4 py-2">INSTRUMENT DESCRIPTION</th>
              <th className="px-4 py-2">WHETHER CALIBRATED OR NOT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Inside Micrometer– 1000 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Outside Micrometer – 300 -500 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">Digital Vernier Caliper – 300 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">Step Bore Gauge – 0-150 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">Mechanical Vernier Caliper – 600</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">Depth Micrometer – 100 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">7</td>
              <td className="border px-4 py-2">Mechanical Vernier Caliper – 1000 mm 2000 mm</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">8</td>
              <td className="border px-4 py-2">Dial Gauge</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">9</td>
              <td className="border px-4 py-2">Pressure gauges</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MeasuringInstruments;
