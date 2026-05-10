function Search () {
    return (
        <input type="text" placeholder="Search..." 
        onChange={(e) => console.log(e.target.value)}
        />
    );
}

export default Search;
