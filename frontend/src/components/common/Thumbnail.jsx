import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";

const Thumbnail = ({ place }) => {
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
      <div class="item">
        <div class="item-image">
          {showLikeButton && (
            <div class="like">
              <img
                class="like"
                src={Imglike}
                alt="favorites"
                onClick={() => {
                  clickFavourite(place);
                }}
              />
            </div>
          )}
          
            <img src={place.image} alt="image" />
         
        </div>
        <div class="item-text">
          <h1>{place.name}</h1>
          <p>{place.description}</p>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
