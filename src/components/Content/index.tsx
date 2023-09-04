import React from "react";
import Cards from "../Cards";

const index = () => {
  return (
    <div>
      <div className="cards-main-div">
        <h5>Released this week</h5>
        <hr />
      </div>
      <div className="d-flex">
        <Cards />
      </div>
      <div className="cards-main-div">
        <h5>Featured Playlist</h5>
        <hr />
      </div>
      <div className="d-flex">
        <Cards />
      </div>
    </div>
  );
};

export default index;
