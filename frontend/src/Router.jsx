import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlaceDetail from "./components/common/PlaceDetail";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Places from "./containers/Places";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/places" element={<Places />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
