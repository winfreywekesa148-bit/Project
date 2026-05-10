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
        <input type="text" placeholder="Search..." 
        onChange={(e) => console.log(e.target.value)}
        />
    );
}

export default Search;
