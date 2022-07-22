import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Imglike from "../../assets/img/favorite.svg";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";

const Thumbnail = ({ place }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  
  const handleClick = ()=>{
    navigate(`place/${place.id}`);
  }

  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id === place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites ,place.id]);
  return (
    <>
      <div className="item" style={{cursor:'pointer'}} onClick={handleClick}>
        <div className="item-image">
          {showLikeButton && (
            <div className="like" >
              <img
                className="like"
                src={Imglike}
                alt="favorites"
                onClick={() => {
                  clickFavourite(place);
                }}
              />
            </div>
          )}
          
            <img src={place.image} alt="thumbnail" />
         
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
