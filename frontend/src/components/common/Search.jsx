import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Imgsearch from "../../assets/img/search.svg";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

  return (
    <section className="search">
      <div className="search-container">
        <h1>The United place on Earth</h1>
        <form onSubmit={submitAction} className="form">
          <input
            className="search-bar"
            name="search"
            type="inputbox"
            onChange={inputSearch}
            placeholder="Search your destination"
          />
          <a href="null">
            <img
              className="search-icon"
              onClick={() => {
                alert("test");
              }}
              src={Imgsearch}
              alt=""
            />
          </a>
        </form>
      </div>
    </section>
  );
};

export default Search;
