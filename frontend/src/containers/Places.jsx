import queryString from "query-string";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapsImg from "../assets/img/map.png";
import Card from "../components/common/Card";
import { getCategories } from "../reducks/categories/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";

const Places = () => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());

    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
    if (parsed.category !== undefined) {
      setCategory(parsed.category);
    }
  }, []);
  const categories = getCategories(selector);
  useEffect(() => {
    if (search != null || category != null) {
      dispatch(fetchPlaces(search, category));
    }
  }, [search, category]);
  return (
    <>
      <section class="places-container">
        <div class="places-items">
          {places.map((place) => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </section>
      <section className="maps">
        <img src={MapsImg} alt="" />
      </section>
    </>
  );
};

export default Places;
