import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MachineryList = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8  mx-auto my-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">List Of Machinery</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Machine</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">GTAW MACHINE</td>
              <td className="border px-4 py-2">600 / 400 AMP</td>
              <td className="border px-4 py-2">03 / 02</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">LATHE MACHINE</td>
              <td className="border px-4 py-2">CONVENTIONAL</td>
              <td className="border px-4 py-2">02</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">M1TR MACHINE</td>
              <td className="border px-4 py-2">SEMIAUTOMATIC</td>
              <td className="border px-4 py-2">01</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">TAPPING MACHINE</td>
              <td className="border px-4 py-2">SEMIAUTOMATIC</td>
              <td className="border px-4 py-2">01</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">RADIAL DRILLING MACHINE</td>
              <td className="border px-4 py-2">MANUAL</td>
              <td className="border px-4 py-2">01</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">FLEXIBLE SHAFT GRINDER</td>
              <td className="border px-4 py-2">MANUAL</td>
              <td className="border px-4 py-2">01</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BAND SAW MACHINE</td>
              <td className="border px-4 py-2">-</td>
              <td className="border px-4 py-2">01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MachineryList;
