import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import ImageDiv from './ImageDiv'
import DataPropietarios from "./DataPropietarios";
import Navbar from "./navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <div className="w-screen">
      <DataPropietarios />
    </div>
  </StrictMode>
);
