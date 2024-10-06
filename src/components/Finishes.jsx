// import React, { useState } from "react";

// const FinishesComponent = () => {
//   // Create state for the selected finish
//   const [selectedFinish, setSelectedFinish] = useState("Polished");

//   // Descriptions and image data for each finish
//   const finishesData = {
//     Polished: {
//       description: "A polished finish gives a reflective, glossy appearance.",
//       imageUrl: "data:image/jpeg;base64,...", // Replace with actual base64 or URL
//     },
//     "Gloss Matt": {
//       description: "Gloss matt finish offers a smooth and less reflective surface.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Carving: {
//       description: "Carving finish adds texture with engraved patterns.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Superwhite: {
//       description: "Superwhite finish is clean, bright, and highly reflective.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Matt: {
//       description: "Matt finish provides a non-reflective and smooth surface.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Metalic: {
//       description: "Metallic finish adds a shiny, metal-like surface.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Marbletech: {
//       description: "Marbletech offers a stone-like appearance with a smooth surface.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//     Rotomatt: {
//       description: "Rotomatt finish has a soft, velvety texture.",
//       imageUrl: "data:image/jpeg;base64,...",
//     },
//   };

//   return (
//     <div className="w-full flex bg-white p-8">
//       {/* Left Side - Buttons and Description */}
//       <div>
//         {/* Heading */}
//         <h1 className="text-3xl font-bold mb-6">Know About Finishes</h1>

//         {/* Finish Options */}
//         <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
//           {/* Left Column */}
//           <div className="flex flex-col gap-2 text-xl font-medium">
//             {Object.keys(finishesData).slice(0, 4).map((finish) => (
//               <button
//                 key={finish}
//                 onClick={() => setSelectedFinish(finish)}
//                 className={
//                   selectedFinish === finish ? "text-black underline" : "text-gray-400"
//                 }
//               >
//                 {finish}
//               </button>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-2 text-xl font-medium">
//             {Object.keys(finishesData).slice(4).map((finish) => (
//               <button
//                 key={finish}
//                 onClick={() => setSelectedFinish(finish)}
//                 className={
//                   selectedFinish === finish ? "text-black underline" : "text-gray-400"
//                 }
//               >
//                 {finish}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-lg mb-4">{finishesData[selectedFinish].description}</p>
//       </div>

//       {/* Right Side - Image */}
//       <div className="relative">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt={selectedFinish}
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default FinishesComponent;

import React, { useState } from "react";

const FinishesComponent = () => {
  const [selectedFinish, setSelectedFinish] = useState("Polished");

  const finishesData = {
    Polished: {
      description: "A polished finish gives a reflective, glossy appearance.",
      imageUrl: "data:image/jpeg;base64,...", // Replace with actual base64 or URL
    },
    "Gloss Matt": {
      description: "Gloss matt finish offers a smooth and less reflective surface.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Carving: {
      description: "Carving finish adds texture with engraved patterns.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Superwhite: {
      description: "Superwhite finish is clean, bright, and highly reflective.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Matt: {
      description: "Matt finish provides a non-reflective and smooth surface.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Metalic: {
      description: "Metallic finish adds a shiny, metal-like surface.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Marbletech: {
      description: "Marbletech offers a stone-like appearance with a smooth surface.",
      imageUrl: "data:image/jpeg;base64,...",
    },
    Rotomatt: {
      description: "Rotomatt finish has a soft, velvety texture.",
      imageUrl: "data:image/jpeg;base64,...",
    },
  };

  return (
    <div className="w-full flex bg-white p-8">
      {/* Left Side - Buttons and Description */}
      <div className="mr-8">
        <h1 className="text-3xl font-bold mb-6">Know About Finishes</h1>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
          <div className="flex flex-col gap-2 text-xl font-medium">
            {Object.keys(finishesData).slice(0, 4).map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`${
                  selectedFinish === finish ? "text-black underline" : "text-gray-400"
                }`}
              >
                {finish}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-xl font-medium">
            {Object.keys(finishesData).slice(4).map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`${
                  selectedFinish === finish ? "text-black underline" : "text-gray-400"
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>

        <p className="text-lg mb-4">{finishesData[selectedFinish].description}</p>
      </div>

      <div className="relative">
        <img
          src={finishesData[selectedFinish].imageUrl}
          alt={selectedFinish}
          className="w-full h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default FinishesComponent;
