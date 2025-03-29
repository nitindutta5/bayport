export default function AssuranceOptions() {
    return (
      <div className="my-4">
        <h3 className="text-lg font-semibold">Assurance Plus</h3>
        <div className="space-y-2 mt-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="assurance" value="1-year" />
            1 Year Assurance Plus - $12.99
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="assurance" value="3-years" />
            3 Years Assurance Plus - $19.99
          </label>
        </div>
      </div>
    );
  }
  