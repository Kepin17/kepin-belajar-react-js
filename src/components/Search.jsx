import { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      cari article : <input type="text" placeholder="cari article" value={props.value} onChange={onSearchHandler} />
      <button onClick={() => props.onSearchHandler(search)}>Search</button>
      <p>
        ditemukan {props.totalPost} untuk pencarian {search}
      </p>
    </div>
  );
};

Search.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default Search;
