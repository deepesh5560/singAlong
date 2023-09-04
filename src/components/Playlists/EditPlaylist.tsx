import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import Allsongs from "../../services/allSongs";

const EditPlaylist = () => {
  const [showsongslist, setshowsongslist] = useState(true);
  const { id }: any = useParams();
  const getid: any = parseInt(id);
  const dispatch = useDispatch();
  let list = useSelector((state: any) => state.addSongs);

  let selectedPlaylist = list.filter((data: any) => {
    return data.playlistId === getid;
  });

  const navigate = useNavigate();

  const handleFav = (data: any) => {
    dispatch({
      type: "addSongs",
      payload: {
        playlistId: getid,
        song: data,
      },
    });
  };

  const update = (data: any) => {
    if (data === "cancel") {
      setshowsongslist(false);
      dispatch({
        type: "clear",
        payload: {
          playlistId: getid,
          song: data,
        },
      });
      navigate("/playlists");
    } else {
      if (selectedPlaylist[0]) {
        setshowsongslist(false);

        toast.success("Songs Added to Playlist successfully");
      } else {
        toast.error("Adding Song to Playlist is mandatory");
      }
    }
  };

  return (
    <div>
      <h2>your selected songs </h2>
      <div className="d-flex gap-2">
        {selectedPlaylist.map((data: any, i: any) => {
          return (
            <div
              key={i}
              className="card col-4"
              style={{ width: "8rem", border: "0", margin: "0 10px" }}
            >
              <img
                src={data.song.img}
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: "10px",
                  height: "110px ",
                  width: "120px",
                }}
              />
              <div className="card-body d-flex text-center ">
                <h6
                  className="card-title "
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {data.song.title}
                </h6>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",
          background: "#fff",
        }}
      >
        {showsongslist ? (
          <div>
            <section
              className="  mx-auto mt-2"
              style={{
                width: "450px",
                borderRadius: " 10px",
                border: "2px solid gray",
                background: "",
              }}
            >
              <div className=" " style={{ margin: "0 auto" }}>
                <h3 className="text-center color-dark ">
                  {" "}
                  Add songs to playlist
                </h3>

                <div
                  className="row"
                  style={{ overflowX: "scroll", height: "350px" }}
                >
                  {Allsongs.map((data) => (
                    <div
                      key={data.id}
                      className="card col-4"
                      style={{ width: "8rem", border: "0", margin: "0 10px" }}
                      onClick={() => handleFav(data)}
                    >
                      <img
                        src={data.img}
                        className="card-img-top"
                        alt="..."
                        style={{
                          borderRadius: "10px",
                          height: "110px ",
                          width: "120px",
                        }}
                      />
                      <div className="card-body d-flex text-center ">
                        <h6
                          className="card-title "
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {data.title}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-end mx-3 my-2">
                  <button
                    type="button"
                    className="btn btn-outline-success mx-3 px-4"
                    onClick={() => update("cancel")}
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success mx-3 px-4"
                    onClick={() => update("add")}
                  >
                    Add
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EditPlaylist;
