import React from 'react'
import image101 from '../assets/KEPL-1-CmgRZD4B.png';
import image102 from '../assets/KIRLFER.NS-Citvmxt3.png';
import image103 from '../assets/KSB.NS_BIG-6yZiuyfY.png';
import image104 from '../assets/logo3-BuAnCmOF.png';

const OurClients = () => {
  return (
    <div className="our-clients bg-gray-100 py-10">
            <h2 className="text-center text-3xl font-bold mb-6">Our Clients</h2>
            <div className="grid grid-cols-4 gap-4 justify-items-center max-w-full mx-auto">
                <div className="client-logo flex flex-col items-center">
                    <img
                        src={image101}
                        alt="Client 1"
                        className="h-24 w-24 object-contain mb-4"
                    />
                </div>
                <div className="client-logo flex flex-col items-center">
                    <img
                        src={image102}
                        alt="Client 2"
                        className="h-24 w-24 object-contain mb-4"
                    />
                </div>
                <div className="client-logo flex flex-col items-center">
                    <img
                        src={image103}
                        alt="Client 3"
                        className="h-24 w-24 object-contain mb-4"
                    />
                </div>
                <div className="client-logo flex flex-col items-center">
                    <img
                        src={image104}
                        alt="Client 4"
                        className="h-24 w-24 object-contain mb-4"
                    />
                </div>
            </div>
        </div>
  )
}

export default OurClients
