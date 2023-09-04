import { useState } from "react";
import Aside from "../Aside";
import HomeHeader from "../Home-header";
import Cards from "../Cards";
import featuredList from "../Playlists/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  const handleFav = (id: any) => {
    dispatch({
      type: "addfav",
      payload: id,
    });
    toast.success("Song Added to Favourites successfully");
  };
  return (
    <>
      <div className="home">
        <Aside />

        <div className="">
          <HomeHeader />
          <section className="">
            <div className="cards-main-div">
              <h5>Released this week </h5>
              <div style={{ fontSize: "12px", fontWeight: "700" }}>
                (click on track add to favourites)
              </div>
              <hr />
            </div>
            <div className="text-center" style={{ overflowX: "scroll" }}>
              <div className="cards-out">
                <Cards />
              </div>
            </div>
            <div className="cards-main-div">
              <h5>Featured Playlist</h5>
              <hr />
            </div>
            <div className="" style={{ overflowX: "scroll" }}>
              <div className="cards-out">
                {featuredList.map((links: any) => {
                  return (
                    <div
                      key={links.id}
                      className="card "
                      style={{ width: "8rem", border: "0", margin: "0 10px" }}
                      onClick={() => handleFav(links)}
                    >
                      <img
                        src={links.img}
                        className="card-img-top"
                        alt="..."
                        style={{
                          borderRadius: "10px",
                          height: "110px ",
                          width: "120px",
                        }}
                      />
                      <div
                        className="card-body d-flex align-items-baseline justify-content-around "
                        style={{ marginTop: "-5px" }}
                      >
                        <h6
                          className="card-title"
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {links.title}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
