export default function MeasurementForm() {
  return (
    <div className="my-4 p-4 bg-gray-50 border border-gray-300">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Measurement</h3>
        <p className="text-sm text-gray-500">All Dimensions in CM</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {[
          { label: "Height", min: 5 },
          { label: "Width", min: 10 },
          { label: "Depth", min: 10 },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">
              {index + 1}. {item.label}
            </label>
            <input
              type="number"
              min={item.min}
              defaultValue={item.min}
              className="border border-gray-300 rounded-md px-3 py-2 w-full text-Left text-lg font-medium"
            />
            {index === 0 && (
              <p className="text-xs text-gray-500 mt-1">Min: {item.min}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
