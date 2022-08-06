import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/404";
import Bookmarks from "../pages/Bookmarks";
import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Bookmarks" element={<Bookmarks />} />
      <Route path="/user/:username" element={<UserProfile />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesComponent;
