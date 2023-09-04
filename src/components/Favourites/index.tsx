import { useEffect, useState } from "react";
import Aside from "../Aside";
import Cards from "../Cards";
import { useSelector } from "react-redux";
import featuredList from "../Playlists/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
  const list = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  const [mainList, setMainList] = useState(list);
  useEffect(() => {
    setMainList([...list]);
  }, [list]);

  const handleLike = (data: any) => {
    list.forEach((item: any) => {
      if (item.id === data.id) {
        return (item.fav = !item.fav);
      }
    });

    setMainList([...mainList]);

    dispatch({
      type: "removefav",
      payload: data,
    });

    toast.error("Song Removed from Favourites");
  };
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
          <div className=" home-header ">
            <h2 className=" mx-3 text-white">Your Favourite Tunes</h2>
          </div>
          <div className="cards-main-div ">
            <h5>Favourites Songs </h5>
            <hr />
            <div className="cards-out" style={{ overflowX: "auto" }}>
              <div className="d-flex">
                {mainList.map((links: any) => {
                  return (
                    <div
                      key={links.id}
                      className="card"
                      style={{ width: "8rem", border: "0", margin: "0 10px" }}
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
                        className="d-flex align-items-baseline card-body justify-content-between "
                        style={{ overflowX: "scroll" }}
                      >
                        <div>
                          {" "}
                          <h6
                            className="card-title"
                            style={{ fontSize: "15px", marginTop: "-3px" }}
                          >
                            {links.title}
                            {/* {links.id} */}
                          </h6>
                        </div>
                        <div onClick={() => handleLike(links)}>
                          {links.fav ? (
                            <FaHeart
                              style={{ color: "red", marginBottom: "8px" }}
                            />
                          ) : (
                            <FaRegHeart style={{ marginBottom: "8px" }} />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="cards-main-div mt-2">
              <h5>Recently Played</h5>
              <hr />
            </div>
            <div className="cards-out" style={{ overflowX: "auto" }}>
              {" "}
              <div className="d-flex ">
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
                        className="card-body d-flex align-items-baseline justify-content-between "
                        style={{ marginTop: "-5px" }}
                      >
                        <h6
                          className="card-title"
                          style={{
                            fontSize: "15px",
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
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
