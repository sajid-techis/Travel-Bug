import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { useSelector, useDispatch } from "react-redux";
import Imglike from "../../assets/img/favorite.svg";

const Card = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);

  return (
    <>
      <div class="category-list">
        <div className="category-image">
          <img src={place.image} alt="" />
          <div class="like">
            <img
              src={Imglike}
              onClick={() => {
                clickFavourite(place);
              }}
              alt=""
            />
          </div>
        </div>
        <div class="category-text">
          <div class="category-heading">
            <h1>{place.name}</h1>
          </div>
          <div class="gridsubheading">
            <h2>{place.place_type}</h2>
          </div>
          <div class="gridtext">
            <p>"Opens"{place.time_to_travel}"hours."</p>
          </div>
          <div className="detailed-description">
            <p>{place.detailed_description}</p>
          </div>
          <div class="input-button">
            <a href={place.googel_map_link} target="_blank">
              {" "}
              Direction{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
