export const FETCH_PLACE = "FETCH_PLACE";
export const fetchPlacesAction = (places) => {
    return {
        type: "FETCH_PLACE",
        payload: places
    }
}