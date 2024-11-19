import { useState } from "react";
import PropTypes from "prop-types";
const Search = (props) => {
  const [search, setSearch] = useState("");

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
    props.onSearchHandler(event.target.value);
  };

  return (
    <div>
      cari article : <input type="text" placeholder="cari article" value={search} onChange={onSearchHandler} />
      <p>ditemukan 0 untuk pencarian {search}</p>
    </div>
  );
};

Search.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default Search;
