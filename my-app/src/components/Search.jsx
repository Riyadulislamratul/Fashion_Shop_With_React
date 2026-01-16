import blackSearch from "../assets/blackSearch.png"
import toggle from "../assets/toggle.png"

const Search = () => {
  return (
     <div className="header-search container">
      {/* Left section */}
      <div className="left-section">
        <button className="menu-btn">
          <img src={toggle} alt="menu" />
        </button>

        <div className="department-dropdown">
          <span>All Departments</span>
          <span className="arrow">▾</span>
        </div>
      </div>

      {/* Middle search */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        <div className="category-dropdown">
          <span>All Category</span>
          <span className="arrow">▾</span>
        </div>

        <button className="search-btn">
          <img src={blackSearch} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Search