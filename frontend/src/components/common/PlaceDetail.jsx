import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { fetchPlaces } from "../../reducks/places/operations";
import { getPlaces } from "../../reducks/places/selectors";

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
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
      }}
    >
      {selectedPlace && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1>{selectedPlace.name}</h1>
          <img
            src={selectedPlace.image}
            alt="selected place"
            style={{
              objectFit: "contain",
            }}
            width={720}
            height={320}
          />
          <h3>
            {selectedPlace.description}{" "}
            <span>
              <a href={selectedPlace.googel_map_link}>Google Map</a>
            </span>
          </h3>
          <p style={{ textAlign: "justify", textIndent: "5rem" }}>
            {selectedPlace.detailed_description}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlaceDetail;
