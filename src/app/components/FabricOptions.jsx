import React, { useState } from "react";
import { MdShield } from "react-icons/md"; // Warranty badge icon
import { fabrics } from "../dummy";

export default function FabricOptions() {
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0].name);

  return (
    <div className="my-6 p-4 bg-gray-50 border border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Select Fabric</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {fabrics.map((fabric) => {
          const isSelected = selectedFabric === fabric.name;
          return (
            <div
              key={fabric.name}
              onClick={() => setSelectedFabric(fabric.name)}
              className={`p-6 border border-gray-300 shadow-md cursor-pointer transition-all duration-300  
                ${
                  isSelected
                    ? "border-blue-500 bg-gradient-to-b from-blue-100 to-transparent"
                    : "bg-gray-50"
                }
              `}
            >
              <h4 className="text-lg font-bold text-center">{fabric.name}</h4>

              {/* Fabric Details */}
              <div className="flex flex-wrap justify-center gap-2 my-3">
                {fabric.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-xs px-2 py-1 rounded-md"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-center mt-3">
                <p
                  className={`text-2xl font-bold ${
                    isSelected ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  ${fabric.price.toFixed(2)}
                </p>
                <p className="text-gray-500 line-through text-sm">
                  ${fabric.originalPrice.toFixed(2)}
                </p>
              </div>

              {/* Warranty */}
              <div className="flex justify-center items-center gap-2 mt-3">
                <MdShield className="w-6 h-6 text-yellow-500" />
                <p className="text-xs font-semibold flex items-center">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-l-md text-sm font-bold">
                    {fabric.warranty}
                  </span>
                  <span className="bg-black text-white px-3 py-1 rounded-r-md text-sm">
                    Years Warranty
                  </span>
                </p>
              </div>

              {/* Ratings */}
              <div className="mt-4 text-xs">
                {Object.entries(fabric.ratings).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between mb-1"
                  >
                    <p className="capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-4 w-10 rounded-md flex items-center justify-center text-xs font-bold 
                          ${
                            value === 5
                              ? "bg-green-500 text-white"
                              : "bg-blue-400 text-white"
                          }
                        `}
                      >
                        {value}/5
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
