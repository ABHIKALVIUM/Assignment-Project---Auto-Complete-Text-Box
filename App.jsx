import { useState } from "react";
import data from "../resources/countryData.json";
import "./App.css"

export default function AwesomeSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = (query) => {
    setSearchQuery(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      document.getElementById("custom-dropdown").style.display = "none";
    } else {
      document.getElementById("custom-dropdown").style.display = "block";
    }
  };

  return (
    <div className="AwesomeSearch">
      <h1>Search</h1>

      <div>
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="custom-input"
          />
          <button onClick={() => performSearch(searchQuery)} className="search-button">
            Explore
          </button>
        </div>
        <div id="custom-dropdown">
          {data
            .filter((item) => {
              const searchTerm = searchQuery.toLowerCase();
              const itemName = item.name.toLowerCase();

              return (
                searchTerm &&
                itemName.startsWith(searchTerm) &&
                itemName !== searchTerm
              );
            })
            .slice(0, 5)
            .map((item) => (
              <div
                onClick={() => performSearch(item.name)}
                key={item.name}
                className="custom-result"
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
