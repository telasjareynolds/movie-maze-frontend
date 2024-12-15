import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Search for movies..."
        value={query}
        onChange={handleSearchChange}
      />
      <button className="search-form__btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
