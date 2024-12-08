import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search for movies..."/>
      <button className="search__btn">Search</button>
    </div>
  );
}

export default SearchForm;