import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className=" main container-fluid vw-100 vh-100 d-flex justify-content-center align-items-center flex-column ">
        <div className="row ">
          <h1 className="login-heading ">Sing Along</h1>
        </div>

        <div className="btn btn1 my-4" onClick={() => navigate("/login")}>
          <AiFillPlayCircle size={25} /> Play
        </div>
      </section>
    </div>
  );
};

export default Landing;
