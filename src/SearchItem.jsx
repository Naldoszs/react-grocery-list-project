import "./styles/SearchItem.css";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        role="searchbox"
        placeholder="Search Item..."
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} //now a controlled input
      />
    </form>
  );
};

export default SearchItem;
