import { useState } from "react";

function Search () {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = () => {
        // Handle search logic here, e.g., filter projects based on searchTerm
        console.log("Searching for:", searchTerm);

        setSearchResults([searchTerm]); // Placeholder - replace with actual search logic
    };

  
    return (
        <div style={{ border: "1px solid #ccc", borderStyle: "dotted", padding: "16px", margin: "16px"}}>
        <input id="search" type="text" placeholder="Search..." 
        onChange={(e) => console.log(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button> 

        <br /> 

        {searchResults.length > 0 && (
            <div styles={{ fontSize:"larger", color:"white"}}>
                <h2>Search Results:</h2>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
}

export default Search;
