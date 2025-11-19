import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const CountrySelect = () => {
  // ✅ Default to English (GB flag)
  const [selectedCountry, setSelectedCountry] = useState({
    code: "GB",
    name: "English",
  });

  const countries = [
    { code: "GB", name: "English" }, // GB = United Kingdom flag
    { code: "NG", name: "Nigeria" },
    { code: "US", name: "United States" },
    { code: "FR", name: "France" },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold">Select Country</label>

      {/* Dropdown */}
      <select
        className="border p-2 rounded-md"
        value={selectedCountry.code} // ✅ bind directly to code
        onChange={(e) => {
          const code = e.target.value;
          const name =
            countries.find((c) => c.code === code)?.name || "Unknown";
          setSelectedCountry({ code, name });
        }}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Flag + name */}
      <div className="flex items-center space-x-2 mt-2">
        <ReactCountryFlag
          countryCode={selectedCountry.code}
          svg
          style={{ width: "1.5em", height: "1.5em", borderRadius: "50%" }}
        />
        <span className="font-medium">{selectedCountry.name}</span>
      </div>
    </div>
  );
};

export default CountrySelect;
