import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavCard from "../components/common/FavCard";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { getFavourites } from "../reducks/favourites/selectors";

const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <>
      <section class="section2">
        <div class="heading-favorite">Favourite Places</div>
        <div class="grid">
          {favourites.map((favourite) => (
            <FavCard favourite={favourite} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Favourites;
