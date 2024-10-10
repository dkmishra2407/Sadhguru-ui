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
