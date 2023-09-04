import { useEffect, useState } from "react";
import Aside from "../Aside";
import { IoMdAdd } from "react-icons/io";
import playlistData from "./data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const index = () => {
  const [show, setShow] = useState(false);
  const [showPlayForm, setshowPlayForm] = useState(false);
  const [PlayName, setPlayName] = useState("");

  // let playlist: any[] = [];
  let playlist = useSelector((state: any) => state.addplaylist);

  console.log(playlist);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   return () => {
  //     alert("here we go");
  //   };
  // }, []);

  const alertMsg = () => {
    if (!token) {
      setShow(!show);
    } else {
      setshowPlayForm(true);
    }
  };
  const handlePlaylist = () => {
    dispatch({
      type: "addplaylist",
      payload: PlayName,
    });

    setshowPlayForm(false);
  };

  return (
    <>
      <div className="home ">
        <Aside />

        <div className="">
          <div className="home-header text-white ">
            <h2 className=" mx-3 ">Playlists</h2>
          </div>

          {show ? (
            <div
              className=""
              style={{
                position: "absolute",
                marginLeft: "-10%",
                marginTop: "15%",
                zIndex: "999",
              }}
            >
              <section
                className="  mx-auto mt-2"
                style={{
                  height: "200px",
                  width: "500px",
                  borderRadius: " 10px",
                  border: "2px solid gray",
                  background: "#fff",
                }}
              >
                <div
                  className="d-flex h-100 justify-content-around flex-column  "
                  style={{ margin: "0 auto" }}
                >
                  <h3 className="text-center color-dark ">Alert !!</h3>
                  <h5 className=" mx-3 " style={{ color: "#5e46ad" }}>
                    Please login for more features
                  </h5>

                  <div className="d-flex justify-content-end mx-3">
                    <button
                      type="button"
                      className="btn btn-outline-dark px-3"
                      onClick={() => setShow(!show)}
                    >
                      Exit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3 px-4"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ) : null}

          {showPlayForm ? (
            <div>
              <section
                className=" add-play  mx-auto mt-2"
                style={{
                  height: "200px",
                  width: "500px",
                  borderRadius: " 10px",
                  border: "2px solid gray",
                  background: "",
                }}
              >
                <div
                  className="d-flex h-100 justify-content-around flex-column  "
                  style={{ margin: "0 auto" }}
                >
                  <h3 className="text-center color-dark "> Add new playlist</h3>
                  <input
                    className=" mx-3 "
                    type="text
                  "
                    onChange={(e) => setPlayName(e.target.value)}
                    onKeyDown={(e) => e.key == "Enter" && handlePlaylist()}
                    style={{ color: "#5e46ad" }}
                  />

                  <div className="d-flex justify-content-end mx-3">
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3 px-4"
                      onClick={() => setshowPlayForm(false)}
                    >
                      cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3 px-4"
                      onClick={() => handlePlaylist()}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ) : null}

          <div className="cards-main-div  ">
            <h5>
              Create Playlist
              <IoMdAdd
                onClick={() => alertMsg()}
                className="mx-2 mb-1"
                style={{
                  borderRadius: "50%",
                  background: "#5e46ad",
                  color: "#fff",
                }}
                size={20}
              />
              <span
                className="badge "
                style={{ scale: "0.75", backgroundColor: "#5e46ad" }}
              >
                Premium
              </span>
            </h5>

            <h2 className=" mt-5">Your Playlists Are</h2>

            <hr />
            <div className="cards-out" style={{ overflowX: "auto" }}>
              <div
                className="d-flex gap-2 justify-content-end"
                style={{ flexDirection: "row-reverse" }}
              >
                {playlist.map((data: any) => {
                  return (
                    <div
                      key={data.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/playlists/${data.id}`)}
                    >
                      <div style={{ width: "120px" }}>
                        <div className="palyImg d-flex justify-content-center align-items-center">
                          <div className="palyImg-letter">
                            {data.title.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <div className="text-center">{data.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="cards-main-div mt-4 ">
            <h5>My Rock Music</h5>
            <hr />
            <div className="cards-out" style={{ overflowX: "auto" }}>
              <div className="d-flex">
                {playlistData.map((links: any) => {
                  return (
                    <div
                      key={links.id}
                      className="card "
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
                        className="card-body text-center d-flex justify-content-center "
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
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
