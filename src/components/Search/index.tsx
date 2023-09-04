import { useState } from "react";
import Aside from "../Aside";
import Allsongs from "../../services/allSongs";

const index = () => {
  const [srch, setSrch] = useState("");
  const [song, setSong] = useState<any>([]);

  const handleSearch = () => {
    let songkey = Allsongs.filter(
      (data: any) =>
        data.title.toLowerCase().includes(srch.toLowerCase()) && data
    );
    setSong(songkey);
  };
  return (
    <>
      <div className="home">
        <Aside />
        <div className="">
          <div className="home-header">
            <h2 className="mx-3 text-white">Explore Songs</h2>
            <div className="search-main" role="search">
              <input
                className="form-control me-2"
                placeholder="Search any music"
                aria-label="Search"
                onChange={(e) => setSrch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{ height: "45px" }}
              />
              <button
                className="btn btn-outline-light search-btn"
                style={{
                  color: "#fff",
                  border: "1px solid #fff",
                  height: "45px",
                }}
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>

          <div className="cards-main-div ">
            <h5>Search related songs here </h5>
            <hr />
            <div className="d-flex search-flx">
              {song &&
                song.map((links: any) => {
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
                        className="card-body d-flex align-items-baseline justify-content-between"
                        style={{ marginTop: "-5px" }}
                      >
                        <h6
                          className="card-title "
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {links.title}
                        </h6>
                        <div
                          className="liked-btn"
                          style={{ marginLeft: "10px" }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
