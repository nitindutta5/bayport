export default function MeasurementForm() {
    return (
      <div className="my-4">
        <h3 className="text-lg font-semibold">Measurement</h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {["Height", "Width", "Depth"].map((label) => (
            <div key={label}>
              <label className="text-gray-700 text-sm">{label}</label>
              <input
                type="number"
                min="5"
                className="border rounded px-2 py-1 w-full"
                placeholder="CM"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  