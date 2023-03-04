import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weatherdetails/${city}`);
    } else {
      alert("Enter Location");
    }
  };

  return (
    <div id="search-page">
      <h1 className="heading">Weather Api</h1>
      <input
        className="search-box"
        type="text"
        placeholder="Location"
        value={city}
        onChange={handleInputChange}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default WeatherSearch;