import React from "react";
import Imgdislike from "../../assets/img/favorite.svg";
import { useDispatch } from "react-redux";
import { deleteFavourite } from "../../reducks/favourites/operations";

const FavCard = ({ favourite }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div class="favorite-list">
        <div class="favorite-image">
          <img src={favourite.image} alt="" />
          <div class="like">
            <img
              src={Imgdislike}
              onClick={() => dispatch(deleteFavourite(favourite.id))}
              alt=""
            />
          </div>
        </div>
        <div class="textcontent">
          <div class="favorite-heading">
            <h1>{favourite.name}</h1>
          </div>
          <div class="gridsubheading">
            <h2>{favourite.place_type}</h2>
          </div>
          <div class="gridtext">
            <p>"Opens:"{favourite.time_to_travel}"hours"</p>
            <p>{favourite.description}</p>
          </div>
          <div class="input-button">
            <a class="direction" href={favourite.googel_map_link}>
              Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;
