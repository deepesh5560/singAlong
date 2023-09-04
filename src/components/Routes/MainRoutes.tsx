import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Favourites from "../Favourites";
import Home from "../Home";
import Landing from "../landing/landing";
import Playlists from "../Playlists";
import Search from "../Search";
import LoginPage from "../LoginPage";
import EditPlaylist from "../Playlists/EditPlaylist";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:id" element={<EditPlaylist />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
