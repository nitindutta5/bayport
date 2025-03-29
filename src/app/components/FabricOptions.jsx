import React, { useState } from "react";
import { MdShield } from "react-icons/md"; // Warranty badge icon

const fabrics = [
  {
    name: "Cover Max",
    price: 5.71,
    originalPrice: 7.41,
    details: ["12 Oz", "1000 Denier", "PVC Coated Polyester", "Medium Weight"],
    warranty: 3,
    ratings: {
      waterproof: 5,
      uvResistant: 4,
      durability: 5,
      mildDewResistant: 3,
      windResistant: 4,
      easeOfUse: 4,
    },
    suitableFor: "Moderate Weather Outdoor Usage",
  },
  {
    name: "Cover Rite",
    price: 6.21,
    originalPrice: 8.07,
    details: ["8 Oz", "600 Denier", "100% Solution Dyed Polyester", "Light weight"],
    warranty: 5,
    ratings: {
      waterproof: 4,
      uvResistant: 4,
      durability: 5,
      mildDewResistant: 5,
      windResistant: 5,
      easeOfUse: 5,
    },
    suitableFor: "All Weather Indoor and Outdoor Usage",
  },
  {
    name: "Cover Tuff",
    price: 7.42,
    originalPrice: 9.64,
    details: ["18 Oz", "1000 Denier", "PVC Coated Polyester", "Heavy Duty"],
    warranty: 7,
    ratings: {
      waterproof: 5,
      uvResistant: 5,
      durability: 5,
      mildDewResistant: 5,
      windResistant: 5,
      easeOfUse: 5,
    },
    suitableFor: "Extreme Weather Prolonged Outdoor Usage",
  },
];

export default function FabricOptions() {
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0].name);

  return (
    <div className="my-6 py-4">
      <h3 className="text-xl font-bold mb-4">Select Fabric</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {fabrics.map((fabric) => {
          const isSelected = selectedFabric === fabric.name;
          return (
            <div
              key={fabric.name}
              onClick={() => setSelectedFabric(fabric.name)}
              className={`p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                isSelected ? "bg-blue-100 border border-blue-500" : "bg-gray-100"
              }`}
            >
              <h4 className="text-lg font-bold text-center">{fabric.name}</h4>
              <div className="flex flex-wrap justify-center gap-2 my-2">
                {fabric.details.map((detail, idx) => (
                  <span key={idx} className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                    {detail}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-center mt-3">
                <p className="text-green-600 text-2xl font-bold">${fabric.price.toFixed(2)}</p>
                <p className="text-gray-500 line-through text-sm">${fabric.originalPrice.toFixed(2)}</p>
              </div>

              {/* Warranty */}
              <div className="flex justify-center items-center gap-2 mt-2">
                <MdShield className="w-6 h-6 text-yellow-500" />
                <p className="text-xs font-semibold">{fabric.warranty} Years Warranty</p>
              </div>

              {/* Ratings */}
              <div className="mt-4 text-xs">
                {Object.entries(fabric.ratings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <p className="capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                    <div className="flex justify-evenly">
                      <p className="mx-2"><b>{value}</b>/5</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suitable For */}
              <div className="mt-4 text-center">
                <p className="text-gray-500 text-xs font-semibold uppercase">Suitable For</p>
                <p className="text-sm font-semibold">{fabric.suitableFor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
