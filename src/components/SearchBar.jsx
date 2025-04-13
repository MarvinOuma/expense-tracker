function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;
  