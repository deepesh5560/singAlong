import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHeart,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="aside    text-white ">
        <div className="logo text-center pt-5">
          <h3 className="text-uppercase d-indivne border-bottom pb-3 d-tm">
            Sing Along
          </h3>
          <h3 className="text-uppercase d-indivne border-bottom pb-3 d-tn">
            SA
          </h3>
        </div>

        <div className="aside-ul h-50 w-50 divst-unstyled  d-flex flex-column justify-content-around   ">
          <div className="li" onClick={() => navigate("/home")}>
            <AiOutlineMenu className="mx-2 mb-1" size={20} />
            <span className="aside-t">Home</span>
          </div>
          <div className="li" onClick={() => navigate("/search")}>
            <AiOutlineSearch className="mx-2 mb-1" size={20} />
            <span className="aside-t"> Search</span>
          </div>
          <div className="li" onClick={() => navigate("/favourites")}>
            <AiFillHeart className="mx-2 mb-1" size={20} />

            <span className="aside-t">Favourite</span>
          </div>
          <div className="li" onClick={() => navigate("/playlists")}>
            <AiFillPlayCircle className="mx-2 mb-1" size={20} />
            <span className="aside-t">Playlist</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
