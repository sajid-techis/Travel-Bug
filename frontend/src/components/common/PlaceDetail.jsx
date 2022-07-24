import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { fetchPlaces } from "../../reducks/places/operations";
import { getPlaces } from "../../reducks/places/selectors";
import Header from "./Header";
import Footer from "./Footer";

function PlaceDetail() {
  const match = useMatch("/place/:id");
  const dispatch = useDispatch();
  const id = match?.params?.id ?? "";

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const places = useSelector(getPlaces);

  const selectedPlace = useMemo(
    () => places.find((place) => place.id === +id),
    [id, places]
  );

  return (
    <>
      <Header />
      <div className="place-container">
        {selectedPlace && (
          <div className="selected-place">
            <img
              src={selectedPlace.image}
              alt="selected place"
            />
            <h1>{selectedPlace.name}</h1>
            <h3>{selectedPlace.description} </h3>
            <div className="direction-btn">
              <button>
                <a href={selectedPlace.googel_map_link} target="_blank">Google Map</a>
              </button>
            </div>

            <p style={{ textAlign: "justify" }}>
              {selectedPlace.detailed_description}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PlaceDetail;
