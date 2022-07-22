import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlaceDetail from './components/common/PlaceDetail';
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Places from "./containers/Places";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/places" element={<Places />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
