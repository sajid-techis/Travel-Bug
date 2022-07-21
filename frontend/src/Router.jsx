import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
