import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Css/main.css";
import Modal from "./components/Modal";

import MainRoutes from "./components/Routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
