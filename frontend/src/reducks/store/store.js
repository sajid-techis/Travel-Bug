import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { CategoriesReducer } from "../categories/reducers";
import { FavourotesReducer } from "../favourites/reducers";
import { PlacesReducer } from "../places/reducers";
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      places: PlacesReducer,
      categories: CategoriesReducer,
      favourites: FavourotesReducer,
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
}
