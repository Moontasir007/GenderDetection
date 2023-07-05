import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
    // Demo data
    const countries = [
        { id: 1, name: "Bangladesh" },
        { id: 2, name: "India" },
        { id: 3, name: "Pakistan" },
    ];

    const cities = [
        { id: 1, name: "Dhaka", countryId: 1 },
        { id: 2, name: "Chittagong", countryId: 1 },
        { id: 3, name: "Kolkata", countryId: 2 },
        { id: 4, name: "Mumbai", countryId: 2 },
        { id: 5, name: "Islamabad", countryId: 3 },
        { id: 6, name: "Lahore", countryId: 3 },
    ];

    const subCities = [
        { id: 1, name: "Gazipur", cityId: 1 },
        { id: 2, name: "Narayanganj", cityId: 1 },
        { id: 3, name: "Patiya", cityId: 2 },
        { id: 4, name: "Anowara", cityId: 2 },
        { id: 5, name: "Pune", cityId: 3 },
        { id: 6, name: "Assam", cityId: 3 },
        { id: 7, name: "Karnataka", cityId: 4 },
        { id: 8, name: "Karachi", cityId: 5 },
        { id: 9, name: "Sindh", cityId: 5 },
        { id: 10, name: "Beluchistan", cityId: 6 },
    ];

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedSubCity, setSelectedSubCity] = useState("");

    const handleCountryChange = (e) => {
        const countryValue = e.target.value;
        setSelectedCountry(countryValue);
        setSelectedCity("");
        setSelectedSubCity("");
    };

    const handleCityChange = (e) => {
        const cityValue = e.target.value;
        setSelectedCity(cityValue);
        setSelectedSubCity("");
    };

    const handleSubCityChange = (e) => {
        const subCityValue = e.target.value;
        setSelectedSubCity(subCityValue);
    };

    // Filter cities based on the selected country
    const filteredCities = cities.filter(
        (city) => city.countryId === parseInt(selectedCountry)
    );

    // Filter sub-cities based on the selected city
    const filteredSubCities = subCities.filter(
        (subCity) => subCity.cityId === parseInt(selectedCity)
    );

    return (
        <div className="container">
            <h1>Dropdown Example</h1>
            <div>
                <label htmlFor="country">Select Country:</label>
                <select
                    id="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">-- Select Country --</option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="city">Select City:</label>
                <select id="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="">-- Select City --</option>
                    {filteredCities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="subCity">Select Sub-city:</label>
                <select
                    id="subCity"
                    value={selectedSubCity}
                    onChange={handleSubCityChange}
                >
                    <option value="">-- Select Sub-city --</option>
                    {filteredSubCities.map((subCity) => (
                        <option key={subCity.id} value={subCity.id}>
                            {subCity.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="selected-values">
                <p>Selected Country: {selectedCountry && countries.find(country => country.id === parseInt(selectedCountry)).name}</p>
                <p>Selected City: {selectedCity && cities.find(city => city.id === parseInt(selectedCity)).name}</p>
                <p>Selected Sub-city: {selectedSubCity && subCities.find(subCity => subCity.id === parseInt(selectedSubCity)).name}</p>
            </div>
        </div>
    );
};

export default Dropdown;
