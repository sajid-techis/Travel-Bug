import React, { useState } from "react";
import Imgsearch from "../../assets/img/search.svg";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

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
          <a onclick={() => console.log("test")}>
            <img
              className="search-icon"
              onclick={() => {
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
