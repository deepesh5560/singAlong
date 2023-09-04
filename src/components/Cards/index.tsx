import songs from "../../services/songs";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const index = () => {
  const dispatch = useDispatch();
  const [Likesongs, setLikesongs] = useState(songs);

  function handleLike(id: any) {
    songs.forEach((data) => {
      if (data.id === id.id) {
        return (data.fav = !data.fav);
      }
    });
    setLikesongs([...Likesongs]);

    handleFav(id);
  }

  const handleFav = (id: any) => {
    dispatch({
      type: "addfav",
      payload: id,
    });
    toast.success("Song Added to Favourites successfully");
  };
  return (
    <>
      {Likesongs.map((links: any) => {
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
              style={{ borderRadius: "10px", height: "110px ", width: "120px" }}
            />
            <div className="card-body d-flex justify-content-between ">
              <div>
                <h6
                  className="card-title "
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {links.title}
                </h6>
              </div>

              <div onClick={() => handleLike(links)}>
                {links.fav ? (
                  <FaHeart style={{ color: "red", marginBottom: "8px" }} />
                ) : (
                  <FaRegHeart style={{ marginBottom: "8px" }} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default index;
